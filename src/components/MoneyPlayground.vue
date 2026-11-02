<script setup lang="ts">
import { computed, ref } from 'vue'
import { motion } from 'motion-v'
import { ArrowRight, Check, Coins, Heart, Lightbulb, Minus, Plus, RotateCcw, ShieldCheck, Sparkles } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { walletPockets } from '@/data/walletPockets'
import { firstScenario, practiceScenarios, type PracticeScenario } from '@/data/practiceScenarios'
import { publicAsset } from '@/lib/publicAsset'

const startingAmounts = [40, 25, 25, 10]
const allocations = ref(walletPockets.map((pocket, index) => ({
  id: pocket.number, label: pocket.short, amount: startingAmounts[index] ?? 0, color: pocket.color, icon: pocket.icon,
})))
const selectedAnswer = ref<string | null>(null)
const selectedPocket = ref<string | null>(null)
const enlargedPocket = ref<string | null>(null)
const total = computed(() => allocations.value.reduce((sum, item) => sum + item.amount, 0))
const remaining = computed(() => 100 - total.value)
const currency = new Intl.NumberFormat('vi-VN')
const scenario = ref(firstScenario)
const answers = computed(() => scenario.value.answers)
const feedback = computed(() => answers.value.find(answer => answer.id === selectedAnswer.value))

function selectScenario(item: PracticeScenario) {
  scenario.value = item
  selectedAnswer.value = null
}
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
  selectedPocket.value = null
}

function focusPocket(id: string) {
  selectedPocket.value = id
  const slider = document.getElementById(`amount-${id}`)
  if (slider instanceof HTMLInputElement) slider.focus()
}
</script>

