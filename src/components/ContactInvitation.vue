<script setup lang="ts">
import { motion } from 'motion-v'
import { computed, ref } from 'vue'
import { ArrowUpRight, Check, GraduationCap, Heart, Mail, MessageCircle, Users, NotebookPen } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ImagePreview from '@/components/ImagePreview.vue'
import { publicAsset } from '@/lib/publicAsset'
import PracticeStarter from '@/components/PracticeStarter.vue'

const learningPages = [
  { id: 'goals', title: 'Mục tiêu chi tiêu', image: publicAsset('/images/learning-kit/spending-goals.png'), description: 'Trang ghi mục tiêu ngắn hạn và dài hạn trong sổ thu–chi.' },
  { id: 'review', title: 'Tổng kết tháng', image: publicAsset('/images/learning-kit/monthly-review.png'), description: 'Trang nhìn lại nguồn thu, mục tiêu và chi tiêu trong tháng.' },
  { id: 'money', title: 'Tiền mô phỏng', image: publicAsset('/images/learning-kit/simulation-banknotes.png'), description: 'Mẫu thẻ tiền mô phỏng dùng cho hoạt động thực hành.' },
]
const conversationTopics = [
  { title: 'Tìm hiểu bộ công cụ', message: 'Tôi muốn tìm hiểu các học liệu trong bộ công cụ và cách sử dụng.' },
  { title: 'Đồng hành cùng con tại nhà', message: 'Tôi muốn trao đổi cách sử dụng bộ công cụ để thực hành cùng con tại nhà.' },
  { title: 'Hoạt động tại lớp học hoặc CLB', message: 'Tôi muốn trao đổi về khả năng tổ chức hoạt động trải nghiệm tại lớp học hoặc câu lạc bộ.' },
]
const selectedTopic = ref('Tìm hiểu bộ công cụ')
function composeEmail(title: string, message: string): string {
  return `mailto:thuha03ulis@gmail.com?subject=${encodeURIComponent(title + ' — Ví nhỏ thông minh')}&body=${encodeURIComponent('Chào cô Hà và nhóm Ví nhỏ thông minh,\n\n' + message + '\n\nThông tin tôi muốn trao đổi thêm: ')}`
}
const emailLink = computed(() => {
  const topic = conversationTopics.find(item => item.title === selectedTopic.value)
  return composeEmail(topic?.title ?? 'Tìm hiểu bộ công cụ', topic?.message ?? 'Tôi muốn tìm hiểu về dự án.')
})
const trialLink = composeEmail('Hỏi về dùng thử', 'Tôi muốn hỏi về khả năng dùng thử bộ công cụ. Mong nhóm trao đổi về hình thức, thời gian và điều kiện trải nghiệm phù hợp.')
</script>

