<script setup lang="ts">
import { Check } from '@lucide/vue'
import { PhBookOpen as BookOpen, PhCoins as Coins, PhHeart as Heart, PhStack as Layers, PhChatCircle as MessageCircle, PhNotebook as NotebookPen, PhShieldCheck as ShieldCheck, PhTarget as Target, PhWallet as Wallet } from '@phosphor-icons/vue'

const steps = [
  { title: 'Mở ra xem nhé', description: 'Cùng khám phá bốn ngăn ví và thử ghi những dòng đầu tiên.', icon: BookOpen },
  { title: 'Thử chọn một cách', description: 'Nếu gặp chuyện này, em sẽ làm gì? Chọn một cách mà em thấy phù hợp nhé.', icon: Target },
  { title: 'Kể nhau nghe', description: 'Nói vì sao em chọn như vậy, nghe thêm ý kiến và ghi lại điều mình học được.', icon: MessageCircle },
]
const materials = [
  { title: 'Ví bốn ngăn', icon: Wallet },
  { title: 'Sổ thu–chi 30 ngày', icon: NotebookPen },
  { title: 'Thẻ tình huống', icon: Layers },
  { title: 'Bảng mục tiêu', icon: Target },
  { title: 'Tiền mô phỏng', icon: Coins },
]
</script>

<template>
  <div class="starter-stack">
    <span class="starter-tape" aria-hidden="true"></span>
    <section class="starter-paper" aria-labelledby="starter-title">
      <div class="starter-main">
        <p class="starter-eyebrow">MỞ RA MỘT CHÚT · KHÁM PHÁ MỘT ĐIỀU HAY</p>
        <h4 id="starter-title">Mình cùng thử, <span>từng chút một nhé!</span></h4>
        <ol class="starter-steps">
          <li v-for="(step, index) in steps" :key="step.title">
            <div class="step-sheet"><span class="step-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span><component weight="duotone" :is="step.icon" class="step-art" aria-hidden="true" /><h5>{{ step.title }}</h5><p>{{ step.description }}</p></div>
            <svg v-if="index < steps.length - 1" class="step-arrow" viewBox="0 0 55 32" fill="none" aria-hidden="true"><path class="step-arrow-outline" d="M3 22Q26 0 48 17m-10-10 10 10-14 1" /><path d="M3 22Q26 0 48 17" stroke-dasharray="5 4" /><path d="m38 7 10 10-14 1" /></svg>
          </li>
        </ol>
      </div>
      <aside class="starter-checklist" aria-labelledby="starter-materials-title">
        <span class="starter-clip" aria-hidden="true"></span>
        <div class="checklist-sheet"><p class="starter-eyebrow">NHỮNG NGƯỜI BẠN NHỎ</p><h4 id="starter-materials-title">Những học liệu<br />được giới thiệu</h4><ul><li v-for="item in materials" :key="item.title"><Check class="material-check" aria-hidden="true" /><span class="material-icon"><component weight="duotone" :is="item.icon" aria-hidden="true" /></span><span>{{ item.title }}</span></li></ul><p class="starter-scope-note">Danh sách học liệu mẫu; thành phần đóng gói của bộ cá nhân sẽ được nhóm xác nhận khi hoàn thiện quy cách.</p></div>
      </aside>
      <div class="starter-reassurance"><p><ShieldCheck weight="duotone" aria-hidden="true" /><span><strong>Thử trước bằng tiền mô phỏng nhé!</strong><small>Em có thể tập chia tiền, ghi sổ và lựa chọn mà chưa cần dùng tiền thật.</small></span></p><p><Heart weight="duotone" aria-hidden="true" /><span><strong>Có người cùng em khám phá.</strong><small>Rủ bố mẹ, thầy cô hoặc một người bạn cùng chơi và kể nhau nghe.</small></span></p></div>
    </section>
  </div>
</template>