<template>
  <section id="trai-nghiem" class="practice-section" aria-labelledby="playground-title">
    <div class="practice-section-divider" aria-hidden="true">
      <span></span><span class="practice-divider-detail"><Sparkles /><Heart /><Sparkles /></span><span></span>
    </div>
    <div class="practice-shell">
      <header class="practice-heading">
        <div><p class="practice-eyebrow">GÓC THỰC HÀNH · THỬ MỘT CHÚT NHÉ</p><h2 id="playground-title">Nếu em có <span>100.000đ,</span><br /><em>em sẽ chọn thế nào?</em></h2></div>
        <p class="practice-heading-note">Tự tay chia tiền. Tập cân nhắc từng lựa chọn.</p>
      </header>

      <div class="practice-grid">
        <Card class="practice-ledger">
          <header class="practice-panel-heading"><div><p class="practice-eyebrow">01 / TỰ TAY PHÂN CHIA</p><h3>Chiếc ví của em</h3></div><Button variant="ghost" type="button" class="practice-reset" @click="reset"><RotateCcw aria-hidden="true" /><span>Làm lại</span></Button></header>
          <div class="practice-banknote"><Coins aria-hidden="true" /><div><span>HÔM NAY EM CÓ</span><strong>100.000<small>đ</small></strong></div><span class="practice-banknote-seal">Tiền<br />mô phỏng</span></div>
          <div class="practice-wallet-scene">
            <img :src="publicAsset('/images/learning-kit/practice-open-wallet.png')" alt="Minh họa ví vải đen mở nắp, nút bấm bạc và bốn ngăn màu bên trong" class="practice-wallet-image" loading="lazy" />
            <div class="practice-wallet-tabs" role="group" aria-label="Chọn ngăn ví để điều chỉnh tiền">
              <Button v-for="item in allocations" :key="item.id" type="button" variant="ghost" class="practice-wallet-tab" :class="[`practice-${item.color}`, { 'practice-wallet-tab-active': selectedPocket === item.id }]" :aria-label="`${item.label}: ${currency.format(item.amount * 1000)} đồng. Điều chỉnh ngăn này`" :aria-controls="`amount-${item.id}`" @pointerenter="enlargedPocket = $event.pointerType === 'mouse' ? item.id : null" @pointerleave="enlargedPocket = null" @pointerdown="enlargedPocket = item.id" @pointerup="enlargedPocket = $event.pointerType === 'mouse' ? item.id : null" @pointercancel="enlargedPocket = null" @focus="enlargedPocket = item.id" @blur="enlargedPocket = null" @click="focusPocket(item.id)"><motion.span class="practice-wallet-label" :animate="{ scale: enlargedPocket === item.id ? 1.16 : 1 }" :transition="{ type: 'spring', stiffness: 320, damping: 22 }">{{ item.label }}</motion.span></Button>
            </div>
          </div>
          <p class="practice-instruction">Chọn ngăn ví, kéo thanh trượt hoặc bấm + / −. Mỗi bước là 5.000đ.</p>
          <div class="practice-allocations">
            <div v-for="item in allocations" :key="item.id" class="practice-allocation" :class="[`practice-${item.color}`, { 'practice-allocation-active': selectedPocket === item.id }]" @focusin="selectedPocket = item.id">
              <div class="practice-allocation-label"><label :for="`amount-${item.id}`"><span class="practice-pocket-icon"><component :is="item.icon" aria-hidden="true" /></span>{{ item.label }}</label><output :for="`amount-${item.id}`">{{ currency.format(item.amount * 1000) }}<small>đ</small></output></div>
              <div class="practice-slider-row"><Button type="button" variant="ghost" size="icon" :aria-label="`Giảm ${item.label} 5.000 đồng`" :disabled="item.amount <= 0" @click="setAmount(item.id, item.amount - 5)"><Minus aria-hidden="true" /></Button><input :id="`amount-${item.id}`" type="range" min="0" max="100" step="5" :value="item.amount" :style="{ '--amount': `${item.amount}%` }" :aria-valuetext="`${currency.format(item.amount * 1000)} đồng`" @input="updateAmount(item.id, $event)" /><Button type="button" variant="ghost" size="icon" :aria-label="`Tăng ${item.label} 5.000 đồng`" :disabled="item.amount >= 100" @click="setAmount(item.id, item.amount + 5)"><Plus aria-hidden="true" /></Button></div>
            </div>
          </div>
          <div class="practice-allocation-bar" role="img" :aria-label="`Các khoản đã chia: ${allocationSummary}`"><span v-for="item in allocations" :key="item.id" :class="`practice-${item.color}`" :style="{ flexGrow: item.amount, flexBasis: '0%' }"></span></div>
          <div class="practice-budget-status" :class="{ 'practice-budget-over': remaining < 0, 'practice-budget-done': remaining === 0 }" role="status"><div><span class="practice-budget-label">ĐÃ PHÂN BỔ</span><strong>{{ currency.format(total * 1000) }}<small>đ</small></strong></div><p v-if="remaining === 0"><Check aria-hidden="true" /> Vừa đủ ngân sách!</p><p v-else-if="remaining > 0">Còn {{ currency.format(remaining * 1000) }}đ<br />để em cân nhắc thêm.</p><p v-else>Vượt {{ currency.format(-remaining * 1000) }}đ.<br />Mình điều chỉnh lại nhé!</p></div>
          <p class="practice-footnote"><Lightbulb aria-hidden="true" /> Không có tỷ lệ chia cố định. Hãy cân nhắc nhu cầu và lý do cho mỗi khoản tiền.</p>
        </Card>

        <div class="practice-scenario-stack">
          <Card class="practice-scenario">
            <header class="practice-scenario-heading"><span><Sparkles aria-hidden="true" /> THẺ TÌNH HUỐNG</span><span>{{ scenario.id }}</span></header>
            <div class="scenario-picker" role="group" aria-label="Chọn một trong năm tình huống"><Button v-for="item in practiceScenarios" :key="item.id" variant="ghost" type="button" :aria-pressed="scenario.id === item.id" :aria-label="`${item.id}: ${item.title}`" :aria-controls="'practice-scenario-content'" @click="selectScenario(item)">{{ item.id }}</Button></div>
            <div id="practice-scenario-content" :key="scenario.id">
            <div v-if="scenario.id === 'TH01'" class="practice-scenario-art" aria-hidden="true">
              <span class="practice-art-caption">Một vòng qua cửa hàng nhỏ…</span>
              <svg class="practice-shop-drawing" viewBox="0 0 480 190" fill="none">
                <ellipse cx="240" cy="160" rx="202" ry="15" fill="#ddcfb5" opacity=".3" />
                <g transform="rotate(-24 80 103)"><rect x="60" y="26" width="39" height="138" rx="4" fill="#c8e5d2" stroke="#648571" stroke-width="2" /><path d="M61 41h14m-14 12h8m-8 12h14m-14 12h8m-8 12h14m-14 12h8m-8 12h14m-14 12h8m-8 12h14m-14 12h8" stroke="#648571" stroke-width="2" /></g>
                <g transform="rotate(-20 125 100)"><rect x="110" y="79" width="29" height="43" rx="5" fill="#fff3da" stroke="#a97a7d" stroke-width="2" /><path d="M110 103h29V84a5 5 0 0 0-5-5h-19a5 5 0 0 0-5 5Z" fill="#eeb8ca" stroke="#a97a7d" stroke-width="2" /></g>
                <g transform="rotate(14 198 106)"><rect x="191" y="40" width="12" height="105" rx="5" fill="#7faec8" stroke="#476f89" stroke-width="2" /><path d="M203 54h5v37m-17 45 6 20 6-20" stroke="#476f89" stroke-width="2" stroke-linejoin="round" /></g>
                <g transform="rotate(11 168 105)"><path d="M160 55h12v86l-6 15-6-15V55Z" fill="#f7cc72" stroke="#9a7443" stroke-width="2" /><path d="M160 68h12M160 139h12" stroke="#9a7443" stroke-width="2" /><path d="m163 149 3 7 3-7" fill="#684735" /></g>
                <path d="M219 91c16-13 32-13 47-1m-7-10 8 11-13 3" stroke="#bc9870" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 5" />
                <g transform="rotate(5 354 112)"><rect x="287" y="79" width="143" height="72" rx="19" fill="#f3c5d5" stroke="#a76e84" stroke-width="2.5" /><path d="M300 99h116" stroke="#a76e84" stroke-width="2" stroke-linecap="round" /><rect x="403" y="93" width="8" height="17" rx="3" fill="#fff5df" stroke="#a76e84" stroke-width="1.5" /><path d="m347 119 4-8 4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1Z" fill="#ffedac" stroke="#b38a59" stroke-width="1.5" /></g>
                <path d="m425 37 3 9 10 1-8 6 2 9-7-5-8 5 3-9-8-6 10-1 3-9Z" fill="#f7d579" /><path d="m42 83-9-4m10-5-5-8m149-34 5-9m1 16 10-4" stroke="#caa35e" stroke-width="3" stroke-linecap="round" />
              </svg>
              <span class="practice-art-need">Ưu tiên đồ dùng cần thiết</span>
              <span class="practice-art-price">45.000đ<span>HỘP BÚT MỚI</span></span>
            </div>
            <div v-else class="scenario-illustration" aria-hidden="true"><component :is="scenario.icon" /><span>{{ scenario.skill }}</span><div><span v-for="fact in scenario.facts" :key="fact">{{ fact }}</span></div></div>
            <h3>{{ scenario.title }}<br /><em>{{ scenario.subtitle }}</em></h3>
            <p class="practice-scenario-story">{{ scenario.story }}</p>
            <p class="practice-scenario-question">{{ scenario.question }}</p>
            <div class="practice-answers" role="group" aria-label="Chọn cách xử lý tình huống">
              <motion.div v-for="(answer, index) in answers" :key="answer.id" :while-hover="{ x: 3 }" :transition="{ type: 'spring', stiffness: 300, damping: 24 }"><Button variant="outline" type="button" class="practice-answer" :class="{ 'practice-answer-selected': selectedAnswer === answer.id }" :aria-pressed="selectedAnswer === answer.id" @click="selectedAnswer = answer.id"><span class="practice-answer-letter" aria-hidden="true">{{ String.fromCharCode(65 + index) }}</span><span>{{ answer.text }}</span><Check v-if="selectedAnswer === answer.id" aria-hidden="true" /><ArrowRight v-else aria-hidden="true" /></Button></motion.div>
            </div>
            <div class="practice-feedback-region" aria-live="polite" aria-atomic="true"><motion.div v-if="feedback" :key="`${scenario.id}-${feedback.id}`" class="practice-feedback" :class="{ 'practice-feedback-positive': feedback.correct }" :initial="{ opacity: 0, y: 6 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: .2 }"><Lightbulb aria-hidden="true" /><div><strong>{{ feedback.correct ? 'Một lựa chọn có cân nhắc!' : 'Mình cùng nghĩ thêm nhé.' }}</strong><p>{{ feedback.feedback }}</p></div></motion.div><p v-else class="practice-answer-hint">Chọn một phương án để mở lời gợi ý từ chiếc ví nhỏ.</p></div>
            </div>
            <p class="practice-handnote"><Heart aria-hidden="true" /> Học từ lựa chọn, lớn lên từng ngày.</p>
          </Card>
        </div>
      </div>
      <p class="practice-privacy"><ShieldCheck aria-hidden="true" /><span>5 tình huống TH01–TH05 theo hồ sơ dự án · Lựa chọn và lời gợi ý được biên tập cho web · Tự do thử phân bổ tiền, không có tỷ lệ cố định · Không gửi hoặc lưu câu trả lời · Không thay thế bài đánh giá trước–sau DGA/DGB</span></p>
    </div>
  </section>