<template>
  <section id="lien-he" class="invitation-section" aria-labelledby="contact-title">
    <header class="invitation-heading">
      <p class="invitation-margin-note">Những kỹ năng nhỏ.<br />Tạo nên<br />thay đổi lớn.<span aria-hidden="true">☺</span></p>
      <p class="invitation-eyebrow"><MessageCircle aria-hidden="true" /> GÓC KẾT NỐI</p>
      <h2 id="contact-title">Một chiếc ví nhỏ.<br /><em>Một khởi đầu ý nghĩa.</em></h2>
      <aside class="invitation-pink-note"><span class="invitation-note-tape" aria-hidden="true"></span><p>Giáo dục tài chính<br />cho thế hệ<br />tự tin hơn <Heart aria-hidden="true" /></p></aside>
    </header>

    <div class="invitation-sheet">
      <motion.div class="invitation-product-wrap" :initial="{ opacity: 0, y: 12 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: .4 }">
        <Card class="invitation-product">
          <span class="invitation-tape" aria-hidden="true"></span>
          <header class="invitation-product-heading"><h3>BỘ CÔNG CỤ CÁ NHÂN</h3><span>Đang hoàn thiện mẫu</span></header>
          <div class="invitation-journal-spread" role="group" aria-label="Hai trang học liệu trong sổ thu–chi">
            <figure><ImagePreview :src="publicAsset('/images/learning-kit/contact-journal-instructions.png')" alt="Trang hướng dẫn sử dụng sổ thu–chi"><img :src="publicAsset('/images/learning-kit/contact-journal-instructions.png')" alt="Hướng dẫn ghi sổ và nhìn lại cách sử dụng tiền" width="1545" height="2000" loading="lazy" /></ImagePreview><figcaption>Hiểu cách bắt đầu</figcaption></figure>
            <figure><ImagePreview :src="publicAsset('/images/learning-kit/contact-spending-diary.png')" alt="Trang nhật ký chi tiêu với bốn ngăn tiền và tổng kết ngày"><img :src="publicAsset('/images/learning-kit/contact-spending-diary.png')" alt="Nhật ký chi tiêu hằng ngày trong học liệu của dự án" width="1545" height="2000" loading="lazy" /></ImagePreview><figcaption>Tự tay thực hành mỗi ngày</figcaption></figure>
          </div>
          <div class="invitation-details-row">
            <div class="invitation-page-choices" role="group" aria-label="Xem ảnh học liệu chi tiết">
              <figure v-for="page in learningPages" :key="page.id" class="invitation-thumbnail">
                <ImagePreview :src="page.image" :alt="page.description"><img :src="page.image" :alt="page.title" loading="lazy" /></ImagePreview>
                <figcaption>{{ page.title }}</figcaption>
              </figure>
            </div>
            <div class="invitation-price"><span>GIÁ THỬ NGHIỆM DỰ KIẾN</span><p><strong>55.000<small>đ</small></strong><span>/ bộ</span></p><Button as-child class="invitation-trial"><a :href="trialLink">Hỏi về dùng thử <ArrowUpRight aria-hidden="true" /></a></Button><p class="invitation-price-note">Quy cách và giá đang được hoàn thiện. Tiền mô phỏng và bảng mục tiêu in riêng chưa được định giá đầy đủ; nhóm sẽ xác nhận thành phần, chi phí và điều kiện dùng thử khi trao đổi.</p></div>
          </div>
          <PracticeStarter />
        </Card>
      </motion.div>

      <Card class="invitation-copy">
        <span class="invitation-letter-tape" aria-hidden="true"></span>
        <div>
          <p class="invitation-letter-label">GỬI BẠN MỘT LỜI MỜI</p>
          <h3>Bạn muốn trao đổi điều gì?</h3>
          <p class="invitation-intro">Chọn nhu cầu bên dưới để soạn lời nhắn gửi cô hướng dẫn và nhóm. Khả năng dùng thử, quy cách bộ cá nhân và thời gian tổ chức sẽ được trao đổi, xác nhận trước.</p>
        </div>
        <div class="invitation-audiences" aria-label="Đối tượng có thể liên hệ">
          <span><Heart aria-hidden="true" /> Phụ huynh</span>
          <span><GraduationCap aria-hidden="true" /> Thầy cô</span>
          <span><Users aria-hidden="true" /> Lớp học & CLB</span>
        </div>
        <figure class="invitation-teacher-poster">
          <span class="teacher-poster-tape" aria-hidden="true"></span>
          <ImagePreview :src="publicAsset('/images/team-activities/gioi-thieu-so-thu-chi-enhanced.png')" alt="Giới thiệu sổ theo dõi thu–chi trước lớp"><img :src="publicAsset('/images/team-activities/gioi-thieu-so-thu-chi-enhanced.png')" alt="Một thành viên giới thiệu sổ thu–chi với các bạn trong lớp" width="1672" height="941" loading="lazy" /></ImagePreview>
          <figcaption>Cùng chia sẻ, cùng học cách dùng tiền.</figcaption>
        </figure>
        <aside class="invitation-conversation" aria-labelledby="conversation-title">
          <span class="conversation-tape" aria-hidden="true"></span>
          <div class="conversation-heading"><NotebookPen aria-hidden="true" /><h4 id="conversation-title">Chọn chủ đề liên hệ</h4></div>
          <p>Chọn chủ đề, rồi bấm “Gửi lời nhắn” bên dưới.</p>
          <ul>
            <li v-for="subject in conversationTopics" :key="subject.title"><Button type="button" variant="outline" class="conversation-choice" :aria-pressed="selectedTopic === subject.title" @click="selectedTopic = subject.title"><span>{{ subject.title }}</span><Check v-if="selectedTopic === subject.title" aria-hidden="true" /><span v-else class="choice-empty" aria-hidden="true"></span></Button></li>
          </ul>
          <small>Bạn có thể sửa nội dung trước khi gửi.</small>
        </aside>
        <div class="invitation-contact">
          <Button as-child class="invitation-email-button"><a :href="emailLink"><Mail aria-hidden="true" /><span>Gửi lời nhắn cho dự án</span><ArrowUpRight aria-hidden="true" /></a></Button>
        </div>
      </Card>
    </div>

  </section>
</template>

