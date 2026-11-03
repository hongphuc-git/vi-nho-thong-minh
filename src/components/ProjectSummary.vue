<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { motion } from 'motion-v'
import { ArrowUpRight, Coins, NotebookPen, Sprout, Heart, Star } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ImagePreview from '@/components/ImagePreview.vue'

</script>

<template>
  <section id="tom-tat" class="project-summary" aria-labelledby="project-summary-title">
    <header class="summary-heading">
      <p>KHÁM PHÁ VÍ NHỎ</p>
      <h2 id="project-summary-title">Tập quản lý tiền,<br class="summary-mobile-break" /> bắt đầu từ những điều nhỏ.</h2>
    </header>

    <motion.div
      :initial="{ opacity: 0, y: 14 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }"
      :transition="{ duration: 0.45 }"
    >
      <div class="summary-sheet-wrap">
        <span class="summary-sheet-tape" aria-hidden="true"></span>
        <span class="summary-sheet-clip" aria-hidden="true"></span>
        <div class="summary-sheet-doodles" aria-hidden="true"><Star /><Heart /><svg viewBox="0 0 45 40"><path d="m8 22-5-8m18 3 1-12m10 18 10-7" /></svg></div>
<Card class="summary-idea">
        <div class="summary-idea-copy">
          <p class="idea-eyebrow"><span aria-hidden="true"></span> HỌC TỪ NHỮNG ĐIỀU NHỎ</p>
          <h3>Học cách quản lý tiền từ <em>những lựa chọn nhỏ</em> mỗi ngày.</h3>
          <p class="idea-description">Bốn ngăn ví giúp phân bổ tiền theo mục đích; sổ thu–chi 30 ngày ghi lại việc sử dụng; thẻ tình huống và bảng mục tiêu giúp luyện lựa chọn, lập kế hoạch và tự đánh giá. Các thành phần được dùng cùng nhau trong một quy trình thực hành.</p>
          <ul class="idea-highlights" aria-label="Điểm nổi bật của ý tưởng">
            <li><Coins aria-hidden="true" />Tiền mô phỏng</li>
            <li><NotebookPen aria-hidden="true" />Tình huống đời thường</li>
            <li><Sprout aria-hidden="true" />Gia đình & Nhà trường</li>
          </ul>
          <div class="summary-next-actions">
            <Button as-child class="summary-primary-action"><a href="#bo-cong-cu">Khám phá bộ công cụ <ArrowUpRight aria-hidden="true" /></a></Button>
            <Button as-child variant="link" class="summary-secondary-action"><a href="#ho-so">Đọc hồ sơ và số liệu dự án <ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
        </div>

        <div class="summary-visual">
          <figure class="summary-idea-image">
            <span class="summary-photo-tape" aria-hidden="true"></span>
            <ImagePreview class="product-photo-link" :src="publicAsset('/images/learning-kit/summary-spending-goals.png')" alt="Trang mục tiêu chi tiêu ngắn hạn và dài hạn">
              <img
                :src="publicAsset('/images/learning-kit/summary-spending-goals.png')"
                alt="Mục tiêu chi tiêu với các ô ghi kế hoạch ngắn hạn và dài hạn"
                loading="lazy"
                width="1545"
                height="2000"
              />
            </ImagePreview>
            <figcaption>
              <div><strong>Mục tiêu chi tiêu của em</strong><span>Ghi điều muốn làm, lập kế hoạch ngắn hạn và dài hạn.</span></div>
            </figcaption>
          </figure>
        </div>
      </Card></div>
    </motion.div>
  </section>
</template>

