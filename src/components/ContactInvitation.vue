<script setup lang="ts">
import { motion } from 'motion-v'
import { computed, ref } from 'vue'
import { ArrowUpRight, Check, Heart, Mail, MessageCircle, Phone, Sparkles } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ImagePreview from '@/components/ImagePreview.vue'
import { publicAsset } from '@/lib/publicAsset'

const includedItems = ['Ví bốn ngăn', 'Sổ thu–chi 30 ngày', 'Thẻ tình huống', 'Bảng mục tiêu', 'Tiền mô phỏng']
const emailLink = `mailto:thuha03ulis@gmail.com?subject=${encodeURIComponent('Tìm hiểu dự án Ví nhỏ thông minh')}&body=${encodeURIComponent('Chào cô Hà và nhóm Ví nhỏ thông minh,\n\nTôi muốn tìm hiểu về bộ công cụ và khả năng tổ chức hoạt động trải nghiệm.\n\nNhu cầu của tôi: ' )}`
const learningPages = [
  { id: 'goals', title: 'Mục tiêu chi tiêu', image: publicAsset('/images/learning-kit/spending-goals.png'), description: 'Trang ghi mục tiêu ngắn hạn và dài hạn trong sổ thu–chi.' },
  { id: 'review', title: 'Tổng kết tháng', image: publicAsset('/images/learning-kit/monthly-review.png'), description: 'Trang nhìn lại nguồn thu, mục tiêu và chi tiêu trong tháng.' },
  { id: 'money', title: 'Tiền mô phỏng', image: publicAsset('/images/learning-kit/simulation-banknotes.png'), description: 'Mẫu thẻ tiền mô phỏng dùng cho hoạt động thực hành.' },
]
const selectedPageId = ref('goals')
const selectedPage = computed(() => learningPages.find(page => page.id === selectedPageId.value))
</script>

