<script setup lang="ts">
import { MotionConfig } from 'motion-v'
import { Sprout, Coins, NotebookPen, Target, CalendarDays } from '@lucide/vue'
import MoneyPlayground from '@/components/MoneyPlayground.vue'
import ProjectDossier from '@/components/ProjectDossier.vue'
import HeroCover from '@/components/HeroCover.vue'
import TeamInformation from '@/components/TeamInformation.vue'
import ProjectSummary from '@/components/ProjectSummary.vue'
import SiteNavigation from '@/components/SiteNavigation.vue'
import FloatingContact from '@/components/FloatingContact.vue'
import ProjectHighlights from '@/components/ProjectHighlights.vue'
import ProjectVideos from '@/components/ProjectVideos.vue'
import KitDiscovery from '@/components/KitDiscovery.vue'
import WalletPockets from '@/components/WalletPockets.vue'
import CompanionCorner from '@/components/CompanionCorner.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'
import ContactInvitation from '@/components/ContactInvitation.vue'

const journey = [
  { icon: Coins, time: 'TUẦN 01', title: 'Làm quen với tiền', text: 'Nhận biết nhu cầu và mong muốn. Bắt đầu phân chia vào bốn ngăn ví.', days: 'Ngày 01–07' },
  { icon: NotebookPen, time: 'TUẦN 02', title: 'Ghi lại mỗi ngày', text: 'Theo dõi thu – chi, nhìn lại những lựa chọn và khoản tiền còn lại.', days: 'Ngày 08–14' },
  { icon: Target, time: 'TUẦN 03', title: 'Tiến gần mục tiêu', text: 'Lập kế hoạch cho một điều em muốn. Điều chỉnh khi có khoản chi phát sinh.', days: 'Ngày 15–21' },
  { icon: Sprout, time: 'TUẦN 04', title: 'Nuôi một thói quen', text: 'Nhìn lại hành trình, tự đánh giá và tiếp tục những thay đổi phù hợp với mình.', days: 'Ngày 22–30' },
]
const questions = [
  { title: 'Con cần có tiền tiêu vặt mới sử dụng được không?', answer: 'Không. Học sinh có thể thực hành hoàn toàn bằng tiền mô phỏng. Bộ công cụ không yêu cầu điện thoại, tài khoản ngân hàng hoặc kết nối Internet.' },
  { title: 'Bộ công cụ phù hợp với những ai?', answer: 'Người sử dụng trực tiếp là học sinh THCS. Phụ huynh có thể đồng hành tại nhà; giáo viên có thể lồng ghép vào sinh hoạt lớp, môn Giáo dục công dân hoặc hoạt động trải nghiệm.' },
  { title: 'Sản phẩm đã được bán chính thức chưa?', answer: 'Theo hồ sơ dự án cập nhật ngày 01/11/2026, nhóm đang hoàn thiện sản phẩm mẫu. Giá 55.000đ/bộ là giá thử nghiệm dự kiến, có thể điều chỉnh sau khi xác minh chi phí và hoàn thiện sản phẩm. Vui lòng liên hệ giáo viên hướng dẫn để trao đổi về khả năng trải nghiệm.' },
  { title: 'Hành trình 30 ngày đã có kết quả đánh giá chưa?', answer: 'Chưa. Hồ sơ mới có khảo sát nhu cầu và ghi nhận bộ mẫu; đánh giá trước–sau trải nghiệm và theo dõi 30 ngày là kế hoạch riêng. Phần thực hành trên website chỉ minh họa, không phải bài đánh giá DGA/DGB hay kết quả thử nghiệm.' },
]
</script>

<template>
  <MotionConfig reduced-motion="user">
    <a href="#noi-dung" class="skip-link">Chuyển đến nội dung chính</a>
    <SiteNavigation />
    <main id="noi-dung">
      <HeroCover />

      <ProjectSummary />

      <ProjectHighlights />

      <TeamInformation />

      <div id="bo-cong-cu" class="tools-destination">
        <KitDiscovery />
        <WalletPockets />
      </div>

      <ProjectVideos />

      <MoneyPlayground />


      <section id="hanh-trinh" class="section shell journey-section" aria-labelledby="journey-title"><div class="section-heading"><div><p class="eyebrow">LỘ TRÌNH ĐỀ XUẤT · MỖI NGÀY, MỘT BƯỚC NHỎ</p><h2 id="journey-title">30 ngày cùng em<br /><span class="serif-word">nuôi thói quen tốt.</span></h2></div><div class="journey-intro-note"><div class="journey-notebook" aria-hidden="true"><CalendarDays /><strong>30</strong><span>mỗi ngày một chút</span></div><div><p>Lộ trình chia tuần để tham khảo.<br />Bắt đầu khi mẫu và điều kiện tổ chức đã sẵn sàng.</p><span class="small-label">Lộ trình đề xuất</span></div></div></div><ol class="journey-grid"><li v-for="(step, index) in journey" :key="step.time"><div class="journey-marker"><span>{{ String(index + 1).padStart(2, '0') }}</span><span class="journey-line"></span><component :is="step.icon" class="journey-step-icon" aria-hidden="true" /></div><p class="eyebrow">{{ step.time }}</p><h3>{{ step.title }}</h3><p>{{ step.text }}</p><span class="journey-days">{{ step.days }}</span></li></ol><div class="journey-footnote"><Sprout aria-hidden="true" /><p>Có thể thực hành bằng tiền mô phỏng. Mức phân bổ và mục tiêu được điều chỉnh theo hoàn cảnh của mỗi em; không có một tỷ lệ cố định cho tất cả.</p></div></section>

      <ProjectDossier />

      <CompanionCorner :questions="questions" />



      <ContactInvitation />
    </main>

    <ProjectFooter />
    <FloatingContact />
  </MotionConfig>
