<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { motion } from 'motion-v'
import { LayoutDashboard, Pause, Play } from '@lucide/vue'
import { PhMoney as Banknote, PhBookOpen as BookOpen, PhHeart as Heart, PhStack as Layers, PhPiggyBank as PiggyBank, PhShoppingBag as ShoppingBag, PhTarget as Target } from '@phosphor-icons/vue'
import { Button } from '@/components/ui/button'

const paused = ref(false)
const tickerWindow = ref<HTMLElement | null>(null)
const tickerMeasure = ref<HTMLElement | null>(null)
const windowWidth = ref(0)
const sequenceWidth = ref(0)
const repetitions = computed(() => sequenceWidth.value > 0
  ? Math.max(1, Math.ceil(windowWidth.value / sequenceWidth.value))
  : 1)
let resizeObserver: ResizeObserver | undefined

onMounted(() => {
  const container = tickerWindow.value
  const sequence = tickerMeasure.value
  if (!container || !sequence) return

  const updateWidths = () => {
    windowWidth.value = container.clientWidth
    sequenceWidth.value = sequence.getBoundingClientRect().width
  }

  updateWidths()
  resizeObserver = new ResizeObserver(updateWidths)
  resizeObserver.observe(container)
  resizeObserver.observe(sequence)
})

onUnmounted(() => resizeObserver?.disconnect())
const highlights = [
  { value: '4', label: 'ngăn ví thực hành', note: 'Cần thiết · Tiết kiệm · Mục tiêu · Chia sẻ' },
  { value: '30', label: 'ngày thực hành', note: 'Hành trình đề xuất, chưa phải kết quả' },
  { value: '1', label: 'bộ mẫu phiên bản số 1', note: 'Ghi nhận trong hồ sơ ngày 01/11/2026' },
  { value: '55', label: 'phiếu khảo sát hợp lệ', note: 'Theo hồ sơ cập nhật ngày 01/11/2026' },
]
const learningTopics = [
  { label: 'Chi tiêu cần thiết', icon: ShoppingBag },
  { label: 'Tiết kiệm', icon: PiggyBank },
  { label: 'Mục tiêu cá nhân', icon: Target },
  { label: 'Chia sẻ', icon: Heart },
  { label: 'Sổ thu – chi 30 ngày', icon: BookOpen },
  { label: 'Thẻ tình huống', icon: Layers },
  { label: 'Bảng mục tiêu', icon: LayoutDashboard },
  { label: 'Thực hành bằng tiền mô phỏng', icon: Banknote },
]
</script>

<template>
  <section class="project-highlights" aria-label="Dự án Ví nhỏ thông minh qua những con số">
    <motion.dl
      class="highlights-grid"
      :initial="{ opacity: 0, y: 10 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }"
      :transition="{ duration: 0.45 }"
    >
      <div v-for="item in highlights" :key="item.label" class="highlight-item">
        <dt>{{ item.label }}</dt>
        <dd class="highlight-number">{{ item.value }}</dd>
        <dd class="highlight-note">{{ item.note }}</dd>
      </div>
    </motion.dl>

    <div class="learning-ticker">
      <p class="sr-only">Nội dung thực hành: {{ learningTopics.map(topic => topic.label).join(', ') }}.</p>
      <div ref="tickerWindow" class="ticker-window" aria-hidden="true">
        <div ref="tickerMeasure" class="ticker-sequence ticker-measure">
          <span v-for="topic in learningTopics" :key="topic.label"><component weight="duotone" :is="topic.icon" />{{ topic.label }}</span>
        </div>
        <motion.div
          v-if="!paused"
          :key="repetitions"
          class="ticker-track"
          :initial="{ x: '0%' }"
          :animate="{ x: '-50%' }"
          :transition="{ duration: 40, repeat: Infinity, ease: 'linear' }"
        >
          <div v-for="copy in 2" :key="copy" class="ticker-group">
            <div v-for="repeat in repetitions" :key="repeat" class="ticker-sequence">
              <span v-for="topic in learningTopics" :key="topic.label"><component weight="duotone" :is="topic.icon" />{{ topic.label }}</span>
            </div>
          </div>
        </motion.div>
        <div v-else class="ticker-static">
          <span v-for="topic in learningTopics" :key="topic.label"><component weight="duotone" :is="topic.icon" />{{ topic.label }}</span>
        </div>
        <div class="ticker-reduced">
          <span v-for="topic in learningTopics" :key="topic.label"><component weight="duotone" :is="topic.icon" />{{ topic.label }}</span>
        </div>
      </div>
      <Button
        class="ticker-toggle"
        variant="ghost"
        size="icon"
        type="button"
        :aria-label="paused ? 'Cho dòng nội dung chạy lại' : 'Dừng dòng nội dung chạy'"
        :aria-pressed="paused"
        @click="paused = !paused"
      >
        <Play v-if="paused" aria-hidden="true" />
        <Pause v-else aria-hidden="true" />
      </Button>
    </div>
  </section>
