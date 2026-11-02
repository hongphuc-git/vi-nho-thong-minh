<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { motion } from 'motion-v'
import { ArrowDown, ArrowUpRight, Coins, GraduationCap, Heart, Play, Star } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import FallingDecorations from '@/components/FallingDecorations.vue'
import ImagePreview from '@/components/ImagePreview.vue'
</script>

<template>
  <section id="dau-trang" class="scrap-cover" aria-labelledby="project-title">
    <div class="scrap-paper">
      <FallingDecorations />

      <div class="scrap-layout">
        <motion.div class="scrap-copy" :initial="{ opacity: 0, y: 18 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.6 }">
          <p class="scrap-kicker">BỘ CÔNG CỤ GIÁO DỤC TÀI CHÍNH</p>
          <h1 id="project-title">Ví nhỏ<br /><span>thông minh</span></h1>
          <p class="scrap-motto">Ví nhỏ, thói quen lớn.</p>
          <p class="scrap-description">Học cách chi tiêu, tiết kiệm và sẻ chia<br class="scrap-wide-break" /> từ những điều nhỏ mỗi ngày.</p>
          <div class="scrap-audience"><span><GraduationCap aria-hidden="true" /> Học sinh THCS</span><span class="audience-dot" aria-hidden="true">·</span><span><Coins aria-hidden="true" /> Tiền mô phỏng</span></div>
          <div class="scrap-actions">
            <Button as-child class="scrap-primary"><a href="#bo-cong-cu">Khám phá bộ công cụ <ArrowUpRight aria-hidden="true" /></a></Button>
            <Button as-child variant="outline" class="scrap-secondary"><a href="#video-du-an"><span class="scrap-play"><Play aria-hidden="true" /></span>Xem video dự án</a></Button>
          </div>
          <div class="scrap-trust"><img :src="publicAsset('/images/thuong-long-school-logo.png')" alt="Logo Trường THCS Thượng Long" width="1254" height="1254" /><p><strong>Dự án của nhóm lớp 9B1 · Trường THCS Thượng Long</strong><br /><span>Cô Nguyễn Thu Hà hướng dẫn</span></p></div>
        </motion.div>

        <motion.div class="scrap-collage" role="group" aria-label="Chiếc ví và các học liệu của Ví nhỏ thông minh" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.7, delay: 0.15 }">
          <div class="scrap-wash" aria-hidden="true"></div>
          <figure class="scrap-journal"><span class="journal-tape" aria-hidden="true"></span><img :src="publicAsset('/images/learning-kit/journal-cover.png')" alt="Bìa sổ theo dõi thu chi" width="1545" height="2000" /></figure>
          <figure class="scrap-goal"><img :src="publicAsset('/images/learning-kit/personal-goal.png')" alt="Bảng mục tiêu cá nhân" width="1414" height="2000" /></figure>
          <figure class="scrap-product-sheet">
            <span class="product-sheet-tape" aria-hidden="true"></span>
            <ImagePreview :src="publicAsset('/images/learning-kit/kit-scrapbook.png')" alt="Bộ công cụ Ví nhỏ thông minh"><img :src="publicAsset('/images/learning-kit/kit-scrapbook.png')" alt="Bộ công cụ Ví nhỏ thông minh gồm ví vải đen, sổ thu chi, bảng mục tiêu, tiền mô phỏng và các thẻ tình huống" width="1448" height="1086" fetchpriority="high" /></ImagePreview>
            <figcaption>
              <span>Một chiếc ví nhỏ. Nhiều điều để học. <Heart aria-hidden="true" /></span>
            </figcaption>
          </figure>
          <p class="scrap-sticky sticky-pockets"><strong>4 ngăn ví</strong><span aria-hidden="true">←</span></p>
          <p class="scrap-sticky sticky-days"><strong>30 ngày<br />thực hành</strong><span>Lộ trình đề xuất <span aria-hidden="true">✦</span></span></p>
          <Star class="scrap-star star-bottom" aria-hidden="true" />
          <span class="scrap-coin coin-top" aria-hidden="true"></span>
        </motion.div>
      </div>

      <a class="scrap-scroll" href="#tom-tat" aria-label="Xem tóm tắt dự án"><ArrowDown aria-hidden="true" /></a>
    </div>
  </section>
