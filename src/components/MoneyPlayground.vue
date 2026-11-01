<script setup lang="ts">
import { computed, ref } from 'vue'
import { motion } from 'motion-v'
import { ArrowRight, BookOpen, Check, Coins, Heart, Lightbulb, Minus, Plus, RotateCcw, ShieldCheck, Sparkles } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { walletPockets } from '@/data/walletPockets'

const startingAmounts = [40, 25, 25, 10]
const allocations = ref(walletPockets.map((pocket, index) => ({
  id: pocket.number, label: pocket.short, amount: startingAmounts[index] ?? 0, color: pocket.color, icon: pocket.icon,
})))
const selectedAnswer = ref<string | null>(null)
const total = computed(() => allocations.value.reduce((sum, item) => sum + item.amount, 0))
const remaining = computed(() => 100 - total.value)
const currency = new Intl.NumberFormat('vi-VN')
const answers = [
  { id: 'want', text: 'Mua hộp bút mới vì mình rất thích.', feedback: 'Thích một món đồ là điều bình thường. Nhưng hộp bút cũ vẫn dùng tốt, còn vở và bút đang thiếu. Em thử cân nhắc điều cần trước nhé.', correct: false },
  { id: 'need', text: 'Mua đủ vở, bút cần thiết; giữ lại phần còn dư.', feedback: 'Một lựa chọn có cân nhắc! Ưu tiên đồ dùng đang thiếu, tiếp tục dùng hộp bút cũ và để dành phần tiền còn lại cho mục tiêu khác.', correct: true },
  { id: 'save', text: 'Giữ lại toàn bộ, chưa mua gì cả.', feedback: 'Tiết kiệm là tốt, nhưng cũng cần đáp ứng việc học. Em có thể mua những đồ dùng thực sự cần, rồi tiết kiệm phần còn lại.', correct: false },
]
const feedback = computed(() => answers.find(answer => answer.id === selectedAnswer.value))
const allocationSummary = computed(() => allocations.value.map(item => `${item.label}: ${currency.format(item.amount * 1000)} đồng`).join(', '))

function setAmount(id: string, amount: number) {
  if (!Number.isFinite(amount)) return
  const allocation = allocations.value.find(item => item.id === id)
  if (allocation) allocation.amount = Math.min(100, Math.max(0, amount))
}

function updateAmount(id: string, event: Event) {
  if (event.target instanceof HTMLInputElement) setAmount(id, event.target.valueAsNumber)
}

function reset() {
  allocations.value.forEach((item, index) => { item.amount = startingAmounts[index] ?? 0 })
  selectedAnswer.value = null
}
</script>

