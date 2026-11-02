<script setup lang="ts">
import { computed } from 'vue'
import { motion, useReducedMotion } from 'motion-v'
import { ArrowRight, FileText, Lightbulb, Calculator, Users, Heart } from '@lucide/vue'
import { Button } from '@/components/ui/button'

const props = defineProps<{ titles: string[]; steps: string[]; link: string; action: string }>()
const emit = defineEmits<{ practice: [href: string] }>()
const reducedMotion = useReducedMotion()
const stepIcons = [FileText, Lightbulb, Calculator, Users]
const lines = computed(() => {
  let delay = 0.35
  return props.steps.map(text => {
    const words = text.split(/(\s+)/)
    const line = { text, words, delay }
    delay += words.length * 0.035 + 0.2
    return line
  })
})
</script>

<template>
  <motion.div class="chalk-guide" :initial="reducedMotion ? false : { opacity: 0, y: 8 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.3 }">
    <ol class="chalk-steps">
      <li v-for="(line, index) in lines" :key="line.text">
        <span class="chalk-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        <component :is="stepIcons[index]" class="step-icon" aria-hidden="true" />
        <div class="step-copy"><h3>{{ titles[index] ?? `Bước ${index + 1}` }}</h3><p><span class="sr-only">{{ line.text }}</span><span aria-hidden="true"><motion.span v-for="(word, wordIndex) in line.words" :key="wordIndex" :initial="reducedMotion ? false : { opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ duration: 0.14, delay: reducedMotion ? 0 : line.delay + wordIndex * 0.035 }">{{ word }}</motion.span></span></p></div>
      </li>
    </ol>
    <slot />
    <div class="chalk-actions"><span><Heart aria-hidden="true" />Mỗi lựa chọn, một điều để học.</span><Button as-child class="chalk-practice"><a :href="link" @click="emit('practice', link)">{{ action }}<ArrowRight aria-hidden="true" /></a></Button></div>
    <div class="chalk-tray" aria-hidden="true"><i></i><i></i><span></span></div>
  </motion.div>
</template>

<style scoped>
.chalk-guide { color: #563d30; }
.chalk-steps { display: grid; gap: 12px; margin: 0 0 24px; padding: 0; list-style: none; }
.chalk-steps li { --step-wash: #edf2e6; --step-accent: #c9d5b8; display: grid; grid-template-columns: 48px 38px minmax(0, 1fr); align-items: center; gap: 18px; padding: 18px 20px; background: var(--step-wash); border-radius: 16px 20px 17px 12px; }
.chalk-steps li:nth-child(2) { --step-wash: #fff2d5; --step-accent: #f5d68d; }
.chalk-steps li:nth-child(3) { --step-wash: #fae8db; --step-accent: #f0c3ad; }
.chalk-steps li:nth-child(4) { --step-wash: #efebf3; --step-accent: #d9cfe3; }
.chalk-number { display: grid; place-items: center; width: 48px; height: 48px; border-radius: 48% 52% 45% 55%; background: var(--step-accent); color: #563d30; font: 600 23px/1.4 'Lora', Georgia, serif; }
.step-icon { width: 34px; height: 34px; stroke-width: 1.5; color: #78543e; }
.step-copy { min-width: 0; }
.step-copy h3 { margin-bottom: 5px; font: 600 clamp(18px, 2.2vw, 23px)/1.45 'Lora', Georgia, serif; }
.chalk-steps p { font-size: var(--text-small); line-height: 1.8; color: #654e40; }
.chalk-actions { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; }
.chalk-actions > span { display: flex; align-items: center; gap: 9px; color: #735c4b; font: italic 400 var(--text-small)/1.8 'Lora', Georgia, serif; }
.chalk-actions > span svg { width: 23px; height: 23px; flex-shrink: 0; color: #ce8b74; }
.chalk-practice { min-height: 44px; height: auto; white-space: normal; background: #dce5ce; color: #493b2d; border: 1px solid #9ba97d; border-radius: 24px; padding: 11px 20px; box-shadow: 0 3px 0 #8d9c6e26; }
.chalk-practice:hover { background: #cfdcbd; color: #493b2d; }
.chalk-practice:focus-visible { outline: 3px solid #637746; outline-offset: 4px; }
.chalk-tray { display: flex; align-items: flex-end; justify-content: flex-end; gap: 10px; margin-top: 24px; padding: 0 18px 3px; border-bottom: 8px solid #d7bc94; border-radius: 0 0 4px 4px; box-shadow: 0 3px 2px #77553625; pointer-events: none; }
.chalk-tray i { width: 75px; height: 12px; border: 1px solid #d9cfb9; border-left: 20px solid #c7d3ae; border-radius: 4px; background: linear-gradient(#fffdf5, #e9e6dc); box-shadow: 0 2px 1px #6e52322b; }
.chalk-tray i + i { border-left-color: #e6b49c; transform: rotate(-2deg); }
.chalk-tray > span { width: 56px; height: 22px; border-radius: 5px 5px 2px 2px; background: #6a6255; border-top: 12px solid #d8bc94; }
@media (max-width: 600px) {
  .chalk-steps li { grid-template-columns: 38px minmax(0, 1fr); gap: 12px; padding: 16px 12px; align-items: start; }
  .chalk-number { width: 38px; height: 38px; font-size: 19px; }
  .step-icon { display: none; }
  .chalk-actions { align-items: stretch; flex-direction: column; }
}
</style>
