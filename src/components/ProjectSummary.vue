<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { motion } from 'motion-v'
import { ArrowUpRight, Lightbulb, Heart, Sprout, Star, Coins, NotebookPen } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ImagePreview from '@/components/ImagePreview.vue'
import SummaryScrapbookArt from '@/components/SummaryScrapbookArt.vue'


</script>

<template>
  <section id="tom-tat" class="project-summary" aria-labelledby="project-summary-title">
    <SummaryScrapbookArt />
    <header class="summary-heading">
      <p>DỰ ÁN TRONG MỘT PHÚT</p>
      <h2 id="project-summary-title">Một chiếc ví nhỏ.<br class="summary-mobile-break" /> Một hành trình lớn.</h2>
      <Star class="heading-star" aria-hidden="true" /><Heart class="heading-heart" aria-hidden="true" />
    </header>

    <motion.div
      :initial="{ opacity: 0, y: 14 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }"
      :transition="{ duration: 0.45 }"
    >
      <Card class="summary-idea">
        <div class="idea-paper-wrap"><div class="summary-idea-copy">
          <span class="idea-eyebrow">HỌC TỪ NHỮNG ĐIỀU NHỎ</span>
          <h3><Lightbulb aria-hidden="true" /> Ý tưởng chính</h3><Heart class="idea-heart" aria-hidden="true" />
          <p class="idea-lead">Học cách quản lý tiền từ những lựa chọn nhỏ mỗi ngày.</p>
          <p>Một bộ công cụ trực quan giúp học sinh THCS tập chi tiêu, tiết kiệm, đặt mục tiêu và sẻ chia. Kết hợp ví bốn ngăn, sổ thu chi và các tình huống đời thường, với phụ huynh và thầy cô cùng đồng hành.</p>
          <div class="idea-highlights" role="list" aria-label="Điểm nổi bật của ý tưởng">
            <span role="listitem"><Coins aria-hidden="true" />Tiền mô phỏng</span>
            <span role="listitem"><NotebookPen aria-hidden="true" />Tình huống đời thường</span>
            <span role="listitem"><Sprout aria-hidden="true" />Gia đình & Nhà trường</span>
          </div>
        </div>
        </div>
        <figure class="summary-idea-image">
          <span class="idea-tape" aria-hidden="true"></span>
          <div class="product-labels" aria-label="Các thành phần của bộ công cụ">
            <span><ImagePreview :src="publicAsset('/images/learning-kit/wallet-photo.png')" alt="Ví vải của bộ công cụ Ví nhỏ thông minh">Ví 4 ngăn</ImagePreview></span>
            <span><ImagePreview :src="publicAsset('/images/learning-kit/situation-card.png')" alt="Thẻ tình huống thực hành quản lý tiền">Thẻ tình huống</ImagePreview></span>
            <span><ImagePreview :src="publicAsset('/images/learning-kit/journal-cover.png')" alt="Sổ theo dõi thu chi">Sổ thu chi</ImagePreview></span>
            <span><ImagePreview :src="publicAsset('/images/learning-kit/personal-goal.png')" alt="Bảng mục tiêu cá nhân">Bảng mục tiêu</ImagePreview></span>
          </div>
          <ImagePreview class="product-photo-link" :src="publicAsset('/images/learning-kit/kit-photo.png')" alt="Bộ công cụ Ví nhỏ thông minh"><img
            :src="publicAsset('/images/learning-kit/kit-photo.png')"
            alt="Bộ sản phẩm thực tế gồm ví đen, sổ thu chi, bảng mục tiêu, thẻ tình huống và tiền mô phỏng"
            loading="lazy"
            width="2048"
            height="1536"
          /></ImagePreview>
          <svg class="product-connectors" viewBox="0 0 600 450" preserveAspectRatio="none" aria-hidden="true">
            <g class="pointer pointer-wallet"><path class="pointer-halo" d="M88 322C116 299 155 307 202 331" /><path class="pointer-curve" d="M88 322C116 299 155 307 202 331" /><path class="pointer-tip-halo" d="M190 319 202 331 186 333" /><path class="pointer-tip" d="M190 319 202 331 186 333" /></g>
            <g class="pointer pointer-cards"><path class="pointer-halo" d="M517 131C494 136 487 165 457 192" /><path class="pointer-curve" d="M517 131C494 136 487 165 457 192" /><path class="pointer-tip-halo" d="M461 176 457 192 473 189" /><path class="pointer-tip" d="M461 176 457 192 473 189" /></g>
            <g class="pointer pointer-journal"><path class="pointer-halo" d="M66 151C79 140 89 123 98 105" /><path class="pointer-curve" d="M66 151C79 140 89 123 98 105" /><path class="pointer-tip-halo" d="M85 113 98 105 98 120" /><path class="pointer-tip" d="M85 113 98 105 98 120" /></g>
            <g class="pointer pointer-goal"><path class="pointer-halo" d="M365 46C337 27 300 41 273 75" /><path class="pointer-curve" d="M365 46C337 27 300 41 273 75" /><path class="pointer-tip-halo" d="M276 58 273 75 290 70" /><path class="pointer-tip" d="M276 58 273 75 290 70" /></g>
          </svg>
          <figcaption>
            <strong>Bộ công cụ Ví nhỏ thông minh</strong>
            <span>Những học liệu cùng em thực hành mỗi ngày.</span>
          </figcaption>
        </figure>
      </Card>
    </motion.div>

    <div class="summary-next-actions">
      <Button as-child><a href="#bo-cong-cu">Khám phá bộ công cụ <ArrowUpRight aria-hidden="true" /></a></Button>
      <a href="#ho-so">Đọc hồ sơ và số liệu dự án <ArrowUpRight aria-hidden="true" /></a>
    </div>
  </section>
