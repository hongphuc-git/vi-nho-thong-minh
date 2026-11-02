<script setup lang="ts">
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui'
import { X } from '@lucide/vue'
import { Button } from '@/components/ui/button'

withDefaults(defineProps<{
  open: boolean
  title: string
  description: string
  appearance?: 'paper' | 'chalkboard'
}>(), { appearance: 'paper' })

const emit = defineEmits<{
  'update:open': [value: boolean]
  closeAutoFocus: [event: Event]
}>()
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogTrigger v-if="$slots.trigger" as-child><slot name="trigger" /></DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="dialog-overlay" />
      <DialogContent class="dialog-content" :class="{ 'dialog-chalkboard': appearance === 'chalkboard' }" @close-auto-focus="emit('closeAutoFocus', $event)">
        <header class="dialog-heading">
          <div><span v-if="appearance === 'chalkboard'" class="board-eyebrow">CÙNG THỬ MỘT CHÚT NHÉ</span><DialogTitle class="dialog-title">{{ title }}</DialogTitle><DialogDescription class="dialog-description">{{ description }}</DialogDescription></div>
          <DialogClose as-child><Button type="button" variant="ghost" size="icon" class="dialog-close" aria-label="Đóng cửa sổ"><X aria-hidden="true" /></Button></DialogClose>
        </header>
        <div class="dialog-body"><slot /></div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
.dialog-overlay { position: fixed; inset: 0; z-index: 100; background: #2d241cc4; backdrop-filter: blur(5px); }
.dialog-content { position: fixed; z-index: 101; top: 50%; left: 50%; transform: translate(-50%, -50%); width: min(960px, calc(100% - 32px)); max-height: calc(100svh - 40px); display: flex; flex-direction: column; overflow: hidden; border: 1px solid #e5d5bf; border-radius: 22px; background: var(--surface-paper); color: #54392c; box-shadow: 0 24px 80px #1d120d55; }
.dialog-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; padding: 22px 24px; border-bottom: 1px dashed #ddcfbb; flex-shrink: 0; }
.dialog-title { font-family: 'Lora', Georgia, serif; font-size: clamp(20px, 3vw, 27px); line-height: 1.4; font-weight: 700; }
.dialog-description { margin-top: 7px; font-size: var(--text-small); line-height: 1.8; color: #79634d; }
.dialog-close { width: 44px; height: 44px; flex-shrink: 0; border: 1px solid #ddcfbb; border-radius: 50%; }
.dialog-body { min-height: 0; overflow-y: auto; overscroll-behavior: contain; padding: 24px; }
@media (max-width: 600px) { .dialog-heading { padding: 18px 16px; gap: 12px; } .dialog-body { padding: 16px; } .dialog-content { width: calc(100% - 20px); max-height: calc(100svh - 24px); border-radius: 17px; } }
.dialog-description { font-size: var(--text-small); color: #5c4633; }
.dialog-chalkboard { border: 10px solid #d7bc94; border-radius: 28px; background: #fffaf0; color: #563d30; box-shadow: inset 0 0 0 4px #a9b99b, inset 0 0 0 7px #ead9bb, inset 0 0 24px #b7a17e18, 0 2px 0 2px #ab8960, 0 24px 80px #1d120d55; }
.dialog-chalkboard::before { content: ''; position: absolute; top: 9px; left: 23px; width: 14px; height: 40px; border: 3px solid #d8937b; border-radius: 10px; box-shadow: inset 0 0 0 2px #ffe5d6, 2px 3px 3px #79573620; transform: rotate(-12deg); pointer-events: none; }
.dialog-chalkboard .dialog-heading { position: relative; display: block; padding: 28px 64px 14px; text-align: center; border: 0; }
.board-eyebrow { display: inline-block; padding: 5px 16px; border-radius: 45% 12% 35% 16% / 25% 38% 28% 35%; background: #dce5ce; color: #4e603b; font-size: var(--text-caption); font-weight: 600; letter-spacing: 1px; }
.dialog-chalkboard .dialog-title { position: relative; width: fit-content; max-width: 100%; margin: 12px auto 17px; color: #563d30; font-size: clamp(26px, 3.5vw, 38px); line-height: 1.35; }
.dialog-chalkboard .dialog-title::after { content: ''; position: absolute; bottom: -7px; left: 20%; right: 20%; height: 4px; border-radius: 50%; background: #e5b86b; transform: rotate(-1deg); pointer-events: none; }
.dialog-chalkboard .dialog-description { color: #735c4b; max-width: 720px; margin-inline: auto; }
.dialog-chalkboard .dialog-close { position: absolute; top: 15px; right: 15px; border-color: #d4b57e; color: #563d30; background: #fff0cf; box-shadow: 0 3px 0 #c0a07226; }
.dialog-chalkboard .dialog-close:hover { background: #ffe6b3; }
.dialog-chalkboard .dialog-close:focus-visible { outline: 3px solid #637746; outline-offset: 2px; }
.dialog-chalkboard .dialog-body { padding: 12px 28px 20px; }
@media (max-width: 600px) {
  .dialog-chalkboard { border-width: 7px; border-radius: 20px; }
  .dialog-chalkboard .dialog-heading { padding: 22px 48px 12px 20px; }
  .board-eyebrow { font-size: 11px; letter-spacing: .4px; padding-inline: 9px; }
  .dialog-chalkboard .dialog-close { top: 10px; right: 8px; }
  .dialog-chalkboard::before { left: 11px; top: 10px; width: 11px; height: 28px; border-width: 2px; }
  .dialog-chalkboard .dialog-body { padding: 8px 16px 16px; }
}
</style>
