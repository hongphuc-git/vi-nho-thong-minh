<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { ref, watch } from 'vue'
import { motion } from 'motion-v'
import { ArrowUpRight, Calculator, Check, Compass, Heart, Lightbulb, Megaphone, NotebookPen, RefreshCcw, Users, Wallet } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const props = withDefaults(defineProps<{ photoSrc?: string }>(), {
  photoSrc: publicAsset('/images/video-posters/nhom-du-an-tai-truong.jpg'),
})
const photoFailed = ref(false)
watch(() => props.photoSrc, () => { photoFailed.value = false })
const members = [
  { initials: 'TP', name: 'Hoàng Thu Phượng', nameLines: ['Hoàng Thu', 'Phượng'], role: 'Kế hoạch & điều phối', detail: 'Trưởng nhóm · Thiết kế tổng thể', icon: Compass, color: 'blue' },
  { initials: 'DL', name: 'Hoàng Diệu Linh', nameLines: ['Hoàng Diệu', 'Linh'], role: 'Nội dung & truyền thông', detail: 'Thẻ tình huống · Đánh giá trước–sau', icon: Megaphone, color: 'pink' },
  { initials: 'NH', name: 'Triệu Ngọc Hà', nameLines: ['Triệu Ngọc', 'Hà'], role: 'Dự toán & phản hồi', detail: 'Khảo giá và tổng hợp ý kiến', icon: Calculator, color: 'yellow' },
  { initials: 'HN', name: 'Hoàng Thị Hồng Nhung', nameLines: ['Hoàng Thị', 'Hồng Nhung'], role: 'Sản phẩm & trải nghiệm', detail: 'Hoàn thiện mẫu và chất lượng', icon: Lightbulb, color: 'sage' },
]
</script>