<template>
  <section id="lien-he" class="invitation-section" aria-labelledby="contact-title">
    <div class="invitation-sheet">
      <div class="invitation-copy">
        <p class="invitation-eyebrow"><MessageCircle aria-hidden="true" /> MÌNH CÙNG BẮT ĐẦU NHÉ?</p>
        <h2 id="contact-title">Một chiếc ví nhỏ.<br /><em>Một khởi đầu ý nghĩa.</em></h2>
        <p class="invitation-intro">Bạn muốn cùng con thực hành tại nhà, hay mang một hoạt động mới đến lớp học? Hãy trò chuyện cùng nhóm để tìm hiểu bộ công cụ và khả năng tổ chức trải nghiệm.</p>
        <div class="invitation-audiences" aria-label="Đối tượng có thể liên hệ"><span>Phụ huynh</span><span>Thầy cô</span><span>Lớp học & CLB</span></div>
        <div class="invitation-letter">
          <img class="invitation-school-logo" :src="publicAsset('/images/thuong-long-school-logo.png')" alt="Logo Trường THCS Thượng Long" width="1254" height="1254" loading="lazy" />
          <div><p>NGƯỜI ĐỒNG HÀNH</p><h3>Cô Nguyễn Thu Hà</h3><span>Giáo viên hướng dẫn · Trường THCS Thượng Long</span></div>
        </div>
        <div class="invitation-actions">
          <Button as-child class="invitation-email-button"><a :href="emailLink"><Mail aria-hidden="true" /> Gửi lời nhắn cho dự án <ArrowUpRight aria-hidden="true" /></a></Button>
          <Button as-child variant="outline" class="invitation-call-button"><a href="tel:0327227803"><Phone aria-hidden="true" /> 0327 227 803</a></Button>
        </div>
        <a class="invitation-email-address" href="mailto:thuha03ulis@gmail.com">thuha03ulis@gmail.com <ArrowUpRight aria-hidden="true" /></a>
        <p class="invitation-handnote"><Heart aria-hidden="true" /> Một lời nhắn nhỏ, một cơ hội cùng làm điều hay.</p>
      </div>

      <motion.div class="invitation-product-wrap" :initial="{ opacity: 0, y: 12 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: .4 }">
        <Card class="invitation-product">
          <span class="invitation-tape" aria-hidden="true"></span>
          <header class="invitation-product-heading"><span>BỘ CÔNG CỤ CÁ NHÂN</span><span>Đang hoàn thiện mẫu</span></header>
          <ImagePreview v-if="selectedPage" :key="selectedPage.id" class="invitation-product-photo" :src="selectedPage.image" :alt="selectedPage.description"><img :src="selectedPage.image" :alt="selectedPage.description" loading="lazy" /></ImagePreview>
          <div class="invitation-page-choices" role="group" aria-label="Chọn học liệu xem trước"><Button v-for="page in learningPages" :key="page.id" variant="ghost" type="button" :aria-pressed="selectedPageId === page.id" @click="selectedPageId = page.id"><img :src="page.image" alt="" loading="lazy" /><span>{{ page.title }}</span></Button></div>
          <p class="invitation-photo-caption" aria-live="polite">{{ selectedPage?.description }}</p>
          <div class="invitation-price"><div><span>GIÁ THỬ NGHIỆM DỰ KIẾN</span><p><strong>55.000<small>đ</small></strong><span>/ bộ</span></p></div><span class="invitation-price-stamp" aria-hidden="true"><Sparkles /><span>Ví nhỏ<br />Thói quen lớn</span></span></div>
          <ul class="invitation-includes" aria-label="Thành phần dự kiến của bộ cá nhân"><li v-for="item in includedItems" :key="item"><Check aria-hidden="true" />{{ item }}</li></ul>
          <p class="invitation-price-note">Quy cách và giá có thể điều chỉnh khi hoàn thiện sản phẩm. Liên hệ nhóm để trao đổi thông tin cụ thể.</p>
        </Card>
      </motion.div>
    </div>
    <p class="invitation-bottom-note">Có thể thực hành bằng tiền mô phỏng <span aria-hidden="true">✦</span> Đồng hành tại gia đình và lớp học</p>
  </section>
</template>

