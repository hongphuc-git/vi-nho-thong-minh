<script setup lang="ts">
import { motion } from 'motion-v'
import { ArrowUpRight, Backpack, BookOpen, Heart, Minus, Plus, Sprout, Users } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

defineProps<{ questions: { title: string; answer: string }[] }>()
const audiences = [
  { title: 'Với học sinh', text: 'Tự tin cân nhắc, lên kế hoạch và thực hành từ những khoản tiền nhỏ.', icon: Backpack },
  { title: 'Với phụ huynh', text: 'Cùng con trò chuyện về nhu cầu, mong muốn và mục tiêu.', icon: Users },
  { title: 'Với thầy cô', text: 'Học liệu trực quan cho sinh hoạt lớp, Giáo dục công dân và hoạt động trải nghiệm.', icon: BookOpen },
]
</script>

<template>
  <div class="companion-scrapbook">
    <section id="dong-hanh" class="companion-section" aria-labelledby="companion-title">
      <motion.div class="quote-stack" :initial="{ opacity: 0, y: 14 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: .4 }">
        <span class="quote-tape" aria-hidden="true"></span>
        <div class="quote-paper">
          <p class="paper-label">GÓC ĐỒNG HÀNH</p>
          <h2 id="companion-title">Học cách giữ tiền.<br /><span>Lớn lên từ lựa chọn.</span></h2>
          <div class="quote-message"><Heart aria-hidden="true" /><p>Để mỗi cuộc trò chuyện về tiền trở thành một cơ hội cùng con trưởng thành.</p></div>
          <Sprout class="quote-sprout" aria-hidden="true" />
        </div>
      </motion.div>
      <div class="audience-notes">
        <Card v-for="(audience, index) in audiences" :key="audience.title" class="audience-note">
          <span class="note-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <div><h3>{{ audience.title }}</h3><p>{{ audience.text }}</p></div>
          <div class="audience-illustration" aria-hidden="true"><component :is="audience.icon" /><Heart /><span></span></div>
        </Card>
      </div>
    </section>

    <div class="companion-divider" aria-hidden="true"><span></span><Heart /><span></span></div>

    <section class="mailbox-section" aria-labelledby="mailbox-title">
      <div class="mailbox-intro">
        <p class="paper-label pink-label">HỘP THƯ TÒ MÒ</p>
        <h2 id="mailbox-title">Bạn hỏi,<br /><span>chúng mình đáp.</span></h2>
        <div class="mailbox-envelope" aria-hidden="true">
          <svg viewBox="0 0 260 210" fill="none"><path d="m25 89 96-72 110 61-2 109-193 10Z" fill="#c3dfef" stroke="#7dabc6" stroke-width="2" /><path d="m56 115-8-81 151-15 12 97Z" fill="#ffe9a5" stroke="#e0c27e" stroke-width="1.5" /><path d="m25 89 104 64L231 78l-2 109-193 10Z" fill="#c4e1f2" stroke="#7dabc6" stroke-width="2" /><path d="m36 197 76-70q17-13 33-3l84 63" fill="#d7eaf7" stroke="#7dabc6" stroke-width="2" /><path d="M132 140c-16-18-33 4 0 25 33-21 16-43 0-25Z" fill="#eea1b8" stroke="#fff8ec" stroke-width="4" /></svg>
          <span>Còn điều<br />muốn hỏi?</span>
        </div>
        <Button as-child variant="outline" class="mailbox-button"><a href="mailto:thuha03ulis@gmail.com">Nhắn cho chúng mình <ArrowUpRight aria-hidden="true" /></a></Button>
      </div>
      <div class="mailbox-questions">
        <details v-for="(question, index) in questions" :key="question.title" :open="index === 0" class="question-paper">
          <summary><span class="question-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ question.title }}</h3><span class="question-toggle" aria-hidden="true"><Plus class="question-plus" /><Minus class="question-minus" /></span></summary>
          <p>{{ question.answer }}</p>
        </details>
      </div>
    </section>
    <svg class="companion-botanical" viewBox="0 0 100 200" aria-hidden="true"><path d="M8 196Q26 92 84 9" fill="none" stroke="#809866" stroke-width="2" /><g fill="#b3c793" stroke="#809866"><path d="M27 139Q0 127 6 102Q31 106 27 139Z" /><path d="M33 119Q49 88 74 100Q63 125 33 119Z" /><path d="M50 82Q26 63 38 42Q58 50 50 82Z" /><path d="M64 51Q62 17 88 9Q92 37 64 51Z" /></g><g fill="#f6cf75"><circle cx="16" cy="65" r="8" /><circle cx="10" cy="55" r="7" /><circle cx="23" cy="54" r="7" /><circle cx="28" cy="66" r="7" /><circle cx="21" cy="74" r="7" /></g><circle cx="20" cy="63" r="4" fill="#be923c" /></svg>
  </div>