</template>

<style scoped>
.project-summary { --ink: #543328; --blue: #b9def6; --pink: #f5c8d7; --yellow: #ffe393; --sage: #d0e7bc; width: min(1240px, calc(100% - 80px)); margin-inline: auto; padding-block: 45px 65px; color: var(--ink); scroll-margin-top: 110px; position: relative; isolation: isolate; }
.project-summary::before { content: ''; position: absolute; z-index: -1; inset: 90px -28px 20px; background: radial-gradient(ellipse at 5% 20%, #ffdf9c44, transparent 45%), radial-gradient(ellipse at 95% 40%, #b9def64d, transparent 45%), radial-gradient(ellipse at 50% 90%, #f5c8d733, transparent 45%); pointer-events: none; }
.summary-heading { position: relative; text-align: center; margin-bottom: 40px; }
.summary-heading > p { display: inline-block; padding: 9px 23px; background: var(--blue); color: #265986; font-size: 11px; letter-spacing: 1.6px; font-weight: 600; transform: rotate(-1deg); border-radius: 30% 5% 20% 6%; }
.summary-heading h2 { margin-top: 17px; font-family: 'Lora', Georgia, serif; font-size: clamp(30px, 3.6vw, 47px); line-height: 1.5; font-weight: 700; letter-spacing: -1.1px; text-decoration: underline; text-decoration-color: #8cb9da; text-decoration-thickness: 3px; text-underline-offset: 10px; }
.summary-mobile-break { display: none; }
.heading-star, .heading-heart { position: absolute; width: 32px; height: 32px; stroke-width: 1.5; }
.heading-star { left: 0; top: 35px; color: #d59e25; transform: rotate(-14deg); fill: #ffe8a6; }
.heading-heart { right: 0; top: 34px; color: #c86e91; transform: rotate(15deg); }
.summary-idea { display: grid; grid-template-columns: .8fr 1.2fr; align-items: center; gap: 34px; background: transparent; border: 0; border-radius: 0; box-shadow: none; color: var(--ink); }
.summary-idea-copy { position: relative; padding: 32px 29px; background: #ffe8a4; background-image: repeating-linear-gradient(12deg, #ffffff26 0 1px, transparent 1px 4px); border: 2px solid #fff7dc; border-radius: 8px 18px 8px 15px; box-shadow: 5px 7px 0 #e9ca7944, 0 12px 25px #a8853d13; transform: rotate(-.6deg); }
.idea-paper-wrap::before, .idea-tape { content: ''; position: absolute; z-index: 3; top: -14px; left: 27%; width: 96px; height: 29px; background-image: repeating-linear-gradient(90deg, #e7a1b899 0 5px, #fff6e580 5px 10px), repeating-linear-gradient(0deg, #e7a1b899 0 5px, #fff6e580 5px 10px); transform: rotate(6deg); }
.idea-eyebrow { color: #79602e; font-size: 9px; font-weight: 600; letter-spacing: 1.2px; }
.summary-idea-copy h3 { display: flex; align-items: center; gap: 12px; font-family: 'Lora', Georgia, serif; font-size: 30px; font-weight: 700; margin-top: 15px; }
.summary-idea-copy h3 > svg { width: 36px; height: 36px; color: #af7921; stroke-width: 1.5; }
.idea-heart { position: absolute; right: 17px; top: 23px; width: 22px; color: #bf6b80; transform: rotate(12deg); }
.summary-idea-copy .idea-lead { font-family: 'Lora', Georgia, serif; font-size: clamp(21px, 2vw, 25px); font-style: italic; line-height: 1.65; margin-block: 20px 17px; }
.summary-idea-copy p { font-size: 13px; line-height: 1.9; color: #694d35; }
.idea-highlights { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
.idea-highlights > span { display: flex; align-items: center; gap: 6px; padding: 9px 10px; background: #fffbeb; border-radius: 13px 5px 13px 5px; font-size: 10px; color: #695038; }
.idea-highlights svg { width: 18px; height: 18px; stroke-width: 1.5; color: #ab7a2e; }
.idea-highlights > span:nth-child(2) { background: #fce0e7; } .idea-highlights > span:nth-child(3) { background: #e4efd5; }
.summary-idea-image { position: relative; margin: 0 8px 0 0; padding: 13px 13px 18px; min-width: 0; background: #fffef8; border: 1px solid #ece0ce; border-radius: 3px 9px 4px 7px; box-shadow: -10px 9px 0 #bddff0, 0 13px 25px #664a271a; transform: rotate(1deg); }
.idea-tape { left: auto; right: 12%; top: -14px; background: repeating-linear-gradient(45deg, #ed9ab6bb 0 7px, #fff6e9bb 7px 14px); }
.summary-idea-image img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: contain; background: #f7f0e2; }
.summary-idea-image figcaption { display: grid; gap: 5px; padding: 16px 7px 0; text-align: center; }
.summary-idea-image figcaption strong { font-family: 'Lora', Georgia, serif; font-size: 17px; font-weight: 500; font-style: italic; }
.summary-idea-image figcaption > span { font-size: 10px; color: #866c53; }
.product-labels { position: absolute; inset: 0; pointer-events: none; z-index: 2; }
.product-labels span { position: absolute; padding: 8px 12px; border: 2px solid #fffaf0; background: var(--pink); font-family: 'Lora', Georgia, serif; font-size: 15px; font-style: normal; font-weight: 600; color: #3e3027; line-height: 1.5; box-shadow: 0 3px 7px #39281b33; border-radius: 5px; transform: rotate(-3deg); }
.product-labels span::after { content: none; }
.product-labels span:nth-child(1) { top: 65%; left: -9px; }
.product-labels span:nth-child(2) { top: 23%; right: -9px; background: #cbe6fa; transform: rotate(4deg); }
.product-labels span:nth-child(3) { top: 30%; left: -9px; background: #cbe6fa; }
.product-labels span:nth-child(4) { top: 3%; right: 18%; background: #e2edc9; }
.product-labels span:nth-child(2)::after, .product-labels span:nth-child(4)::after { right: auto; left: -25px; transform: rotate(160deg); }
.idea-paper-wrap { position: relative; min-width: 0; filter: drop-shadow(3px 7px 3px #98763222); }
.summary-idea-copy { mask: url('/images/scrapbook/torn-paper.svg') center / 100% 100% no-repeat; border: 0; border-radius: 0; box-shadow: none; padding: 35px 29px; }
.summary-chevron { width: 27px; height: 27px; border: 1px solid #fffdf5; }
.product-connectors { position: absolute; z-index: 2; top: 13px; left: 13px; width: calc(100% - 26px); height: calc((100% - 85px)); pointer-events: none; fill: none; stroke: #d4efff; stroke-width: 3; stroke-dasharray: 7 6; filter: drop-shadow(0 1px 1px #193d59); stroke-linecap: round; }
.product-connectors .arrow-tips { stroke-dasharray: none; }
.summary-idea-image { transform: rotate(-1deg); }

@media (hover: hover) and (prefers-reduced-motion: no-preference) { .summary-topic { transition: box-shadow .2s; } .summary-topic:hover { filter: drop-shadow(1px 9px 5px #84684d28); } }
@media (max-width: 1050px) { .summary-idea { gap: 25px; grid-template-columns: 1fr 1fr; } .summary-idea-copy { padding: 27px 22px; } .summary-path { flex-direction: column; align-items: stretch; } .summary-path > p { width: fit-content; } .summary-path strong { display: inline; margin-left: 8px; } .summary-topic h3 { font-size: 20px; } .summary-topics { gap: 15px; } }
@media (max-width: 760px) { .project-summary { width: calc(100% - 40px); padding-block: 32px 45px; } .summary-heading { margin-bottom: 33px; } .summary-heading h2 { font-size: clamp(29px, 5.4vw, 38px); } .summary-mobile-break { display: block; } .heading-heart, .heading-star { width: 22px; height: 22px; top: -6px; } .summary-idea { grid-template-columns: 1fr; gap: 32px; } .summary-idea-copy { padding: 27px 23px; } .summary-idea-image { margin-inline: 8px; } .summary-topics { grid-template-columns: 1fr; gap: 22px; } .summary-topic summary { min-height: 0; padding: 23px; } .topic-header-left { flex-direction: row; gap: 15px; } .summary-topic-icon { flex-shrink: 0; } .summary-topic h3 { padding-right: 22px; font-size: 22px; } .summary-path { padding: 20px 17px; } .summary-path ol { grid-template-columns: 1fr 1fr; gap: 23px; } .summary-path li:nth-child(2)::after { display: none; } .summary-handnote { font-size: 13px; text-align: center; } }
@media (max-width: 380px) { .summary-heading > p { font-size: 9px; padding-inline: 13px; } .summary-heading h2 { font-size: 27px; } .product-labels span { font-size: 12px; padding: 7px 9px; } .summary-path li { font-size: 10px; gap: 7px; } .summary-path li > span { width: 30px; height: 30px; } }
@media (max-width: 760px) { .summary-idea-copy { padding: 30px 24px; } .summary-topic summary { min-height: 0; padding-bottom: 43px; } .topic-header-left { display: grid; } .summary-path li > strong { font-size: 10px; margin: 0; } .product-connectors { stroke-width: 2.5; } }
@media (max-width: 760px) { .product-labels span { font-family: var(--font-sans); font-size: 13px; padding: 7px 10px; } }

.product-photo-link { display: block; position: relative; border-radius: 3px; }
.photo-zoom-hint { position: absolute; bottom: 10px; right: 10px; display: flex; align-items: center; gap: 7px; padding: 9px 13px; background: #fffdf5; color: #244f73; font-size: 13px; font-weight: 600; border: 1px solid #b9ccdb; border-radius: 7px; box-shadow: 0 2px 8px #0003; }
.photo-zoom-hint svg { width: 18px; height: 18px; }
.product-photo-link:focus-visible { outline: 3px solid #285b83; outline-offset: 4px; }
.summary-idea-image { display: flex; flex-direction: column; }
.product-labels { position: static; order: 1; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; padding: 15px 0 0; pointer-events: auto; }
.product-labels span, .product-labels span:nth-child(n) { position: static; transform: none; font-family: var(--font-sans); font-size: 14px; font-weight: 600; font-style: normal; padding: 8px 12px; color: #3e3027; box-shadow: none; border: 1px solid #947d6533; }
.product-connectors { display: none; }
.summary-idea-image figcaption { order: 2; }
@media (max-width: 500px) { .product-labels span, .product-labels span:nth-child(n) { font-size: 12px; padding: 8px 10px; } .photo-zoom-hint { font-size: 12px; padding: 7px 10px; } }

.summary-idea-image { display: block; }
.product-labels { position: absolute; inset: 13px 13px auto; height: auto; aspect-ratio: 4 / 3; display: block; padding: 0; pointer-events: none; z-index: 3; }
.product-labels span, .product-labels span:nth-child(n) { position: absolute; font-size: 14px; font-family: var(--font-sans); font-weight: 600; padding: 8px 11px; border: 2px solid #fffdf5; box-shadow: 0 2px 6px #33221144; transform: rotate(-3deg); color: #30271f; line-height: 1.5; }
.product-labels span:nth-child(1) { left: -10px; top: 69%; background: #ffdce8; }
.product-labels span:nth-child(2) { right: -10px; top: 22%; background: #d4edff; transform: rotate(3deg); }
.product-labels span:nth-child(3) { left: -10px; top: 28%; background: #d4edff; }
.product-labels span:nth-child(4) { right: 15%; top: 0; background: #e1efc9; }
.product-connectors { display: block; position: absolute; top: 13px; left: 13px; width: calc(100% - 26px); height: auto; aspect-ratio: 4 / 3; z-index: 2; pointer-events: none; fill: none; filter: none; }
.connector-outlines path { stroke: #fffdf2; stroke-width: 7; stroke-dasharray: none; stroke-linecap: round; }
.connector-lines path { stroke: #235d89; stroke-width: 2.5; stroke-dasharray: 7 5; stroke-linecap: round; marker-end: url(#summary-arrow-tip); }
@media (max-width: 500px) { .product-labels span, .product-labels span:nth-child(n) { font-size: 11px; padding: 6px 8px; } }

.product-connectors { stroke-dasharray: none; stroke-width: 0; }
.pointer { --pointer-color: #376f99; }
.pointer-wallet { --pointer-color: #a84e76; }
.pointer-goal { --pointer-color: #567847; }
.pointer-halo, .pointer-tip-halo { fill: none; stroke: #fffdf4; stroke-width: 5; stroke-linecap: round; stroke-linejoin: round; opacity: .92; }
.pointer-curve { fill: none; stroke: var(--pointer-color); stroke-width: 2; stroke-dasharray: 5 6; stroke-linecap: round; }
.pointer-tip { fill: none; stroke: var(--pointer-color); stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
@media (prefers-reduced-motion: no-preference) { .pointer-curve { transition: stroke-width .2s; } .summary-idea-image:hover .pointer-curve { stroke-width: 2.5; } }
.collapse-button { margin-top: 18px; min-height: 44px; width: fit-content; color: #6d5037; }
.collapse-button svg { transform: rotate(180deg); }

.product-labels > span { pointer-events: auto; }
.product-labels :deep(.image-preview-trigger) { padding: 0; min-height: 30px; font: inherit; color: inherit; overflow: visible; border-radius: 3px; }
.product-labels :deep(.image-preview-hint) { display: none; }
.product-labels :deep(.image-preview-trigger:focus-visible) { outline: 2px solid #235d89; outline-offset: 4px; }
.product-labels > span:hover { outline: 2px solid #fffdf5; box-shadow: 0 3px 10px #33221155; }

@media (max-width: 760px) { .summary-path { padding: 17px 0 0; } .summary-path ol { gap: 18px 14px; } .summary-path li { padding: 16px 13px; } .summary-path li > strong { font-size: 14px; } }

.summary-next-actions { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 16px 25px; margin-top: 33px; }
.summary-next-actions > :first-child { background: #57392b; color: #fffaf0; padding: 13px 19px; min-height: 46px; height: auto; border-radius: 24px; font-size: 13px; }
.summary-next-actions > a:last-child { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; color: #37668a; text-decoration: underline; text-underline-offset: 4px; }
.summary-next-actions svg { width: 16px; height: 16px; }
</style>
