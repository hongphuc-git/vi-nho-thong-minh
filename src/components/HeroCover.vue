<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { motion } from 'motion-v'
import { ArrowDown, ArrowUpRight, Heart, Play, Star } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import FallingDecorations from '@/components/FallingDecorations.vue'
import ImagePreview from '@/components/ImagePreview.vue'
</script>

<template>
  <section id="dau-trang" class="scrap-cover" aria-labelledby="project-title">
    <div class="scrap-paper">
      <FallingDecorations />
      <header class="scrap-header">
        <a href="#dau-trang" class="scrap-brand" aria-label="Ví nhỏ thông minh — trang chủ"><img :src="publicAsset('/images/vi-nho-logo.png')" alt="Ví nhỏ thông minh" width="1280" height="1280" /></a>
        <p class="scrap-school"><strong>TRƯỜNG THCS THƯỢNG LONG</strong><span>Dự án khởi nghiệp học sinh</span></p>
        <Button as-child class="scrap-start"><a href="#trai-nghiem">Cùng bắt đầu <ArrowUpRight aria-hidden="true" /></a></Button>
      </header>

      <div class="scrap-layout">
        <motion.div class="scrap-copy" :initial="{ opacity: 0, y: 18 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.6 }">
          <p class="scrap-kicker">BỘ CÔNG CỤ GIÁO DỤC TÀI CHÍNH</p>
          <h1 id="project-title">Ví nhỏ<br /><span>thông minh</span></h1>
          <p class="scrap-motto">Ví nhỏ, thói quen lớn.</p>
          <p class="scrap-description">Học cách chi tiêu, tiết kiệm và sẻ chia<br class="scrap-wide-break" /> từ những điều nhỏ mỗi ngày.</p>
          <div class="scrap-actions">
            <Button as-child class="scrap-primary"><a href="#bo-cong-cu">Khám phá bộ công cụ <ArrowUpRight aria-hidden="true" /></a></Button>
            <Button as-child variant="outline" class="scrap-secondary"><a href="#video-du-an"><span class="scrap-play"><Play aria-hidden="true" /></span>Xem video dự án</a></Button>
          </div>
          <p class="scrap-note">Dành cho học sinh THCS · Có thể dùng tiền mô phỏng</p>
          <a class="scrap-scroll" href="#thong-tin" aria-label="Xem thông tin chung"><ArrowDown aria-hidden="true" /></a>
        </motion.div>

        <motion.div class="scrap-collage" role="group" aria-label="Chiếc ví và các học liệu của Ví nhỏ thông minh" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.7, delay: 0.15 }">
          <div class="scrap-wash" aria-hidden="true"></div>
          <figure class="scrap-journal"><span class="journal-tape" aria-hidden="true"></span><img :src="publicAsset('/images/learning-kit/journal-cover.png')" alt="Bìa sổ theo dõi thu chi" width="1545" height="2000" /></figure>
          <figure class="scrap-goal"><img :src="publicAsset('/images/learning-kit/personal-goal.png')" alt="Bảng mục tiêu cá nhân" width="1414" height="2000" /></figure>
          <figure class="scrap-product-sheet">
            <span class="product-sheet-tape" aria-hidden="true"></span>
            <span class="scrap-clip" aria-hidden="true"></span>
            <ImagePreview :src="publicAsset('/images/learning-kit/kit-scrapbook.png')" alt="Bộ công cụ Ví nhỏ thông minh"><img :src="publicAsset('/images/learning-kit/kit-scrapbook.png')" alt="Bộ công cụ Ví nhỏ thông minh gồm ví vải đen, sổ thu chi, bảng mục tiêu, tiền mô phỏng và các thẻ tình huống" width="1448" height="1086" fetchpriority="high" /></ImagePreview>
            <figcaption>
              <span>Một chiếc ví nhỏ. Nhiều điều để học. <Heart aria-hidden="true" /></span>
            </figcaption>
          </figure>
          <p class="scrap-sticky sticky-pockets"><strong>4 ngăn ví</strong><span aria-hidden="true">↗</span></p>
          <p class="scrap-sticky sticky-days"><strong>30 ngày<br />thực hành</strong><span>Lộ trình đề xuất <span aria-hidden="true">✦</span></span></p>
          <p class="scrap-encouragement">Mỗi ngày<br />một chút! <span aria-hidden="true">☺</span></p>
          <Star class="scrap-star star-top" aria-hidden="true" /><Star class="scrap-star star-bottom" aria-hidden="true" />
          <Heart class="scrap-heart heart-top" aria-hidden="true" /><Heart class="scrap-heart heart-bottom" aria-hidden="true" />
          <span class="scrap-coin coin-top" aria-hidden="true"></span><span class="scrap-coin coin-bottom" aria-hidden="true"></span>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrap-cover { padding: 24px 0 30px; overflow: hidden; color: #512b20; background: repeating-linear-gradient(90deg, #b5d9ee 0 23px, #faf3e5 23px 46px); }
.scrap-paper { position: relative; isolation: isolate; padding: 24px max(32px, calc((100vw - 1440px) / 2)) 72px; background-color: #fffaf0; background-image: linear-gradient(#95bbd522 1px, transparent 1px), linear-gradient(90deg, #95bbd522 1px, transparent 1px), radial-gradient(ellipse at 0% 65%, #f4b4c35c, transparent 30%), radial-gradient(ellipse at 100% 0%, #f4b4c370, transparent 30%); background-size: 26px 26px, 26px 26px, 100% 100%, 100% 100%; filter: drop-shadow(0 4px 3px #67503c1c); }
.scrap-paper::before, .scrap-paper::after { content: ''; position: absolute; z-index: -1; left: 0; width: 100%; height: 17px; background: #fffaf0; clip-path: polygon(0 50%, 2% 12%, 4% 65%, 6% 30%, 8% 70%, 10% 15%, 12% 60%, 14% 20%, 16% 65%, 18% 30%, 20% 80%, 22% 20%, 24% 55%, 26% 10%, 28% 75%, 30% 30%, 32% 65%, 34% 20%, 36% 70%, 38% 25%, 40% 80%, 42% 15%, 44% 55%, 46% 10%, 48% 65%, 50% 30%, 52% 70%, 54% 20%, 56% 60%, 58% 10%, 60% 80%, 62% 35%, 64% 70%, 66% 20%, 68% 65%, 70% 15%, 72% 70%, 74% 25%, 76% 80%, 78% 20%, 80% 65%, 82% 10%, 84% 60%, 86% 30%, 88% 70%, 90% 20%, 92% 80%, 94% 30%, 96% 65%, 98% 20%, 100% 50%, 100% 100%, 0 100%); }
.scrap-paper::before { top: -15px; }
.scrap-paper::after { bottom: -15px; transform: rotate(180deg); }
.scrap-header { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 20px; max-width: 1440px; margin-inline: auto; }
.scrap-brand { display: inline-flex; align-items: center; justify-self: start; width: 126px; flex-shrink: 0; }
.scrap-brand img { display: block; width: 100%; height: auto; object-fit: contain; }
.scrap-school { display: grid; gap: 5px; text-align: center; font-size: 14px; line-height: 1.6; }
.scrap-school strong { font-size: 14px; }
.scrap-start, .scrap-primary { background: #552d20; color: #fffcf5; border-radius: 22px; box-shadow: inset 0 0 0 1px #ffffff22, 0 3px 0 #3b1f1812; }
.scrap-start { justify-self: end; min-height: 48px; padding-inline: 25px; font-size: 14px; gap: 12px; border-radius: 40px; }
.scrap-start:hover, .scrap-primary:hover { background: #73402f; }
.scrap-layout { display: grid; grid-template-columns: .98fr 1.12fr; align-items: center; max-width: 1440px; margin: 28px auto 0; min-height: 640px; }
.scrap-copy { position: relative; z-index: 2; padding: 32px 0 22px 20px; }
.scrap-kicker { position: relative; display: inline-block; padding: 9px 16px; color: #155394; font-size: clamp(12px, 1.2vw, 18px); font-weight: 700; letter-spacing: .035em; transform: rotate(-2deg); background: #bce2f8; clip-path: polygon(2% 5%, 97% 0, 100% 18%, 98% 35%, 100% 62%, 97% 80%, 99% 95%, 0 100%, 2% 78%, 0 55%, 2% 32%, 0 18%); }
.scrap-copy h1 { margin: 20px 0 0; color: #51291e; font-family: 'Lora', Georgia, serif; font-weight: 700; font-size: clamp(58px, 6.6vw, 100px); line-height: 1.17; letter-spacing: -4px; }
.scrap-copy h1 > span { position: relative; isolation: isolate; white-space: nowrap; }
.scrap-copy h1 > span::before { content: ''; position: absolute; z-index: -1; inset: 23% -10px 0; background: #b9def6; transform: rotate(-2deg); border-radius: 24% 5% 18% 7% / 18% 30% 20% 40%; }
.scrap-motto { width: fit-content; max-width: 100%; position: relative; margin: 24px 0 34px; padding: 0 8px 12px; color: #205c9c; font-family: 'Lora', Georgia, serif; font-size: clamp(22px, 2.4vw, 35px); font-weight: 600; font-style: italic; transform: rotate(-3deg); }
.scrap-motto::after { content: ''; position: absolute; bottom: 0; left: 4%; right: -3%; height: 13px; border-top: 3px solid #205c9c; border-radius: 50%; transform: rotate(1deg); }
.scrap-description { margin-top: 20px; color: #583b30; font-size: clamp(16px, 1.5vw, 21px); line-height: 1.7; }
.scrap-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 23px; }
.scrap-primary, .scrap-secondary { min-height: 54px; padding-inline: 22px; font-size: 13px; gap: 10px; white-space: normal; }
.scrap-secondary { border: 2px solid #694435; color: #512b20; background: #fffaf0a6; border-radius: 22px; }
.scrap-secondary:hover { background: #f6e7db; color: #512b20; }
.scrap-play { display: grid; place-items: center; width: 27px; height: 27px; border-radius: 50%; color: #fffaf0; background: #593224; }
.scrap-play svg { width: 13px; height: 13px; fill: currentColor; }
.scrap-note { margin-top: 16px; color: #796f65; font-size: 12px; line-height: 1.8; }
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
  .scrap-school { grid-column: 1 / -1; grid-row: 2; font-size: 11px; margin-top: 4px; }
  .scrap-school strong { font-size: 11px; }
  .scrap-start { min-height: 44px; padding-inline: 17px; font-size: 12px; }
  .scrap-layout { display: flex; flex-direction: column; margin-top: 8px; }
  .scrap-copy { width: 100%; padding-block: 22px 0; }
  .scrap-kicker { font-size: 11px; padding-inline: 12px; }
  .scrap-copy h1 { font-size: clamp(52px, 11.8vw, 80px); letter-spacing: -2.5px; margin-top: 18px; }
  .scrap-motto { font-size: clamp(22px, 5vw, 30px); margin-block: 20px 26px; }
  .scrap-description { font-size: 16px; }
  .scrap-actions { gap: 10px; }
  .scrap-primary, .scrap-secondary { min-height: 48px; padding-inline: 16px; font-size: 12px; }
  .scrap-note { font-size: 11px; }
  .scrap-scroll { display: none; }
  .scrap-collage { width: 100%; max-width: 620px; height: auto; aspect-ratio: 1 / 1.2; margin: 35px auto 20px; }
}
@media (max-width: 380px) { .scrap-paper { padding-inline: 18px; } .scrap-actions { flex-direction: column; align-items: stretch; } .scrap-wide-break { display: none; } }
.scrap-product-sheet { position: absolute; z-index: 3; left: 20%; top: 25%; width: 66%; margin: 0; padding: 10px; background: #fffdf6; border: 1px solid #e4d8c6; border-radius: 5px; box-shadow: 0 10px 28px #62432c26; transform: rotate(5deg); }
.scrap-product-sheet :deep(.image-preview-trigger > img) { display: block; width: 100%; height: auto; border-radius: 2px; }
.product-sheet-tape { position: absolute; z-index: 1; top: -13px; left: calc(50% - 55px); width: 110px; height: 28px; background: repeating-linear-gradient(135deg, #f4b8d0cc 0 9px, #fff5ebcc 9px 18px); transform: rotate(3deg); }
.scrap-product-sheet figcaption { display: grid; gap: 8px; padding: 18px 8px 10px; text-align: center; color: #58392b; }
.scrap-product-sheet figcaption > span:first-child { font-family: 'Lora', Georgia, serif; font-style: italic; font-size: clamp(15px, 1.4vw, 20px); line-height: 1.6; }
.scrap-product-sheet figcaption svg { display: inline; width: 18px; height: 18px; color: #d985a6; vertical-align: middle; }
.scrap-wash { position: absolute; inset: 6% 0 1% 4%; background: #c8e5f3b3; border-radius: 38% 32% 28% 20%; transform: rotate(-7deg); }
.scrap-wash::after { content: ''; position: absolute; inset: 6%; border: 2px dashed #77b0d3; border-radius: 35% 40% 25% 30%; }
.scrap-journal { position: absolute; left: 3%; top: 2%; width: 43%; padding: 8px; background: #fffdf4; transform: rotate(-12deg); box-shadow: 0 6px 16px #49312026; }
.scrap-journal img, .scrap-goal img { display: block; width: 100%; height: auto; }
.scrap-goal { position: absolute; right: 1%; top: 9%; width: 39%; padding: 8px; background: #fffdf6; transform: rotate(11deg); box-shadow: 0 6px 18px #49312025; }
.journal-tape { position: absolute; top: -13px; left: 12%; width: 100px; height: 28px; background: repeating-linear-gradient(0deg, #f3ce6d99 0 4px, #f9dd8b99 4px 8px); transform: rotate(-7deg); }
.scrap-clip { position: absolute; z-index: 2; right: 16%; top: -16px; width: 15px; height: 48px; border: 3px solid #468bc5; border-radius: 12px; transform: rotate(9deg); }
.scrap-sticky { position: absolute; z-index: 4; padding: 16px; background: #ffe795; color: #49381d; box-shadow: 3px 6px 9px #5d422424; text-align: center; font-family: 'Lora', Georgia, serif; line-height: 1.25; }
.scrap-sticky strong { font-size: 22px; font-weight: 700; }
.sticky-pockets { left: 56%; top: 4%; transform: rotate(9deg); }
.sticky-pockets strong { white-space: nowrap; }
.sticky-pockets > span { display: block; font-size: 22px; }
.sticky-days { left: 3%; bottom: 2%; transform: rotate(-10deg); }
.sticky-days > span { display: block; margin-top: 10px; font-size: 10px; font-family: var(--font-sans); }
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
  .scrap-sticky strong { font-size: 18px; }
  .scrap-encouragement { font-size: 18px; padding: 12px 16px; }
}
@media (max-width: 760px) {
  .scrap-product-sheet { padding: 6px; transform: rotate(4deg); }
  .scrap-product-sheet figcaption { padding: 10px 3px 5px; }
  .scrap-product-sheet figcaption > span:first-child { font-size: clamp(11px, 2.7vw, 16px); }
  .scrap-journal, .scrap-goal { padding: 5px; }
  .product-sheet-tape, .journal-tape { width: 70px; height: 22px; top: -10px; }
  .product-sheet-tape { left: calc(50% - 35px); }
  .scrap-clip { width: 11px; height: 32px; border-width: 2px; }
  .scrap-sticky { padding: 10px; }
  .scrap-sticky strong { font-size: clamp(14px, 3.3vw, 20px); }
  .sticky-pockets > span { font-size: 16px; }
  .sticky-days > span { margin-top: 7px; font-size: 8px; }
  .scrap-encouragement { font-size: clamp(13px, 3vw, 18px); padding: 10px 14px; border-width: 2px; }
  .scrap-coin { width: 32px; height: 32px; }
  .scrap-star, .scrap-heart { width: 27px; height: 27px; }
}
</style>
