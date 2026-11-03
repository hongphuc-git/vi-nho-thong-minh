<script setup lang="ts">
import { motion } from 'motion-v'
import { PhCamera as Camera, PhHeart as Heart, PhStar as Star } from '@phosphor-icons/vue'
import { Card } from '@/components/ui/card'
import ImagePreview from '@/components/ImagePreview.vue'
import { publicAsset } from '@/lib/publicAsset'

const activities = [
  { file: 'thao-luan-bo-cong-cu', title: 'Cùng xem, cùng góp ý', description: 'Trao đổi về ví, sổ thu–chi, thẻ tình huống và bảng mục tiêu.', alt: 'Bốn thành viên cùng trao đổi quanh bộ công cụ trên bàn học', label: 'CÙNG THẢO LUẬN', featured: true },
  { file: 'thiet-ke-hoc-lieu', title: 'Từng trang học liệu', description: 'Cùng thiết kế bìa sổ và ghi lại các ý tưởng.', alt: 'Các thành viên thiết kế bìa sổ thu–chi trên máy tính và ghi chép bên cạnh', label: 'THIẾT KẾ', featured: false },
  { file: 'cung-lam-mau-vi', title: 'Tự tay làm bộ mẫu', description: 'Cùng xem mẫu giấy trên vải và trao đổi cách làm ví.', alt: 'Bốn thành viên xem mẫu giấy đặt trên tấm vải xanh trong lớp học', label: 'LÀM SẢN PHẨM', featured: false },
  { file: 'gioi-thieu-so-thu-chi', title: 'Kể về điều chúng mình làm', description: 'Giới thiệu sổ theo dõi thu–chi với các bạn trong lớp.', alt: 'Một thành viên trình bày về sổ thu–chi trước các bạn và màn hình lớp học', label: 'GIỚI THIỆU HỌC LIỆU', featured: false },
  { file: 'chia-se-truoc-lop', title: 'Mang ý tưởng đến lớp', description: 'Nhóm cùng giới thiệu ví và các học liệu của dự án.', alt: 'Bốn thành viên đứng trước lớp, cầm ví và các học liệu để giới thiệu', label: 'CHIA SẺ CÙNG CÁC BẠN', featured: false },
]
</script>

<template>
  <section id="hoat-dong-nhom" class="activity-wall" aria-labelledby="activity-wall-title">
    <header class="wall-heading">
      <p><Camera weight="duotone" aria-hidden="true" /> NHẬT KÝ BẰNG ẢNH</p>
      <h2 id="activity-wall-title">Những lúc <em>chúng mình cùng làm.</em></h2>
      <span>Từ bàn học đến những lần chia sẻ trước lớp.</span>
    </header>
    <div class="wall-board">
      <span class="wall-pin pin-left" aria-hidden="true"></span>
      <span class="wall-pin pin-right" aria-hidden="true"></span>
      <div class="wall-top-note"><Star weight="duotone" aria-hidden="true" /><span>Tường hoạt động của chúng mình</span><Heart weight="duotone" aria-hidden="true" /></div>
      <ul class="wall-gallery" aria-label="Ảnh hoạt động nhóm">
        <motion.li v-for="(activity, index) in activities" :key="activity.file" class="wall-item" :class="{ 'wall-item-featured': activity.featured }" :initial="{ opacity: 0, y: 12 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: .35 }">
          <Card class="wall-photo-card">
            <span class="wall-tape" aria-hidden="true"></span>
            <figure>
              <ImagePreview :src="publicAsset(`/images/team-activities/${activity.file}-enhanced.png`)" :alt="activity.alt">
                <img :src="publicAsset(`/images/team-activities/${activity.file}-enhanced.png`)" :alt="activity.alt" width="1920" height="1080" loading="lazy" decoding="async" />
              </ImagePreview>
              <figcaption>
                <span class="wall-photo-label">{{ activity.label }}</span>
                <h3>{{ activity.title }}</h3>
                <p>{{ activity.description }}</p>
                <span class="wall-photo-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
              </figcaption>
            </figure>
          </Card>
        </motion.li>
      </ul>
      <footer class="wall-footer"><Heart weight="duotone" aria-hidden="true" /> Mỗi bức ảnh, một phần hành trình cùng nhau.</footer>
    </div>
  </section>
</template>