</template>

<style scoped>
.project-highlights { color: #604a33; background: linear-gradient(110deg, #e9f2f6, #dceaf1); }
.highlights-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; width: min(1120px, calc(100% - 96px)); margin-inline: auto; padding-block: 31px 30px; }
.highlight-item { display: flex; flex-direction: column; align-items: center; text-align: center; min-width: 0; }
.highlight-number { order: -1; font-family: 'Lora', Georgia, serif; font-size: 39px; font-weight: 700; line-height: 1.35; letter-spacing: -.7px; color: #604027; }
.highlight-item dt { font-size: var(--text-small); line-height: 1.8; font-weight: 500; }
.highlight-note { max-width: 240px; margin-top: 5px; font-size: var(--text-caption); line-height: 1.8; color: #7b7d73; }
.learning-ticker { display: flex; align-items: stretch; min-height: 42px; border-top: 1px solid #a6c1d34d; background: #cedfe94d; }
.ticker-window { position: relative; min-width: 0; flex: 1; overflow: hidden; }
.ticker-track { display: flex; width: max-content; }
.ticker-group { display: flex; align-items: center; flex-shrink: 0; }
.ticker-sequence { display: flex; align-items: center; flex-shrink: 0; gap: 35px; width: max-content; padding: 10px 35px 10px 0; }
.ticker-measure { position: absolute; top: 0; left: 0; visibility: hidden; pointer-events: none; }
.ticker-sequence > span, .ticker-static > span, .ticker-reduced > span { display: inline-flex; align-items: center; gap: 9px; flex-shrink: 0; font-size: var(--text-small); font-weight: 500; line-height: 1.8; color: #5c7180; white-space: nowrap; }
.learning-ticker svg { width: 15px; height: 15px; color: #789cb0; }
.ticker-static { display: flex; flex-wrap: wrap; gap: 12px 28px; padding: 11px 20px; }
.ticker-reduced { display: none; }
.ticker-toggle { width: 43px; min-height: 43px; height: auto; flex-shrink: 0; border-radius: 0; border-left: 1px solid #a6c1d34d; color: #604a33; }
.ticker-toggle:hover { background: #bfd5e270; color: #51351f; }
.ticker-toggle:focus-visible { outline: 2px solid #789db5; outline-offset: -5px; }
@media (max-width: 900px) {
  .highlights-grid { width: calc(100% - 64px); gap: 20px; }
  .highlight-item dt { font-size: var(--text-small); }
  .highlight-note { font-size: var(--text-caption); }
}
@media (max-width: 600px) {
  .highlights-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); width: calc(100% - 40px); gap: 25px 18px; padding-block: 27px; }
  .highlight-number { font-size: 34px; }
  .highlight-item dt { font-size: var(--text-small); }
  .highlight-note { font-size: var(--text-caption); }
  .ticker-sequence { gap: 25px; padding-right: 25px; }
  .ticker-sequence > span { font-size: var(--text-caption); }
  .ticker-toggle { width: 44px; min-height: 44px; }
}
@media (prefers-reduced-motion: reduce) {
  .ticker-track, .ticker-static, .ticker-toggle { display: none; }
  .ticker-reduced { display: flex; flex-wrap: wrap; gap: 10px 25px; padding: 12px 20px; }
}
</style>