<style scoped>
.invitation-section { width: min(1320px, calc(100% - 80px)); margin: 12px auto 55px; padding-top: 20px; color: #54392c; }
.invitation-sheet { position: relative; display: grid; grid-template-columns: minmax(0, 1.12fr) minmax(0, .88fr); gap: 54px; align-items: center; padding: 44px 46px; border: 1px solid #d7e1e5; border-radius: 8px 26px 9px 23px; background-color: #edf5fa; background-image: linear-gradient(#93b5ce1a 1px, transparent 1px), linear-gradient(90deg, #93b5ce1a 1px, transparent 1px); background-size: 27px 27px; box-shadow: 0 6px 0 #d8e7ef80, 0 15px 30px #694b2e08; }
.invitation-sheet::before { content: ''; position: absolute; top: -13px; left: 11%; width: 105px; height: 28px; transform: rotate(-5deg); background: repeating-linear-gradient(135deg, #f0bdcfb3 0 8px, #fff6ecb3 8px 16px); pointer-events: none; }
.invitation-copy { min-width: 0; }
.invitation-eyebrow { display: flex; align-items: center; gap: 7px; font-size: 10px; font-weight: 600; letter-spacing: 1.2px; color: #5482a2; line-height: 1.8; }
.invitation-eyebrow svg { width: 18px; height: 18px; }
.invitation-copy h2 { margin-top: 18px; font-family: 'Lora', Georgia, serif; font-size: clamp(30px, 3vw, 43px); font-weight: 700; line-height: 1.45; letter-spacing: -1px; }
.invitation-copy h2 em { font-weight: 500; color: #407b9f; text-decoration: underline; text-decoration-color: #eeb7cb; text-decoration-thickness: 3px; text-underline-offset: 7px; }
.invitation-intro { max-width: 490px; margin-top: 22px; color: #745b46; font-size: 14px; line-height: 1.95; }
.invitation-audiences { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
.invitation-audiences > span { padding: 5px 11px; border: 1px solid #cbdde8; border-radius: 20px; background: #fffdf69c; font-size: 10px; line-height: 1.7; color: #6a8498; }
.invitation-letter { display: flex; align-items: center; gap: 14px; margin-top: 27px; padding-top: 21px; border-top: 1px dashed #bdced9; }
.invitation-school-logo { display: block; width: 64px; height: 64px; object-fit: contain; flex-shrink: 0; border-radius: 50%; border: 3px solid #fffdf7; background: #fff; }
.invitation-letter-icon { display: grid; place-items: center; width: 45px; height: 45px; border: 1px solid #e5c2cc; border-radius: 11px; background: #f5dce5; color: #b97e95; flex-shrink: 0; transform: rotate(-5deg); }
.invitation-letter-icon svg { width: 25px; height: 25px; stroke-width: 1.4; }
.invitation-letter > div > p { font-size: 8px; font-weight: 600; letter-spacing: 1px; color: #7c8b94; }
.invitation-letter h3 { margin-top: 4px; font-family: 'Lora', Georgia, serif; font-size: 20px; font-weight: 600; color: #5c4030; }
.invitation-letter > div > span { display: block; margin-top: 5px; font-size: 10px; line-height: 1.8; color: #82705c; }
.invitation-actions { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 23px; }
.invitation-email-button, .invitation-call-button { min-height: 48px; height: auto; padding: 12px 17px; gap: 9px; border-radius: 24px; font-size: 12px; white-space: normal; text-align: left; }
.invitation-email-button { background: #62402f; color: #fffaf1; }
.invitation-email-button:hover { background: #7c5540; }
.invitation-call-button { background: #fffdf7; border-color: #c9dbe7; color: #487493; }
.invitation-actions svg { width: 16px; height: 16px; flex-shrink: 0; }
.invitation-email-address { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; max-width: 100%; padding-block: 8px; color: #5d8098; font-size: 12px; line-height: 1.7; text-decoration: underline; text-underline-offset: 4px; overflow-wrap: anywhere; }
.invitation-email-address svg { width: 13px; height: 13px; flex-shrink: 0; }
.invitation-handnote { display: flex; align-items: flex-start; gap: 8px; margin-top: 13px; color: #9b7184; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 13px; line-height: 1.8; }
.invitation-handnote svg { width: 17px; height: 18px; flex-shrink: 0; margin-top: 3px; }
.invitation-product-wrap { min-width: 0; }
.invitation-product { position: relative; padding: 16px 17px 19px; border: 1px solid #e7dac5; border-radius: 5px 10px 5px 9px; background: #fffdf7; box-shadow: 5px 7px 0 #c3d6e14d, 0 8px 20px #6e503314; }
.invitation-tape { position: absolute; z-index: 1; top: -13px; right: 26%; width: 88px; height: 27px; background: repeating-linear-gradient(0deg, #eecf8d99 0 4px, #ffe5ad99 4px 8px); transform: rotate(6deg); pointer-events: none; }
.invitation-product-heading { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; padding: 5px 3px 13px; font-size: 8px; line-height: 1.7; font-weight: 600; letter-spacing: .8px; color: #8e785e; }
.invitation-product-heading > span:last-child { padding: 3px 8px; background: #edf3e6; border: 1px solid #dce6d2; border-radius: 15px; font-size: 8px; font-weight: 400; letter-spacing: 0; color: #6b8054; }
.invitation-product-photo { width: 100%; }
.invitation-photo-caption { padding: 10px 4px 0; text-align: center; font-size: 11px; line-height: 1.8; color: #7e694f; }
.invitation-product-photo img { display: block; width: 100%; height: 320px; object-fit: contain; background: #fffdf4; }
.invitation-page-choices { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 12px; }
.invitation-page-choices button { display: flex; flex-direction: column; height: auto; min-height: 72px; padding: 7px; gap: 5px; white-space: normal; border: 1px solid #e4dac9; border-radius: 8px; color: #795b42; background: #fffaf0; font-size: 10px; line-height: 1.6; }
.invitation-page-choices button[aria-pressed='true'] { border-color: #80abc9; background: #e8f2f9; color: #396b90; }
.invitation-page-choices img { display: block; width: 100%; height: 47px; object-fit: contain; }
.invitation-price { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-top: 15px; padding: 15px 16px; background: #fff0bd; border: 1px dashed #dcc48d; border-radius: 5px; color: #74502d; }
.invitation-price > div > span { font-size: 8px; letter-spacing: .8px; font-weight: 600; line-height: 1.8; }
.invitation-price > div > p { display: flex; align-items: baseline; gap: 9px; }
.invitation-price strong { font-family: 'Lora', Georgia, serif; font-size: 36px; font-weight: 700; line-height: 1.5; }
.invitation-price small { font-size: 20px; margin-left: 2px; }
.invitation-price > div > p > span { font-size: 11px; color: #987c4d; }
.invitation-price-stamp { display: grid; justify-items: center; gap: 3px; padding-left: 14px; border-left: 1px dashed #d2bb83; color: #ad8c49; text-align: center; flex-shrink: 0; }
.invitation-price-stamp svg { width: 26px; height: 26px; }
.invitation-price-stamp > span { font-family: 'Lora', Georgia, serif; font-size: 11px; font-style: italic; line-height: 1.5; }
.invitation-includes { display: flex; flex-wrap: wrap; gap: 7px 14px; margin: 16px 0 0; padding: 0; list-style: none; }
.invitation-includes li { display: inline-flex; align-items: center; gap: 5px; font-size: 10px; line-height: 1.8; color: #7e694f; }
.invitation-includes svg { width: 12px; height: 12px; color: #8ba46f; }
.invitation-price-note { margin-top: 13px; padding-top: 11px; border-top: 1px dashed #e6dac7; font-size: 10px; line-height: 1.85; color: #8c745b; }
.invitation-bottom-note { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 12px; margin-top: 24px; font-size: 11px; line-height: 1.8; color: #9b846b; text-align: center; }
.invitation-bottom-note > span { color: #c6a25b; }
@media (max-width: 1100px) { .invitation-section { width: calc(100% - 56px); } .invitation-sheet { padding: 34px 30px; gap: 30px; } .invitation-copy h2 { font-size: 34px; } .invitation-actions { flex-direction: column; align-items: flex-start; } .invitation-intro { font-size: 13px; } }
@media (max-width: 800px) { .invitation-sheet { grid-template-columns: 1fr; gap: 34px; } .invitation-actions { flex-direction: row; } .invitation-product-wrap { width: min(530px, 100%); margin-inline: auto; } .invitation-copy h2 { font-size: 38px; } .invitation-intro { max-width: none; } }
@media (max-width: 500px) { .invitation-section { width: calc(100% - 32px); margin-bottom: 38px; } .invitation-sheet { padding: 28px 20px; border-radius: 6px 18px 7px 15px; } .invitation-copy h2 { font-size: 29px; letter-spacing: -.7px; } .invitation-eyebrow { font-size: 8px; letter-spacing: .8px; } .invitation-intro { font-size: 13px; } .invitation-actions { flex-direction: column; align-items: stretch; } .invitation-actions a { justify-content: center; } .invitation-product { padding: 14px 12px 16px; } .invitation-price { padding: 13px 12px; } .invitation-price strong { font-size: 32px; } .invitation-price-stamp { padding-left: 10px; } .invitation-handnote { font-size: 12px; } .invitation-bottom-note { font-size: 10px; } }
</style>
