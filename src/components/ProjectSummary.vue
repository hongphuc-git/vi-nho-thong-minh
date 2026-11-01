<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { motion } from 'motion-v'
import { ArrowUpRight, Coins, NotebookPen, Sprout } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ImagePreview from '@/components/ImagePreview.vue'

</script>

<template>
  <section id="tom-tat" class="project-summary" aria-labelledby="project-summary-title">
    <header class="summary-heading">
      <p>DỰ ÁN TRONG MỘT PHÚT</p>
      <h2 id="project-summary-title">Một chiếc ví nhỏ.<br class="summary-mobile-break" /> Một hành trình lớn.</h2>
    </header>

    <motion.div
      :initial="{ opacity: 0, y: 14 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }"
      :transition="{ duration: 0.45 }"
    >
      <Card class="summary-idea">
        <div class="summary-idea-copy">
          <p class="idea-eyebrow"><span aria-hidden="true"></span> HỌC TỪ NHỮNG ĐIỀU NHỎ</p>
          <h3>Học cách quản lý tiền từ <em>những lựa chọn nhỏ</em> mỗi ngày.</h3>
          <p class="idea-description">Một bộ công cụ trực quan giúp học sinh THCS tập chi tiêu, tiết kiệm, đặt mục tiêu và sẻ chia. Kết hợp ví bốn ngăn, sổ thu chi và các tình huống đời thường, với phụ huynh và thầy cô cùng đồng hành.</p>
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
            <ImagePreview class="product-photo-link" :src="publicAsset('/images/learning-kit/kit-photo.png')" alt="Bộ công cụ Ví nhỏ thông minh">
              <img
                :src="publicAsset('/images/learning-kit/kit-photo.png')"
                alt="Bộ sản phẩm thực tế gồm ví đen, sổ thu chi, bảng mục tiêu, thẻ tình huống và tiền mô phỏng"
                loading="lazy"
                width="2048"
                height="1536"
              />
            </ImagePreview>
            <figcaption>
              <span class="photo-caption-marker" aria-hidden="true">01</span>
              <div><strong>Bộ công cụ Ví nhỏ thông minh</strong><span>Những học liệu cùng em thực hành mỗi ngày.</span></div>
            </figcaption>
          </figure>
        </div>
      </Card>
    </motion.div>
  </section>
</template>