<template>
  <section id="thong-tin" class="team-information" aria-labelledby="team-information-title">
    <header class="team-heading">
          <p class="team-eyebrow">NHÓM THỰC HIỆN / CHÚNG MÌNH LÀ AI?</p>
          <h2 id="team-information-title">Những người gieo <br /><span>thói quen tốt.</span></h2>
        </header>
    <div class="team-spread">
      <div class="team-story">
        <figure class="team-photo">
          <span class="team-tape" aria-hidden="true"></span>
          <span class="team-photo-clip" aria-hidden="true"></span>
          <div class="team-photo-paper">
          <img v-if="props.photoSrc && !photoFailed" :src="props.photoSrc" alt="Bốn thành viên nhóm Ví nhỏ thông minh tại cổng trường" loading="lazy" @error="photoFailed = true" />
          <div v-else class="team-photo-fallback"><Users aria-hidden="true" /><p>Nhóm học sinh lớp 9B1<br />Trường THCS Thượng Long</p></div>
          <figcaption>Cùng học. Cùng làm. Cùng lớn lên. <Heart aria-hidden="true" /></figcaption>
          </div>
          <span class="team-photo-class">Lớp 9B1 <Heart aria-hidden="true" /></span>
        </figure>
        <aside class="team-wish-note" aria-labelledby="team-wish-title">
          <span class="team-wish-tape" aria-hidden="true"></span>
          <Heart class="team-wish-heart" aria-hidden="true" />
          <div><h3 id="team-wish-title">Điều chúng mình mong muốn</h3><p>Giúp các bạn học cách dùng tiền có trách nhiệm, bắt đầu từ những lựa chọn nhỏ mỗi ngày.</p></div>
        </aside>
      </div>

      <motion.div class="team-paper" :initial="{ opacity: 0, y: 14 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: 0.45 }">
        <div class="paper-heading"><p>CHÚNG MÌNH LÀ AI?</p><h3>Ví nhỏ thông minh</h3></div>
        <p class="team-intro">Từ một ý tưởng nhỏ, chúng mình cùng nhau xây dựng bộ công cụ giáo dục tài chính cho học sinh THCS.</p>
        <section class="team-workflow" aria-labelledby="team-workflow-title">
          <h4 id="team-workflow-title">Cách chúng mình làm việc</h4>
          <ol>
            <li><span class="team-step-tape" aria-hidden="true"></span><div class="team-step-top"><Lightbulb aria-hidden="true" /><span aria-hidden="true">01</span></div><strong>Lên ý tưởng</strong><p>Từ lựa chọn chi tiêu gần gũi mỗi ngày.</p></li>
            <li><span class="team-step-tape" aria-hidden="true"></span><div class="team-step-top"><NotebookPen aria-hidden="true" /><span aria-hidden="true">02</span></div><strong>Làm học liệu</strong><p>Thiết kế ví, sổ ghi chép và thẻ tình huống.</p></li>
            <li><span class="team-step-tape" aria-hidden="true"></span><div class="team-step-top"><RefreshCcw aria-hidden="true" /><span aria-hidden="true">03</span></div><strong>Thử & điều chỉnh</strong><p>Nhận góp ý, tiếp tục hoàn thiện mẫu.</p></li>
          </ol>
        </section>
      </motion.div>
    </div>

    <section class="crew-roster" aria-labelledby="crew-roster-title">
      <header class="crew-roster-heading"><div><p>NHÓM THỰC HIỆN · LỚP 9B1</p><h3 id="crew-roster-title">Bốn thành viên,<br /><em>một ý tưởng chung.</em></h3></div></header>
      <ul class="crew-grid" aria-label="Thành viên và vai trò trong nhóm">
        <motion.li v-for="member in members" :key="member.initials" class="crew-grid-item" :while-hover="{ y: -6 }" :transition="{ type: 'spring', stiffness: 260, damping: 24 }">
          <Card class="crew-card" :class="`crew-${member.color}`">
            <span class="crew-card-tape" aria-hidden="true"></span>
            <span class="crew-corner-stitches" aria-hidden="true"></span>
            <div class="crew-card-heading"><span class="crew-avatar" aria-hidden="true">{{ member.initials }}</span><div class="crew-member-label"><strong>VÍ NHỎ THÔNG MINH</strong><span>Thành viên dự án</span></div></div>
            <h4 :aria-label="member.name"><span v-for="line in member.nameLines" :key="line" aria-hidden="true">{{ line }}</span></h4>
            <span class="crew-name-stroke" aria-hidden="true"></span>
            <div class="crew-task"><span class="crew-task-icon"><component :is="member.icon" aria-hidden="true" /></span><div><span>{{ member.role }}</span><p>{{ member.detail }}</p></div></div>
          </Card>
        </motion.li>
      </ul>
      <p class="crew-roster-handnote">Mỗi bạn một thế mạnh. Cùng làm nên điều có ích. <Heart aria-hidden="true" /></p>
      <div class="crew-support-grid">
      <Card class="mentor-note">
          <span class="mentor-paper-tape" aria-hidden="true"></span>
          <div class="mentor-heading"><span class="mentor-teacher-avatar"><img :src="publicAsset('/images/nguyen-thu-ha-portrait.png')" alt="Cô Nguyễn Thu Hà, giáo viên hướng dẫn dự án" width="1122" height="1402" loading="lazy" /></span><div><p>NGƯỜI ĐỒNG HÀNH</p><h4>Cô Nguyễn Thu Hà</h4><span>Giáo viên Tiếng Anh · Giáo viên hướng dẫn</span><span>Trường THCS Thượng Long</span></div></div>
          <aside class="mentor-thought"><span class="mentor-thought-tape" aria-hidden="true"></span><p class="mentor-thought-label">MỘT ĐIỀU NHỎ GỬI BẠN</p><p class="mentor-thought-message">Mỗi lựa chọn nhỏ hôm nay,<br /><em>một thói quen tốt cho ngày mai.</em></p><Heart aria-hidden="true" /></aside>
          <div class="mentor-links"><p>Một người đồng hành cùng nhóm<br />trong quá trình xây dựng dự án.</p><Button as-child class="mentor-contact-button"><a href="#lien-he" aria-label="Đến phần liên hệ để trao đổi với cô Nguyễn Thu Hà">Trao đổi cùng cô <ArrowUpRight aria-hidden="true" /></a></Button></div>
        </Card>
      <div class="crew-project-note"><span class="crew-prototype-sticker" aria-hidden="true"><Wallet /></span><p class="crew-journey-label">TỪ Ý TƯỞNG ĐẾN BỘ MẪU</p><h4>Từng bước nhỏ,<br /><em>để ý tưởng thành hình.</em></h4><div class="crew-progress"><span class="crew-status-label"><span aria-hidden="true"></span> ĐANG HOÀN THIỆN MẪU</span><div class="crew-progress-count"><strong>01 <small>bộ mẫu</small></strong><span>Mục tiêu tiếp theo<br /><b>10 bộ trải nghiệm</b></span></div><div class="crew-prototype-grid" role="progressbar" :aria-valuenow="1" :aria-valuemin="0" :aria-valuemax="10" aria-label="Số bộ mẫu hướng tới mục tiêu trải nghiệm" aria-valuetext="Đã ghi nhận 1 bộ mẫu phiên bản số 1, hướng tới 10 bộ trải nghiệm"><span v-for="number in 10" :key="number" class="crew-prototype-slot" :class="{ 'crew-prototype-recorded': number === 1 }" aria-hidden="true"><Check v-if="number === 1" /><Wallet v-else /><span>{{ String(number).padStart(2, '0') }}</span></span></div><div class="crew-prototype-legend"><span><i aria-hidden="true"></i>Đã có mẫu</span><span><i aria-hidden="true"></i>Mục tiêu tiếp theo</span></div><p>Theo hồ sơ, đến 28/10/2026 đã có 01 bộ mẫu phiên bản số 1. Chín ô còn lại là mục tiêu chuẩn bị, chưa phải bộ đã hoàn thành.</p></div></div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.team-information { width: min(1240px, calc(100% - 80px)); margin-inline: auto; padding-block: 64px 52px; scroll-margin-top: 112px; color: #542c20; }
.team-heading { margin-bottom: 32px; }
.team-eyebrow { width: fit-content; padding: 7px 13px; border: 1px solid #cadfea; border-radius: 7px; background: #eaf3f9; color: #356381; font-size: var(--text-caption); letter-spacing: 1.2px; font-weight: 600; line-height: 1.7; }
.team-heading h2 { margin-top: 17px; font-family: 'Lora', Georgia, serif; font-size: clamp(30px, 3vw, 41px); letter-spacing: -.8px; line-height: 1.4; font-weight: 600; text-wrap: balance; }
.team-heading h2 br { display: none; }
.team-heading h2 > span { text-decoration: underline; text-decoration-color: #b9dceb; text-decoration-thickness: 3px; text-underline-offset: 8px; }
.team-spread { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: clamp(28px, 4vw, 52px); }
.team-story { min-width: 0; }
.team-photo { position: relative; margin: 0; padding: 10px 10px 0; border: 1px solid #ded8cb; border-radius: 15px; background: #fffdf7; box-shadow: 0 8px 24px #7353380d; }
.team-photo > img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: contain; border-radius: 8px; background: #eee7da; }
.team-photo figcaption { padding: 19px 8px 20px; color: #624734; text-align: center; font-family: 'Lora', Georgia, serif; font-size: clamp(1.125rem, 1.5vw, 19px); font-style: italic; line-height: 1.7; }
.team-tape { position: absolute; z-index: 1; top: -10px; left: calc(50% - 37px); width: 74px; height: 23px; background: repeating-linear-gradient(90deg, #eeb0c699 0 5px, #fff3eb99 5px 10px), repeating-linear-gradient(#efa5bf99 0 5px, #fff5ea99 5px 10px); transform: rotate(-3deg); pointer-events: none; }
.team-photo-fallback { min-height: 240px; display: grid; place-content: center; justify-items: center; gap: 15px; border-radius: 8px; background: #e3eef4; color: #375b70; text-align: center; font-size: var(--text-body); line-height: 1.8; }
.team-photo-fallback svg { width: 44px; height: 44px; }
.team-paper { min-width: 0; padding: clamp(24px, 2.5vw, 34px); border: 1px solid #e5dccd; border-radius: 18px; background: #fffdf8; }
.paper-heading > p { color: #766049; font-size: var(--text-caption); font-weight: 600; letter-spacing: 1.2px; line-height: 1.7; }
.paper-heading h3 { margin-top: 9px; font-family: 'Lora', Georgia, serif; font-size: clamp(26px, 2.3vw, 32px); font-weight: 600; line-height: 1.5; }
.team-intro { margin-top: 12px; color: #695340; font-size: var(--text-body); line-height: 1.85; }
.team-facts { margin: 22px 0 0; }
.team-fact { padding: 18px; border: 1px solid #d7e5ed; border-radius: 12px; background: #eef5f9; box-shadow: none; color: #542c20; }
.team-fact dt { display: flex; align-items: center; gap: 8px; color: #345f7a; font-size: var(--text-caption); font-weight: 600; letter-spacing: .6px; line-height: 1.7; }
.team-fact dt svg { width: 19px; height: 19px; flex-shrink: 0; stroke-width: 1.6; }
.team-fact dd { margin: 8px 0 0; font-family: 'Lora', Georgia, serif; font-size: var(--text-body); font-weight: 600; line-height: 1.6; }
.team-fact .fact-detail { margin-top: 5px; font-family: var(--font-sans); font-size: var(--text-small); font-weight: 400; line-height: 1.8; color: #5d6263; }
.mentor-note { display: grid; grid-template-columns: 1.3fr 1fr; align-items: center; gap: 24px; margin-top: 24px; padding: 24px; border: 1px solid #e9ddbd; border-radius: 14px; background: #fff6df; box-shadow: none; color: #542c20; }
.mentor-heading { display: flex; align-items: center; gap: 12px; }
.mentor-heading > div { min-width: 0; }
.mentor-heading p { color: #77582e; font-size: var(--text-caption); font-weight: 600; letter-spacing: .6px; line-height: 1.7; }
.mentor-heading h4 { margin-top: 4px; font-family: 'Lora', Georgia, serif; font-size: 20px; font-weight: 600; line-height: 1.5; }
.mentor-heading > div > span { display: block; margin-top: 5px; color: #69583e; font-size: var(--text-small); line-height: 1.8; }
.mentor-links { display: grid; gap: 3px; min-width: 0; padding-left: 24px; border-left: 1px solid #e7d9b8; }
.mentor-links a { display: flex; align-items: center; gap: 10px; min-height: 44px; color: #245b80; font-size: var(--text-small); font-weight: 500; line-height: 1.7; border-radius: 5px; }
.mentor-links a > span { min-width: 0; overflow-wrap: anywhere; }
.mentor-links svg { width: 17px; height: 17px; flex-shrink: 0; }
.mentor-links a > svg:last-child { width: 14px; margin-left: auto; }
.mentor-links a:hover { text-decoration: underline; text-underline-offset: 4px; }
.mentor-links a:focus-visible { outline: 3px solid #376e95; outline-offset: 3px; }
@media (max-width: 1050px) { .team-information { width: calc(100% - 48px); } .team-spread { gap: 26px; } .team-paper { padding: 23px; } }
@media (max-width: 800px) { .team-information { padding-top: 42px; } .team-heading { margin-bottom: 28px; } .team-spread { grid-template-columns: 1fr; gap: 25px; } .team-story { width: min(620px, 100%); margin-inline: auto; } }
@media (max-width: 500px) { .team-information { width: calc(100% - 32px); padding-block: 34px 40px; } .team-eyebrow { font-size: var(--text-caption); letter-spacing: .7px; } .team-heading h2 { font-size: 30px; } .team-heading h2 br { display: block; } .team-paper { padding: 22px 18px; } .team-photo { padding: 8px 8px 0; } .team-photo figcaption { padding-block: 15px; font-size: var(--text-body); } .mentor-note, .team-fact { padding: 16px; } .mentor-heading { gap: 10px; } .mentor-icon { width: 34px; height: 36px; } .mentor-heading h4 { font-size: 19px; } }
.crew-roster { margin-top: 42px; }
.crew-roster-heading { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-bottom: 23px; }
.crew-roster-heading > div > p { color: #38627e; font-size: var(--text-caption); letter-spacing: 1.4px; font-weight: 600; line-height: 1.8; }
.crew-roster-heading h3 { margin-top: 8px; font-family: 'Lora', Georgia, serif; font-size: clamp(23px, 2.3vw, 30px); font-weight: 600; line-height: 1.5; color: #583b2c; }
.crew-roster-heading h3 em { color: #4a7a9c; font-weight: 500; }
.crew-roster-heading > span { display: inline-flex; align-items: center; gap: 8px; padding: 8px 13px; background: #e9f2f8; border: 1px solid #ccdfeb; border-radius: 20px; color: #38627e; font-size: var(--text-caption); letter-spacing: 1px; flex-shrink: 0; }
.crew-roster-heading > span > svg { width: 17px; height: 17px; }
.crew-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; list-style: none; padding: 0; margin: 0; }
.crew-grid-item { min-width: 0; display: flex; }
.crew-card { display: flex; flex-direction: column; --crew-tint: #e7f2fa; --crew-accent: #557e9d; --crew-tab: #c4dff1; position: relative; width: 100%; padding: 22px 20px 19px; border: 1px solid #e6dbc9; border-top: 4px solid var(--crew-tab); border-radius: 6px 17px 6px 14px; background: #fffdf7; box-shadow: 0 4px 0 #e6dcca55; color: #583b2c; }
.crew-pink { --crew-tint: #fbeaf1; --crew-accent: #a46b85; --crew-tab: #f0c5d6; }
.crew-yellow { --crew-tint: #fff5d7; --crew-accent: #9d7a3b; --crew-tab: #f4dfa0; }
.crew-sage { --crew-tint: #eef4e6; --crew-accent: #718958; --crew-tab: #d0e1bc; }
.crew-card-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
.crew-avatar { display: grid; place-items: center; width: 52px; height: 52px; flex-shrink: 0; background: var(--crew-tint); border: 1px solid var(--crew-tab); border-radius: 15px 15px 15px 5px; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 700; color: var(--crew-accent); }
.crew-card h4 { margin-bottom: 18px; font-family: 'Lora', Georgia, serif; font-size: var(--text-body); line-height: 1.6; font-weight: 700; padding-right: 0; }
.crew-task { display: flex; align-items: flex-start; gap: 10px; flex: 1; margin-top: auto; padding: 14px 12px; background: var(--crew-tint); border-radius: 7px; }
.crew-task-icon { display: grid; place-items: center; width: 28px; height: 30px; color: var(--crew-accent); flex-shrink: 0; }
.crew-task-icon svg { width: 23px; height: 23px; stroke-width: 1.5; }
.crew-task > div > span { display: block; font-size: var(--text-small); font-weight: 600; line-height: 1.7; color: #563e2e; }
.crew-task p { margin-top: 4px; font-size: var(--text-small); line-height: 1.8; color: #69523f; }
.crew-project-note { display: grid; grid-template-columns: 1fr 1.2fr; gap: 24px; align-items: center; margin-top: 24px; padding: 22px 26px; border: 1px dashed #dcc9a7; background: #f0f5ed; border-radius: 12px; }
.crew-message { display: flex; align-items: center; gap: 15px; }
.crew-message svg { width: 28px; height: 30px; color: #c4849d; flex-shrink: 0; stroke-width: 1.5; }
.crew-message p { font-family: 'Lora', Georgia, serif; font-size: var(--text-body); line-height: 1.8; color: #654e39; }
.crew-message strong { font-weight: 500; color: #66492e; }
.crew-progress { border-left: 1px dashed #d9c49f; padding-left: 26px; }
.crew-status-label { display: inline-flex; align-items: center; gap: 7px; font-size: var(--text-caption); letter-spacing: .5px; font-weight: 600; line-height: 1.8; color: #52643d; }
.crew-status-label > span { width: 6px; height: 6px; border-radius: 50%; background: #8da271; }
.crew-progress p { margin-top: 6px; font-size: var(--text-small); line-height: 1.85; color: #69523f; }
.crew-progress strong { font-weight: 600; color: #654e32; }
@media (max-width: 1100px) { .crew-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 650px) { .mentor-note { grid-template-columns: 1fr; gap: 16px; padding: 20px; } .mentor-links { padding: 12px 0 0; border-left: 0; border-top: 1px solid #e7d9b8; } .crew-roster { margin-top: 30px; } .crew-roster-heading { align-items: flex-start; gap: 14px; } .crew-roster-heading > span { font-size: var(--text-caption); padding: 7px 9px; } .crew-roster-heading h3 { font-size: 24px; } .crew-project-note { grid-template-columns: 1fr; padding: 20px; gap: 18px; } .crew-progress { border-left: 0; border-top: 1px dashed #d9c49f; padding: 16px 0 0; } }
@media (max-width: 480px) { .crew-grid { grid-template-columns: 1fr; gap: 15px; } .crew-card { padding: 19px 20px; } .crew-card-heading { margin-bottom: 12px; } .crew-card h4 { font-size: 20px; } .crew-task { margin-top: 14px; } .crew-roster-heading { flex-direction: column; } }

/* Separate paper silhouette from tape and clip so decorations stay outside the torn edge. */
.team-photo { position: relative; isolation: isolate; padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; margin: 14px 8px 17px; transform: rotate(-1deg); }
.team-photo::before { content: ''; position: absolute; z-index: -1; inset: -7px -9px -10px -13px; background: #b9d7e9; background-image: repeating-linear-gradient(14deg, #ffffff30 0 1px, transparent 1px 4px); mask: url('/images/scrapbook/team-torn-edge.svg') center / 100% 100% no-repeat; transform: rotate(2.6deg); }
.team-photo::after { content: ''; position: absolute; z-index: -2; inset: 8px -3px -13px -4px; background: #886a4722; filter: blur(10px); transform: rotate(1deg); }
.team-photo-paper { position: relative; padding: 19px 19px 15px; background-color: #fffaf0; background-image: repeating-linear-gradient(23deg, #9675470c 0 1px, transparent 1px 4px), repeating-linear-gradient(112deg, #fffefa55 0 1px, transparent 1px 7px); mask: url('/images/scrapbook/team-torn-edge.svg') center / 100% 100% no-repeat; }
.team-photo-paper > img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: contain; background: #ece5d6; border-radius: 0; }
.team-photo-paper figcaption { position: relative; padding: 19px 10px 15px; font-size: clamp(1.125rem, 1.4vw, 19px); line-height: 1.8; background: transparent; color: #624734; }
.team-photo-paper figcaption::after { content: ''; display: block; width: 58%; height: 5px; margin: 6px auto 0; background: #e9a3ba; border-radius: 50%; transform: rotate(-1deg); }
.team-photo-paper figcaption svg { display: inline-block; width: 17px; height: 17px; vertical-align: middle; margin-left: 4px; color: #d98aa5; stroke-width: 1.7; }
.team-tape { top: -10px; left: 42%; width: 99px; height: 31px; z-index: 3; transform: rotate(-3deg); background-image: repeating-linear-gradient(90deg, #e79db9aa 0 6px, #fff4e780 6px 12px), repeating-linear-gradient(0deg, #e79db9aa 0 6px, #fff4e780 6px 12px); }
.team-photo-clip { position: absolute; z-index: 3; left: 25px; top: -9px; width: 18px; height: 60px; border: 2px solid #a18160; border-radius: 13px; transform: rotate(12deg); box-shadow: 1px 1px 1px #75523122; pointer-events: none; }
.team-photo-clip::after { content: ''; position: absolute; inset: 4px 3px 7px; border: 1.5px solid #a18160; border-top: 0; border-radius: 0 0 8px 8px; }
.team-photo-class { position: absolute; right: -9px; bottom: 62px; display: flex; align-items: center; gap: 7px; padding: 9px 14px; background: #ffe6a4; color: #73512b; font-family: 'Lora', Georgia, serif; font-size: var(--text-body); transform: rotate(-5deg); box-shadow: 1px 3px 5px #78573218; border-radius: 2px 7px 3px 5px; }
.team-photo-class svg { width: 15px; height: 15px; color: #b58137; }
@media (max-width: 500px) { .team-photo { margin: 12px 6px 14px; padding: 0; } .team-photo-paper { padding: 13px 13px 10px; } .team-photo-paper figcaption { padding: 15px 4px 9px; font-size: var(--text-small); } .team-photo-paper figcaption svg { width: 13px; } .team-photo-class { bottom: 62px; right: -5px; font-size: var(--text-small); padding: 7px 10px; } .team-photo-clip { height: 46px; width: 15px; left: 20px; } .team-tape { width: 78px; height: 25px; top: -8px; } }

.team-spread { align-items: stretch; }
.team-paper { display: flex; flex-direction: column; justify-content: center; margin-block: 10px 17px; padding: clamp(28px, 3vw, 40px); box-shadow: 0 6px 20px #7955360a; }
.paper-heading h3 { font-size: clamp(30px, 2.8vw, 39px); line-height: 1.4; margin-top: 12px; }
.team-intro { font-size: var(--text-body); line-height: 1.9; margin-top: 17px; }
.team-facts { margin-top: 25px; }
.team-fact { padding: 21px; }
.team-fact dd { font-size: 21px; }
.team-paper-signature { display: flex; align-items: center; flex-wrap: wrap; gap: 17px; padding-top: 23px; margin-top: 25px; border-top: 1px dashed #d9cbbb; }
.team-paper-signature p { font-family: 'Lora', Georgia, serif; font-size: var(--text-small); font-style: italic; line-height: 1.8; color: #80634f; }
.team-paper-signature strong { font-weight: 500; color: #654631; }
@media (max-width: 1050px) { .team-paper { padding: 27px; } .team-tools-icons > span { width: 37px; height: 42px; } }
@media (max-width: 800px) { .team-paper { margin-block: 0; } }
@media (max-width: 500px) { .team-paper { padding: 25px 20px; } .paper-heading h3 { font-size: 30px; } .team-intro { font-size: var(--text-body); } .team-fact { padding: 17px; } .team-fact dd { font-size: 19px; } }
.team-paper-signature { flex-wrap: nowrap; align-items: flex-start; gap: 14px; margin-top: 23px; padding: 20px 0 0; border-top: 1px solid #e6d9c6; }
.team-signature-mark { display: grid; place-items: center; width: 44px; height: 44px; flex-shrink: 0; border: 1px solid #d9c9a9; border-radius: 50%; background: #f8eed8; color: #927346; }
.team-signature-mark svg { width: 24px; height: 24px; stroke-width: 1.4; }
.team-signature-label { display: block; margin: 1px 0 7px; font-size: var(--text-caption); font-weight: 500; letter-spacing: .8px; line-height: 1.8; color: #8c765c; }
.team-paper-signature p { font-size: var(--text-body); line-height: 1.8; color: #75604c; }
.team-paper-signature strong { color: #543b2b; font-weight: 500; }
@media (max-width: 500px) { .team-paper-signature { gap: 11px; padding-top: 17px; } .team-signature-mark { width: 37px; height: 37px; } .team-signature-mark svg { width: 21px; height: 21px; } .team-signature-label { font-size: var(--text-caption); letter-spacing: .5px; } .team-paper-signature p { font-size: var(--text-small); } }
.crew-member-label { font-size: var(--text-small); line-height: 1.7; color: #69523f; }
.crew-card h4 { min-height: 3.2em; }
.crew-avatar { color: #513c2c; }
.crew-task p { color: #5e4a37; font-size: var(--text-body); }
.crew-task-icon { color: #69523f; }
.mentor-school-logo { display: block; width: 76px; height: 76px; flex-shrink: 0; object-fit: contain; border: 3px solid #fffdf7; border-radius: 50%; background: #fff; }
.mentor-heading p, .team-eyebrow, .paper-heading > p, .team-fact dt, .crew-roster-heading > div > p, .crew-roster-heading > span, .team-signature-label { font-size: var(--text-small); letter-spacing: .5px; color: #5c4835; }
.mentor-heading > div > span { font-size: var(--text-small); color: #5e4a37; }
.mentor-links a { color: #285570; font-size: var(--text-body); }
.crew-status-label { font-size: var(--text-small); color: #415b35; letter-spacing: .3px; }
.crew-progress { border-color: #c8d5bf; }
.crew-progress-count { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin: 13px 0 11px; }
.crew-progress-count > strong { font-family: 'Lora', Georgia, serif; font-size: 38px; line-height: 1.2; color: #3e5b35; }
.crew-progress-count small { font-family: var(--font-sans); font-size: var(--text-body); font-weight: 500; }
.crew-progress-count > span { font-size: var(--text-small); line-height: 1.8; color: #4e613f; text-align: right; }
.crew-progress-bar { display: block; appearance: none; width: 100%; height: 9px; overflow: hidden; border: 0; border-radius: 6px; background: #dae4d2; accent-color: #607e4d; }
.crew-progress-bar::-webkit-progress-bar { background: #dae4d2; border-radius: 6px; }
.crew-progress-bar::-webkit-progress-value { background: #607e4d; border-radius: 6px; }
.crew-progress-bar::-moz-progress-bar { background: #607e4d; border-radius: 6px; }
.crew-progress p { margin-top: 11px; color: #506045; font-size: var(--text-small); line-height: 1.85; }
@media (max-width: 650px) { .mentor-school-logo { width: 62px; height: 62px; } .crew-progress-count > strong { font-size: 34px; } .crew-card h4 { min-height: 0; } }
@media (max-width: 500px) { .team-eyebrow, .team-signature-label { font-size: var(--text-small); } .crew-card-heading { margin-bottom: 15px; } .crew-member-label { font-size: var(--text-small); } .mentor-heading h4 { font-size: 21px; } }

.mentor-teacher-avatar { display: block; width: 76px; height: 76px; flex-shrink: 0; overflow: hidden; border: 3px solid #fffdf7; border-radius: 50%; background: #fff8eb; box-shadow: 0 0 0 1px #ddd0bb; }
.mentor-teacher-avatar > img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: 50% 33%; transform: scale(2.5); transform-origin: 50% 33%; }
@media (max-width: 650px) { .mentor-teacher-avatar { width: 62px; height: 62px; } }
/* Member stationery cards. */
.crew-roster-heading { display: block; margin-bottom: 42px; text-align: center; }
.crew-roster-heading > div > p { display: inline-block; padding: 8px 20px; background: #fff7e9; border-block: 1px solid #e6d6bf; font-size: var(--text-small); font-weight: 600; letter-spacing: 1.2px; }
.crew-roster-heading h3 { margin-top: 17px; font-size: clamp(31px, 3.4vw, 43px); line-height: 1.35; }
.crew-roster-heading h3 em { display: inline-block; position: relative; color: #3f7698; }
.crew-roster-heading h3 em::after { content: ''; position: absolute; left: 12%; right: 8%; bottom: -8px; height: 3px; border-radius: 50%; background: #eaa9b7; transform: rotate(-1deg); }
.crew-grid { gap: 22px; padding-top: 12px; }
.crew-card { --crew-tint: #e8f1f6; --crew-accent: #35627d; --crew-tab: #a8cbdf; display: flex; flex-direction: column; position: relative; isolation: isolate; padding: 32px 20px 20px; border: 1px solid #dfd1bc; border-top: 1px solid #dfd1bc; border-radius: 14px; background-color: #fffbf2; background-image: repeating-linear-gradient(25deg, #9e80520a 0 1px, transparent 1px 5px), radial-gradient(ellipse at 0 0, #ffffff80, transparent 70%); box-shadow: 0 4px 0 #e5d6c14d, 0 8px 16px #6b4b3010; }
.crew-pink { --crew-tint: #fae9ec; --crew-accent: #91485d; --crew-tab: #edb4bd; }
.crew-yellow { --crew-tint: #fcf0d5; --crew-accent: #825b22; --crew-tab: #efd183; }
.crew-sage { --crew-tint: #eaf0dd; --crew-accent: #4f6936; --crew-tab: #b8cea0; }
.crew-card-tape { position: absolute; top: -17px; left: calc(50% - 44px); width: 88px; height: 29px; transform: rotate(-3deg); background-color: #fff9e9d9; background-image: repeating-linear-gradient(90deg, var(--crew-tab) 0 7px, transparent 7px 14px), repeating-linear-gradient(0deg, #fffdf580 0 7px, transparent 7px 14px); border-inline: 1px dashed #fff9ec; box-shadow: 0 2px 3px #72533412; opacity: .85; pointer-events: none; }
.crew-grid-item:nth-child(even) .crew-card-tape { transform: rotate(3deg); }
.crew-corner-stitches { position: absolute; inset: 10px; border: 1px dashed #ac8b645c; border-radius: 9px; z-index: -1; pointer-events: none; }
.crew-card-heading { justify-content: flex-start; gap: 13px; margin-bottom: 23px; }
.crew-avatar { width: 61px; height: 61px; border-radius: 50%; border: 3px solid #fffbf2; outline: 1px solid var(--crew-tab); background: var(--crew-tint); color: var(--crew-accent); font-size: 25px; }
.crew-member-label { display: grid; gap: 5px; min-width: 0; color: #624b38; line-height: 1.6; }
.crew-member-label strong { font-family: var(--font-sans); font-size: var(--text-small); font-weight: 600; letter-spacing: .5px; }
.crew-member-label > span { font-size: var(--text-small); }
.crew-card h4 { min-height: 2.6em; margin: 0; font-family: 'Lora', Georgia, serif; font-size: clamp(24px, 2.2vw, 30px); font-weight: 700; letter-spacing: -.6px; line-height: 1.3; color: #513222; }
.crew-card h4 > span { display: block; }
.crew-name-stroke { position: relative; display: block; width: 60%; height: 5px; margin: 15px 0 22px 9px; background: var(--crew-tab); border-radius: 60% 45% 55% 50%; transform: rotate(-2deg); }
.crew-name-stroke::after { content: ''; position: absolute; right: -18px; top: -6px; width: 9px; height: 3px; border-radius: 4px; background: var(--crew-tab); transform: rotate(-45deg); }
.crew-task { flex: 1; align-items: center; gap: 11px; margin-top: 0; padding: 17px 12px; border: 0; border-radius: 14px; background: var(--crew-tint); }
.crew-task-icon { width: 34px; height: 40px; color: var(--crew-accent); }
.crew-task-icon svg { width: 33px; height: 36px; stroke-width: 1.4; }
.crew-task > div { min-width: 0; }
.crew-task > div > span { font-size: var(--text-small); font-weight: 600; line-height: 1.7; color: #533b2b; }
.crew-task p { font-size: var(--text-small); line-height: 1.75; color: #664d38; margin-top: 5px; }
.crew-roster-handnote { display: flex; align-items: center; justify-content: center; gap: 12px; margin: 26px auto 30px; padding-inline: 12px; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: var(--text-body); line-height: 1.8; text-align: center; color: #70523c; }
.crew-roster-handnote svg { width: 23px; height: 23px; color: #d28da1; flex-shrink: 0; stroke-width: 1.6; }
@media (max-width: 1100px) { .crew-grid { gap: 30px 23px; } .crew-card { padding: 32px 24px 24px; } .crew-card h4 { font-size: 33px; } .crew-task { min-height: 96px; } .crew-task > div > span { font-size: var(--text-body); } .crew-task p { font-size: var(--text-body); } .crew-member-label strong { font-size: var(--text-small); } }
@media (max-width: 650px) { .crew-card { padding: 30px 17px 18px; } .crew-card-heading { gap: 10px; } .crew-avatar { width: 48px; height: 48px; font-size: 22px; } .crew-member-label strong { font-size: var(--text-small); } .crew-card h4 { font-size: 27px; min-height: 2.6em; } .crew-task { flex-direction: column; align-items: flex-start; padding: 14px; gap: 8px; } .crew-task > div > span { font-size: var(--text-small); } .crew-task p { font-size: var(--text-small); } .crew-roster-handnote { font-size: var(--text-body); } }
@media (max-width: 480px) { .crew-grid { gap: 31px; width: min(360px, 100%); margin-inline: auto; } .crew-roster-heading > div > p { padding-inline: 12px; font-size: var(--text-small); } .crew-card { padding: 32px 24px 22px; } .crew-card-heading { margin-bottom: 23px; gap: 15px; } .crew-avatar { width: 63px; height: 63px; font-size: 27px; } .crew-member-label strong { font-size: var(--text-small); } .crew-member-label > span { font-size: var(--text-small); } .crew-card h4 { font-size: 35px; min-height: 0; } .crew-name-stroke { margin-bottom: 24px; } .crew-task { flex-direction: row; align-items: center; min-height: 100px; margin-top: 0; gap: 13px; } .crew-task > div > span, .crew-task p { font-size: var(--text-body); } }
@media (prefers-reduced-motion: reduce) { .crew-grid-item { transform: none !important; } }
/* Two distinct paper notes for mentorship and the prototype journey. */
.crew-support-grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 27px; margin-top: 34px; align-items: stretch; }
.crew-support-grid .mentor-note { position: relative; display: flex; flex-direction: column; align-items: stretch; justify-content: space-between; gap: 25px; margin: 0; padding: 30px; border: 1px solid #e0d1ba; border-radius: 7px; background: #fffaf0; background-image: repeating-linear-gradient(20deg, #a68a6006 0 1px, transparent 1px 4px); box-shadow: -4px 5px 0 #dce9f0, 0 8px 20px #7853340b; }
.mentor-paper-tape { position: absolute; top: -12px; left: 30px; width: 75px; height: 24px; background: repeating-linear-gradient(90deg, #accbdf9c 0 6px, #e9f2f6b3 6px 12px); transform: rotate(-5deg); pointer-events: none; }
.mentor-heading { gap: 20px; align-items: center; }
.mentor-heading p { color: #6f593f; font-size: 12px; letter-spacing: 1px; }
.mentor-heading h4 { font-size: clamp(23px, 2vw, 28px); margin-top: 7px; }
.mentor-heading > div > span { font-size: 13px; line-height: 1.85; }
.mentor-teacher-avatar { width: 96px; height: 112px; border-radius: 35px 35px 8px 8px; border: 4px solid #fffdf7; box-shadow: 0 0 0 1px #d7c6ab, 2px 4px 0 #e9dbc5; transform: rotate(-3deg); }
.mentor-links { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; padding: 20px 0 0; border-left: 0; border-top: 1px dashed #d9c8ad; }
.mentor-links > p { font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 13px; line-height: 1.8; color: #7b644c; }
.mentor-links .mentor-contact-button { display: inline-flex; justify-content: center; gap: 10px; min-height: 46px; height: auto; padding: 10px 16px; border: 1px solid #624331; border-radius: 24px; background: #624331; color: #fffaf0; font-size: 13px; line-height: 1.7; text-decoration: none; }
.mentor-links .mentor-contact-button:hover { background: #7a5540; text-decoration: none; }
.mentor-links .mentor-contact-button > svg { margin: 0; width: 16px; height: 16px; }
.crew-support-grid .crew-project-note { display: block; position: relative; margin: 0; padding: 27px 30px; border: 1px solid #ccd8bd; border-radius: 7px; background: #f3f6ed; box-shadow: 3px 5px 0 #e3e7d8; }
.crew-journey-label { font-size: 12px; line-height: 1.8; letter-spacing: 1px; color: #5c7048; }
.crew-project-note > h4 { margin: 8px 0 20px; font-family: 'Lora', Georgia, serif; font-size: 25px; line-height: 1.45; font-weight: 600; color: #4c583c; }
.crew-project-note > h4 em { font-weight: 500; }
.crew-progress { padding: 0; border: 0; }
.crew-status-label { font-size: 12px; color: #50663e; letter-spacing: .4px; }
.crew-progress-count { margin: 14px 0 13px; gap: 15px; }
.crew-progress-count > strong { font-size: 43px; color: #496438; font-weight: 500; }
.crew-progress-count small { font-size: 14px; }
.crew-progress-count > span { font-size: 12px; text-align: right; }
.crew-progress-count b { font-size: 16px; font-weight: 600; }
.crew-progress-bar { height: 7px; }
.crew-progress > p { margin-top: 12px; font-size: 12px; line-height: 1.8; color: #5d6b50; }
@media (max-width: 1000px) { .crew-support-grid { gap: 22px; } .crew-support-grid .mentor-note, .crew-support-grid .crew-project-note { padding: 26px 23px; } .mentor-heading { gap: 15px; } .mentor-teacher-avatar { width: 76px; height: 94px; } .mentor-heading h4 { font-size: 23px; } }
@media (max-width: 760px) { .crew-support-grid { grid-template-columns: 1fr; gap: 25px; margin-top: 28px; } .mentor-links { justify-content: space-between; } .mentor-teacher-avatar { width: 88px; height: 103px; } .crew-project-note > h4 br { display: none; } .crew-project-note > h4 em { margin-left: 5px; } }
@media (max-width: 480px) { .crew-support-grid .mentor-note, .crew-support-grid .crew-project-note { padding: 26px 20px; } .mentor-heading { align-items: flex-start; gap: 14px; } .mentor-teacher-avatar { width: 72px; height: 90px; } .mentor-heading h4 { font-size: 22px; } .mentor-heading p { font-size: 12px; letter-spacing: .4px; } .mentor-heading > div > span { font-size: 12px; } .mentor-links { gap: 14px; } .mentor-links .mentor-contact-button { width: 100%; } .crew-project-note > h4 { font-size: 23px; } .crew-progress-count > strong { font-size: 39px; } }
.team-wish-note { position: relative; display: flex; align-items: flex-start; gap: 13px; width: min(470px, calc(100% - 40px)); margin: 30px auto 10px; padding: 23px 24px 20px; border: 1px solid #e6d5ae; background: #fff3d4; box-shadow: 2px 4px 0 #e8d7b43d, 0 7px 16px #6b4b3009; transform: rotate(-1.5deg); }
.team-wish-tape { position: absolute; top: -10px; left: calc(50% - 35px); width: 70px; height: 21px; background: repeating-linear-gradient(45deg, #eac878a6 0 5px, #fff0c6b3 5px 10px); transform: rotate(4deg); pointer-events: none; }
.team-wish-heart { width: 22px; height: 22px; margin-top: 3px; color: #b67486; stroke-width: 1.5; flex-shrink: 0; }
.team-wish-note h3 { font-family: 'Lora', Georgia, serif; font-size: 17px; font-weight: 600; line-height: 1.6; color: #67482f; }
.team-wish-note p { margin-top: 7px; font-size: 13px; line-height: 1.85; color: #745d43; }
@media (max-width: 500px) { .team-wish-note { width: calc(100% - 16px); gap: 10px; margin-top: 26px; padding: 21px 17px 18px; transform: rotate(-1deg); } .team-wish-note h3 { font-size: 16px; } .team-wish-heart { width: 19px; height: 19px; } }
.crew-support-grid .mentor-note { justify-content: flex-start; gap: 22px; }
.mentor-links { margin-top: auto; }
.crew-support-grid .crew-project-note { background-image: linear-gradient(#99b07e0b 1px, transparent 1px), linear-gradient(90deg, #99b07e0b 1px, transparent 1px); background-size: 20px 20px; }
.crew-project-note > h4 { position: relative; padding-right: 65px; }
.crew-prototype-sticker { position: absolute; right: 27px; top: 45px; display: grid; place-items: center; width: 51px; height: 57px; border: 3px solid #fffdf4; border-radius: 15px; background: #e1ebd4; color: #6c8251; box-shadow: 2px 3px 0 #ced9be; transform: rotate(9deg); }
.crew-prototype-sticker svg { width: 30px; height: 30px; stroke-width: 1.4; }
.crew-prototype-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 9px; margin-top: 17px; }
.crew-prototype-slot { display: grid; justify-items: center; gap: 5px; padding: 10px 5px 8px; border: 1px dashed #bac8aa; border-radius: 5px 9px 5px 9px; background: #ffffff4d; color: #748067; }
.crew-prototype-slot > svg { width: 25px; height: 25px; stroke-width: 1.4; }
.crew-prototype-slot > span { font-family: 'Lora', Georgia, serif; font-size: 12px; line-height: 1.4; }
.crew-prototype-recorded { background: #dce9cc; border: 1px solid #a4bb8b; color: #486231; box-shadow: 0 2px 0 #bfd0ab; }
.crew-prototype-legend { display: flex; flex-wrap: wrap; gap: 8px 17px; margin-top: 13px; }
.crew-prototype-legend > span { display: flex; align-items: center; gap: 6px; font-size: 12px; line-height: 1.7; color: #5b6b4e; }
.crew-prototype-legend i { width: 9px; height: 9px; border-radius: 2px; background: #bed2a5; }
.crew-prototype-legend > span:last-child i { background: transparent; border: 1px dashed #94a77e; }
.crew-progress > p { padding-top: 12px; border-top: 1px dashed #c9d5ba; }
@media (max-width: 480px) { .crew-prototype-sticker { right: 19px; top: 47px; width: 43px; height: 48px; } .crew-prototype-sticker svg { width: 25px; height: 25px; } .crew-project-note > h4 { padding-right: 49px; } .crew-prototype-grid { gap: 7px; } .crew-prototype-slot { padding: 9px 3px 7px; } .crew-prototype-slot > svg { width: 22px; height: 22px; } }
.mentor-thought { position: relative; margin: 2px 5px; padding: 25px 22px 20px; border: 1px solid #e5d3aa; background-color: #fff1cf; background-image: repeating-linear-gradient(0deg, transparent 0 28px, #c5a55c14 28px 29px); box-shadow: 2px 4px 0 #e9d9b540; transform: rotate(-1deg); }
.mentor-thought-tape { position: absolute; top: -9px; left: calc(50% - 28px); width: 56px; height: 19px; background: repeating-linear-gradient(45deg, #e5b4c580 0 5px, #fff4e6a6 5px 10px); transform: rotate(4deg); pointer-events: none; }
.mentor-thought-label { font-size: 12px; line-height: 1.8; letter-spacing: .7px; color: #82633e; }
.mentor-thought-message { margin-top: 13px; font-family: 'Lora', Georgia, serif; font-size: clamp(17px, 1.7vw, 21px); line-height: 1.8; color: #67492f; }
.mentor-thought-message em { color: #8c5e55; font-weight: 400; }
.mentor-thought > svg { display: block; width: 22px; height: 22px; margin: 12px 0 0 auto; color: #bc8090; stroke-width: 1.5; }
@media (max-width: 480px) { .mentor-thought { margin-inline: 0; padding: 23px 17px 18px; } .mentor-thought-message { font-size: 17px; } }
.mentor-links > p { font-family: var(--font-sans); font-size: 14px; font-style: normal; line-height: 1.8; color: #624b37; }
.crew-progress > p { font-size: 14px; line-height: 1.8; color: #4f613f; }
.crew-prototype-legend > span { font-size: 14px; color: #4f613f; }
@media (max-width: 600px) { .mentor-links > p, .crew-progress > p, .crew-prototype-legend > span { font-size: 13px; line-height: 1.8; } }
/* Compact paper steps within the introduction sheet. */
.team-workflow { margin-top: 22px; padding-top: 19px; border-top: 1px solid #e6d9c6; }
.team-workflow h4 { margin: 0; font-family: 'Lora', Georgia, serif; font-size: 21px; font-weight: 600; line-height: 1.5; color: #543b2b; }
.team-workflow ol { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin: 22px 0 0; padding: 0; list-style: none; }
.team-workflow li { --step-paper: #fbefcb; --step-border: #e6d5a5; position: relative; min-width: 0; min-height: 160px; padding: 17px 12px 14px; border: 1px solid var(--step-border); border-radius: 3px 5px 4px 3px; background-color: var(--step-paper); background-image: repeating-linear-gradient(25deg, #97794b06 0 1px, transparent 1px 4px); box-shadow: 1px 3px 0 #80603b0a; }
.team-workflow li:nth-child(2) { --step-paper: #e4eff5; --step-border: #c9dce6; }
.team-workflow li:nth-child(3) { --step-paper: #eaf0dc; --step-border: #d0ddba; }
.team-step-tape { position: absolute; top: -7px; left: calc(50% - 18px); width: 36px; height: 14px; background: #d1c6af66; border-inline: 1px dashed #fdf8ee80; transform: rotate(-3deg); pointer-events: none; }
.team-workflow li:nth-child(2) .team-step-tape { background: #aac6d366; transform: rotate(3deg); }
.team-workflow li:nth-child(3) .team-step-tape { background: #b5c59e66; }
.team-step-top { display: flex; justify-content: space-between; align-items: center; gap: 6px; margin-bottom: 11px; color: #705b3c; }
.team-step-top svg { width: 22px; height: 22px; stroke-width: 1.5; flex-shrink: 0; }
.team-step-top > span { font-family: 'Lora', Georgia, serif; font-size: 12px; color: #78654e; }
.team-workflow strong { display: block; font-size: 14px; line-height: 1.65; font-weight: 600; color: #5c4430; }
.team-workflow li p { margin-top: 6px; font-size: 13px; line-height: 1.75; color: #6e583f; }
@media (max-width: 1100px) and (min-width: 801px), (max-width: 500px) { .team-workflow ol { grid-template-columns: 1fr; gap: 15px; margin-top: 19px; } .team-workflow li { display: grid; grid-template-columns: 31px minmax(0, 1fr); column-gap: 10px; min-height: 0; padding: 16px 14px; } .team-step-top { grid-column: 1; grid-row: 1 / span 2; flex-direction: column; justify-content: flex-start; margin: 0; gap: 5px; } .team-workflow strong, .team-workflow li p { grid-column: 2; } .team-workflow li p { margin-top: 3px; } .team-step-tape { left: auto; right: 17px; width: 30px; } }
</style>