<style scoped>
.invitation-section { width: min(1440px, calc(100% - 80px)); margin: 16px auto 55px; padding-top: 28px; color: #54392c; }
.invitation-heading { position: relative; min-height: 180px; padding: 0 205px 12px; text-align: center; margin-bottom: 38px; }
.invitation-eyebrow { display: flex; align-items: center; justify-content: center; gap: 9px; font-size: var(--text-caption); font-weight: 600; letter-spacing: 2px; line-height: 1.8; color: #39769d; }
.invitation-eyebrow svg { width: 18px; height: 18px; }
.invitation-heading h2 { margin-top: 12px; font-family: 'Lora', Georgia, serif; font-size: clamp(32px, 3.5vw, 49px); font-weight: 700; line-height: 1.4; letter-spacing: -.8px; }
.invitation-heading h2 em { font-weight: 500; color: #39779f; text-decoration: underline; text-decoration-color: #e7a4bb; text-decoration-thickness: 3px; text-underline-offset: 9px; }
.invitation-sheet { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.06fr); gap: 36px; align-items: stretch; }
.invitation-copy { position: relative; display: flex; flex-direction: column; gap: 26px; min-width: 0; padding: 38px 32px 30px; background-color: #fffbf2; background-image: repeating-linear-gradient(0deg, transparent 0 31px, #d9c8a824 31px 32px), repeating-linear-gradient(125deg, #b4996a05 0 1px, transparent 1px 4px); border: 0; border-radius: 1px; box-shadow: -8px 7px 0 #c8dfed, 0 12px 24px #76533412; }
.invitation-letter-tape { position: absolute; left: -19px; top: 0; width: 100px; height: 27px; transform: rotate(-30deg); background: repeating-linear-gradient(135deg, #f0bdd0c9 0 7px, #fbe3e6c9 7px 14px); pointer-events: none; }
.invitation-letter-label { color: #887254; font-size: var(--text-caption); font-weight: 500; letter-spacing: 1.3px; }
.invitation-copy h3 { margin-top: 10px; font-family: 'Lora', Georgia, serif; font-size: clamp(27px, 2.5vw, 36px); font-weight: 700; line-height: 1.4; }
.invitation-intro { margin-top: 17px; font-size: var(--text-body); line-height: 1.95; color: #745b46; }
.invitation-audiences { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.invitation-audiences > span { display: flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 8px; border: 1px solid #e6c4cf; border-radius: 11px; background: #f9e0e5; font-size: var(--text-caption); line-height: 1.7; text-align: center; }
.invitation-audiences > span:nth-child(2) { border-color: #bfd4e3; background: #e0edf6; }
.invitation-audiences > span:nth-child(3) { border-color: #cfd9b3; background: #eaf0d9; }
.invitation-audiences svg { width: 24px; height: 24px; stroke-width: 1.5; flex-shrink: 0; }
.invitation-letter { display: flex; align-items: center; gap: 17px; padding-top: 25px; border-top: 1px dashed #d2bea0; }
.invitation-school-logo { display: block; width: 82px; height: 82px; object-fit: contain; flex-shrink: 0; border-radius: 50%; border: 3px solid #fffdf7; background: #fff; }
.invitation-letter > div { min-width: 0; }
.invitation-letter > div > p { font-size: var(--text-caption); letter-spacing: 1px; font-weight: 600; color: #42789b; }
.invitation-letter h4 { margin-top: 7px; font-family: 'Lora', Georgia, serif; font-size: clamp(20px, 2vw, 27px); line-height: 1.5; font-weight: 600; }
.invitation-letter > div > span { display: block; margin-top: 5px; font-size: var(--text-small); line-height: 1.8; color: #78624a; }
.invitation-contact { margin-top: auto; padding-top: 4px; }
.invitation-email-button { width: 100%; min-height: 60px; height: auto; padding: 15px 20px; display: flex; justify-content: flex-start; gap: 12px; border-radius: 13px; background: #62402f; color: #fffaf1; font-size: var(--text-body); line-height: 1.8; white-space: normal; text-align: left; }
.invitation-email-button:hover { background: #7c5540; }
.invitation-email-button > svg:first-child { width: 23px; height: 23px; flex-shrink: 0; }
.invitation-email-button > svg:last-child { margin-left: auto; width: 18px; height: 18px; flex-shrink: 0; }
.invitation-secondary-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 15px; margin-top: 13px; }
.invitation-call-button { min-height: 46px; height: auto; padding: 11px 15px; gap: 8px; border-radius: 10px; border-color: #bba68a; background: #fffaf0; color: #62402f; font-size: var(--text-small); }
.invitation-call-button svg { width: 17px; height: 17px; }
.invitation-email-address { display: flex; align-items: center; gap: 8px; min-height: 44px; max-width: 100%; color: #39749a; font-size: var(--text-small); line-height: 1.7; text-decoration: underline; text-underline-offset: 4px; }
.invitation-email-address span { overflow-wrap: anywhere; min-width: 0; }
.invitation-email-address svg { width: 18px; height: 18px; flex-shrink: 0; }
.invitation-handnote { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 20px; color: #39769d; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: var(--text-body); line-height: 1.8; text-align: center; }
.invitation-handnote svg { width: 20px; height: 20px; color: #c87a97; flex-shrink: 0; }
.invitation-product-wrap { display: flex; min-width: 0; align-self: stretch; }
.invitation-product { position: relative; display: flex; flex-direction: column; width: 100%; min-width: 0; padding: 20px; border: 0; border-radius: 1px; background-color: #fffdf7; background-image: repeating-linear-gradient(125deg, #b4996a06 0 1px, transparent 1px 4px); box-shadow: 4px 5px 0 #e8d9c2, 0 12px 24px #76533412; }
.invitation-tape { position: absolute; z-index: 1; top: -13px; left: 43%; width: 98px; height: 28px; background: repeating-linear-gradient(90deg, #aac9e2a1 0 7px, #e4eef6b3 7px 14px); transform: rotate(6deg); pointer-events: none; }
.invitation-product-heading { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; padding: 5px 0 14px; }
.invitation-product-heading h3 { font-family: 'Lora', Georgia, serif; font-size: var(--text-body); font-weight: 600; line-height: 1.6; }
.invitation-product-heading > span { padding: 4px 10px; background: #eaf0d9; border: 1px solid #d9e1c3; border-radius: 16px; font-size: var(--text-caption); line-height: 1.6; color: #5b7143; }
.invitation-journal-spread { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; padding: 18px 12px 12px; background: #edf3ed; border: 1px solid #dbe3d4; }
.invitation-journal-spread figure { min-width: 0; margin: 0; padding: 6px 6px 10px; background: #fffef9; box-shadow: 2px 4px 8px #644c3020; transform: rotate(-2deg); }
.invitation-journal-spread figure:nth-child(2) { transform: rotate(2deg); }
.invitation-journal-spread img { display: block; width: 100%; height: auto; aspect-ratio: 1545 / 2000; object-fit: contain; }
.invitation-journal-spread figcaption { padding-top: 10px; text-align: center; font-family: 'Lora', Georgia, serif; font-size: var(--text-caption); font-style: italic; line-height: 1.6; color: #57734b; }
.invitation-details-row { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); gap: 12px; margin-top: 13px; }
.invitation-page-choices { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; min-width: 0; }
.invitation-thumbnail { min-width: 0; margin: 0; padding: 7px 5px; border: 1px solid #e5d8c3; border-radius: 9px; background: #fcf5e7; }
.invitation-thumbnail img { display: block; width: 100%; height: 69px; object-fit: contain; }
.invitation-thumbnail figcaption { padding-top: 7px; font-size: var(--text-caption); line-height: 1.6; text-align: center; color: #735d44; }
.invitation-thumbnail :deep(.image-preview-hint) { right: 3px; bottom: 3px; padding: 4px; font-size: 0; gap: 0; }
.invitation-thumbnail :deep(.image-preview-hint svg) { width: 13px; height: 13px; }
.invitation-price { display: flex; flex-direction: column; justify-content: center; padding: 12px; background: #fff0bd; border: 1px dashed #d7b972; border-radius: 9px; color: #74502d; box-shadow: 2px 3px 0 #eddfba70; }
.invitation-price > span { font-size: var(--text-caption); letter-spacing: .6px; line-height: 1.7; font-weight: 600; }
.invitation-price p { display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px 7px; margin-top: 5px; }
.invitation-price strong { font-family: 'Lora', Georgia, serif; font-size: clamp(27px, 2.7vw, 38px); font-weight: 700; line-height: 1.4; white-space: nowrap; }
.invitation-price small { font-size: var(--text-body); }
.invitation-price p > span { font-size: var(--text-small); }
.invitation-product-footer { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); gap: 18px; margin-top: 0; padding-top: 20px; }
.invitation-includes { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px 12px; margin: 0; padding: 0; list-style: none; align-content: start; }
.invitation-includes li { display: flex; align-items: flex-start; gap: 6px; font-size: var(--text-caption); line-height: 1.8; color: #735b43; }
.invitation-includes svg { width: 16px; height: 16px; margin-top: 2px; padding: 2px; border-radius: 50%; background: #e2ebd6; color: #587540; flex-shrink: 0; }
.invitation-price-note { padding-left: 15px; border-left: 1px dashed #d8c6a9; font-family: 'Lora', Georgia, serif; font-size: var(--text-caption); font-style: italic; line-height: 1.9; color: #7d674e; }
.invitation-bottom-note { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 16px 30px; width: 100%; margin: 28px auto 0; padding: 15px 24px; border: 0; border-radius: 1px; background: #fffaf0; box-shadow: 0 3px 0 #e9ddc8, 0 6px 15px #7653340b; }
.invitation-bottom-note p { display: flex; align-items: center; gap: 10px; font-size: var(--text-small); line-height: 1.8; }
.invitation-bottom-note p + p { border-left: 1px solid #dac6a8; padding-left: 30px; }
.invitation-bottom-note svg { width: 24px; height: 24px; color: #487ca0; flex-shrink: 0; stroke-width: 1.5; }
.invitation-bottom-note p:last-child svg { color: #c87a97; }
@media (max-width: 1150px) {
  .invitation-section { width: calc(100% - 56px); }
  .invitation-sheet { gap: 26px; }
  .invitation-copy { padding: 30px 24px 26px; gap: 22px; }
  .invitation-audiences > span { flex-direction: column; gap: 6px; padding: 10px 5px; }
  .invitation-details-row { grid-template-columns: 1fr; }
  .invitation-price { flex-direction: row; align-items: center; justify-content: space-between; gap: 10px; }
  .invitation-price p { margin-top: 0; }
  .invitation-product-footer { grid-template-columns: 1fr; gap: 12px; }
  .invitation-price-note { padding: 10px 0 0; border-left: 0; border-top: 1px dashed #d8c6a9; font-family: var(--font-sans); font-style: normal; font-size: var(--text-caption); }
}
@media (max-width: 800px) {
  .invitation-section { max-width: 680px; }
  .invitation-sheet { grid-template-columns: 1fr; gap: 34px; }
  .invitation-copy { gap: 24px; }
  .invitation-contact { margin-top: 0; }
  .invitation-audiences > span { flex-direction: row; }
  .invitation-details-row { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); }
  .invitation-price { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
  .invitation-product-footer { grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); }
  .invitation-price-note { padding: 0 0 0 15px; border-top: 0; border-left: 1px dashed #d8c6a9; }
  .invitation-bottom-note { gap: 12px; }
  .invitation-bottom-note p + p { border-left: 0; padding-left: 0; }
}
@media (max-width: 500px) {
  .invitation-section { width: calc(100% - 36px); padding-top: 20px; margin-bottom: 38px; }
  .invitation-heading { margin-bottom: 29px; }
  .invitation-heading h2 { font-size: 29px; letter-spacing: -.6px; }
  .invitation-eyebrow { font-size: var(--text-caption); letter-spacing: 1.3px; }
  .invitation-copy { padding: 30px 19px 24px; box-shadow: -5px 6px 0 #c8dfed; }
  .invitation-copy h3 { font-size: 27px; }
  .invitation-intro { font-size: var(--text-small); }
  .invitation-audiences { gap: 7px; }
  .invitation-audiences > span { flex-direction: column; font-size: var(--text-caption); }
  .invitation-school-logo { width: 66px; height: 66px; }
  .invitation-letter { gap: 12px; }
  .invitation-letter h4 { font-size: 20px; }
  .invitation-letter > div > p { font-size: var(--text-caption); }
  .invitation-letter > div > span { font-size: var(--text-caption); }
  .invitation-email-button { font-size: var(--text-small); padding-inline: 13px; }
  .invitation-secondary-actions { gap: 8px; }
  .invitation-email-address { font-size: var(--text-caption); }
  .invitation-handnote { font-size: var(--text-small); }
  .invitation-product { padding: 16px 12px; }
  .invitation-product-heading h3 { font-size: var(--text-small); }
  .invitation-product-heading > span { font-size: var(--text-caption); }
  .invitation-details-row { grid-template-columns: 1fr; }
  .invitation-thumbnail img { height: 75px; }
  .invitation-price { flex-direction: row; align-items: center; justify-content: space-between; }
  .invitation-price strong { font-size: 32px; }
  .invitation-product-footer { grid-template-columns: 1fr; }
  .invitation-price-note { padding: 11px 0 0; border-left: 0; border-top: 1px dashed #d8c6a9; }
  .invitation-bottom-note { padding: 14px; }
  .invitation-bottom-note p { font-size: var(--text-caption); gap: 8px; }
  .invitation-bottom-note svg { width: 20px; height: 20px; }
}
.invitation-margin-note { position: absolute; top: 14px; left: 20px; width: 165px; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: var(--text-body); line-height: 1.65; color: #39769d; text-align: left; transform: rotate(-8deg); }
.invitation-margin-note > span { display: block; padding-left: 115px; font-size: 28px; line-height: 1; }
.invitation-pink-note { position: absolute; right: 15px; top: 4px; width: 165px; padding: 24px 18px 18px; background-color: #f8dfe3; background-image: linear-gradient(#bb829619 1px, transparent 1px), linear-gradient(90deg, #bb829619 1px, transparent 1px); background-size: 18px 18px; box-shadow: 3px 6px 10px #6749321c; transform: rotate(-8deg); }
.invitation-pink-note p { font-family: 'Lora', Georgia, serif; font-size: var(--text-body); font-style: italic; line-height: 1.65; color: #705c76; text-align: left; }
.invitation-pink-note svg { display: inline-block; vertical-align: middle; width: 19px; height: 19px; color: #c76b8d; }
.invitation-note-tape { position: absolute; width: 50px; height: 20px; right: -11px; top: -5px; transform: rotate(30deg); background: repeating-linear-gradient(90deg, #f8db86b3 0 6px, #ffebb4cc 6px 12px); }
.invitation-copy::after, .invitation-product::after { content: ''; position: absolute; left: 0; right: 0; bottom: -8px; height: 12px; background: #fffbf2; clip-path: polygon(0 0, 100% 0, 100% 55%, 97% 80%, 94% 40%, 90% 75%, 87% 50%, 84% 95%, 80% 60%, 76% 85%, 72% 45%, 68% 80%, 64% 55%, 60% 90%, 56% 50%, 52% 80%, 48% 45%, 44% 90%, 40% 60%, 36% 80%, 32% 45%, 28% 95%, 24% 60%, 20% 85%, 16% 50%, 12% 80%, 8% 45%, 4% 85%, 0 55%); pointer-events: none; }
.invitation-product::after { background: #fffdf7; }
.invitation-letter-tape { z-index: 1; }
@media (min-width: 801px) { .invitation-copy { margin-top: 0; } }
@media (max-width: 1150px) { .invitation-heading { padding-inline: 175px; } .invitation-margin-note { left: 0; width: 145px; font-size: var(--text-body); } .invitation-pink-note { right: 0; width: 145px; padding-inline: 14px; } .invitation-pink-note p { font-size: var(--text-body); } }
@media (max-width: 800px) { .invitation-heading { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; min-height: 0; padding: 0; align-items: center; } .invitation-heading > .invitation-eyebrow, .invitation-heading > h2 { grid-column: 1 / -1; } .invitation-margin-note { position: relative; inset: auto; grid-row: 3; justify-self: center; width: auto; margin-top: 10px; } .invitation-pink-note { position: relative; inset: auto; grid-row: 3; justify-self: center; margin-top: 10px; } }
@media (max-width: 500px) { .invitation-margin-note { font-size: var(--text-small); } .invitation-margin-note > span { padding-left: 75px; font-size: 24px; } .invitation-pink-note { width: 132px; padding: 17px 12px 13px; } .invitation-pink-note p { font-size: var(--text-small); } }

.invitation-conversation { position: relative; padding: 23px 21px 18px; background: #eaf3f8; border: 1px solid #cadde9; border-radius: 4px 12px 5px 11px; transform: rotate(-.5deg); box-shadow: 3px 4px 0 #cfdfeb55; }
.conversation-tape { position: absolute; width: 67px; height: 20px; top: -10px; right: 27px; transform: rotate(6deg); background: repeating-linear-gradient(45deg, #e8c77aaa 0 5px, #fff5debb 5px 10px); }
.conversation-heading { display: flex; align-items: center; gap: 10px; color: #4d6577; }
.conversation-heading > svg { width: 24px; height: 24px; flex-shrink: 0; stroke-width: 1.4; }
.conversation-heading h4 { font-family: 'Lora', Georgia, serif; font-size: 19px; line-height: 1.6; color: #573e2e; font-weight: 500; }
.invitation-conversation > p { margin-top: 8px; font-size: var(--text-small); line-height: 1.8; color: #68717a; }
.invitation-conversation ul { list-style: none; display: grid; gap: 7px; padding: 0; margin: 13px 0 0; }
.invitation-conversation a { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 44px; padding: 9px 12px; background: #fffdf4; border: 1px solid #d9e2e6; border-radius: 6px; color: #3c6684; font-size: var(--text-small); line-height: 1.7; }
.invitation-conversation a > svg { width: 16px; height: 16px; flex-shrink: 0; }
.invitation-conversation a:hover { background: #fff1ce; }
.invitation-conversation a:focus-visible { outline: 2px solid #376e95; outline-offset: 3px; }
.invitation-conversation small { display: block; margin-top: 11px; font-size: var(--text-caption); color: #6c7477; line-height: 1.8; }
@media (max-width: 500px) { .invitation-conversation { padding: 21px 15px 16px; } .conversation-heading h4 { font-size: var(--text-body); } }

.invitation-product { justify-content: space-between; }
.invitation-use-note { padding: 17px; margin-top: 18px; background: #edf3e5; border: 1px dashed #c8d5b5; border-radius: 9px 3px 9px 3px; }
.invitation-use-note h4 { font-family: 'Lora', Georgia, serif; font-size: var(--text-body); font-weight: 500; color: #5c6748; line-height: 1.6; }
.invitation-use-note ol { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 13px; list-style: none; padding: 0; margin: 13px 0 0; }
.invitation-use-note li { display: flex; align-items: flex-start; gap: 8px; font-size: var(--text-caption); line-height: 1.8; color: #667052; }
.invitation-use-note li > span { display: grid; place-items: center; flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: #fffaf0; color: #63804c; font-family: 'Lora', Georgia, serif; font-size: var(--text-small); }
@media (max-width: 500px) { .invitation-use-note ol { grid-template-columns: 1fr; gap: 10px; } .invitation-use-note { padding: 15px; } }

.invitation-school-logo { object-fit: none; object-position: 50% 32%; }
.invitation-letter > img.invitation-school-logo { object-fit: cover; object-position: center; clip-path: circle(50%); }

.invitation-letter > img.invitation-teacher-portrait { object-fit: cover; object-position: 50% 33%; width: 82px; height: 104px; border-radius: 12px; clip-path: none; }
@media (max-width: 500px) { .invitation-letter > img.invitation-teacher-portrait { width: 70px; height: 88px; } }

.invitation-teacher-avatar { display: block; width: 86px; height: 86px; overflow: hidden; flex-shrink: 0; border: 3px solid #fffdf7; border-radius: 50%; background: #fff8eb; box-shadow: 0 0 0 1px #ddd0bb; }
.invitation-teacher-avatar > img { display: block; width: 100%; height: 100%; border: 0; border-radius: 0; object-fit: cover; object-position: 50% 33%; transform: scale(2.5); transform-origin: 50% 33%; }
@media (max-width: 500px) { .invitation-teacher-avatar { width: 72px; height: 72px; } }

.invitation-section { scroll-margin-top: 120px; }
.invitation-product { justify-content: flex-start; gap: 18px; }
.invitation-details-row { grid-template-columns: 1fr; margin: 0; gap: 18px; }
.invitation-price { display: grid; grid-template-columns: 1fr auto; gap: 8px 16px; align-items: center; padding: 18px; }
.invitation-price > span { grid-column: 1; font-size: var(--text-small); letter-spacing: .3px; }
.invitation-price > p:not(.invitation-price-note) { grid-column: 1; margin: 0; }
.invitation-trial { grid-column: 2; grid-row: 1 / span 2; min-height: 46px; height: auto; padding: 11px 15px; background: #62402f; color: #fffaf1; font-size: var(--text-small); gap: 8px; white-space: normal; }
.invitation-trial:hover { background: #7c5540; }
.invitation-trial svg { width: 16px; height: 16px; flex-shrink: 0; }
.invitation-price .invitation-price-note { grid-column: 1 / -1; display: block; padding: 12px 0 0; margin: 4px 0 0; border: 0; border-top: 1px dashed #d8bd7d; font: inherit; font-size: var(--text-small); line-height: 1.8; color: #725b3c; }
.invitation-thumbnail figcaption, .invitation-journal-spread figcaption { font-size: var(--text-small); line-height: 1.7; }
.invitation-thumbnail img { height: 90px; }
.invitation-product-footer { display: block; margin: 0; padding: 0; }
.invitation-product-footer > h4 { font-family: 'Lora', Georgia, serif; font-size: var(--text-body); font-weight: 500; margin-bottom: 12px; }
.invitation-includes { display: flex; flex-wrap: wrap; gap: 10px; }
.invitation-includes li { padding: 7px 10px; border: 1px solid #dfd9c8; background: #fff9ea; border-radius: 6px; font-size: var(--text-small); }
.invitation-use-note { margin: 0; }
.invitation-use-note li { position: relative; font-size: var(--text-small); }
.invitation-use-note li > span { color: #355b2d; background: #d6e7bf; font-weight: 700; border: 1px solid #afc697; }
.invitation-use-note li:not(:last-child)::after { content: ''; width: 10px; border-top: 1px dashed #81946b; position: absolute; right: -12px; top: 12px; }
.invitation-product .invitation-bottom-note { width: 100%; margin: 0; padding: 12px; background: #edf3f8; box-shadow: none; border: 1px solid #d4e1e9; gap: 9px 14px; justify-content: flex-start; }
.invitation-bottom-note p { font-size: var(--text-small); }
.invitation-bottom-note p + p { border: 0; padding: 0; }
.conversation-choice { display: flex; width: 100%; min-height: 46px; height: auto; padding: 11px 12px; justify-content: space-between; gap: 12px; background: #fffdf4; color: #3c6684; border-color: #d9e2e6; font-size: var(--text-small); white-space: normal; text-align: left; line-height: 1.7; }
.conversation-choice[aria-pressed='true'] { background: #d4e6f2; border-color: #7ca6c2; color: #244f6e; box-shadow: inset 3px 0 #608dac; }
.conversation-choice svg, .choice-empty { width: 18px; height: 18px; flex-shrink: 0; }
.choice-empty { border: 1px solid #b9c9d2; border-radius: 50%; }
.invitation-conversation > p { font-size: var(--text-small); color: #596773; }
.invitation-conversation small { font-size: var(--text-small); color: #626d75; }
@media (max-width: 500px) { .invitation-price { grid-template-columns: 1fr; } .invitation-trial { grid-column: 1; grid-row: auto; width: 100%; } .invitation-use-note li::after { display: none; } }

.invitation-teacher-poster { position: relative; margin: 0; padding: 9px; background: #fffdf6; border: 1px solid #e6d9c5; box-shadow: 3px 5px 0 #cfe3ee66; border-radius: 3px; }
.invitation-teacher-poster img { display: block; width: 100%; height: auto; object-fit: contain; border-radius: 0; }
.teacher-poster-tape { position: absolute; z-index: 2; left: calc(50% - 40px); top: -11px; width: 80px; height: 25px; background: repeating-linear-gradient(45deg, #d9bd82aa 0 6px, #fff2d7bb 6px 12px); transform: rotate(-4deg); pointer-events: none; }
.invitation-contact { margin-top: 0; }
.invitation-sheet { align-items: start; }
.invitation-copy, .invitation-product { justify-content: flex-start; }
@media (max-width: 500px) { .invitation-teacher-poster { padding: 7px; } }

/* Each sheet has its own natural height instead of competing in parallel columns. */
.invitation-sheet { grid-template-columns: minmax(0, 1fr); grid-template-areas: "product" "invitation"; gap: 40px; }
.invitation-sheet > .invitation-copy { grid-area: invitation; }
.invitation-sheet > .invitation-product-wrap { grid-area: product; }
.invitation-copy { display: grid; grid-template-columns: minmax(0, 1fr) minmax(260px, .8fr); gap: 23px 35px; align-items: start; padding: 35px; }
.invitation-copy > div:first-of-type, .invitation-audiences, .invitation-conversation, .invitation-contact { grid-column: 1; }
.invitation-teacher-poster { grid-column: 2; grid-row: 1 / span 4; align-self: center; margin: 0; }
.invitation-contact { margin: 0; padding: 0; }
.invitation-product-wrap { width: 100%; }
.invitation-product { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 20px 28px; padding: 30px; align-content: start; }
.invitation-product-heading { grid-column: 1 / -1; padding: 0; }
.invitation-journal-spread { grid-column: 1; grid-row: 2 / span 4; align-self: start; }
.invitation-details-row { grid-column: 2; grid-row: 2; }
.invitation-product .invitation-bottom-note { grid-column: 2; grid-row: 3; }
.invitation-use-note { grid-column: 2; grid-row: 4; }
.invitation-product-footer { grid-column: 2; grid-row: 5; }
@media (max-width: 1000px) { .invitation-copy { grid-template-columns: minmax(0, 1fr) minmax(220px, .7fr); padding: 28px; gap: 22px; } .invitation-product { padding: 25px; gap: 20px; } .invitation-use-note ol { grid-template-columns: 1fr; } .invitation-use-note li::after { display: none; } }
@media (max-width: 800px) { .invitation-section { max-width: none; } .invitation-copy, .invitation-product { display: flex; flex-direction: column; gap: 24px; } .invitation-teacher-poster { width: min(390px, 100%); align-self: center; } .invitation-copy > div, .invitation-conversation, .invitation-product > div, .invitation-product-heading { width: 100%; } .invitation-audiences { display: grid; } .invitation-price { display: grid; } .invitation-contact { margin-top: 0; } }
@media (max-width: 500px) { .invitation-copy { padding: 28px 19px 24px; } .invitation-product { padding: 22px 15px; } .invitation-teacher-poster { width: min(330px, 100%); } }
/* A continuous paper guide beneath the learning materials. */
.invitation-journal-spread { grid-row: 2; }
.invitation-start-guide { grid-column: 1 / -1; display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr); gap: 25px 36px; margin-top: 4px; padding-top: 28px; border-top: 1px dashed #d5c3a7; }
.invitation-guide-eyebrow { font-size: 12px; line-height: 1.8; letter-spacing: .7px; font-weight: 500; color: #776146; }
.invitation-start-guide h4 { margin-top: 7px; font-family: 'Lora', Georgia, serif; font-size: clamp(21px, 2vw, 26px); font-weight: 600; line-height: 1.5; color: #563c29; }
.invitation-step-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 23px; list-style: none; margin: 23px 0 0; padding: 0; }
.invitation-step-list li { position: relative; min-width: 0; }
.invitation-step-number { display: grid; place-items: center; position: relative; width: 38px; height: 38px; margin-bottom: 13px; border: 1px solid #b7ccda; border-radius: 12px 7px 12px 7px; background: #e7f0f5; color: #426a83; font-family: 'Lora', Georgia, serif; font-size: 17px; }
.invitation-step-list li:nth-child(2) .invitation-step-number { background: #fbefcf; border-color: #deca98; color: #82632f; }
.invitation-step-list li:nth-child(3) .invitation-step-number { background: #f6e3e9; border-color: #dfbccb; color: #935c72; }
.invitation-step-list li:not(:last-child)::after { content: ''; position: absolute; left: 49px; right: -10px; top: 19px; border-top: 1px dashed #d7c9b4; }
.invitation-step-list h5 { margin: 0; font-size: 15px; line-height: 1.7; font-weight: 600; color: #583f2d; }
.invitation-step-list p { margin-top: 6px; font-size: 13px; line-height: 1.85; color: #77624b; }
.invitation-kit-checklist { border-left: 1px solid #e2d5c0; padding-left: 30px; }
.invitation-kit-checklist h4 { font-size: 22px; }
.invitation-kit-checklist ul { display: grid; grid-template-columns: 1fr; gap: 10px; list-style: none; padding: 0; margin: 18px 0 0; }
.invitation-kit-checklist li { display: flex; align-items: center; gap: 10px; font-size: 14px; line-height: 1.8; color: #5f4d38; }
.invitation-kit-checklist svg { width: 19px; height: 19px; flex-shrink: 0; padding: 3px; border-radius: 50%; background: #e9efdf; color: #58753d; }
.invitation-guide-reassurance { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 12px 32px; padding: 18px 0 0; border-top: 1px solid #ece1cf; }
.invitation-guide-reassurance p { display: flex; align-items: center; gap: 9px; font-size: 13px; line-height: 1.8; color: #705d46; }
.invitation-guide-reassurance svg { width: 20px; height: 20px; flex-shrink: 0; color: #6286a0; stroke-width: 1.5; }
.invitation-guide-reassurance p:last-child svg { color: #b87590; }
@media (max-width: 1000px) { .invitation-start-guide { gap: 24px; } .invitation-step-list { gap: 16px; } .invitation-kit-checklist { padding-left: 24px; } }
@media (max-width: 800px) { .invitation-start-guide { width: 100%; grid-template-columns: 1fr; padding-top: 23px; } .invitation-kit-checklist { padding: 22px 0 0; border-left: 0; border-top: 1px dashed #d5c3a7; } .invitation-kit-checklist ul { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 500px) { .invitation-start-guide h4 { font-size: 23px; } .invitation-step-list { grid-template-columns: 1fr; gap: 20px; } .invitation-step-list li { display: flex; align-items: flex-start; gap: 13px; } .invitation-step-number { flex-shrink: 0; margin-bottom: 0; } .invitation-step-list li:not(:last-child)::after { top: 45px; left: 18px; right: auto; height: calc(100% - 25px); border-top: 0; border-left: 1px dashed #d7c9b4; } .invitation-step-list p { margin-top: 3px; } .invitation-kit-checklist ul { grid-template-columns: 1fr; gap: 10px; } .invitation-guide-reassurance { flex-direction: column; gap: 12px; } .invitation-guide-reassurance p { font-size: 12px; } }
.invitation-teacher-poster figcaption { padding: 13px 8px 7px; text-align: center; font: italic 500 17px/1.7 'Lora', Georgia, serif; color: #57788e; }
.invitation-teacher-poster img { aspect-ratio: 1672 / 941; object-fit: contain; }
@media (max-width: 800px) { .invitation-teacher-poster { width: 100%; max-width: 650px; } }
</style>