<template>
  <section id="trai-nghiem" class="practice-section" aria-labelledby="playground-title">
    <div class="practice-shell">
      <header class="practice-heading">
        <div><p class="practice-eyebrow">GÓC THỰC HÀNH · THỬ MỘT CHÚT NHÉ</p><h2 id="playground-title">Nếu em có <span>100.000đ,</span><br /><em>em sẽ chọn thế nào?</em></h2></div>
        <aside class="practice-sticky"><Heart aria-hidden="true" /><p>Không phải bài kiểm tra.<br />Mỗi lựa chọn là một cơ hội<br />để hiểu mình hơn.</p></aside>
      </header>

      <div class="practice-grid">
        <Card class="practice-ledger">
          <span class="practice-tape" aria-hidden="true"></span>
          <header class="practice-panel-heading"><div><p class="practice-eyebrow">01 / TỰ TAY PHÂN CHIA</p><h3>Chiếc ví của em</h3></div><Button variant="ghost" type="button" class="practice-reset" @click="reset"><RotateCcw aria-hidden="true" /><span>Làm lại</span></Button></header>
          <div class="practice-banknote"><Coins aria-hidden="true" /><div><span>NGÂN SÁCH MÔ PHỎNG</span><strong>100.000<small>đ</small></strong></div><span class="practice-banknote-seal" aria-hidden="true">VÍ<br />NHỎ</span></div>
          <p class="practice-instruction">Kéo thanh trượt hoặc bấm + / − để chia tiền vào từng ngăn.</p>
          <div class="practice-allocation-bar" role="img" :aria-label="`Các khoản đã chia: ${allocationSummary}`"><span v-for="item in allocations" :key="item.id" :class="`practice-${item.color}`" :style="{ flexGrow: item.amount, flexBasis: '0%' }"></span></div>
          <div class="practice-allocations">
            <div v-for="item in allocations" :key="item.id" class="practice-allocation" :class="`practice-${item.color}`">
              <div class="practice-allocation-label"><label :for="`amount-${item.id}`"><span class="practice-pocket-icon"><component :is="item.icon" aria-hidden="true" /></span>{{ item.label }}</label><output :for="`amount-${item.id}`">{{ currency.format(item.amount * 1000) }}<small>đ</small></output></div>
              <div class="practice-slider-row"><Button type="button" variant="ghost" size="icon" :aria-label="`Giảm ${item.label} 5.000 đồng`" :disabled="item.amount <= 0" @click="setAmount(item.id, item.amount - 5)"><Minus aria-hidden="true" /></Button><input :id="`amount-${item.id}`" type="range" min="0" max="100" step="5" :value="item.amount" :aria-valuetext="`${currency.format(item.amount * 1000)} đồng`" @input="updateAmount(item.id, $event)" /><Button type="button" variant="ghost" size="icon" :aria-label="`Tăng ${item.label} 5.000 đồng`" :disabled="item.amount >= 100" @click="setAmount(item.id, item.amount + 5)"><Plus aria-hidden="true" /></Button></div>
            </div>
          </div>
          <div class="practice-budget-status" :class="{ 'practice-budget-over': remaining < 0, 'practice-budget-done': remaining === 0 }" role="status"><div><span class="practice-budget-label">ĐÃ PHÂN BỔ</span><strong>{{ currency.format(total * 1000) }}<small>đ</small></strong></div><p v-if="remaining === 0"><Check aria-hidden="true" /> Vừa đủ ngân sách!</p><p v-else-if="remaining > 0">Còn {{ currency.format(remaining * 1000) }}đ<br />để em cân nhắc thêm.</p><p v-else>Vượt {{ currency.format(-remaining * 1000) }}đ.<br />Mình điều chỉnh lại nhé!</p></div>
          <p class="practice-footnote"><Lightbulb aria-hidden="true" /> Không có tỷ lệ chia cố định. Hãy cân nhắc nhu cầu và lý do cho mỗi khoản tiền.</p>
        </Card>

        <div class="practice-scenario-stack">
          <Card class="practice-scenario">
            <header class="practice-scenario-heading"><span><Sparkles aria-hidden="true" /> THẺ TÌNH HUỐNG</span><span>TH01</span></header>
            <div class="practice-scenario-art" aria-hidden="true"><span class="practice-art-notebook"><BookOpen /></span><span class="practice-art-question">Cần<br />hay muốn?</span><span class="practice-art-price">45.000đ<span>HỘP BÚT MỚI</span></span></div>
            <h3>Hộp bút mới<br /><em>hay đồ dùng cần thiết?</em></h3>
            <p class="practice-scenario-story">Em có <strong>100.000đ</strong> để chuẩn bị đồ dùng học tập. Cửa hàng có hộp bút mới giá <strong>45.000đ</strong>, trong khi hộp bút cũ vẫn dùng tốt nhưng em còn thiếu vở, bút.</p>
            <p class="practice-scenario-question">Em sẽ chi tiêu thế nào?</p>
            <div class="practice-answers" role="group" aria-label="Chọn cách xử lý tình huống">
              <motion.div v-for="(answer, index) in answers" :key="answer.id" :while-hover="{ x: 3 }" :transition="{ type: 'spring', stiffness: 300, damping: 24 }"><Button variant="outline" type="button" class="practice-answer" :class="{ 'practice-answer-selected': selectedAnswer === answer.id }" :aria-pressed="selectedAnswer === answer.id" @click="selectedAnswer = answer.id"><span class="practice-answer-letter" aria-hidden="true">{{ String.fromCharCode(65 + index) }}</span><span>{{ answer.text }}</span><Check v-if="selectedAnswer === answer.id" aria-hidden="true" /><ArrowRight v-else aria-hidden="true" /></Button></motion.div>
            </div>
            <div class="practice-feedback-region" aria-live="polite" aria-atomic="true"><motion.div v-if="feedback" :key="feedback.id" class="practice-feedback" :class="{ 'practice-feedback-positive': feedback.correct }" :initial="{ opacity: 0, y: 6 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: .2 }"><Lightbulb aria-hidden="true" /><div><strong>{{ feedback.correct ? 'Một lựa chọn có cân nhắc!' : 'Mình cùng nghĩ thêm nhé.' }}</strong><p>{{ feedback.feedback }}</p></div></motion.div><p v-else class="practice-answer-hint">Chọn một phương án để mở lời gợi ý từ chiếc ví nhỏ.</p></div>
          </Card>
          <p class="practice-handnote"><Heart aria-hidden="true" /> Học từ lựa chọn, lớn lên từng ngày.</p>
        </div>
      </div>
      <p class="practice-privacy"><ShieldCheck aria-hidden="true" /><span>Chỉ là trải nghiệm minh họa · Không lưu câu trả lời · Dựa trên tình huống TH01 trong hồ sơ dự án</span></p>
    </div>
  </section>