<style scoped>
.project-summary { --ink: #543328; width: min(1240px, calc(100% - 80px)); margin-inline: auto; padding-block: 48px 64px; color: var(--ink); scroll-margin-top: 110px; }
.summary-heading { text-align: center; margin-bottom: 34px; }
.summary-heading > p { display: inline-block; padding: 7px 15px; border: 1px solid #e6bacb; border-radius: 7px; background: #f7dce7; color: #80435b; font-size: 14px; letter-spacing: 1px; font-weight: 600; }
.summary-heading h2 { margin-top: 16px; font-family: 'Lora', Georgia, serif; font-size: clamp(29px, 3.3vw, 43px); line-height: 1.45; font-weight: 600; letter-spacing: -.9px; text-wrap: balance; }
.summary-mobile-break { display: none; }
.summary-idea { display: grid; grid-template-columns: 1fr 1fr; align-items: start; gap: 28px clamp(28px, 4vw, 48px); padding: clamp(26px, 3.5vw, 44px); background: #fbe7ef; border: 1px solid #e8bfce; border-radius: 24px; box-shadow: 0 12px 36px #99546d0d; color: var(--ink); }
.summary-idea-copy, .summary-visual { min-width: 0; }
.idea-eyebrow { display: flex; align-items: center; gap: 9px; font-size: 14px; font-weight: 600; letter-spacing: .7px; line-height: 1.7; color: #5c4633; }
.idea-eyebrow > span { width: 7px; height: 7px; flex-shrink: 0; border-radius: 50%; background: #b96d8b; }
.summary-idea-copy h3 { max-width: 510px; margin-top: 19px; font-family: 'Lora', Georgia, serif; font-size: clamp(28px, 2.7vw, 37px); line-height: 1.45; font-weight: 600; letter-spacing: -.6px; text-wrap: balance; }
.summary-idea-copy h3 em { color: #914b68; font-weight: 500; }
.idea-description { margin-top: 20px; max-width: 490px; color: #5c4633; font-size: 15px; line-height: 1.9; }
.idea-highlights { display: flex; flex-wrap: wrap; gap: 12px 18px; margin: 23px 0 0; padding: 0; list-style: none; }
.idea-highlights li { display: flex; align-items: center; gap: 6px; color: #5c4633; font-size: 14px; line-height: 1.6; }
.idea-highlights svg { width: 17px; height: 17px; flex-shrink: 0; color: #527d98; stroke-width: 1.6; }
.summary-next-actions { display: flex; flex-direction: column; align-items: flex-start; gap: 9px; margin-top: 28px; }
.summary-primary-action { min-height: 46px; height: auto; max-width: 100%; gap: 12px; padding: 12px 19px; border-radius: 12px; background: #583023; color: #fffcf5; white-space: normal; text-align: center; font-size: 15px; line-height: 1.6; }
.summary-secondary-action { min-height: 44px; height: auto; max-width: 100%; gap: 7px; padding: 8px 0; color: #356c91; font-size: 14px; white-space: normal; line-height: 1.6; text-align: left; text-decoration: underline; text-underline-offset: 4px; }
.summary-next-actions svg { width: 16px; height: 16px; flex-shrink: 0; }
.summary-next-actions a:focus-visible { outline: 3px solid #376e95; outline-offset: 4px; }
.summary-idea-image { position: relative; margin: 5px 3px 0; padding: 17px 17px 0; background: #fff1f5; border: 1px solid #e5bbca; border-radius: 9px; box-shadow: 0 5px 15px #5830230c; transform: rotate(-.7deg); }
.summary-photo-tape { position: absolute; z-index: 1; top: -10px; left: calc(50% - 37px); width: 74px; height: 23px; background: repeating-linear-gradient(90deg, #d998b099 0 5px, #fce3edbb 5px 10px); transform: rotate(3deg); pointer-events: none; }
.product-photo-link { border-radius: 4px; }
.product-photo-link :deep(.image-preview-trigger:focus-visible) { outline: 3px solid #356c91; outline-offset: 4px; }
.product-photo-link :deep(.image-preview-hint) { font-size: 14px; padding: 8px 11px; color: #5c4633; }
.product-photo-link img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: contain; background: #fff1f5; }
.summary-idea-image figcaption { display: flex; align-items: center; gap: 12px; padding: 18px 0 20px; }
.photo-caption-marker { display: grid; place-items: center; width: 34px; height: 39px; flex-shrink: 0; border: 1px solid #dbacbf; border-radius: 7px; background: #f6d7e4; color: #80435b; font-family: 'Lora', Georgia, serif; font-size: 15px; }
.summary-idea-image figcaption > div { display: grid; gap: 4px; min-width: 0; }
.summary-idea-image figcaption strong { font-family: 'Lora', Georgia, serif; font-size: 15px; line-height: 1.5; font-weight: 600; }
.summary-idea-image figcaption div > span { font-size: 14px; line-height: 1.7; color: #5c4633; }
@media (hover: hover) and (prefers-reduced-motion: no-preference) { .summary-primary-action { transition: background-color .2s, transform .2s; } .summary-primary-action:hover { background: #704333; transform: translateY(-2px); } }
@media (max-width: 1000px) { .project-summary { width: calc(100% - 48px); } .summary-idea { gap: 27px; padding: 28px; } .summary-idea-copy h3 { font-size: 29px; } .idea-highlights { gap: 10px 13px; } }
@media (max-width: 760px) { .project-summary { width: calc(100% - 32px); padding-block: 32px 42px; } .summary-heading { margin-bottom: 25px; padding-inline: 8px; } .summary-heading h2 { font-size: clamp(27px, 5vw, 35px); } .summary-mobile-break { display: block; } .summary-idea { grid-template-columns: 1fr; gap: 28px; padding: 25px; border-radius: 20px; } .summary-idea-copy h3 { max-width: 540px; font-size: clamp(28px, 5vw, 35px); } .idea-description { max-width: none; } .summary-next-actions { margin-top: 22px; } .summary-idea-image { transform: none; margin-inline: 0; } }
@media (max-width: 400px) { .summary-idea { padding: 21px 17px; } .idea-eyebrow { letter-spacing: .3px; } .summary-idea-copy h3 { font-size: 27px; } .summary-primary-action { width: 100%; } .summary-idea-image figcaption { padding-inline: 3px; gap: 9px; } .summary-idea-image { padding: 13px 13px 0; } .summary-idea-image figcaption { align-items: flex-start; } }
</style>
