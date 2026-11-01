<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { MotionConfig, motion } from 'motion-v'
import { Pause, Play, Star } from '@lucide/vue'
import { Button } from '@/components/ui/button'

const container = ref<HTMLElement | null>(null)
const paused = ref(false)
const motionOverride = ref(false)
const reducedMotion = ref(true)
const inView = ref(false)
const pageVisible = ref(true)
const enabled = computed(() => !paused.value && (!reducedMotion.value || motionOverride.value))
const animate = computed(() => enabled.value && inView.value && pageVisible.value)
let observer: IntersectionObserver | undefined
let motionPreference: MediaQueryList | undefined

const particles = [
  { id: 'coin-1', kind: 'coin', left: 6, size: 30, duration: 14, delay: -3, drift: 24, rotation: 120, color: '#f5cf71' },
  { id: 'star-1', kind: 'star', left: 35, size: 28, duration: 17, delay: -10, drift: -18, rotation: -100, color: '#91c4e7' },
  { id: 'coin-2', kind: 'coin', left: 64, size: 26, duration: 16, delay: -6, drift: 30, rotation: 160, color: '#f5cf71' },
  { id: 'star-2', kind: 'star', left: 91, size: 32, duration: 18, delay: -13, drift: -22, rotation: 110, color: '#e79ebf' },
  { id: 'coin-3', kind: 'coin', left: 20, size: 29, duration: 15, delay: -12, drift: -24, rotation: -140, color: '#f5cf71' },
  { id: 'star-3', kind: 'star', left: 49, size: 27, duration: 19, delay: -4, drift: 20, rotation: 125, color: '#b2cd96' },
  { id: 'coin-4', kind: 'coin', left: 78, size: 27, duration: 18, delay: -9, drift: -28, rotation: 170, color: '#f5cf71' },
  { id: 'star-4', kind: 'star', left: 96, size: 30, duration: 16, delay: -2, drift: -24, rotation: -120, color: '#9bcce9' },
]

function toggleAnimation() {
  if (reducedMotion.value && !motionOverride.value) {
    motionOverride.value = true
    paused.value = false
    return
  }
  paused.value = !paused.value
}

function updateMotionPreference() {
  reducedMotion.value = motionPreference?.matches ?? true
  motionOverride.value = false
}

function updatePageVisibility() {
  pageVisible.value = !document.hidden
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  updateMotionPreference()
  updatePageVisibility()
  motionPreference.addEventListener('change', updateMotionPreference)
  document.addEventListener('visibilitychange', updatePageVisibility)

  if (container.value) {
    observer = new IntersectionObserver(entries => {
      inView.value = entries.some(entry => entry.isIntersecting)
    })
    observer.observe(container.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
  motionPreference?.removeEventListener('change', updateMotionPreference)
  document.removeEventListener('visibilitychange', updatePageVisibility)
})
</script>

<template>
  <div ref="container" class="falling-decorations">
    <MotionConfig :reduced-motion="motionOverride ? 'never' : 'user'">
    <div class="falling-layer" :class="{ 'motion-enabled': motionOverride }" aria-hidden="true">
      <template v-if="animate">
        <motion.div
          v-for="(particle, index) in particles"
          :key="particle.id"
          class="falling-track"
          :class="{ 'falling-extra': index >= 4 }"
          :style="{ left: `${particle.left}%` }"
          :initial="{ y: '-8%', opacity: 0 }"
          :animate="{ y: ['-8%', '108%'], opacity: [0, 0.85, 0.85, 0] }"
          :transition="{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'linear' }"
        >
          <motion.span
            class="falling-particle"
            :style="{ width: `${particle.size}px`, height: `${particle.size}px`, color: particle.color }"
            :animate="{ x: [0, particle.drift, 0], rotate: [0, particle.rotation] }"
            :transition="{ duration: particle.duration / 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }"
          >
            <span v-if="particle.kind === 'coin'" class="falling-coin"></span>
            <Star v-else class="falling-star" />
          </motion.span>
        </motion.div>
      </template>
    </div>
    </MotionConfig>
    <Button
      type="button"
      variant="ghost"
      class="falling-toggle"
      :aria-pressed="enabled"
      :aria-label="enabled ? 'Tắt hiệu ứng đồng xu và ngôi sao rơi' : 'Bật hiệu ứng đồng xu và ngôi sao rơi'"
      @click="toggleAnimation"
    >
      <Play v-if="!enabled" aria-hidden="true" />
      <Pause v-else aria-hidden="true" />
      <span>{{ enabled ? 'Tắt hiệu ứng rơi' : 'Bật hiệu ứng rơi' }}</span>
    </Button>
  </div>
</template>

<style scoped>
.falling-decorations { position: absolute; inset: 0; z-index: 6; pointer-events: none; }
.falling-layer { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.falling-track { position: absolute; top: 0; width: 26px; height: 100%; will-change: transform; }
.falling-particle { display: block; }
.falling-coin { display: block; width: 100%; height: 100%; border: 2px solid #dca341; border-radius: 50%; background: radial-gradient(circle at 30% 25%, #fff2b4 0 10%, #fbd46b 15% 58%, #edb74d 65%); box-shadow: inset 0 0 0 2px #ffe8a6, 1px 2px 0 #bc8a3530; }
.falling-star { display: block; width: 100%; height: 100%; fill: currentColor; stroke: #8d6d55; stroke-width: 1.5; }
.falling-toggle { position: absolute; right: 24px; bottom: 14px; pointer-events: auto; min-height: 44px; height: auto; gap: 7px; padding: 8px 12px; border-radius: 24px; background: #fffaf0e6; border: 1px solid #dccfbb; color: #6a4b37; font-size: 11px; }
.falling-toggle:hover { background: #e8f1f8; color: #513326; }
.falling-toggle svg { width: 14px; height: 14px; }
@media (max-width: 760px) {
  .falling-extra { display: none; }
  .falling-toggle { right: 18px; bottom: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .falling-layer:not(.motion-enabled) { display: none; }
}
</style>
