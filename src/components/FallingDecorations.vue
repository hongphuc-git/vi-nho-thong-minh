<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { motion } from 'motion-v'
import { Pause, Play } from '@lucide/vue'
import { PhStar as Star } from '@phosphor-icons/vue'
import { Button } from '@/components/ui/button'

const container = ref<HTMLElement | null>(null)
const paused = ref(false)
const mounted = ref(false)
const reducedMotion = ref(true)
const inView = ref(false)
const pageVisible = ref(true)
const enabled = computed(() => !paused.value && !reducedMotion.value)
const animate = computed(() => enabled.value && inView.value && pageVisible.value)
let observer: IntersectionObserver | undefined
let motionPreference: MediaQueryList | undefined

const particles = [
  { id: 'coin-1', kind: 'coin', left: 2, size: 28, duration: 15, delay: -3, drift: 14, rotation: 120, color: '#f5cf71' },
  { id: 'star-1', kind: 'star', left: 48, size: 26, duration: 18, delay: -10, drift: -14, rotation: -100, color: '#91c4e7' },
  { id: 'coin-2', kind: 'coin', left: 95, size: 26, duration: 16, delay: -6, drift: -18, rotation: 160, color: '#f5cf71' },
  { id: 'star-2', kind: 'star', left: 98, size: 30, duration: 19, delay: -13, drift: -16, rotation: 110, color: '#e79ebf' },
  { id: 'star-4', kind: 'star', left: 93, size: 26, duration: 17, delay: -2, drift: 14, rotation: -120, color: '#9bcce9' },
]

function toggleAnimation() {
  if (reducedMotion.value) return
  paused.value = !paused.value
}

function updateMotionPreference() {
  reducedMotion.value = motionPreference?.matches ?? true

}

function updatePageVisibility() {
  pageVisible.value = !document.hidden
}

onMounted(() => {
  mounted.value = true
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

    <div class="falling-layer" aria-hidden="true">
      <template v-if="animate">
        <motion.div
          v-for="(particle, index) in particles"
          :key="particle.id"
          class="falling-track"
          :class="{ 'falling-extra': index >= 4 }"
          :style="{ left: `${particle.left}%` }"
          :initial="{ y: '-8%', opacity: 0 }"
          :animate="{ y: ['-8%', '108%'], opacity: [0, 0.45, 0.45, 0] }"
          :transition="{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'linear' }"
        >
          <motion.span
            class="falling-particle"
            :style="{ width: `${particle.size}px`, height: `${particle.size}px`, color: particle.color }"
            :animate="{ x: [0, particle.drift, 0], rotate: [0, particle.rotation] }"
            :transition="{ duration: particle.duration / 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }"
          >
            <span v-if="particle.kind === 'coin'" class="falling-coin"></span>
            <Star weight="duotone" v-else class="falling-star" />
          </motion.span>
        </motion.div>
      </template>
    </div>
    <Teleport v-if="mounted" to="#hero-effect-control">
    <Button
      type="button"
      variant="ghost"
      class="falling-toggle" :disabled="reducedMotion" :title="reducedMotion ? 'Hiệu ứng đã tắt theo cài đặt giảm chuyển động' : enabled ? 'Tắt hiệu ứng rơi' : 'Bật hiệu ứng rơi'"
      :aria-pressed="enabled"
      :aria-label="reducedMotion ? 'Hiệu ứng rơi đã tắt theo cài đặt giảm chuyển động của thiết bị' : enabled ? 'Tắt hiệu ứng đồng xu và ngôi sao rơi' : 'Bật hiệu ứng đồng xu và ngôi sao rơi'"
      @click="toggleAnimation"
    >
      <Play v-if="!enabled" aria-hidden="true" />
      <Pause v-else aria-hidden="true" />

    </Button>
    </Teleport>
  </div>
</template>

<style scoped>
.falling-decorations { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.falling-layer { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.falling-track { position: absolute; top: 0; width: 26px; height: 100%; will-change: transform; }
.falling-particle { display: block; }
.falling-coin { display: block; width: 100%; height: 100%; border: 2px solid #dca341; border-radius: 50%; background: radial-gradient(circle at 30% 25%, #fff2b4 0 10%, #fbd46b 15% 58%, #edb74d 65%); box-shadow: inset 0 0 0 2px #ffe8a6, 1px 2px 0 #bc8a3530; }
.falling-star { display: block; width: 100%; height: 100%; fill: currentColor; stroke: #8d6d55; stroke-width: 1.5; }
.falling-toggle { pointer-events: auto; width: 44px; min-width: 44px; height: 44px; padding: 10px; border-radius: 50%; background: #fffaf0; border: 1px solid #dccfbb; color: #6a4b37; }
.falling-toggle:hover { background: #e8f1f8; color: #513326; }
.falling-toggle svg { width: 14px; height: 14px; }
@media (max-width: 760px) {
  .falling-extra { display: none; }

}
@media (prefers-reduced-motion: reduce) {
  .falling-layer { display: none; }
}
</style>