</template>

<style scoped>
.tools-destination { scroll-margin-top: 105px; }

.journey-section { padding-block: 48px 45px; }
.journey-section > .section-heading { gap: 30px; margin-bottom: 30px; align-items: center; }
.journey-intro-note { display: flex; align-items: center; gap: 25px; }
.journey-intro-note p { font-size: var(--text-small); line-height: 1.9; color: #7a604c; }
.journey-notebook { display: grid; justify-items: center; position: relative; width: 115px; flex-shrink: 0; padding: 14px 12px; background: #e0eff8; border: 2px solid #fffaf0; border-radius: 5px 12px 12px 5px; box-shadow: -6px 3px 0 #e7cad4, 0 6px 13px #7a5b3019; transform: rotate(-7deg); color: #4e7e9f; }
.journey-notebook::before { content: ''; position: absolute; left: 9px; top: 14px; bottom: 10px; border-left: 2px dashed #8fb4cc; }
.journey-notebook svg { width: 27px; height: 27px; stroke-width: 1.3; }
.journey-notebook strong { font-family: 'Lora', Georgia, serif; font-size: 38px; line-height: 1.4; }
.journey-notebook > span { font-size: var(--text-caption); }
.journey-section .journey-grid { gap: 19px; }
.journey-section .journey-grid li { --week-color: #9c5475; --week-paper: #fbe3ed; display: flex; flex-direction: column; position: relative; padding: 23px 20px; background: var(--week-paper); border: 2px solid #fffdf5; border-radius: 5px 17px 7px 15px; box-shadow: 0 5px 0 #d9cbb94d, 0 12px 22px #7853270a; }
.journey-section .journey-grid li:nth-child(2) { --week-color: #376e95; --week-paper: #e0effb; }
.journey-section .journey-grid li:nth-child(3) { --week-color: #927036; --week-paper: #fff0c2; }
.journey-section .journey-grid li:nth-child(4) { --week-color: #637e45; --week-paper: #e5efd8; }
.journey-section .journey-grid li::before { content: ''; position: absolute; top: -9px; left: 39%; width: 57px; height: 20px; background: repeating-linear-gradient(45deg, #fff9edaa 0 4px, #e8d8b166 4px 8px); transform: rotate(-5deg); }
.journey-section .journey-marker { margin-bottom: 20px; gap: 12px; }
.journey-section .journey-marker > span:first-child { background: #fffaf0; color: var(--week-color); border: 1px dashed var(--week-color); border-radius: 10px 4px 10px 4px; width: 39px; height: 39px; font-size: var(--text-body); }
.journey-section .journey-line { background: transparent; border-top: 1px dashed #a99c8666; }
.journey-step-icon { width: 33px; height: 33px; flex-shrink: 0; color: var(--week-color); stroke-width: 1.3; transform: rotate(7deg); }
.journey-section .journey-grid .eyebrow { color: var(--week-color); font-size: var(--text-caption); letter-spacing: 1px; }
.journey-section .journey-grid h3 { font-family: 'Lora', Georgia, serif; font-size: 20px; line-height: 1.5; color: #593b2c; }
.journey-section .journey-grid h3 + p { font-size: var(--text-small); color: #735c49; line-height: 1.85; margin-bottom: 19px; }
.journey-section .journey-days { align-self: flex-start; margin-top: auto; color: var(--week-color); background: #fffaf0; border-radius: 6px; padding: 6px 11px; font-size: var(--text-caption); }
.journey-section .journey-footnote { margin-top: 26px; background: #fff7e6; border: 1px dashed #d7c6a8; }
@media (max-width: 1050px) { .journey-intro-note { gap: 16px; } .journey-notebook { width: 91px; } .journey-section > .section-heading { flex-wrap: wrap; } }
@media (max-width: 600px) { .journey-section { padding-block: 32px 35px; } .journey-intro-note { width: 100%; } .journey-notebook { width: 90px; padding-block: 9px; } .journey-notebook strong { font-size: 31px; } .journey-section .journey-grid { gap: 22px 13px; } .journey-section .journey-grid li { padding: 21px 14px 17px; } .journey-section .journey-grid h3 { font-size: var(--text-body); } .journey-section .journey-grid h3 + p { font-size: var(--text-small); } .journey-step-icon { width: 26px; height: 26px; } }
@media (max-width: 380px) { .journey-section .journey-grid { grid-template-columns: 1fr; } }
</style>