</template>

<style scoped>
.scrap-cover { padding: 24px 0 30px; overflow: hidden; color: #512b20; background: repeating-linear-gradient(90deg, #b5d9ee 0 23px, #faf3e5 23px 46px); }
.scrap-paper { position: relative; isolation: isolate; padding: 24px max(32px, calc((100vw - 1440px) / 2)) 72px; background-color: var(--paper); background-image: linear-gradient(var(--paper-grid) 1px, transparent 1px), linear-gradient(90deg, var(--paper-grid) 1px, transparent 1px); background-size: 28px 28px; filter: drop-shadow(0 4px 3px #67503c1c); }
.scrap-paper::before, .scrap-paper::after { content: ''; position: absolute; z-index: -1; left: 0; width: 100%; height: 17px; background: var(--paper); clip-path: polygon(0 50%, 2% 12%, 4% 65%, 6% 30%, 8% 70%, 10% 15%, 12% 60%, 14% 20%, 16% 65%, 18% 30%, 20% 80%, 22% 20%, 24% 55%, 26% 10%, 28% 75%, 30% 30%, 32% 65%, 34% 20%, 36% 70%, 38% 25%, 40% 80%, 42% 15%, 44% 55%, 46% 10%, 48% 65%, 50% 30%, 52% 70%, 54% 20%, 56% 60%, 58% 10%, 60% 80%, 62% 35%, 64% 70%, 66% 20%, 68% 65%, 70% 15%, 72% 70%, 74% 25%, 76% 80%, 78% 20%, 80% 65%, 82% 10%, 84% 60%, 86% 30%, 88% 70%, 90% 20%, 92% 80%, 94% 30%, 96% 65%, 98% 20%, 100% 50%, 100% 100%, 0 100%); }
.scrap-paper::before { top: -15px; }
.scrap-paper::after { bottom: -15px; transform: rotate(180deg); }
.scrap-header { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 20px; max-width: 1440px; margin-inline: auto; }
.scrap-brand { display: inline-flex; align-items: center; justify-self: start; width: 126px; flex-shrink: 0; }
.scrap-brand img { display: block; width: 100%; height: auto; object-fit: contain; }
.scrap-school { display: flex; align-items: center; justify-content: center; gap: 14px; text-align: center; font-size: var(--text-body); line-height: 1.6; min-width: 0; }
.scrap-school > img { display: block; width: 70px; height: 70px; flex-shrink: 0; object-fit: contain; border-radius: 50%; background: #fff; }
.scrap-school > p { display: grid; gap: 5px; }
.scrap-school strong { font-size: var(--text-body); }
.scrap-start, .scrap-primary { background: #552d20; color: #fffcf5; border-radius: 22px; box-shadow: inset 0 0 0 1px #ffffff22, 0 3px 0 #3b1f1812; }
.scrap-start { justify-self: end; min-height: 48px; padding-inline: 25px; font-size: var(--text-body); gap: 12px; border-radius: 40px; }
.scrap-start:hover, .scrap-primary:hover { background: #73402f; }
.scrap-layout { display: grid; grid-template-columns: .98fr 1.12fr; align-items: center; max-width: 1440px; margin: 28px auto 0; min-height: 640px; }
.scrap-copy { position: relative; z-index: 2; padding: 32px 0 22px 20px; }
.scrap-kicker { position: relative; display: inline-block; padding: 9px 16px; color: #155394; font-size: clamp(1rem, 1.2vw, 1.125rem); font-weight: 700; letter-spacing: .035em; transform: rotate(-2deg); background: #bce2f8; clip-path: polygon(2% 5%, 97% 0, 100% 18%, 98% 35%, 100% 62%, 97% 80%, 99% 95%, 0 100%, 2% 78%, 0 55%, 2% 32%, 0 18%); }
.scrap-copy h1 { margin: 20px 0 0; color: #51291e; font-family: 'Lora', Georgia, serif; font-weight: 700; font-size: clamp(58px, 6.6vw, 100px); line-height: 1.17; letter-spacing: -4px; }
.scrap-copy h1 > span { position: relative; isolation: isolate; white-space: nowrap; }
.scrap-copy h1 > span::before { content: ''; position: absolute; z-index: -1; inset: 23% -10px 0; background: #b9def6; transform: rotate(-2deg); border-radius: 24% 5% 18% 7% / 18% 30% 20% 40%; }
.scrap-motto { width: fit-content; max-width: 100%; position: relative; margin: 24px 0 34px; padding: 0 8px 12px; color: #205c9c; font-family: 'Lora', Georgia, serif; font-size: clamp(22px, 2.4vw, 35px); font-weight: 600; font-style: italic; transform: rotate(-3deg); }
.scrap-motto::after { content: ''; position: absolute; bottom: 0; left: 4%; right: -3%; height: 13px; border-top: 3px solid #205c9c; border-radius: 50%; transform: rotate(1deg); }
.scrap-description { margin-top: 20px; color: #583b30; font-size: clamp(1.125rem, 1.5vw, 21px); line-height: 1.7; }
.scrap-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 23px; }
.scrap-primary, .scrap-secondary { min-height: 54px; padding-inline: 22px; font-size: var(--text-small); gap: 10px; white-space: normal; }
.scrap-secondary { border: 2px solid #694435; color: #512b20; background: #fffaf0a6; border-radius: 22px; }
.scrap-secondary:hover { background: #f6e7db; color: #512b20; }
.scrap-play { display: grid; place-items: center; width: 27px; height: 27px; border-radius: 50%; color: #fffaf0; background: #593224; }
.scrap-play svg { width: 13px; height: 13px; fill: currentColor; }
.scrap-note { margin-top: 16px; color: #796f65; font-size: var(--text-small); line-height: 1.8; }
.scrap-scroll { display: grid; place-items: center; width: 44px; height: 44px; margin: 6px auto 0; }
.scrap-scroll svg { width: 27px; height: 27px; }
.scrap-collage { position: relative; z-index: 2; min-width: 0; height: 650px; }
@media (min-width: 1600px) { .scrap-layout { min-height: 710px; } .scrap-collage { height: 710px; } }
@media (max-width: 1100px) {
  .scrap-paper { padding-inline: 28px; }
  .scrap-layout { grid-template-columns: 1fr 1fr; min-height: 600px; }
  .scrap-copy { padding-left: 0; }
  .scrap-copy h1 { font-size: clamp(55px, 6.5vw, 76px); letter-spacing: -3px; }
  .scrap-collage { height: 560px; }
}
@media (max-width: 760px) {
  .scrap-cover { padding-block: 15px 22px; }
  .scrap-paper { padding: 15px 22px 72px; }
  .scrap-header { grid-template-columns: 1fr auto; gap: 16px; }
  .scrap-brand { width: 104px; }
  .scrap-school { grid-column: 1 / -1; grid-row: 2; font-size: var(--text-caption); margin-top: 4px; }
  .scrap-school strong { font-size: var(--text-caption); }
  .scrap-school > img { width: 54px; height: 54px; }
  .scrap-start { min-height: 44px; padding-inline: 17px; font-size: var(--text-small); }
  .scrap-layout { display: flex; flex-direction: column; margin-top: 8px; }
  .scrap-copy { width: 100%; padding-block: 22px 0; }
  .scrap-kicker { font-size: var(--text-caption); padding-inline: 12px; }
  .scrap-copy h1 { font-size: clamp(52px, 11.8vw, 80px); letter-spacing: -2.5px; margin-top: 18px; }
  .scrap-motto { font-size: clamp(22px, 5vw, 30px); margin-block: 20px 26px; }
  .scrap-description { font-size: var(--text-body); }
  .scrap-actions { gap: 10px; }
  .scrap-primary, .scrap-secondary { min-height: 48px; padding-inline: 16px; font-size: var(--text-small); }
  .scrap-note { font-size: var(--text-caption); }
  .scrap-scroll { display: none; }
  .scrap-collage { width: 100%; max-width: 620px; height: auto; aspect-ratio: 1 / 1.2; margin: 35px auto 20px; }
}
@media (max-width: 380px) { .scrap-paper { padding-inline: 18px; } .scrap-actions { flex-direction: column; align-items: stretch; } .scrap-wide-break { display: none; } }
.scrap-product-sheet { position: absolute; z-index: 3; left: 20%; top: 25%; width: 66%; margin: 0; padding: 10px; background: var(--surface-paper); border: 1px solid #e4d8c6; border-radius: 5px; box-shadow: 0 10px 28px #62432c26; transform: rotate(5deg); }
.scrap-product-sheet :deep(.image-preview-trigger > img) { display: block; width: 100%; height: auto; border-radius: 2px; }
.product-sheet-tape { position: absolute; z-index: 1; top: -13px; left: calc(50% - 55px); width: 110px; height: 28px; background: repeating-linear-gradient(135deg, #f4b8d0cc 0 9px, #fff5ebcc 9px 18px); transform: rotate(3deg); }
.scrap-product-sheet figcaption { display: grid; gap: 8px; padding: 18px 8px 10px; text-align: center; color: #58392b; }
.scrap-product-sheet figcaption > span:first-child { font-family: 'Lora', Georgia, serif; font-style: italic; font-size: clamp(1.125rem, 1.4vw, 20px); line-height: 1.6; }
.scrap-product-sheet figcaption svg { display: inline; width: 18px; height: 18px; color: #d985a6; vertical-align: middle; }
.scrap-wash { position: absolute; inset: 6% 0 1% 4%; background: #c8e5f3b3; border-radius: 38% 32% 28% 20%; transform: rotate(-7deg); }
.scrap-wash::after { content: ''; position: absolute; inset: 6%; border: 2px dashed #77b0d3; border-radius: 35% 40% 25% 30%; }
.scrap-journal { position: absolute; left: 3%; top: 2%; width: 43%; padding: 8px; background: var(--surface-paper); transform: rotate(-12deg); box-shadow: 0 6px 16px #49312026; }
.scrap-journal img, .scrap-goal img { display: block; width: 100%; height: auto; }
.scrap-goal { position: absolute; right: 1%; top: 9%; width: 39%; padding: 8px; background: var(--surface-paper); transform: rotate(11deg); box-shadow: 0 6px 18px #49312025; }
.journal-tape { position: absolute; top: -13px; left: 12%; width: 100px; height: 28px; background: repeating-linear-gradient(0deg, #f3ce6d99 0 4px, #f9dd8b99 4px 8px); transform: rotate(-7deg); }
.scrap-clip { position: absolute; z-index: 2; right: 16%; top: -16px; width: 15px; height: 48px; border: 3px solid #468bc5; border-radius: 12px; transform: rotate(9deg); }
.scrap-sticky { position: absolute; z-index: 4; padding: 16px; background: #ffe795; color: #49381d; box-shadow: 3px 6px 9px #5d422424; text-align: center; font-family: 'Lora', Georgia, serif; line-height: 1.25; }
.scrap-sticky strong { font-size: 22px; font-weight: 700; }
.sticky-pockets { left: 56%; top: 4%; transform: rotate(9deg); }
.sticky-pockets strong { white-space: nowrap; }
.sticky-pockets > span { display: block; font-size: 22px; }
.sticky-days { left: 3%; bottom: 2%; transform: rotate(-10deg); }
.sticky-days > span { display: block; margin-top: 10px; font-size: var(--text-caption); font-family: var(--font-sans); }
.scrap-encouragement { position: absolute; z-index: 4; right: 0; bottom: 1%; padding: 14px 22px; background: #fff9da; border: 3px solid #ef9cbb; outline: 4px solid #fffcf1; border-radius: 48%; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 22px; text-align: center; transform: rotate(7deg); line-height: 1.2; }
.scrap-encouragement > span { color: #e27698; }
.scrap-star, .scrap-heart { position: absolute; width: 36px; height: 36px; fill: none; stroke-width: 1.8; }
.scrap-star { color: #2664a5; }
.star-top { right: 23%; top: -2%; transform: rotate(-12deg); }
.star-bottom { right: 14%; bottom: -6%; transform: rotate(15deg); }
.scrap-heart { color: #e580a3; }
.heart-top { right: 5%; top: -1%; transform: rotate(-15deg); }
.heart-bottom { right: -2%; bottom: 17%; transform: rotate(17deg); }
.scrap-coin { position: absolute; z-index: 4; width: 48px; height: 48px; background: radial-gradient(circle at 32% 25%, #ffe89a 0 12%, #ffce5d 14% 60%, #eda933 64%); border: 3px solid #eab342; outline: 2px solid #ffe6a0; box-shadow: 3px 4px 0 #daa24c55, inset 0 0 0 4px #ffdc74; border-radius: 50%; }
.coin-top { top: -1%; left: 48%; transform: rotate(-30deg) scaleX(.83); }
.coin-bottom { bottom: 20%; right: -1%; transform: rotate(25deg); }
@media (min-width: 761px) and (max-width: 1100px) {
  .scrap-sticky { padding: 12px; }
  .scrap-sticky strong { font-size: var(--text-body); }
  .scrap-encouragement { font-size: var(--text-body); padding: 12px 16px; }
}
@media (max-width: 760px) {
  .scrap-product-sheet { padding: 6px; transform: rotate(4deg); }
  .scrap-product-sheet figcaption { padding: 10px 3px 5px; }
  .scrap-product-sheet figcaption > span:first-child { font-size: clamp(.875rem, 2.7vw, 1.125rem); }
  .scrap-journal, .scrap-goal { padding: 5px; }
  .product-sheet-tape, .journal-tape { width: 70px; height: 22px; top: -10px; }
  .product-sheet-tape { left: calc(50% - 35px); }
  .scrap-clip { width: 11px; height: 32px; border-width: 2px; }
  .scrap-sticky { padding: 10px; }
  .scrap-sticky strong { font-size: clamp(1.125rem, 3.3vw, 20px); }
  .sticky-pockets > span { font-size: var(--text-body); }
  .sticky-days > span { margin-top: 7px; font-size: var(--text-caption); }
  .scrap-encouragement { font-size: clamp(1rem, 3vw, 1.125rem); padding: 10px 14px; border-width: 2px; }
  .scrap-coin { width: 32px; height: 32px; }
  .scrap-star, .scrap-heart { width: 27px; height: 27px; }
}
/* A quieter cover witr the wallet as its focal point. */
.scrap-cover { padding-top: 12px; }
.scrap-paper { padding-top: 12px; padding-bottom: 45px; }
.scrap-layout { margin-top: 0; min-height: 650px; }
.scrap-copy { padding-top: 24px; }
.scrap-kicker { color: #765639; background: #f0e2c9; font-size: 13px; letter-spacing: .5px; }
.scrap-description { font-size: 18px; color: #573c2e; line-height: 1.85; }
.scrap-audience { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; margin-top: 18px; color: #523926; font-size: 16px; font-weight: 600; }
.scrap-audience > span { display: inline-flex; align-items: center; gap: 8px; }
.scrap-audience .audience-dot { color: #b8a389; font-weight: 700; }
.scrap-audience svg { width: 20px; height: 20px; stroke-width: 1.75; color: #205c9c; }
.scrap-actions { margin-top: 26px; gap: 16px; }
.scrap-primary, .scrap-secondary { min-height: 56px; height: auto; font-size: 16px; padding: 14px 26px; border-radius: 28px; }
.scrap-primary svg { width: 18px; height: 18px; }
.scrap-play { width: 30px; height: 30px; }
.scrap-play svg { width: 14px; height: 14px; }
.scrap-trust { display: flex; align-items: center; gap: 16px; margin-top: 30px; padding-top: 22px; border-top: 1px dashed #cdbba2; max-width: 540px; }
.scrap-trust img { width: 58px; height: 58px; padding: 3px; object-fit: contain; background: #fff; border: 1px solid #e0d2bc; border-radius: 50%; box-shadow: 0 2px 6px #5a3e2814; flex-shrink: 0; }
.scrap-trust p { font-size: 15.5px; line-height: 1.65; color: #4a3121; }
.scrap-trust p strong { font-weight: 700; color: #3f2617; }
.scrap-trust p > span { color: #634b36; font-size: 14.5px; font-weight: 500; }
.scrap-collage { height: 620px; }
.scrap-product-sheet { left: 10%; top: 22%; width: 74%; padding: 11px; transform: rotate(2.5deg); }
.scrap-journal { left: 0; top: 2%; width: 35%; opacity: .78; transform: rotate(-10deg); }
.scrap-goal { right: 1%; top: 3%; width: 33%; opacity: .78; transform: rotate(9deg); }
.scrap-wash { opacity: .45; }
.scrap-wash::after { border-width: 1px; opacity: .55; }
.sticky-pockets { z-index: 4; left: auto; right: 0; top: 54%; transform: rotate(6deg); }
.sticky-days { z-index: 4; left: 1%; bottom: 2%; }
.star-bottom { right: 5%; bottom: 1%; width: 27px; height: 27px; opacity: .7; }
.coin-top { width: 33px; height: 33px; top: 2%; left: 46%; }
.scrap-scroll { position: relative; z-index: 2; margin: 18px auto 0; color: #593224; border: 1px solid #dccfbb; border-radius: 50%; background: #fffaf0cc; transition: transform .2s ease, background-color .2s ease; }
.scrap-scroll:hover { background: #fffaf0; transform: translateY(3px); }
@media (min-width: 1600px) { .scrap-layout { min-height: 700px; } .scrap-collage { height: 660px; } }
@media (max-width: 1100px) and (min-width: 761px) { .scrap-collage { height: 530px; } .scrap-product-sheet { top: 23%; } .scrap-copy h1 { font-size: clamp(52px, 6vw, 70px); } }
@media (max-width: 760px) {
  .scrap-paper { padding: 20px 22px 30px; }
  .scrap-layout { min-height: 0; }
  .scrap-copy { padding-top: 4px; }
  .scrap-description { font-size: 17px; }
  .scrap-audience { font-size: 14.5px; gap: 10px; }
  .scrap-primary, .scrap-secondary { min-height: 50px; font-size: 14.5px; padding-inline: 18px; }
  .scrap-kicker { font-size: 12px; }
  .scrap-trust img { width: 50px; height: 50px; }
  .scrap-trust p { font-size: 14px; }
  .scrap-trust p > span { font-size: 13.5px; }
  .scrap-collage { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; height: auto; aspect-ratio: auto; margin: 28px auto 12px; padding: 12px 5px 0; }
  .scrap-journal, .scrap-goal, .scrap-wash, .scrap-star, .scrap-coin { display: none; }
  .scrap-product-sheet { position: relative; inset: auto; grid-column: 1 / -1; width: 100%; padding: 8px; transform: rotate(1deg); }
  .scrap-sticky { position: relative; inset: auto; width: auto; margin: 4px 0 0; padding: 13px; transform: rotate(-2deg); }
  .sticky-days { transform: rotate(2deg); }
  .scrap-sticky strong { font-size: 18px; }
  .sticky-days strong br { display: none; }
  .sticky-days > span { font-size: 11px; }
  .scrap-product-sheet figcaption { padding-block: 12px 7px; }
}
.scrap-cover { padding-top: 0; }
.scrap-paper::before { display: none; }
</style>
