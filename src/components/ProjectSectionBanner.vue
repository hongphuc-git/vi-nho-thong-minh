<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { NotebookPen } from '@lucide/vue'

withDefaults(defineProps<{
  part: string
  title: string
  headingId: string
  imageSrc?: string
  variant?: 'paper' | 'scrapbook'
  subtitle?: string
  chips?: string[]
}>(), {
  imageSrc: publicAsset('/images/financial-learning-hero.png'),
  variant: 'paper',
})
</script>

<template>
  <header class="section-banner" :class="{ 'section-banner-scrapbook': variant === 'scrapbook' }">
    <div class="section-banner-copy">
      <p>{{ part }}</p>
      <h2 :id="headingId">{{ title }}</h2>
      <span v-if="subtitle" class="section-banner-subtitle">{{ subtitle }}</span>
      <div v-if="chips && chips.length > 0" class="section-banner-chips" role="list" aria-label="Thông tin tóm tắt">
        <span v-for="chip in chips" :key="chip" class="section-banner-chip" role="listitem">{{ chip }}</span>
      </div>
    </div>
    <div v-if="variant === 'scrapbook'" class="banner-notebook" aria-hidden="true"><NotebookPen /><span>Cùng nhau<br />bắt đầu.</span></div>
  </header>
</template>

<style scoped>
.section-banner {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  min-height: 132px;
  padding: 26px 38px;
  overflow: hidden;
  border-radius: 4px 22px 7px 18px;
  background-color: #e4f1fa;
  background-image: linear-gradient(#94bada26 1px, transparent 1px), linear-gradient(90deg, #94bada26 1px, transparent 1px);
  background-size: 24px 24px;
  color: #542e23;
  border: 1px solid #aec9dd70;
  box-shadow: 3px 5px 0 #b7d9ee50;
}
.section-banner::after { content: '✳'; position: absolute; right: 30px; top: 12px; color: #5385b16b; font-size: 80px; transform: rotate(-15deg); }
.section-banner-copy { position: relative; z-index: 1; }
.section-banner-copy p { margin-bottom: 5px; color: #28629b; font-size: 13px; font-weight: 600; letter-spacing: 2.5px; }
.section-banner-copy h2 { font-family: 'Lora', Georgia, serif; font-size: 36px; font-weight: 700; letter-spacing: -.8px; line-height: 1.35; }
.section-banner-subtitle { display: block; margin-top: 10px; font-size: 15px; line-height: 1.7; color: #556875; max-width: 680px; }
.section-banner-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.section-banner-chip { display: inline-flex; align-items: center; padding: 4px 11px; background: #fffcf4; border: 1px solid #d4e3ed; border-radius: 9999px; font-size: 12px; font-weight: 500; color: #325a77; box-shadow: 0 1px 2px #325a7710; }
.section-banner-scrapbook { min-height: 174px; overflow: visible; border-radius: 15px; box-shadow: 0 2px 0 #fff9, 0 12px 26px #6b839914; }
.section-banner-scrapbook::before { content: ''; position: absolute; z-index: -1; inset: auto -4px -8px 9px; height: 19px; border: 1px solid #e8dabb; border-radius: 7px; background: #fff3d9; transform: rotate(1deg); }
.section-banner-scrapbook::after { content: ''; width: 78px; height: 25px; right: auto; left: 42px; top: -11px; font-size: 0; transform: rotate(-6deg); background: repeating-linear-gradient(45deg, #f0cdd6c9 0 5px, #f9e0e5db 5px 10px); }
.section-banner-scrapbook .section-banner-copy > p { display: table; background: #fffbef; padding: 4px 12px; margin-bottom: 10px; border: 1px solid #c4d9e7; border-radius: 5px; font-size: 11px; letter-spacing: 2px; transform: rotate(-2deg); }
.banner-notebook { position: absolute; right: 45px; top: 30px; display: flex; gap: 17px; align-items: center; transform: rotate(6deg); color: #86a9c2; }
.banner-notebook svg { width: 61px; height: 61px; stroke-width: 1.1; }
.banner-notebook > span { font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 17px; line-height: 1.6; }
@media (max-width: 700px) {
  .section-banner { min-height: 135px; padding: 24px 26px 31px; border-radius: 23px; }
  .section-banner-copy h2 { font-size: 28px; }
  .section-banner-copy p { font-size: 11px; }
  .section-banner-scrapbook { min-height: 172px; padding-right: 40px; }
  .section-banner-subtitle { font-size: 13px; max-width: 100%; }
  .section-banner-chips { gap: 6px; margin-top: 10px; }
  .section-banner-chip { font-size: 11px; padding: 3px 9px; }
  .banner-notebook { right: 15px; top: 40px; opacity: .7; }
  .banner-notebook svg { width: 37px; height: 37px; }
  .banner-notebook > span { display: none; }
}
</style>