<style scoped>
.starter-stack { position: relative; isolation: isolate; grid-column: 1 / -1; margin: 23px 0 10px; filter: drop-shadow(0 7px 4px #745a3620); }
.starter-stack::before { content: ''; position: absolute; z-index: -1; inset: -7px -6px -8px; background: #d9bd96; background-image: repeating-linear-gradient(23deg, #ffffff20 0 1px, transparent 1px 4px); transform: rotate(.7deg); mask: url('/images/scrapbook/team-torn-edge.svg') center / 100% 100% no-repeat; }
.starter-paper { display: grid; grid-template-columns: minmax(0, 1.9fr) minmax(245px, 1fr); gap: 28px; padding: 33px 29px 23px; background-color: #fffaf0; background-image: repeating-linear-gradient(17deg, #a98d6109 0 1px, transparent 1px 4px); mask: url('/images/scrapbook/team-torn-edge.svg') center / 100% 100% no-repeat; color: #543728; }
.starter-tape { position: absolute; top: -16px; left: 32px; z-index: 2; width: 95px; height: 29px; background: repeating-linear-gradient(125deg, #a5ccdfcc 0 9px, #f5faf0cc 9px 18px); transform: rotate(-6deg); pointer-events: none; }
.starter-eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 1px; line-height: 1.8; color: #795b3b; }
.starter-main > h4 { margin-top: 12px; font-family: 'Lora', Georgia, serif; font-size: clamp(23px, 2.2vw, 31px); line-height: 1.5; font-weight: 600; }
.starter-main > h4 > span { text-decoration: underline; text-decoration-color: #e8a3b4; text-decoration-thickness: 3px; text-underline-offset: 7px; }
.starter-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; list-style: none; padding: 0; margin: 36px 0 0; }
.starter-steps > li { position: relative; min-width: 0; filter: drop-shadow(0 4px 3px #775e3515); }
.step-sheet { position: relative; height: 100%; padding: 48px 17px 24px; background: #e7f1f8; border-radius: 6px 10px 3px 7px; border-bottom: 4px solid #fff8ed; }
.starter-steps > li:nth-child(2) .step-sheet { background: #fff0c9; }
.starter-steps > li:nth-child(3) .step-sheet { background: #fbe5ec; }
.step-number { position: absolute; top: -19px; left: 15px; display: grid; place-items: center; width: 46px; height: 46px; border-radius: 50%; border: 1px dashed #86afca; box-shadow: 0 0 0 3px #cae3f5; background: #cae3f5; color: #326282; font-family: 'Lora', Georgia, serif; font-size: 22px; }
.starter-steps > li:nth-child(2) .step-number { background: #ffe4a0; box-shadow: 0 0 0 3px #ffe4a0; color: #997029; border-color: #d3ae59; }
.starter-steps > li:nth-child(3) .step-number { background: #f6c9d8; box-shadow: 0 0 0 3px #f6c9d8; color: #9d516e; border-color: #d596ad; }
.step-art { width: 62px; height: 62px; stroke-width: 1.2; margin: 0 auto 18px; display: block; color: #71513c; transform: rotate(-5deg); }
.step-sheet h5 { font-family: 'Lora', Georgia, serif; font-size: 19px; line-height: 1.5; font-weight: 600; }
.step-sheet > p { margin-top: 10px; font-size: 13px; line-height: 1.85; color: #705946; }
.step-arrow { position: absolute; top: 37%; left: calc(100% - 5px); width: 34px; height: 25px; z-index: 2; stroke: #ae8754; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; pointer-events: none; }
.starter-checklist { position: relative; min-width: 0; align-self: stretch; filter: drop-shadow(2px 5px 3px #6d70451a); }
.checklist-sheet { height: 100%; padding: 26px 22px 23px; background: #edf1dd; mask: url('/images/scrapbook/team-torn-edge.svg') center / 100% 100% no-repeat; }
.checklist-sheet h4 { margin-top: 11px; font-family: 'Lora', Georgia, serif; font-size: 26px; font-weight: 600; line-height: 1.45; }
.checklist-sheet ul { list-style: none; padding: 0; margin: 19px 0 0; }
.checklist-sheet li { display: flex; align-items: center; gap: 10px; padding-block: 12px; border-bottom: 1px dashed #c7d0af; font-size: 13px; line-height: 1.7; }
.checklist-sheet li:last-child { border: 0; }
.material-check { width: 20px; height: 20px; padding: 3px; flex-shrink: 0; border-radius: 50%; background: #91ad76; color: #fff; }
.material-icon { display: grid; place-items: center; width: 34px; height: 34px; flex-shrink: 0; background: #e0eac7; border-radius: 50%; }
.material-icon svg { width: 22px; height: 22px; stroke-width: 1.4; color: #63734a; }
.starter-clip { position: absolute; top: -6px; right: 24px; z-index: 2; width: 14px; height: 53px; border: 2px solid #ba9651; border-radius: 10px; transform: rotate(11deg); pointer-events: none; }
.starter-clip::after { content: ''; position: absolute; inset: 4px 3px 7px; border: 1px solid #ba9651; border-top: 0; border-radius: 0 0 6px 6px; }
.starter-reassurance { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 15px 25px; padding-top: 19px; border-top: 1px dashed #d3c3ab; }
.starter-reassurance p { display: flex; align-items: center; gap: 10px; font-size: 12px; line-height: 1.8; color: #725c49; }
.starter-reassurance svg { width: 32px; height: 32px; flex-shrink: 0; padding: 6px; background: #e1eff9; border-radius: 50%; color: #467da1; stroke-width: 1.5; }
.starter-reassurance p:last-child svg { background: #fae1e7; color: #b4748d; }
@media (max-width: 1050px) { .starter-paper { grid-template-columns: 1fr; padding: 30px 24px 23px; } .starter-checklist { margin-top: 4px; } .checklist-sheet h4 br { display: none; } .checklist-sheet ul { display: grid; grid-template-columns: 1fr 1fr; gap: 0 25px; } .step-sheet h5 { font-size: 20px; } }
@media (max-width: 600px) { .starter-paper { padding: 29px 19px 23px; gap: 25px; } .starter-steps { grid-template-columns: 1fr; gap: 30px; } .step-sheet { padding: 28px 19px 21px 78px; min-height: 150px; } .step-number { left: 16px; top: 17px; width: 35px; height: 35px; font-size: 19px; } .step-art { position: absolute; left: 17px; top: 73px; width: 36px; height: 36px; margin: 0; } .step-arrow { left: auto; right: 25px; top: calc(100% + 3px); transform: rotate(90deg); width: 30px; } .checklist-sheet { padding: 23px 18px; } .checklist-sheet ul { grid-template-columns: 1fr; } .checklist-sheet h4 { font-size: 25px; } .starter-eyebrow { font-size: 10px; } .starter-reassurance p { font-size: 12px; } }

.starter-main { display: flex; flex-direction: column; min-width: 0; }
.starter-steps { flex: 1; }
.step-sheet { display: flex; flex-direction: column; padding-top: 49px; }
.step-art { margin-block: 7px 22px; }
.step-sheet > p { font-size: 14px; line-height: 1.85; }
.step-sheet h5 { font-size: 20px; }
.starter-reassurance { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.starter-reassurance p { display: flex; align-items: flex-start; padding: 15px 17px; border: 1px solid #d7e4ec; background: #edf4f9; border-radius: 10px 4px 10px 4px; gap: 12px; }
.starter-reassurance p:last-child { border-color: #ecd8df; background: #fcf0f3; }
.starter-reassurance p > span { display: grid; gap: 5px; }
.starter-reassurance strong { font-size: 14px; font-weight: 600; color: #5b4534; line-height: 1.7; }
.starter-reassurance small { font-size: 12px; line-height: 1.85; color: #755d4d; }
.starter-reassurance svg { width: 35px; height: 35px; }
@media (max-width: 600px) { .starter-reassurance { grid-template-columns: 1fr; } .step-sheet { display: block; padding-top: 24px; } .step-art { margin: 0; } .step-sheet > p { font-size: 13px; } .starter-steps { flex: initial; } }

.step-arrow { width: 43px; height: 31px; left: calc(100% - 9px); stroke: #80542f; stroke-width: 2.6; z-index: 3; }
.step-arrow .step-arrow-outline { stroke: #fffaf0; stroke-width: 6; stroke-dasharray: none; }
@media (max-width: 600px) { .step-arrow { left: auto; right: 24px; top: calc(100% + 1px); width: 36px; height: 29px; } }

/* Filter creates a stacking context on each card; earlier cards must sit above the next one. */
.starter-steps > li { z-index: 3; }
.starter-steps > li:nth-child(2) { z-index: 2; }
.starter-steps > li:nth-child(3) { z-index: 1; }
.starter-scope-note { margin-top: 14px; padding-top: 12px; border-top: 1px dashed #c7d0af; font-size: 12px; line-height: 1.8; color: #596747; }
</style>