<style scoped>
.activity-wall { width: min(1240px, calc(100% - 64px)); margin: 0 auto; padding: 35px 0 65px; color: #54392c; scroll-margin-top: 125px; }
.wall-heading { text-align: center; margin-bottom: 34px; }
.wall-heading > p { display: flex; align-items: center; justify-content: center; gap: 9px; font-size: var(--text-small); letter-spacing: 1px; color: #396884; font-weight: 600; }
.wall-heading > p svg { width: 19px; height: 19px; }
.wall-heading h2 { margin: 12px 0; font: 600 clamp(27px, 3vw, 38px)/1.5 'Lora', Georgia, serif; }
.wall-heading h2 em { font-weight: 500; color: #39779f; }
.wall-heading > span { font-size: 16px; line-height: 1.8; }
.wall-board { position: relative; padding: 30px 32px 22px; border: 1px solid #dfbdc1; border-radius: 20px; background-color: #f3e3de; background-image: radial-gradient(#a8895d16 .8px, transparent .8px), repeating-linear-gradient(115deg, #fff8e733 0 1px, transparent 1px 5px); background-size: 6px 6px, auto; box-shadow: inset 0 0 0 7px #fff7ed66, 0 5px 0 #dbb9c244; }
.wall-pin { position: absolute; top: 13px; width: 13px; height: 13px; border-radius: 50%; background: radial-gradient(circle at 30% 25%, #fff4cc, #c4a365 55%, #7f673b); border: 1px solid #a58b57; box-shadow: 1px 2px 3px #67503144; }
.pin-left { left: 14px; }
.pin-right { right: 14px; }
.wall-top-note { display: flex; align-items: center; justify-content: center; gap: 13px; margin: 0 0 30px; font: italic 500 18px/1.7 'Lora', Georgia, serif; color: #72563c; }
.wall-top-note svg { width: 21px; height: 21px; color: #b17d95; stroke-width: 1.5; }
.wall-top-note svg:first-child { color: #7b9db4; }
.wall-gallery { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; list-style: none; padding: 0; margin: 0; }
.wall-item { min-width: 0; }
.wall-item-featured { grid-column: 1 / -1; width: min(840px, 100%); justify-self: center; }
.wall-photo-card { position: relative; padding: 12px 12px 0; border: 1px solid #e1d3bf; border-radius: 10px; background: #fff7ed; box-shadow: 2px 5px 9px #6b50341a; color: inherit; }
.wall-item:nth-child(2n) .wall-photo-card { transform: rotate(-.7deg); }
.wall-item:nth-child(2n + 3) .wall-photo-card { transform: rotate(.7deg); }
.wall-tape { position: absolute; z-index: 2; left: calc(50% - 36px); top: -12px; width: 72px; height: 24px; background: repeating-linear-gradient(45deg, #c1dce9bb 0 6px, #f8f3e4bb 6px 12px); transform: rotate(-4deg); pointer-events: none; }
.wall-item:nth-child(2n) .wall-tape { background: repeating-linear-gradient(45deg, #edc1d0bb 0 6px, #fff1e2bb 6px 12px); transform: rotate(4deg); }
.wall-photo-card figure { margin: 0; }
.wall-photo-card img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: contain; border-radius: 5px; background: #fff7ed; }
.wall-item-featured .wall-photo-card img { max-height: none; }
.wall-photo-card figcaption { position: relative; padding: 18px 40px 20px 10px; }
.wall-photo-label { font-size: var(--text-caption); line-height: 1.7; letter-spacing: .8px; color: #57788e; font-weight: 600; }
.wall-photo-card h3 { margin-top: 5px; font: 600 22px/1.5 'Lora', Georgia, serif; }
.wall-photo-card figcaption p { margin-top: 5px; font-size: var(--text-small); line-height: 1.85; }
.wall-photo-number { position: absolute; right: 9px; bottom: 22px; font: italic 500 20px 'Lora', Georgia, serif; color: #9a8164; }
.wall-footer { display: flex; align-items: center; justify-content: center; gap: 9px; margin-top: 24px; font: italic 500 16px/1.8 'Lora', Georgia, serif; text-align: center; }
.wall-footer svg { width: 18px; height: 18px; flex-shrink: 0; color: #b77f96; }
@media (max-width: 700px) {
  .activity-wall { width: calc(100% - 32px); padding: 25px 0 45px; }
  .wall-board { padding: 29px 12px 20px; }
  .wall-gallery { grid-template-columns: minmax(0, 1fr); gap: 28px; }
  .wall-item-featured { grid-column: auto; width: 100%; }
  .wall-top-note { font-size: 16px; gap: 9px; }
  .wall-photo-card h3 { font-size: 21px; }
  .wall-photo-card figcaption { padding-left: 5px; }
  .wall-heading > span { font-size: var(--text-small); }
}
@media (prefers-reduced-motion: reduce) {
  .wall-item { opacity: 1 !important; transform: none !important; }
  .wall-photo-card { transform: none !important; }
}
</style>