</template>

<style scoped>
.companion-scrapbook { position: relative; isolation: isolate; width: min(1240px, calc(100% - 80px)); margin: 35px auto 70px; color: #543025; }
.companion-section { scroll-margin-top: 110px; display: grid; grid-template-columns: 1fr 1fr; gap: 37px; align-items: center; padding-top: 20px; }
.quote-stack { position: relative; isolation: isolate; filter: drop-shadow(1px 9px 5px #8b6a3e17); }
.quote-stack::before { content: ''; position: absolute; inset: -12px 10px 5px -10px; z-index: -1; background: #d4e7f3; transform: rotate(-3deg); mask: url('/images/scrapbook/torn-paper.svg') center / 100% 100% no-repeat; }
.quote-paper { position: relative; padding: 38px 30px 45px; background: #fff6e4; background-image: repeating-linear-gradient(17deg, #b7996e0b 0 1px, transparent 1px 4px); mask: url('/images/scrapbook/torn-paper.svg') center / 100% 100% no-repeat; }
.quote-tape { position: absolute; z-index: 2; top: -15px; right: 22%; width: 112px; height: 33px; transform: rotate(7deg); background-image: repeating-linear-gradient(90deg, #e7a1b899 0 6px, #fff6e580 6px 12px), repeating-linear-gradient(0deg, #e7a1b899 0 6px, #fff6e580 6px 12px); }
.paper-label { display: inline-block; background: #bcdcf1; padding: 8px 14px; font-size: 12px; font-weight: 600; letter-spacing: 1.2px; color: #2f5e81; transform: rotate(-2deg); border-radius: 25% 6% 18% 3%; }
.quote-paper h2 { margin-top: 20px; font-family: 'Lora', Georgia, serif; font-size: clamp(29px, 3.2vw, 43px); font-weight: 700; line-height: 1.35; letter-spacing: -1px; }
.quote-paper h2 > span { text-decoration: underline; text-decoration-color: #e997af; text-decoration-thickness: 3px; text-underline-offset: 9px; }
.quote-message { display: flex; align-items: flex-start; gap: 14px; margin-top: 30px; }
.quote-message > svg { width: 27px; height: 30px; flex-shrink: 0; color: #cf7d98; transform: rotate(-10deg); }
.quote-message p { font-size: 14px; line-height: 1.9; color: #755744; }
.quote-sprout { position: absolute; bottom: 12px; right: 15px; width: 32px; height: 42px; color: #79945e; fill: #d0dfb7; stroke-width: 1.2; }
.audience-notes { display: grid; gap: 16px; }
.audience-note { display: grid; grid-template-columns: 43px 1fr 76px; gap: 15px; align-items: center; min-height: 132px; padding: 22px; background: #dceef9; color: #543025; border: 0; border-radius: 7px 17px 4px 12px; box-shadow: 0 5px 0 #d5dfdf66; }
.audience-note:nth-child(2) { background: #fff0bf; }
.audience-note:nth-child(3) { background: #f9dfe9; }
.note-number { align-self: start; font-family: 'Lora', Georgia, serif; font-size: 23px; color: #346486; padding: 6px; background: #bfddf1; border-radius: 8px 3px 10px 4px; }
.audience-note:nth-child(2) .note-number { background: #ffe296; color: #8a642a; } .audience-note:nth-child(3) .note-number { background: #f3bfd2; color: #98556f; }
.audience-note h3 { font-family: 'Lora', Georgia, serif; font-size: 23px; font-weight: 600; }
.audience-note p { font-size: 13px; line-height: 1.85; color: #6f5546; margin-top: 6px; }
.audience-illustration { position: relative; height: 78px; display: grid; place-items: center; }
.audience-illustration > svg:first-child { width: 62px; height: 66px; stroke-width: 1.2; color: #557d9c; fill: #fdf1d4; transform: rotate(8deg); filter: drop-shadow(2px 4px 1px #71889c22); }
.audience-note:nth-child(2) .audience-illustration > svg:first-child { fill: #f5dccb; color: #987251; }
.audience-note:nth-child(3) .audience-illustration > svg:first-child { fill: #fff4d8; color: #94744e; transform: rotate(-8deg); }
.audience-illustration > svg:nth-child(2) { position: absolute; width: 16px; height: 16px; right: -2px; top: 0; fill: #ee9db3; color: #ee9db3; transform: rotate(15deg); }
.companion-divider { display: flex; align-items: center; gap: 16px; margin: 38px 0; }
.companion-divider > span { height: 1px; flex: 1; border-top: 1px dashed #96a184; transform: rotate(-.3deg); }
.companion-divider > svg { width: 19px; height: 19px; color: #ce8b87; }
.mailbox-section { display: grid; grid-template-columns: .72fr 1.28fr; gap: 45px; align-items: start; }
.pink-label { background: #f6ccd9; color: #874e64; }
.mailbox-intro h2 { margin-top: 19px; font-family: 'Lora', Georgia, serif; font-size: clamp(30px, 3.5vw, 45px); font-weight: 700; line-height: 1.3; letter-spacing: -1px; }
.mailbox-intro h2 > span { text-decoration: underline; text-decoration-color: #e99bb2; text-decoration-thickness: 3px; text-underline-offset: 8px; }
.mailbox-envelope { position: relative; width: min(220px, 100%); aspect-ratio: 260 / 210; margin: 26px auto 20px; transform: rotate(-7deg); pointer-events: none; }
.mailbox-envelope svg { display: block; width: 100%; height: 100%; filter: drop-shadow(2px 6px 3px #775b3622); }
.mailbox-envelope span { position: absolute; left: 22%; top: 14%; width: 54%; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 16px; text-align: center; line-height: 1.5; transform: rotate(-4deg); }
.mailbox-button { display: flex; width: fit-content; max-width: 100%; margin-inline: auto; padding: 14px 19px; height: auto; min-height: 48px; gap: 10px; border: 1.5px solid #78523e; background: #fffaf0; color: #543025; border-radius: 12px; font-size: 13px; white-space: normal; }
.mailbox-button:hover { background: #f9e4db; }
.mailbox-questions { display: grid; gap: 14px; }
.question-paper { --tab: #c7e0f2; background: #fffaf2; border: 1px solid #e8ddcb; border-radius: 12px 5px 14px 6px; box-shadow: 0 4px 0 #e8dfd366, 0 8px 18px #7559360a; overflow: hidden; }
.question-paper:nth-child(2) { --tab: #ffe29a; } .question-paper:nth-child(3) { --tab: #f6c5d6; } .question-paper:nth-child(4) { --tab: #d1e2bf; }
.question-paper summary { display: flex; align-items: center; gap: 15px; padding: 18px; list-style: none; cursor: pointer; min-height: 82px; }
.question-paper summary::-webkit-details-marker { display: none; }
.question-number { font-family: 'Lora', Georgia, serif; background: var(--tab); color: #533d30; font-size: 22px; border-radius: 7px 3px 10px 5px; padding: 6px 9px; flex-shrink: 0; }
.question-paper h3 { font-family: 'Lora', Georgia, serif; font-size: 18px; line-height: 1.6; font-weight: 600; }
.question-toggle { width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; background: var(--tab); margin-left: auto; display: grid; place-items: center; }
.question-toggle svg { width: 18px; height: 18px; }
.question-minus, [open] .question-plus { display: none; } [open] .question-minus { display: block; }
.question-paper > p { padding: 16px 20px; margin: 0 16px 17px; background: #e7f0f5; border-radius: 8px; font-size: 13px; line-height: 1.95; color: #645044; }
.question-paper summary:focus-visible { outline: 2px solid #386a90; outline-offset: -4px; }
.companion-botanical { position: absolute; top: -10px; left: -42px; width: 65px; height: 150px; z-index: -1; transform: rotate(-15deg); }
@media (max-width: 1000px) { .companion-scrapbook { width: calc(100% - 64px); } .companion-section { gap: 25px; } .quote-paper { padding: 32px 24px 39px; } .audience-note { grid-template-columns: 35px 1fr 48px; padding: 18px 15px; gap: 11px; } .audience-illustration > svg:first-child { width: 44px; height: 51px; } .audience-note h3 { font-size: 21px; } .audience-note p { font-size: 12px; } .note-number { font-size: 20px; } .mailbox-section { gap: 27px; } }
@media (max-width: 760px) { .companion-scrapbook { width: calc(100% - 40px); margin-block: 22px 45px; } .companion-section, .mailbox-section { grid-template-columns: 1fr; gap: 28px; } .quote-paper h2 { font-size: clamp(30px, 6.5vw, 43px); } .quote-message p { font-size: 13px; } .audience-note { grid-template-columns: 40px 1fr 57px; min-height: 125px; } .audience-note h3 { font-size: 22px; } .audience-note p { font-size: 13px; } .companion-divider { margin-block: 28px; } .mailbox-intro { text-align: center; } .mailbox-intro h2 { font-size: 36px; } .mailbox-envelope { width: 175px; } .mailbox-envelope span { font-size: 13px; } .question-paper summary { gap: 11px; padding: 15px 12px; } .question-paper h3 { font-size: 16px; } .question-number { font-size: 19px; padding: 5px 7px; } .question-paper > p { margin-inline: 12px; padding: 14px; font-size: 12px; } .companion-botanical { width: 42px; left: -15px; opacity: .6; } }
</style>