</template>

<style scoped>
.practice-section { position: relative; padding: 64px 0 42px; color: #56392b; background-color: #fcf1f4; background-image: linear-gradient(#c4aeb711 1px, transparent 1px), linear-gradient(90deg, #c4aeb711 1px, transparent 1px), radial-gradient(ellipse at 0% 30%, #d5eaf76b, transparent 45%); background-size: 28px 28px, 28px 28px, 100% 100%; border-block: 1px solid #eddde2; }
.practice-shell { width: min(1320px, calc(100% - 80px)); margin-inline: auto; }
.practice-heading { display: flex; align-items: center; justify-content: space-between; gap: 35px; margin-bottom: 40px; }
.practice-eyebrow { font-size: 10px; letter-spacing: 1.4px; font-weight: 600; line-height: 1.8; color: #35749d; }
.practice-heading h2 { margin-top: 14px; font-family: 'Lora', Georgia, serif; font-size: clamp(30px, 3.4vw, 47px); font-weight: 700; line-height: 1.4; letter-spacing: -1px; }
.practice-heading h2 > span { background: #fbe5a4; padding-inline: 9px; border-radius: 22% 5% 20% 4%; }
.practice-heading h2 em { font-weight: 500; color: #3779a4; }
.practice-sticky { display: flex; align-items: flex-start; gap: 13px; padding: 20px 28px; background: #fff1c6; border: 1px solid #eddebc; box-shadow: 4px 5px 0 #d9c89d26; transform: rotate(3deg); }
.practice-sticky svg { width: 23px; height: 23px; color: #cc8da0; }
.practice-sticky p { font-family: 'Lora', Georgia, serif; font-size: 14px; font-style: italic; line-height: 1.8; }
.practice-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 35px; align-items: start; }
.practice-ledger { position: relative; padding: 30px 28px 24px 41px; background: #fffdf7; border: 1px solid #e5d8c4; border-radius: 5px 12px 7px 12px; box-shadow: -6px 6px 0 #d8e8f2, 0 12px 24px #654c2e12; }
.practice-ledger::before { content: ''; position: absolute; top: 26px; bottom: 20px; left: 10px; width: 12px; background: radial-gradient(circle, #e6ded0 4px, #c6baa78c 4px 5px, transparent 5px) center top / 12px 30px repeat-y; pointer-events: none; }
.practice-tape { position: absolute; top: -12px; left: 39%; width: 95px; height: 26px; background: repeating-linear-gradient(135deg, #eeb4cbcc 0 7px, #fff4e9cc 7px 14px); transform: rotate(-4deg); }
.practice-panel-heading { display: flex; align-items: center; justify-content: space-between; gap: 15px; }
.practice-panel-heading h3 { margin-top: 5px; font-family: 'Lora', Georgia, serif; font-size: 26px; font-weight: 700; }
.practice-reset { min-height: 44px; height: auto; padding: 8px; gap: 6px; color: #826952; font-size: 11px; }
.practice-reset svg { width: 17px; height: 17px; }
.practice-banknote { display: flex; align-items: center; gap: 18px; margin: 22px 0 14px; padding: 15px 19px; background: #e6f0f8; border: 1px dashed #a8c5db; border-radius: 6px; outline: 3px solid #f1f7fb; }
.practice-banknote > svg { width: 39px; height: 39px; color: #7396af; stroke-width: 1.4; }
.practice-banknote > div > span { display: block; font-size: 8px; font-weight: 600; letter-spacing: 1.4px; color: #718ca0; }
.practice-banknote strong { display: block; margin-top: 3px; font-family: 'Lora', Georgia, serif; font-size: 32px; line-height: 1.3; color: #436d90; }
.practice-banknote small { font-size: 20px; margin-left: 3px; }
.practice-banknote-seal { display: grid; place-content: center; width: 50px; height: 50px; margin-left: auto; border: 1px solid #aec8d8; outline: 3px double #c9dce8; border-radius: 50%; font-size: 9px; line-height: 1.4; letter-spacing: 1px; text-align: center; color: #6c8da5; transform: rotate(12deg); }
.practice-instruction { margin: 13px 0; font-size: 12px; line-height: 1.8; color: #8a735d; }
.practice-allocation-bar { display: flex; min-height: 18px; overflow: hidden; background: #f0e9dc; border-radius: 4px; border: 1px solid #ddcfb7; }
.practice-allocation-bar > span { min-width: 0; border-right: 1px solid #ffffff80; }
.practice-sage { --practice-color: #6b8a58; --practice-pastel: #dbe9ce; }
.practice-yellow { --practice-color: #a68231; --practice-pastel: #fae7ac; }
.practice-blue { --practice-color: #6088a4; --practice-pastel: #cce2f2; }
.practice-pink { --practice-color: #b77890; --practice-pastel: #f3d0de; }
.practice-allocation-bar > span { background: var(--practice-pastel); }
.practice-allocations { display: grid; gap: 12px; margin: 18px 0; }
.practice-allocation { padding-bottom: 10px; border-bottom: 1px dashed #e4d9c9; }
.practice-allocation-label { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.practice-allocation-label label { display: flex; align-items: center; gap: 9px; font-size: 13px; font-weight: 500; }
.practice-pocket-icon { display: grid; place-items: center; width: 29px; height: 29px; border-radius: 8px; background: var(--practice-pastel); color: var(--practice-color); }
.practice-pocket-icon svg { width: 18px; height: 18px; stroke-width: 1.6; }
.practice-allocation-label output { font-size: 15px; font-weight: 600; font-variant-numeric: tabular-nums; color: #65472f; }
.practice-allocation-label small { font-size: 11px; margin-left: 2px; }
.practice-slider-row { display: flex; align-items: center; gap: 9px; margin-top: 4px; }
.practice-slider-row button { width: 44px; height: 44px; min-width: 44px; border: 1px solid #e6ddcd; border-radius: 50%; color: var(--practice-color); }
.practice-slider-row button svg { width: 14px; height: 14px; }
.practice-slider-row input { min-width: 0; flex: 1; height: 44px; background: transparent; accent-color: var(--practice-color); cursor: pointer; }
.practice-budget-status { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 15px 17px; background: #fcf0d2; border: 1px dashed #d8c398; border-radius: 6px 6px 17px 6px; }
.practice-budget-label { display: block; font-size: 8px; letter-spacing: 1px; color: #8a7450; }
.practice-budget-status strong { display: block; font-family: 'Lora', Georgia, serif; font-size: 27px; line-height: 1.5; }
.practice-budget-status small { font-size: 17px; }
.practice-budget-status > p { display: flex; align-items: center; gap: 6px; font-size: 12px; line-height: 1.7; text-align: right; }
.practice-budget-status > p > svg { width: 18px; height: 18px; }
.practice-budget-done { background: #e9f2e3; border-color: #b9cba8; color: #557249; }
.practice-budget-over { background: #fbe5e5; border-color: #d8aaaa; color: #985251; }
.practice-footnote { display: flex; align-items: flex-start; gap: 8px; margin-top: 16px; color: #8a745e; font-size: 11px; line-height: 1.85; }
.practice-footnote svg { width: 17px; height: 17px; flex-shrink: 0; color: #ae8f47; margin-top: 2px; }
.practice-scenario-stack { position: relative; isolation: isolate; min-width: 0; padding-top: 12px; }
.practice-scenario-stack::before { content: ''; position: absolute; z-index: -1; inset: 0 12px 42px 8px; background: #f9e7ab; border: 1px solid #ead9a5; border-radius: 6px; transform: rotate(2deg); }
.practice-scenario { padding: 25px 29px 24px; background: #fffdf7; border: 1px solid #e5d5c4; border-radius: 7px 10px 8px 6px; box-shadow: 4px 6px 0 #e5cbd433, 0 12px 24px #654c2e0d; }
.practice-scenario-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 9px; font-weight: 600; letter-spacing: 1px; color: #3d749b; }
.practice-scenario-heading > span:first-child { display: inline-flex; align-items: center; gap: 7px; }
.practice-scenario-heading > span:last-child { padding: 5px 9px; border: 1px dashed #d8b3c1; color: #b07a8b; background: #fce9f0; transform: rotate(5deg); }
.practice-scenario-heading svg { width: 16px; height: 16px; color: #b89943; }
.practice-scenario-art { position: relative; display: flex; align-items: center; justify-content: center; gap: 28px; min-height: 125px; margin: 17px 0 10px; background: radial-gradient(ellipse, #e7f1f7 0 55%, transparent 58%); }
.practice-art-notebook { display: grid; place-items: center; width: 68px; height: 79px; background: #c4ddeb; border: 5px solid #fffaf1; box-shadow: 3px 4px 0 #afc4d144; transform: rotate(-10deg); color: #5d88a6; }
.practice-art-notebook svg { width: 38px; height: 43px; stroke-width: 1.3; }
.practice-art-question { font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 22px; line-height: 1.4; color: #457a9d; transform: rotate(-4deg); }
.practice-art-price { padding: 13px; background: #ffe7a5; border: 1px solid #e5ce93; box-shadow: 3px 4px 0 #cdb47724; font-family: 'Lora', Georgia, serif; font-size: 20px; color: #806338; transform: rotate(9deg); }
.practice-art-price > span { display: block; margin-top: 6px; font-family: var(--font-sans); font-size: 7px; letter-spacing: 1px; }
.practice-scenario h3 { font-family: 'Lora', Georgia, serif; font-size: clamp(25px, 2.4vw, 32px); font-weight: 700; line-height: 1.4; margin-top: 13px; }
.practice-scenario h3 em { font-weight: 500; color: #417b9f; }
.practice-scenario-story { margin-top: 16px; color: #755b45; font-size: 14px; line-height: 1.9; }
.practice-scenario-story strong { color: #5a3e29; font-weight: 600; }
.practice-scenario-question { margin: 19px 0 12px; font-size: 13px; font-weight: 600; }
.practice-answers { display: grid; gap: 10px; }
.practice-answer { display: flex; align-items: center; gap: 11px; width: 100%; min-height: 58px; height: auto; padding: 12px; white-space: normal; text-align: left; border: 1px solid #e0d5c4; border-radius: 6px 12px 6px 10px; background: #fffdf8; color: #62442e; font-size: 12px; line-height: 1.8; font-weight: 400; }
.practice-answer:hover { background: #f2f6fa; border-color: #bdd0df; }
.practice-answer-selected { background: #e7f1f8; border-color: #84aecb; box-shadow: 2px 3px 0 #d0e0ec66; }
.practice-answer-letter { display: grid; place-items: center; width: 28px; height: 30px; flex-shrink: 0; border-radius: 7px; background: #f4e8d5; color: #8f7151; font-family: 'Lora', Georgia, serif; font-size: 16px; font-weight: 600; }
.practice-answer-selected .practice-answer-letter { background: #bcd9ef; color: #416b8e; }
.practice-answer > svg { width: 16px; height: 16px; margin-left: auto; flex-shrink: 0; color: #8c755c; }
.practice-feedback { display: flex; align-items: flex-start; gap: 11px; margin-top: 16px; padding: 14px; border: 1px dashed #ddc895; border-radius: 8px; background: #fff2cc; color: #7c633c; }
.practice-feedback > svg { width: 21px; height: 23px; flex-shrink: 0; }
.practice-feedback strong { font-size: 12px; font-weight: 600; }
.practice-feedback p { margin-top: 6px; font-size: 12px; line-height: 1.9; }
.practice-feedback-positive { background: #eaf3e2; border-color: #b4c9a0; color: #5c7848; }
.practice-answer-hint { margin-top: 16px; font-family: 'Lora', Georgia, serif; font-size: 12px; line-height: 1.8; font-style: italic; color: #9a7f68; }
.practice-handnote { display: flex; justify-content: center; align-items: center; gap: 7px; padding: 18px 8px 0; color: #b37b91; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 14px; text-align: center; }
.practice-handnote svg { width: 18px; height: 18px; }
.practice-privacy { display: flex; justify-content: center; align-items: flex-start; gap: 8px; max-width: 950px; margin: 30px auto 0; color: #917867; font-size: 11px; line-height: 1.9; text-align: center; }
.practice-privacy svg { width: 17px; height: 18px; flex-shrink: 0; margin-top: 2px; color: #8da280; }
@media (max-width: 1100px) { .practice-shell { width: calc(100% - 56px); } .practice-grid { gap: 24px; } .practice-ledger { padding-right: 22px; } .practice-scenario { padding-inline: 22px; } .practice-sticky { padding: 17px 20px; } }
@media (max-width: 850px) { .practice-grid { grid-template-columns: 1fr; gap: 32px; } .practice-sticky { display: none; } .practice-heading h2 { font-size: 38px; } .practice-scenario-art { gap: 35px; } }
@media (max-width: 500px) { .practice-section { padding: 42px 0 32px; } .practice-shell { width: calc(100% - 36px); } .practice-heading { margin-bottom: 30px; } .practice-heading h2 { font-size: 30px; letter-spacing: -.5px; } .practice-eyebrow { font-size: 8px; letter-spacing: 1px; } .practice-ledger { padding: 26px 17px 21px 30px; } .practice-ledger::before { left: 7px; width: 10px; background-size: 10px 29px; } .practice-panel-heading h3 { font-size: 24px; } .practice-reset { font-size: 10px; gap: 4px; } .practice-banknote { padding: 13px; gap: 12px; } .practice-banknote strong { font-size: 28px; } .practice-banknote > svg { width: 30px; } .practice-banknote-seal { width: 40px; height: 40px; } .practice-budget-status { padding: 13px; gap: 10px; } .practice-budget-status strong { font-size: 24px; } .practice-budget-status > p { font-size: 10px; } .practice-scenario { padding: 22px 18px; } .practice-scenario-art { gap: 16px; } .practice-art-notebook { width: 51px; height: 65px; } .practice-art-question { font-size: 18px; } .practice-art-price { font-size: 17px; padding: 10px; } .practice-answer { font-size: 12px; } .practice-handnote { font-size: 12px; } .practice-privacy { font-size: 10px; } }
</style>