</template>

<style scoped>
.scenario-picker { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 18px; }
.scenario-picker button { flex: 1; min-width: 62px; min-height: 44px; height: auto; padding: 8px; border: 1px solid #d9cfbb; border-radius: 10px; background: #fffaf0; color: #6b5140; font-size: var(--text-small); }
.scenario-picker button[aria-pressed='true'] { background: #e0e9d5; border-color: #91a47b; color: #384e2b; box-shadow: inset 0 -3px #91a47b44; }
.scenario-picker button:focus-visible { outline: 3px solid #3972a0; outline-offset: 3px; }
.scenario-illustration { display: grid; justify-items: center; gap: 14px; margin: 20px 0 24px; padding: 24px 16px; border: 1px solid #d5d9bd; border-radius: 16px; background: #edf1e2; color: #536845; text-align: center; }
.scenario-illustration > svg { width: 64px; height: 64px; stroke-width: 1.3; }
.scenario-illustration > span { font: 500 20px/1.5 'Lora', Georgia, serif; }
.scenario-illustration > div { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
.scenario-illustration > div > span { padding: 5px 10px; background: #fffcf3; border-radius: 8px; color: #66513a; font-size: var(--text-small); }
.practice-section { position: relative; padding: 42px 0 38px; color: #56392b; background: transparent; }
.practice-section-divider { display: flex; align-items: center; gap: 20px; width: min(1100px, calc(100% - 80px)); margin: 0 auto 40px; }
.practice-section-divider > span:first-child, .practice-section-divider > span:last-child { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #be859c80); }
.practice-section-divider > span:last-child { transform: scaleX(-1); }
.practice-divider-detail { display: inline-flex; align-items: center; gap: 12px; color: #a46680; }
.practice-divider-detail svg { width: 12px; height: 12px; stroke-width: 1.4; }
.practice-divider-detail svg:nth-child(2) { width: 20px; height: 20px; fill: #edc7d580; }
@media (max-width: 600px) { .practice-section-divider { width: calc(100% - 40px); gap: 13px; margin-bottom: 30px; } .practice-divider-detail { gap: 8px; } }
.practice-shell { width: min(1440px, calc(100% - 80px)); margin-inline: auto; }
.practice-heading { display: grid; justify-items: center; gap: 14px; margin-bottom: 34px; text-align: center; }
.practice-eyebrow { font-size: var(--text-caption); letter-spacing: 1.4px; font-weight: 600; line-height: 1.8; color: #8b4b63; }
.practice-heading h2 { margin-top: 12px; font-family: 'Lora', Georgia, serif; font-size: clamp(30px, 3.4vw, 46px); font-weight: 700; line-height: 1.4; letter-spacing: -1px; }
.practice-heading h2 > span { background: #f1cbd9; padding-inline: 8px; border-radius: 22% 5% 20% 4%; }
.practice-heading h2 em { font-weight: 500; color: #914b68; }
.practice-grid { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: 30px; align-items: stretch; }
.practice-ledger { position: relative; min-width: 0; padding: 26px; background: var(--surface-paper); border: 1px solid #dab8be; border-radius: 20px; box-shadow: 0 5px 0 #e7cbd0, 0 14px 30px #75424e0c; }

.practice-panel-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.practice-panel-heading h3 { margin-top: 4px; font-family: 'Lora', Georgia, serif; font-size: 27px; font-weight: 700; }
.practice-reset { min-height: 44px; height: auto; padding: 8px; gap: 6px; color: #70533d; font-size: var(--text-caption); border-radius: 12px; }
.practice-reset svg { width: 17px; height: 17px; }
.practice-banknote { display: flex; align-items: center; gap: 16px; margin: 20px 0 14px; padding: 16px 20px; background: #f8e4eb; border: 1px solid #dfb9c7; border-radius: 12px; box-shadow: 0 3px 0 #e7cbd5; }
.practice-banknote > svg { width: 38px; height: 38px; color: #99556f; stroke-width: 1.5; }
.practice-banknote > div > span { display: block; font-size: var(--text-caption); font-weight: 600; letter-spacing: 1px; color: #6d4658; }
.practice-banknote strong { display: block; margin-top: 3px; font-family: 'Lora', Georgia, serif; font-size: 35px; line-height: 1.3; color: #61472e; }
.practice-banknote small { font-size: 22px; margin-left: 3px; }
.practice-banknote-seal { margin-left: auto; padding: 9px 10px; border: 1px dashed #bf8da1; border-radius: 50%; font-size: var(--text-caption); line-height: 1.6; text-align: center; color: #80465d; transform: rotate(8deg); }
.practice-instruction { margin: 16px 0 12px; font-size: var(--text-small); line-height: 1.8; color: #705c45; }
.practice-allocation-bar { display: flex; height: 10px; overflow: hidden; background: #dfd3bf; border-radius: 8px; border: 1px solid #c9b89a; }
.practice-allocation-bar > span { min-width: 0; background: var(--practice-color); border-right: 2px solid #fff9eb; transition: flex-grow .18s ease; }
.practice-sage { --practice-color: #587345; --practice-pastel: #e0ebd2; --practice-border: #b6c6a1; }
.practice-yellow { --practice-color: #977024; --practice-pastel: #f9e8b2; --practice-border: #dbc37d; }
.practice-blue { --practice-color: #466d89; --practice-pastel: #d0e5f2; --practice-border: #a7c5d9; }
.practice-pink { --practice-color: #a05f79; --practice-pastel: #f2d7e1; --practice-border: #d7afc0; }
.practice-allocations { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin: 18px 0; }
.practice-allocation { position: relative; min-width: 0; padding: 13px 14px; border: 1px solid var(--practice-border); border-radius: 13px; background: var(--practice-pastel); box-shadow: 0 4px 0 var(--practice-border); }
.practice-allocation::after { content: ''; position: absolute; inset: 6px; border: 1px dashed var(--practice-border); border-radius: 8px; pointer-events: none; }
.practice-allocation-label { position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 7px; }
.practice-allocation-label label { display: flex; align-items: center; gap: 8px; font-size: var(--text-small); font-weight: 500; }
.practice-pocket-icon { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: #fffdf580; color: var(--practice-color); }
.practice-pocket-icon svg { width: 18px; height: 18px; stroke-width: 1.6; }
.practice-allocation-label output { display: block; padding-left: 3px; font-family: 'Lora', Georgia, serif; font-size: clamp(21px, 1.9vw, 27px); font-weight: 600; font-variant-numeric: tabular-nums; line-height: 1.4; color: #56392b; }
.practice-allocation-label small { font-size: var(--text-body); margin-left: 3px; }
.practice-slider-row { position: relative; display: flex; align-items: center; gap: 6px; margin-top: 8px; }
.practice-slider-row button { width: 44px; height: 44px; min-width: 44px; padding: 0; border: 1px solid var(--practice-border); border-radius: 50%; background: #fffaf078; color: var(--practice-color); }
.practice-slider-row button:hover { background: #fffdf5; }
.practice-slider-row button:disabled { opacity: .4; }
.practice-slider-row button svg { width: 15px; height: 15px; }
.practice-slider-row input { appearance: none; -webkit-appearance: none; min-width: 0; flex: 1; width: 100%; height: 44px; margin: 0; background: transparent; cursor: pointer; }
.practice-slider-row input::-webkit-slider-runnable-track { height: 6px; border-radius: 8px; background: linear-gradient(to right, var(--practice-color) var(--amount), #fffaf0 var(--amount)); }
.practice-slider-row input::-moz-range-track { height: 6px; border-radius: 8px; background: #fffaf0; }
.practice-slider-row input::-moz-range-progress { height: 6px; border-radius: 8px; background: var(--practice-color); }
.practice-slider-row input::-webkit-slider-thumb { appearance: none; -webkit-appearance: none; width: 18px; height: 18px; margin-top: -6px; border: 3px solid #fffcf4; border-radius: 50%; background: var(--practice-color); box-shadow: 0 1px 3px #56392b40; }
.practice-slider-row input::-moz-range-thumb { width: 12px; height: 12px; border: 3px solid #fffcf4; border-radius: 50%; background: var(--practice-color); }
.practice-slider-row input:focus-visible { outline: 2px solid var(--practice-color); outline-offset: 2px; border-radius: 8px; }
.practice-budget-status { margin-top: 13px; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 15px 17px; background: #fff5d5; border: 1px solid #d8c398; border-radius: 12px; }
.practice-budget-label { display: block; font-size: var(--text-caption); letter-spacing: 1px; }
.practice-budget-status strong { display: block; font-family: 'Lora', Georgia, serif; font-size: 26px; line-height: 1.5; }
.practice-budget-status small { font-size: var(--text-body); }
.practice-budget-status > p { display: flex; align-items: center; gap: 6px; font-size: var(--text-caption); line-height: 1.7; text-align: right; }
.practice-budget-status > p > svg { width: 18px; height: 18px; flex-shrink: 0; }
.practice-budget-done { background: #f3f8ec; border-color: #b6c6a1; color: #4f6b3d; }
.practice-budget-over { background: #fff0ed; border-color: #d8aaaa; color: #98483e; }
.practice-footnote { display: flex; align-items: flex-start; gap: 8px; margin-top: 16px; color: #705c45; font-size: var(--text-caption); line-height: 1.8; }
.practice-footnote svg { width: 17px; height: 17px; flex-shrink: 0; margin-top: 2px; }
.practice-scenario-stack { position: relative; display: flex; min-width: 0; padding: 0 0 0 7px; }
.practice-scenario { position: relative; display: flex; flex-direction: column; width: 100%; min-width: 0; padding: 26px; background: var(--surface-paper); border: 1px solid #dab8be; border-radius: 18px; box-shadow: 5px 6px 0 #e7cbd0, 0 14px 30px #75424e0c; }
.practice-scenario-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: var(--text-caption); font-weight: 600; letter-spacing: 1px; color: #8b4b63; }
.practice-scenario-heading > span:first-child { display: inline-flex; align-items: center; gap: 7px; }
.practice-scenario-heading > span:last-child { padding: 5px 9px; border: 1px dashed #d8b3c1; border-radius: 3px; color: #94586e; background: #fce9f0; transform: rotate(5deg); }
.practice-scenario-heading svg { width: 16px; height: 16px; color: #a25e78; }
.practice-scenario-art { position: relative; margin: 18px 0 22px; padding: 32px 5px 28px; border-radius: 14px; border: 1px solid #e4bccb; background-color: #f8e4eb; background-image: linear-gradient(#b9779010 1px, transparent 1px), linear-gradient(90deg, #b9779010 1px, transparent 1px); background-size: 18px 18px; }
.practice-art-caption { position: absolute; top: 12px; left: 18px; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: var(--text-small); color: #795064; }
.practice-shop-drawing { display: block; width: 100%; height: auto; }
.practice-art-need { position: absolute; bottom: 12px; left: 14px; display: flex; align-items: center; gap: 5px; font-size: var(--text-caption); color: #49674a; background: #e3ecd5; border-radius: 20px; padding: 6px 9px; }
.practice-art-need svg { width: 13px; height: 13px; }
.practice-art-price { position: absolute; right: 15px; bottom: 12px; padding: 7px 11px; background: #ffedb5; border: 1px solid #e5ce93; border-radius: 3px; font-family: 'Lora', Georgia, serif; font-size: var(--text-body); color: #806338; transform: rotate(5deg); }
.practice-art-price > span { display: block; margin-top: 2px; font-family: var(--font-sans); font-size: var(--text-caption); letter-spacing: 1px; }
.practice-scenario h3 { font-family: 'Lora', Georgia, serif; font-size: clamp(25px, 2.4vw, 32px); font-weight: 700; line-height: 1.4; }
.practice-scenario h3 em { font-weight: 500; color: #914b68; }
.practice-scenario-story { margin-top: 14px; color: #755b45; font-size: var(--text-small); line-height: 1.9; }
.practice-scenario-story strong { color: #5a3e29; font-weight: 600; background: #f3d5df; padding-inline: 3px; }
.practice-scenario-question { margin: 18px 0 12px; font-size: var(--text-small); font-weight: 600; }
.practice-answers { display: grid; gap: 9px; }
.practice-answer { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 58px; height: auto; padding: 11px 13px; white-space: normal; text-align: left; justify-content: flex-start; border: 1px solid #dec1c5; border-radius: 12px; background: var(--surface-paper); color: #62442e; font-size: var(--text-small); line-height: 1.8; font-weight: 400; transition: background .18s, border-color .18s; }
.practice-answer:hover { background: #f9e5ed; border-color: #c48ba1; }
.practice-answer-selected { background: #f4dbe5; border-color: #a85d7b; box-shadow: inset 3px 0 #a85d7b; }
.practice-answer-letter { display: grid; place-items: center; width: 29px; height: 31px; flex-shrink: 0; border-radius: 8px; background: #f0dbe1; color: #79485b; font-family: 'Lora', Georgia, serif; font-size: var(--text-body); font-weight: 600; }
.practice-answer-selected .practice-answer-letter { background: #e7b6ca; color: #71354f; }
.practice-answer > svg { width: 16px; height: 16px; margin-left: auto; flex-shrink: 0; color: #806b52; }
.practice-feedback { display: flex; align-items: flex-start; gap: 10px; margin-top: 16px; padding: 14px; border: 1px dashed #d2b576; border-radius: 12px; background: #fff2cc; color: #735a32; }
.practice-feedback > svg { width: 21px; height: 23px; flex-shrink: 0; }
.practice-feedback strong { font-size: var(--text-small); font-weight: 600; }
.practice-feedback p { margin-top: 6px; font-size: var(--text-small); line-height: 1.9; }
.practice-feedback-positive { background: #edf5e5; border-color: #a9c38f; color: #4c693b; }
.practice-answer-hint { margin-top: 16px; font-family: 'Lora', Georgia, serif; font-size: var(--text-small); line-height: 1.8; font-style: italic; color: #80684f; }
.practice-handnote { display: flex; justify-content: center; align-items: center; gap: 7px; padding: 20px 8px 0; color: #a15f79; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: var(--text-body); text-align: center; }
.practice-handnote svg { width: 18px; height: 18px; flex-shrink: 0; }
.practice-privacy { display: flex; justify-content: center; align-items: flex-start; gap: 8px; max-width: 950px; margin: 28px auto 0; color: #796550; font-size: var(--text-caption); line-height: 1.9; text-align: center; }
.practice-privacy svg { width: 17px; height: 18px; flex-shrink: 0; margin-top: 2px; color: #6b845b; }
.practice-heading-note { font-size: var(--text-body); line-height: 1.8; color: #5c4633; }
.practice-scenario-art { display: flex; flex: 1; align-items: center; min-height: 210px; }
.practice-scenario-heading, .practice-scenario-story, .practice-answers, .practice-feedback-region, .practice-handnote { flex-shrink: 0; }
.practice-handnote { margin-top: 18px; padding-top: 16px; border-top: 1px dashed #d9b2c0; }
.practice-wallet-scene { position: relative; margin: 12px -10px 0; }
.practice-wallet-image { display: block; width: 100%; height: auto; }
.practice-wallet-tabs { position: absolute; top: 36%; left: 14%; right: 14%; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2%; }
.practice-wallet-tab { width: 100%; min-width: 0; min-height: 44px; height: auto; padding: 4px 2px; white-space: normal; background: transparent; color: #493a29; border: 1px solid transparent; border-radius: 7px; font-family: 'Lora', Georgia, serif; font-size: clamp(.875rem, 1vw, 1.125rem); line-height: 1.4; font-weight: 700; }
.practice-wallet-tab:hover, .practice-wallet-tab-active { background: var(--practice-pastel); border-color: var(--practice-color); box-shadow: 0 2px 5px #00000026; }
.practice-wallet-tab:focus-visible { outline: 2px solid #fffaf0; outline-offset: 2px; }
.practice-wallet-label { display: inline-block; transform-origin: center; pointer-events: none; }
.practice-allocation-active, .practice-allocation:focus-within { outline: 2px solid var(--practice-color); outline-offset: 3px; }
.practice-scenario::before { content: ''; position: absolute; top: -10px; left: 38%; width: 88px; height: 26px; background: repeating-linear-gradient(90deg, #d995ad80 0 8px, #fbe1eb99 8px 16px); transform: rotate(-7deg); pointer-events: none; }
@media (max-width: 1150px) {
  .practice-shell { width: calc(100% - 48px); }
  .practice-grid { gap: 22px; }
  .practice-ledger, .practice-scenario { padding: 22px 18px; }
  .practice-allocation { padding: 12px; }
  .practice-allocation-label { align-items: flex-start; flex-direction: column; }
  .practice-slider-row { gap: 3px; }
  .practice-wallet-tabs { top: 34%; }
}
@media (max-width: 900px) {
  .practice-shell { max-width: 720px; }
  .practice-grid { grid-template-columns: 1fr; gap: 32px; }
  .practice-heading h2 { font-size: 38px; }
  .practice-allocation-label { flex-direction: row; align-items: center; }
  .practice-allocation-label output { font-size: 27px; }
  .practice-wallet-tabs { top: 37%; }
  .practice-wallet-tab { font-size: var(--text-small); }
  .practice-scenario-stack { padding-left: 0; }
  .practice-scenario-art { flex: none; width: 100%; min-height: 0; max-width: 520px; margin-inline: auto; }
}
@media (max-width: 500px) {
  .practice-section { padding: 38px 0 30px; }
  .practice-shell { width: calc(100% - 32px); }
  .practice-heading { margin-bottom: 26px; }
  .practice-heading h2 { font-size: 29px; letter-spacing: -.5px; }
  .practice-heading-note { font-size: var(--text-caption); }
  .practice-eyebrow { font-size: var(--text-caption); letter-spacing: 1px; }
  .practice-ledger { padding: 22px 14px 20px; border-radius: 16px; }
  .practice-panel-heading h3 { font-size: 24px; }
  .practice-reset { font-size: var(--text-caption); gap: 4px; }
  .practice-banknote { padding: 12px; gap: 10px; }
  .practice-banknote strong { font-size: 28px; }
  .practice-banknote > svg { width: 27px; }
  .practice-banknote-seal { font-size: var(--text-caption); padding: 7px; }
  .practice-wallet-scene { margin-inline: -6px; }
  .practice-wallet-tabs { position: static; gap: 5px; margin: 8px 6px 0; }
  .practice-wallet-tab { background: var(--practice-pastel); border-color: var(--practice-border); font-family: var(--font-sans); font-size: var(--text-caption); font-weight: 500; }
  .practice-wallet-tab-active { outline: 2px solid var(--practice-color); outline-offset: 1px; }
  .practice-instruction { font-size: var(--text-caption); }
  .practice-allocations { gap: 12px; }
  .practice-allocation { padding: 13px 10px; }
  .practice-allocation-label { flex-direction: column; align-items: flex-start; }
  .practice-allocation-label label { gap: 5px; font-size: var(--text-caption); }
  .practice-pocket-icon { width: 24px; height: 24px; }
  .practice-pocket-icon svg { width: 16px; height: 16px; }
  .practice-allocation-label output { font-size: 24px; }
  .practice-slider-row { flex-wrap: wrap; justify-content: space-between; gap: 0; }
  .practice-slider-row input { order: -1; flex-basis: 100%; }
  .practice-slider-row button { width: 44px; }
  .practice-budget-status { padding: 12px; gap: 10px; }
  .practice-budget-status strong { font-size: 24px; }
  .practice-budget-status > p { font-size: var(--text-caption); }
  .practice-scenario { padding: 22px 16px; }
  .practice-art-caption { font-size: var(--text-caption); }
  .practice-art-need { font-size: var(--text-caption); left: 8px; padding: 5px 7px; }
  .practice-art-price { right: 9px; font-size: var(--text-body); padding: 6px 8px; }
  .practice-handnote { font-size: var(--text-small); }
  .practice-privacy { font-size: var(--text-caption); }
}
@media (prefers-reduced-motion: reduce) { .practice-allocation-bar > span, .practice-answer { transition: none; } }
@media (prefers-reduced-motion: reduce) { .practice-wallet-label { transform: none !important; } }
</style>