<style scoped>
.project-summary { --ink: #543328; width: min(1240px, calc(100% - 80px)); margin-inline: auto; padding-block: 48px 64px; color: var(--ink); scroll-margin-top: 110px; }
.summary-heading { text-align: center; margin-bottom: 34px; }
.summary-heading > p { display: inline-block; padding: 7px 15px; border: 1px solid #bfd7e7; border-radius: 7px; background: #e4f1fa; color: #356381; font-size: var(--text-body); letter-spacing: 1px; font-weight: 600; }
.summary-heading h2 { margin-top: 16px; font-family: 'Lora', Georgia, serif; font-size: clamp(29px, 3.3vw, 43px); line-height: 1.45; font-weight: 600; letter-spacing: -.9px; text-wrap: balance; }
.summary-mobile-break { display: none; }
.summary-idea { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 28px clamp(28px, 4vw, 48px); padding: clamp(26px, 3.5vw, 44px); background: linear-gradient(120deg, #fffaf0, #fffdf7 65%, #edf5f9); border: 1px solid #e1d5c2; border-radius: 24px; box-shadow: 0 5px 0 #e8ddcb66, 0 14px 30px #7963440c; color: var(--ink); }
.summary-idea-copy, .summary-visual { min-width: 0; }
.idea-eyebrow { display: flex; align-items: center; gap: 9px; font-size: var(--text-body); font-weight: 600; letter-spacing: .7px; line-height: 1.7; color: #5c4633; }
.idea-eyebrow > span { width: 7px; height: 7px; flex-shrink: 0; border-radius: 50%; background: #7f9eaf; }
.summary-idea-copy h3 { max-width: 510px; margin-top: 19px; font-family: 'Lora', Georgia, serif; font-size: clamp(28px, 2.7vw, 37px); line-height: 1.45; font-weight: 600; letter-spacing: -.6px; text-wrap: balance; }
.summary-idea-copy h3 em { color: #396f95; font-weight: 500; text-decoration: underline; text-decoration-color: #f1d58b; text-decoration-thickness: 3px; text-underline-offset: 7px; }
.idea-description { margin-top: 20px; max-width: 490px; color: #5c4633; font-size: var(--text-body); line-height: 1.9; }
.idea-highlights { display: flex; flex-wrap: wrap; gap: 12px 18px; margin: 23px 0 0; padding: 0; list-style: none; }
.idea-highlights li { display: flex; align-items: center; gap: 7px; padding: 8px 10px; border: 1px solid #d4e3ec; border-radius: 8px; background: #edf5fa; color: #5c4633; font-size: var(--text-body); line-height: 1.6; }
.idea-highlights li:nth-child(2) { background: #fff3cf; border-color: #ecdfb6; }
.idea-highlights li:nth-child(3) { background: #eaf1e1; border-color: #d6e2c7; }
.idea-highlights svg { width: 17px; height: 17px; flex-shrink: 0; color: #527d98; stroke-width: 1.6; }
.summary-next-actions { display: flex; flex-direction: column; align-items: flex-start; gap: 9px; margin-top: 28px; }
.summary-primary-action { min-height: 46px; height: auto; max-width: 100%; gap: 12px; padding: 12px 19px; border-radius: 12px; background: #583023; color: #fffcf5; white-space: normal; text-align: center; font-size: var(--text-body); line-height: 1.6; }
.summary-secondary-action { min-height: 44px; height: auto; max-width: 100%; gap: 7px; padding: 8px 0; color: #356c91; font-size: var(--text-body); white-space: normal; line-height: 1.6; text-align: left; text-decoration: underline; text-underline-offset: 4px; }
.summary-next-actions svg { width: 16px; height: 16px; flex-shrink: 0; }
.summary-next-actions a:focus-visible { outline: 3px solid #376e95; outline-offset: 4px; }
.summary-idea-image { position: relative; margin: 5px 3px 0; padding: 17px 17px 0; background: #e4f0f8; border: 1px solid #c0d7e5; border-radius: 9px; box-shadow: 6px 7px 0 #c9dfea55, 0 7px 17px #5830230c; transform: rotate(-.7deg); }
.summary-photo-tape { position: absolute; z-index: 1; top: -10px; left: calc(50% - 37px); width: 74px; height: 23px; background: repeating-linear-gradient(45deg, #eacb7eaa 0 6px, #fff7e5cc 6px 12px); transform: rotate(3deg); pointer-events: none; }
.product-photo-link { border-radius: 4px; }
.product-photo-link :deep(.image-preview-trigger:focus-visible) { outline: 3px solid #356c91; outline-offset: 4px; }
.product-photo-link :deep(.image-preview-hint) { font-size: var(--text-body); padding: 8px 11px; color: #5c4633; }
.product-photo-link img { display: block; width: 100%; height: auto; max-height: 420px; aspect-ratio: 1545 / 2000; object-fit: contain; background: #fffdf7; }
.summary-idea-image figcaption { display: flex; align-items: center; gap: 12px; padding: 18px 0 20px; color: #4c5f6e; }
.summary-idea-image figcaption > div { display: grid; gap: 4px; min-width: 0; }
.summary-idea-image figcaption strong { font-family: 'Lora', Georgia, serif; font-size: var(--text-body); line-height: 1.5; font-weight: 600; }
.summary-idea-image figcaption div > span { font-size: var(--text-body); line-height: 1.7; color: #5c4633; }
@media (hover: hover) and (prefers-reduced-motion: no-preference) { .summary-primary-action { transition: background-color .2s, transform .2s; } .summary-primary-action:hover { background: #704333; transform: translateY(-2px); } }
@media (max-width: 1000px) { .project-summary { width: calc(100% - 48px); } .summary-idea { gap: 27px; padding: 28px; } .summary-idea-copy h3 { font-size: 29px; } .idea-highlights { gap: 10px 13px; } }
@media (max-width: 760px) { .project-summary { width: calc(100% - 32px); padding-block: 32px 42px; } .summary-heading { margin-bottom: 25px; padding-inline: 8px; } .summary-heading h2 { font-size: clamp(27px, 5vw, 35px); } .summary-mobile-break { display: block; } .summary-idea { grid-template-columns: 1fr; gap: 28px; padding: 25px; border-radius: 20px; } .summary-idea-copy h3 { max-width: 540px; font-size: clamp(28px, 5vw, 35px); } .idea-description { max-width: none; } .summary-next-actions { margin-top: 22px; } .summary-idea-image { transform: none; margin-inline: 0; } }
@media (max-width: 400px) { .summary-idea { padding: 21px 17px; } .idea-eyebrow { letter-spacing: .3px; } .summary-idea-copy h3 { font-size: 27px; } .summary-primary-action { width: 100%; } .summary-idea-image figcaption { padding-inline: 3px; gap: 9px; } .summary-idea-image { padding: 13px 13px 0; } .summary-idea-image figcaption { align-items: flex-start; } }

/* One continuous sheet: the image is printed on the same paper as the copy. */
.summary-sheet-wrap { position: relative; isolation: isolate; filter: drop-shadow(0 8px 5px #7b604a1c); }
.summary-sheet-tape { position: absolute; top: -13px; left: calc(50% - 55px); width: 110px; height: 31px; z-index: 2; background: repeating-linear-gradient(45deg, #d4bc86aa 0 6px, #fff2d6bb 6px 12px); transform: rotate(-4deg); pointer-events: none; }
.summary-idea { background-color: #fffaf0; background-image: repeating-linear-gradient(17deg, #a486570a 0 1px, transparent 1px 4px), repeating-linear-gradient(107deg, #ffffff66 0 1px, transparent 1px 7px); border: 0; border-radius: 0; box-shadow: none; mask: url('/images/scrapbook/team-torn-edge.svg') center / 100% 100% no-repeat; padding: clamp(29px, 3.5vw, 46px); }
.summary-idea-image { margin: 0; padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; transform: none; }
.summary-photo-tape { display: none; }
.product-photo-link, .product-photo-link img { border-radius: 0; background: #fffdf5; }
.summary-idea-image figcaption { padding: 17px 0 0; border-top: 1px dashed #d7c8b1; margin-top: 14px; }
.idea-highlights li { border: 0; background: #e9f1f6; border-radius: 3px; }
@media (max-width: 760px) { .summary-idea { padding: 30px 25px; border-radius: 0; } .summary-idea-image { padding: 0; } }
@media (max-width: 400px) { .summary-idea { padding: 27px 20px; } .summary-idea-image { padding: 0; } }

.summary-sheet-clip { position: absolute; z-index: 3; top: -15px; right: 34px; width: 24px; height: 78px; border: 3px solid #7299b4; border-radius: 16px; transform: rotate(17deg); box-shadow: 1px 2px 2px #674f3022; pointer-events: none; }
.summary-sheet-clip::after { content: ''; position: absolute; inset: 5px 4px 9px; border: 2px solid #7299b4; border-top: 0; border-radius: 0 0 9px 9px; }
.summary-sheet-doodles { pointer-events: none; position: absolute; inset: 0; z-index: 2; }
.summary-sheet-doodles > svg:first-child { position: absolute; left: -20px; bottom: 40px; width: 34px; height: 34px; color: #c99b42; fill: #fff0bd; stroke-width: 1.4; transform: rotate(-14deg); }
.summary-sheet-doodles > svg:nth-child(2) { position: absolute; right: -15px; bottom: 26px; width: 25px; height: 25px; color: #bd7892; fill: #f9dfe9; stroke-width: 1.5; transform: rotate(15deg); }
.summary-sheet-doodles > svg:last-child { position: absolute; left: 17px; top: -27px; width: 39px; height: 36px; fill: none; stroke: #be9849; stroke-width: 2; stroke-linecap: round; }
@media (max-width: 760px) { .summary-sheet-clip { right: 21px; width: 19px; height: 62px; border-width: 2px; top: -12px; } .summary-sheet-clip::after { border-width: 1.5px; inset: 4px 3px 7px; } .summary-sheet-doodles > svg:first-child { width: 25px; height: 25px; left: -10px; } .summary-sheet-doodles > svg:nth-child(2) { right: -9px; width: 21px; height: 21px; } }

.summary-sheet-wrap::before { content: ''; position: absolute; z-index: -1; inset: -9px -11px -12px -11px; background-color: #bddbed; background-image: repeating-linear-gradient(15deg, #ffffff33 0 1px, transparent 1px 4px); mask: url('/images/scrapbook/team-torn-edge.svg') center / 100% 100% no-repeat; transform: rotate(.8deg); pointer-events: none; }
@media (max-width: 760px) { .summary-sheet-wrap::before { inset: -7px -6px -9px; transform: rotate(.5deg); } }
.summary-idea-image figcaption { display: block; margin-top: 13px; padding: 15px 3px 4px; border-top: 1px solid #e6dac7; color: #5c4030; }
.summary-idea-image figcaption > div { gap: 5px; }
.summary-idea-image figcaption strong { font-size: var(--text-body); font-weight: 600; line-height: 1.6; color: #5c4030; }
.summary-idea-image figcaption div > span { max-width: 40ch; font-size: var(--text-small); line-height: 1.85; color: #826d56; }
@media (max-width: 400px) { .summary-idea-image figcaption { padding: 13px 0 3px; } .summary-idea-image figcaption strong { font-size: var(--text-body); } }
</style>
