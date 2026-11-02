from pathlib import Path
import json
import os
import shutil
import subprocess
import time

directory = Path(__file__).resolve().parent
repository = directory.parents[1]
lock = directory / 'runner.lock'
descriptor = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
os.write(descriptor, str(os.getpid()).encode())
os.close(descriptor)

def save_state(**values):
    payload = dict(pid=os.getpid(), updated=time.time(), **values)
    (directory / 'process.json').write_text(json.dumps(payload, indent=2), encoding='utf-8')

try:
    executable = shutil.which('codex')
    if not executable:
        raise RuntimeError('Codex CLI unavailable')
    for iteration in range(1, 4):
        tasks = json.loads((directory / 'tasks.json').read_text(encoding='utf-8-sig'))
        pending = [task for task in tasks if task['status'] != 'done']
        if not pending:
            break
        task = pending[0]
        if task['status'] == 'blocked':
            save_state(status='blocked', task=task['id'])
            break
        save_state(status='running', task=task['id'], iteration=iteration)
        print('Ralph ' + task['id'] + ': ' + task['title'], flush=True)
        prompt = (directory / 'PROMPT.md').read_text(encoding='utf-8') + '\nCurrent task: ' + task['id']
        with (directory / f'{task["id"]}.log').open('w', encoding='utf-8') as log:
            result = subprocess.run(
                [executable, 'exec', '--ephemeral', '--skip-git-repo-check', '-C', str(repository),
                 '-s', 'danger-full-access', '--color', 'never', '-o', str(directory / f'{task["id"]}-last.md'), '-'],
                input=prompt, encoding='utf-8', stdout=log, stderr=subprocess.STDOUT, timeout=900,
            )
        if result.returncode:
            save_state(status='failed', task=task['id'], exit_code=result.returncode)
            break
        revised = json.loads((directory / 'tasks.json').read_text(encoding='utf-8-sig'))
        completed = next(entry for entry in revised if entry['id'] == task['id'])
        if completed['status'] != 'done':
            save_state(status='needs_attention', task=task['id'])
            break
        print('Completed ' + task['id'], flush=True)
    else:
        save_state(status='complete', iterations=3, application_review='pending_user')
except Exception as error:
    save_state(status='failed', error=str(error))
    raise
finally:
    lock.unlink(missing_ok=True)
