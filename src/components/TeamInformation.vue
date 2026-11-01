<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { ref, watch } from 'vue'
import { motion } from 'motion-v'
import { ArrowUpRight, BookOpen, GraduationCap, Heart, Lightbulb, Mail, Megaphone, NotebookPen, Phone, School, Users, Wallet, Pencil, Sprout } from '@lucide/vue'
import { Card } from '@/components/ui/card'

const props = withDefaults(defineProps<{ photoSrc?: string }>(), {
  photoSrc: publicAsset('/images/video-posters/nhom-du-an-tai-truong.jpg'),
})
const photoFailed = ref(false)
watch(() => props.photoSrc, () => { photoFailed.value = false })
const members = [
  { initials: 'TP', name: 'Hoàng Thu Phượng', role: 'Kế hoạch & điều phối', detail: 'Trưởng nhóm · Thiết kế tổng thể', icon: BookOpen, color: 'blue' },
  { initials: 'DL', name: 'Hoàng Diệu Linh', role: 'Nội dung & truyền thông', detail: 'Học liệu và đánh giá', icon: Megaphone, color: 'pink' },
  { initials: 'NH', name: 'Triệu Ngọc Hà', role: 'Dự toán & phản hồi', detail: 'Khảo giá và tổng hợp ý kiến', icon: NotebookPen, color: 'yellow' },
  { initials: 'HN', name: 'Hoàng Thị Hồng Nhung', role: 'Sản phẩm & trải nghiệm', detail: 'Hoàn thiện mẫu và chất lượng', icon: Lightbulb, color: 'sage' },
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
      </div>

      <motion.div class="team-paper" :initial="{ opacity: 0, y: 14 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: 0.45 }">
        <div class="paper-heading"><p>CHÚNG MÌNH LÀ AI?</p><h3>Ví nhỏ thông minh</h3></div>
        <p class="team-intro">Từ một ý tưởng nhỏ, chúng mình cùng nhau xây dựng bộ công cụ giáo dục tài chính cho học sinh THCS.</p>
        <dl class="team-facts">
          <Card class="team-fact"><dt><School aria-hidden="true" /> ĐƠN VỊ THỰC HIỆN</dt><dd>Trường THCS Thượng Long</dd><dd class="fact-detail">Phân hiệu Phúc Khánh · Xã Thượng Long, Phú Thọ</dd></Card>
        </dl>
        <div class="team-paper-signature">
          <div class="team-tools-icons" aria-hidden="true"><span><Wallet /></span><span><NotebookPen /></span><span><Pencil /></span><span><Sprout /></span></div>
          <p>Mỗi bạn một thế mạnh.<br /><strong>Cùng làm nên điều có ích.</strong></p>
        </div>
      </motion.div>
    </div>

    <section class="crew-roster" aria-labelledby="crew-roster-title">
      <header class="crew-roster-heading"><div><p>NHỮNG MẢNH GHÉP CỦA DỰ ÁN</p><h3 id="crew-roster-title">Bốn thành viên, <em>một ý tưởng chung.</em></h3></div><span><Users aria-hidden="true" /> LỚP 9B1</span></header>
      <ul class="crew-grid" aria-label="Thành viên và vai trò trong nhóm">
        <li v-for="(member, index) in members" :key="member.initials" class="crew-grid-item">
          <Card class="crew-card" :class="`crew-${member.color}`">
            <div class="crew-card-heading"><span class="crew-avatar" aria-hidden="true">{{ member.initials }}</span><span class="crew-number">THÀNH VIÊN <strong>{{ String(index + 1).padStart(2, '0') }}</strong></span></div>
            <h4>{{ member.name }}</h4>
            <p class="crew-role">{{ member.role }}</p>
            <div class="crew-task"><span class="crew-task-icon"><component :is="member.icon" aria-hidden="true" /></span><div><span>PHỤ TRÁCH</span><p>{{ member.detail }}</p></div></div>
          </Card>
        </li>
      </ul>
      <Card class="mentor-note">
          <div class="mentor-heading"><span class="mentor-icon"><GraduationCap aria-hidden="true" /></span><div><p>NGƯỜI ĐỒNG HÀNH</p><h4>Cô Nguyễn Thu Hà</h4><span>Giáo viên Tiếng Anh · Giáo viên hướng dẫn</span></div></div>
          <div class="mentor-links"><a href="tel:0327227803"><Phone aria-hidden="true" /><span>0327 227 803</span><ArrowUpRight aria-hidden="true" /></a><a href="mailto:thuha03ulis@gmail.com"><Mail aria-hidden="true" /><span>thuha03ulis@gmail.com</span><ArrowUpRight aria-hidden="true" /></a></div>
        </Card>
      <div class="crew-project-note"><div class="crew-message"><Heart aria-hidden="true" /><p>Cùng góp một phần nhỏ.<br /><strong>Cùng làm nên điều ý nghĩa.</strong></p></div><div class="crew-progress"><span class="crew-status-label"><span aria-hidden="true"></span> ĐANG HOÀN THIỆN SẢN PHẨM MẪU</span><p>Hồ sơ ghi nhận <strong>01 bộ mẫu phiên bản số 1</strong>.<br />Bước tiếp theo: hướng tới 10 bộ phục vụ trải nghiệm.</p></div></div>
    </section>
  </section>
</template>

<style scoped>
.team-information { width: min(1240px, calc(100% - 80px)); margin-inline: auto; padding-block: 64px 52px; scroll-margin-top: 112px; color: #542c20; }
.team-heading { margin-bottom: 32px; }
.team-eyebrow { width: fit-content; padding: 7px 13px; border: 1px solid #cadfea; border-radius: 7px; background: #eaf3f9; color: #356381; font-size: 11px; letter-spacing: 1.2px; font-weight: 600; line-height: 1.7; }
.team-heading h2 { margin-top: 17px; font-family: 'Lora', Georgia, serif; font-size: clamp(30px, 3vw, 41px); letter-spacing: -.8px; line-height: 1.4; font-weight: 600; text-wrap: balance; }
.team-heading h2 br { display: none; }
.team-heading h2 > span { text-decoration: underline; text-decoration-color: #b9dceb; text-decoration-thickness: 3px; text-underline-offset: 8px; }
.team-spread { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: clamp(28px, 4vw, 52px); }
.team-story { min-width: 0; }
.team-photo { position: relative; margin: 0; padding: 10px 10px 0; border: 1px solid #ded8cb; border-radius: 15px; background: #fffdf7; box-shadow: 0 8px 24px #7353380d; }
.team-photo > img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: contain; border-radius: 8px; background: #eee7da; }
.team-photo figcaption { padding: 19px 8px 20px; color: #624734; text-align: center; font-family: 'Lora', Georgia, serif; font-size: clamp(15px, 1.5vw, 19px); font-style: italic; line-height: 1.7; }
.team-tape { position: absolute; z-index: 1; top: -10px; left: calc(50% - 37px); width: 74px; height: 23px; background: repeating-linear-gradient(90deg, #eeb0c699 0 5px, #fff3eb99 5px 10px), repeating-linear-gradient(#efa5bf99 0 5px, #fff5ea99 5px 10px); transform: rotate(-3deg); pointer-events: none; }
.team-photo-fallback { min-height: 240px; display: grid; place-content: center; justify-items: center; gap: 15px; border-radius: 8px; background: #e3eef4; color: #375b70; text-align: center; font-size: 14px; line-height: 1.8; }
.team-photo-fallback svg { width: 44px; height: 44px; }
.team-paper { min-width: 0; padding: clamp(24px, 2.5vw, 34px); border: 1px solid #e5dccd; border-radius: 18px; background: #fffdf8; }
.paper-heading > p { color: #766049; font-size: 11px; font-weight: 600; letter-spacing: 1.2px; line-height: 1.7; }
.paper-heading h3 { margin-top: 9px; font-family: 'Lora', Georgia, serif; font-size: clamp(26px, 2.3vw, 32px); font-weight: 600; line-height: 1.5; }
.team-intro { margin-top: 12px; color: #695340; font-size: 14px; line-height: 1.85; }
.team-facts { margin: 22px 0 0; }
.team-fact { padding: 18px; border: 1px solid #d7e5ed; border-radius: 12px; background: #eef5f9; box-shadow: none; color: #542c20; }
.team-fact dt { display: flex; align-items: center; gap: 8px; color: #345f7a; font-size: 11px; font-weight: 600; letter-spacing: .6px; line-height: 1.7; }
.team-fact dt svg { width: 19px; height: 19px; flex-shrink: 0; stroke-width: 1.6; }
.team-fact dd { margin: 8px 0 0; font-family: 'Lora', Georgia, serif; font-size: 18px; font-weight: 600; line-height: 1.6; }
.team-fact .fact-detail { margin-top: 5px; font-family: var(--font-sans); font-size: 13px; font-weight: 400; line-height: 1.8; color: #5d6263; }
.mentor-note { display: grid; grid-template-columns: 1.1fr 1fr; align-items: center; gap: 24px; margin-top: 24px; padding: 24px; border: 1px solid #e9ddbd; border-radius: 14px; background: #fff6df; box-shadow: none; color: #542c20; }
.mentor-heading { display: flex; align-items: flex-start; gap: 12px; }
.mentor-heading > div { min-width: 0; }
.mentor-icon { display: grid; place-items: center; width: 40px; height: 40px; flex-shrink: 0; background: #f5e5ba; color: #80602f; border-radius: 12px; }
.mentor-icon svg { width: 24px; height: 24px; }
.mentor-heading p { color: #77582e; font-size: 11px; font-weight: 600; letter-spacing: .6px; line-height: 1.7; }
.mentor-heading h4 { margin-top: 4px; font-family: 'Lora', Georgia, serif; font-size: 20px; font-weight: 600; line-height: 1.5; }
.mentor-heading > div > span { display: block; margin-top: 5px; color: #69583e; font-size: 13px; line-height: 1.8; }
.mentor-links { display: grid; gap: 3px; min-width: 0; padding-left: 24px; border-left: 1px solid #e7d9b8; }
.mentor-links a { display: flex; align-items: center; gap: 10px; min-height: 44px; color: #245b80; font-size: 13px; font-weight: 500; line-height: 1.7; border-radius: 5px; }
.mentor-links a > span { min-width: 0; overflow-wrap: anywhere; }
.mentor-links svg { width: 17px; height: 17px; flex-shrink: 0; }
.mentor-links a > svg:last-child { width: 14px; margin-left: auto; }
.mentor-links a:hover { text-decoration: underline; text-underline-offset: 4px; }
.mentor-links a:focus-visible { outline: 3px solid #376e95; outline-offset: 3px; }
@media (max-width: 1050px) { .team-information { width: calc(100% - 48px); } .team-spread { gap: 26px; } .team-paper { padding: 23px; } }
@media (max-width: 800px) { .team-information { padding-top: 42px; } .team-heading { margin-bottom: 28px; } .team-spread { grid-template-columns: 1fr; gap: 25px; } .team-story { width: min(620px, 100%); margin-inline: auto; } }
@media (max-width: 500px) { .team-information { width: calc(100% - 32px); padding-block: 34px 40px; } .team-eyebrow { font-size: 10px; letter-spacing: .7px; } .team-heading h2 { font-size: 30px; } .team-heading h2 br { display: block; } .team-paper { padding: 22px 18px; } .team-photo { padding: 8px 8px 0; } .team-photo figcaption { padding-block: 15px; font-size: 15px; } .mentor-note, .team-fact { padding: 16px; } .mentor-heading { gap: 10px; } .mentor-icon { width: 34px; height: 36px; } .mentor-heading h4 { font-size: 19px; } }
.crew-roster { margin-top: 42px; }
.crew-roster-heading { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-bottom: 23px; }
.crew-roster-heading > div > p { color: #38627e; font-size: 11px; letter-spacing: 1.4px; font-weight: 600; line-height: 1.8; }
.crew-roster-heading h3 { margin-top: 8px; font-family: 'Lora', Georgia, serif; font-size: clamp(23px, 2.3vw, 30px); font-weight: 600; line-height: 1.5; color: #583b2c; }
.crew-roster-heading h3 em { color: #4a7a9c; font-weight: 500; }
.crew-roster-heading > span { display: inline-flex; align-items: center; gap: 8px; padding: 8px 13px; background: #e9f2f8; border: 1px solid #ccdfeb; border-radius: 20px; color: #38627e; font-size: 11px; letter-spacing: 1px; flex-shrink: 0; }
.crew-roster-heading > span > svg { width: 17px; height: 17px; }
.crew-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; list-style: none; padding: 0; margin: 0; }
.crew-grid-item { min-width: 0; display: flex; }
.crew-card { --crew-tint: #e7f2fa; --crew-accent: #557e9d; --crew-tab: #c4dff1; position: relative; width: 100%; padding: 22px 20px 19px; border: 1px solid #e6dbc9; border-top: 4px solid var(--crew-tab); border-radius: 6px 17px 6px 14px; background: #fffdf7; box-shadow: 0 4px 0 #e6dcca55; color: #583b2c; }
.crew-pink { --crew-tint: #fbeaf1; --crew-accent: #a46b85; --crew-tab: #f0c5d6; }
.crew-yellow { --crew-tint: #fff5d7; --crew-accent: #9d7a3b; --crew-tab: #f4dfa0; }
.crew-sage { --crew-tint: #eef4e6; --crew-accent: #718958; --crew-tab: #d0e1bc; }
.crew-card-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
.crew-avatar { display: grid; place-items: center; width: 52px; height: 52px; flex-shrink: 0; background: var(--crew-tint); border: 1px solid var(--crew-tab); border-radius: 15px 15px 15px 5px; font-family: 'Lora', Georgia, serif; font-size: 19px; font-weight: 700; color: var(--crew-accent); }
.crew-number { display: grid; gap: 4px; text-align: right; font-size: 10px; letter-spacing: .6px; line-height: 1.7; color: #75614d; }
.crew-number strong { font-family: 'Lora', Georgia, serif; font-size: 25px; line-height: 1; font-weight: 500; color: var(--crew-accent); }
.crew-card h4 { font-family: 'Lora', Georgia, serif; font-size: 18px; line-height: 1.6; font-weight: 700; padding-right: 0; }
.crew-role { margin-top: 5px; font-size: 13px; line-height: 1.8; color: #69523f; }
.crew-task { display: flex; align-items: flex-start; gap: 10px; margin-top: 20px; padding: 12px 10px; background: var(--crew-tint); border-radius: 7px; }
.crew-task-icon { display: grid; place-items: center; width: 28px; height: 30px; color: var(--crew-accent); flex-shrink: 0; }
.crew-task-icon svg { width: 23px; height: 23px; stroke-width: 1.5; }
.crew-task > div > span { font-size: 10px; font-weight: 600; letter-spacing: .7px; line-height: 1.8; color: var(--crew-accent); }
.crew-task p { margin-top: 4px; font-size: 13px; line-height: 1.8; color: #69523f; }
.crew-project-note { display: grid; grid-template-columns: 1fr 1.2fr; gap: 24px; align-items: center; margin-top: 24px; padding: 22px 26px; border: 1px dashed #dcc9a7; background: #fff5df; border-radius: 7px 14px 7px 12px; }
.crew-message { display: flex; align-items: center; gap: 15px; }
.crew-message svg { width: 28px; height: 30px; color: #c4849d; flex-shrink: 0; stroke-width: 1.5; }
.crew-message p { font-family: 'Lora', Georgia, serif; font-size: 16px; font-style: italic; line-height: 1.8; color: #94754c; }
.crew-message strong { font-weight: 500; color: #66492e; }
.crew-progress { border-left: 1px dashed #d9c49f; padding-left: 26px; }
.crew-status-label { display: inline-flex; align-items: center; gap: 7px; font-size: 11px; letter-spacing: .5px; font-weight: 600; line-height: 1.8; color: #52643d; }
.crew-status-label > span { width: 6px; height: 6px; border-radius: 50%; background: #8da271; }
.crew-progress p { margin-top: 6px; font-size: 13px; line-height: 1.85; color: #69523f; }
.crew-progress strong { font-weight: 600; color: #654e32; }
@media (max-width: 1100px) { .crew-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 650px) { .mentor-note { grid-template-columns: 1fr; gap: 16px; padding: 20px; } .mentor-links { padding: 12px 0 0; border-left: 0; border-top: 1px solid #e7d9b8; } .crew-roster { margin-top: 30px; } .crew-roster-heading { align-items: flex-start; gap: 14px; } .crew-roster-heading > span { font-size: 11px; padding: 7px 9px; } .crew-roster-heading h3 { font-size: 24px; } .crew-project-note { grid-template-columns: 1fr; padding: 20px; gap: 18px; } .crew-progress { border-left: 0; border-top: 1px dashed #d9c49f; padding: 16px 0 0; } }
@media (max-width: 480px) { .crew-grid { grid-template-columns: 1fr; gap: 15px; } .crew-card { padding: 19px 20px; } .crew-card-heading { margin-bottom: 12px; } .crew-card h4 { font-size: 20px; } .crew-task { margin-top: 14px; } .crew-roster-heading { flex-direction: column; } }

/* Separate paper silhouette from tape and clip so decorations stay outside the torn edge. */
.team-photo { position: relative; isolation: isolate; padding: 0; border: 0; border-radius: 0; background: transparent; box-shadow: none; margin: 14px 8px 17px; transform: rotate(-1deg); }
.team-photo::before { content: ''; position: absolute; z-index: -1; inset: -7px -9px -10px -13px; background: #b9d7e9; background-image: repeating-linear-gradient(14deg, #ffffff30 0 1px, transparent 1px 4px); mask: url('/images/scrapbook/team-torn-edge.svg') center / 100% 100% no-repeat; transform: rotate(2.6deg); }
.team-photo::after { content: ''; position: absolute; z-index: -2; inset: 8px -3px -13px -4px; background: #886a4722; filter: blur(10px); transform: rotate(1deg); }
.team-photo-paper { position: relative; padding: 19px 19px 15px; background-color: #fffaf0; background-image: repeating-linear-gradient(23deg, #9675470c 0 1px, transparent 1px 4px), repeating-linear-gradient(112deg, #fffefa55 0 1px, transparent 1px 7px); mask: url('/images/scrapbook/team-torn-edge.svg') center / 100% 100% no-repeat; }
.team-photo-paper > img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: contain; background: #ece5d6; border-radius: 0; }
.team-photo-paper figcaption { position: relative; padding: 19px 10px 15px; font-size: clamp(14px, 1.4vw, 19px); line-height: 1.8; background: transparent; color: #624734; }
.team-photo-paper figcaption::after { content: ''; display: block; width: 58%; height: 5px; margin: 6px auto 0; background: #e9a3ba; border-radius: 50%; transform: rotate(-1deg); }
.team-photo-paper figcaption svg { display: inline-block; width: 17px; height: 17px; vertical-align: middle; margin-left: 4px; color: #d98aa5; stroke-width: 1.7; }
.team-tape { top: -10px; left: 42%; width: 99px; height: 31px; z-index: 3; transform: rotate(-3deg); background-image: repeating-linear-gradient(90deg, #e79db9aa 0 6px, #fff4e780 6px 12px), repeating-linear-gradient(0deg, #e79db9aa 0 6px, #fff4e780 6px 12px); }
.team-photo-clip { position: absolute; z-index: 3; left: 25px; top: -9px; width: 18px; height: 60px; border: 2px solid #a18160; border-radius: 13px; transform: rotate(12deg); box-shadow: 1px 1px 1px #75523122; pointer-events: none; }
.team-photo-clip::after { content: ''; position: absolute; inset: 4px 3px 7px; border: 1.5px solid #a18160; border-top: 0; border-radius: 0 0 8px 8px; }
.team-photo-class { position: absolute; right: -9px; bottom: 62px; display: flex; align-items: center; gap: 7px; padding: 9px 14px; background: #ffe6a4; color: #73512b; font-family: 'Lora', Georgia, serif; font-size: 15px; transform: rotate(-5deg); box-shadow: 1px 3px 5px #78573218; border-radius: 2px 7px 3px 5px; }
.team-photo-class svg { width: 15px; height: 15px; color: #b58137; }
@media (max-width: 500px) { .team-photo { margin: 12px 6px 14px; padding: 0; } .team-photo-paper { padding: 13px 13px 10px; } .team-photo-paper figcaption { padding: 15px 4px 9px; font-size: 13px; } .team-photo-paper figcaption svg { width: 13px; } .team-photo-class { bottom: 62px; right: -5px; font-size: 12px; padding: 7px 10px; } .team-photo-clip { height: 46px; width: 15px; left: 20px; } .team-tape { width: 78px; height: 25px; top: -8px; } }

.team-spread { align-items: stretch; }
.team-paper { display: flex; flex-direction: column; justify-content: center; margin-block: 10px 17px; padding: clamp(28px, 3vw, 40px); box-shadow: 0 6px 20px #7955360a; }
.paper-heading h3 { font-size: clamp(30px, 2.8vw, 39px); line-height: 1.4; margin-top: 12px; }
.team-intro { font-size: 15px; line-height: 1.9; margin-top: 17px; }
.team-facts { margin-top: 25px; }
.team-fact { padding: 21px; }
.team-fact dd { font-size: 21px; }
.team-paper-signature { display: flex; align-items: center; flex-wrap: wrap; gap: 17px; padding-top: 23px; margin-top: 25px; border-top: 1px dashed #d9cbbb; }
.team-tools-icons { display: flex; gap: 8px; }
.team-tools-icons > span { display: grid; place-items: center; width: 43px; height: 48px; border-radius: 11px 5px 11px 5px; background: #d9ecf8; color: #47799d; }
.team-tools-icons > span:nth-child(2) { background: #f9dfe9; color: #aa6a83; }
.team-tools-icons > span:nth-child(3) { background: #fff0bd; color: #ac8235; }
.team-tools-icons > span:nth-child(4) { background: #e1edd4; color: #6c8a57; }
.team-tools-icons svg { width: 27px; height: 27px; stroke-width: 1.4; }
.team-paper-signature p { font-family: 'Lora', Georgia, serif; font-size: 13px; font-style: italic; line-height: 1.8; color: #80634f; }
.team-paper-signature strong { font-weight: 500; color: #654631; }
@media (max-width: 1050px) { .team-paper { padding: 27px; } .team-tools-icons > span { width: 37px; height: 42px; } }
@media (max-width: 800px) { .team-paper { margin-block: 0; } }
@media (max-width: 500px) { .team-paper { padding: 25px 20px; } .paper-heading h3 { font-size: 30px; } .team-intro { font-size: 14px; } .team-fact { padding: 17px; } .team-fact dd { font-size: 19px; } }
</style>


