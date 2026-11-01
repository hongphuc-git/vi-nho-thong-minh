<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { ref, watch } from 'vue'
import { motion } from 'motion-v'
import { ArrowUpRight, BookOpen, GraduationCap, Heart, Lightbulb, Mail, Megaphone, NotebookPen, Phone, School, Sprout, User, Users } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import TeamScrapbookDecorations from '@/components/TeamScrapbookDecorations.vue'

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
    <TeamScrapbookDecorations />
    <div class="team-spread">
      <div class="team-story">
        <header class="team-heading">
          <p class="team-eyebrow">NHÓM THỰC HIỆN / CHÚNG MÌNH LÀ AI?</p>
          <h2 id="team-information-title">Những người gieo<br /><span>thói quen tốt.</span></h2>
          <span class="class-sticker">Lớp 9B1 <Heart aria-hidden="true" /></span>
        </header>
        <figure class="team-photo">
          <span class="team-tape" aria-hidden="true"></span>
          <span class="team-paperclip" aria-hidden="true"></span>
          <img v-if="props.photoSrc && !photoFailed" :src="props.photoSrc" alt="Bốn thành viên nhóm Ví nhỏ thông minh tại cổng trường" loading="lazy" @error="photoFailed = true" />
          <div v-else class="team-photo-fallback"><Users aria-hidden="true" /><p>Nhóm học sinh lớp 9B1<br />Trường THCS Thượng Long</p></div>
          <figcaption>Cùng học. Cùng làm. Cùng lớn lên. <Heart aria-hidden="true" /></figcaption>
          <Sprout class="photo-sprout" aria-hidden="true" />
        </figure>
      </div>

      <motion.div class="team-paper" :initial="{ opacity: 0, y: 14 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: 0.45 }">
        <span class="paper-tape" aria-hidden="true"></span>
        <div class="paper-heading"><p>THÔNG TIN CHUNG</p><h3>Ví nhỏ thông minh <Heart aria-hidden="true" /></h3></div>
        <p class="team-intro">Từ một ý tưởng nhỏ, chúng mình cùng nhau xây dựng bộ công cụ giáo dục tài chính cho học sinh THCS.</p>
        <dl class="team-facts">
          <Card class="team-fact fact-blue"><dt><User aria-hidden="true" /> TRƯỞNG NHÓM</dt><dd>Hoàng Thu Phượng</dd><dd class="fact-detail">Lớp 9B1 · Kế hoạch, điều phối và thiết kế tổng thể</dd></Card>
          <Card class="team-fact fact-pink"><dt><School aria-hidden="true" /> ĐƠN VỊ THỰC HIỆN</dt><dd>Trường THCS Thượng Long</dd><dd class="fact-detail">Phân hiệu Phúc Khánh<br />Xã Thượng Long, Phú Thọ</dd></Card>
        </dl>
        <div class="mentor-note">
          <div class="mentor-heading"><span class="mentor-icon"><GraduationCap aria-hidden="true" /></span><div><p>NGƯỜI ĐỒNG HÀNH</p><h4>Cô Nguyễn Thu Hà</h4><span>Giáo viên Tiếng Anh · Giáo viên hướng dẫn</span></div></div>
          <div class="mentor-links"><a href="tel:0327227803"><Phone aria-hidden="true" /><span>0327 227 803</span><ArrowUpRight aria-hidden="true" /></a><a href="mailto:thuha03ulis@gmail.com"><Mail aria-hidden="true" /><span>thuha03ulis@gmail.com</span><ArrowUpRight aria-hidden="true" /></a></div>
        </div>
        <p class="paper-footnote"><Sprout aria-hidden="true" /> Bắt đầu nhỏ, nuôi thói quen lớn.</p>
      </motion.div>
    </div>

    <ul class="member-notes" aria-label="Thành viên và vai trò trong nhóm">
      <li v-for="member in members" :key="member.initials" :class="member.color">
        <div class="member-top"><span class="member-initials" aria-hidden="true">{{ member.initials }}</span><div><h3>{{ member.name }}</h3><p>{{ member.role }}</p></div></div>
        <div class="member-bottom"><component :is="member.icon" aria-hidden="true" /><span>{{ member.detail }}</span></div>
      </li>
    </ul>
    <div class="team-signoff"><Sprout aria-hidden="true" /><p>Bắt đầu từ những điều nhỏ<br /><span>để tạo nên thay đổi lớn hơn.</span></p><span class="signoff-divider" aria-hidden="true"></span><Users aria-hidden="true" /><strong>4 thành viên · 1 ý tưởng chung</strong><BookOpen class="signoff-book" aria-hidden="true" /></div>
    <p class="team-status"><span></span>Đang hoàn thiện sản phẩm mẫu · Hồ sơ ghi nhận 01 bộ mẫu phiên bản số 1, hướng tới 10 bộ phục vụ trải nghiệm.</p>
  </section>
</template>

<style scoped>
.team-information { width: min(1320px, calc(100% - 96px)); margin-inline: auto; padding-block: 54px 52px; scroll-margin-top: 112px; color: #542c20; }
.team-spread { display: grid; grid-template-columns: 1fr 1.08fr; align-items: end; gap: 40px; }
.team-story { min-width: 0; }
.team-heading { position: relative; padding: 0 8px 26px; }
.team-eyebrow { display: inline-block; padding: 7px 14px; background: #cae5f4; color: #20578b; font-size: 11px; letter-spacing: 1.7px; font-weight: 600; transform: rotate(-1deg); }
.team-heading h2 { margin-top: 18px; font-family: 'Lora', Georgia, serif; font-size: clamp(32px, 3.7vw, 53px); letter-spacing: -1.6px; line-height: 1.18; font-weight: 700; }
.team-heading h2 > span { position: relative; isolation: isolate; }
.team-heading h2 > span::after { content: ''; position: absolute; z-index: -1; height: 10px; bottom: 1px; left: -3px; right: -12px; background: #badcf0; transform: rotate(-1deg); border-radius: 50% 18% 45% 20%; }
.class-sticker { display: flex; align-items: center; gap: 8px; width: fit-content; margin: 17px 0 0 auto; padding: 9px 14px; background: #ffeab3; box-shadow: 2px 4px 0 #e3c48b44; transform: rotate(5deg); font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 17px; }
.class-sticker svg { width: 17px; height: 17px; color: #b85e73; }
.team-photo { position: relative; isolation: isolate; margin: 0 3px; padding: 15px 15px 20px; background: #fffef9; transform: rotate(-2deg); box-shadow: 0 10px 24px #73533824; border: 1px solid #eee6d9; }
.team-photo::before { content: ''; position: absolute; z-index: -1; inset: 0; background: #cbe3ef; transform: translate(-13px, 8px) rotate(3deg); box-shadow: 0 5px 15px #79644912; }
.team-photo > img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: contain; background: #eee7da; }
.team-photo figcaption { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 9px; padding-top: 17px; background: #fffef9; color: #542c20; font-family: 'Lora', Georgia, serif; font-size: clamp(15px, 1.5vw, 21px); font-style: italic; line-height: 1.6; }
.team-photo figcaption svg { width: 20px; height: 20px; color: #df8da8; }
.team-tape { position: absolute; z-index: 2; top: -16px; left: 43%; width: 99px; height: 31px; transform: rotate(4deg); background: repeating-linear-gradient(90deg, #eeb0c6aa 0 5px, #fff3ebaa 5px 10px), repeating-linear-gradient(#efa5bfaa 0 5px, #fff5eaaa 5px 10px); }
.team-paperclip { position: absolute; top: -15px; left: 22px; width: 16px; height: 55px; border: 3px solid #5b9fc6; border-radius: 14px; transform: rotate(-15deg); z-index: 2; }
.photo-sprout { position: absolute; right: -27px; bottom: 40px; width: 53px; height: 72px; color: #6c9468; fill: #dbe8c7; transform: rotate(20deg); }
.team-photo-fallback { min-height: 240px; display: grid; place-content: center; justify-items: center; gap: 15px; background: #e3eef4; color: #456d82; text-align: center; font-size: 14px; line-height: 1.8; }
.team-photo-fallback svg { width: 50px; height: 50px; }
.team-paper { position: relative; isolation: isolate; min-width: 0; margin: 35px 0 4px; padding: 36px 27px 20px 44px; background: #fffdf8; box-shadow: 0 9px 25px #765a3920; border: 1px solid #eee3d4; transform: rotate(.6deg); }
.team-paper::before { content: ''; position: absolute; z-index: -1; inset: -13px 9px 8px -7px; background: repeating-linear-gradient(90deg, transparent 0 23px, #d6c8af33 23px 24px), #f8f1e5; transform: rotate(-2deg); border: 1px solid #eee3d4; }
.team-paper::after { content: ''; position: absolute; left: 9px; top: 25px; bottom: 15px; width: 16px; background: radial-gradient(circle, #e7dccb 0 6px, #c7bba766 6px 7px, transparent 7px) center top / 16px 36px repeat-y; }
.paper-tape { position: absolute; top: -23px; left: 30%; width: 78px; height: 35px; background: #f6dfb9bb; transform: rotate(-13deg); }
.paper-heading > p { font-size: 10px; letter-spacing: 1.7px; color: #7c6955; }
.paper-heading h3 { display: inline; font-family: 'Lora', Georgia, serif; font-size: clamp(26px, 2.7vw, 39px); font-weight: 700; line-height: 1.5; background: linear-gradient(transparent 79%, #ffe5a1 79% 94%, transparent 94%); }
.paper-heading h3 svg { display: inline; width: 27px; height: 27px; color: #e69fb2; vertical-align: middle; }
.team-intro { margin-top: 17px; font-size: 15px; line-height: 1.85; color: #675044; }
.team-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; margin-top: 23px; }
.team-fact { min-width: 0; border: 0; border-radius: 15px 5px 15px 5px; padding: 19px 16px; box-shadow: none; color: #542c20; }
.fact-blue { background: #e8f2f9; }
.fact-pink { background: #fbece8; }
.team-fact dt { display: flex; align-items: center; gap: 8px; color: #325c7e; font-size: 10px; letter-spacing: .5px; font-weight: 600; }
.team-fact dt svg { width: 23px; height: 23px; flex-shrink: 0; stroke-width: 1.5; }
.fact-pink dt { color: #955957; }
.team-fact dd { margin: 13px 0 0; font-family: 'Lora', Georgia, serif; font-size: 17px; font-weight: 600; line-height: 1.6; }
.team-fact .fact-detail { font-family: var(--font-sans); font-size: 12px; font-weight: 400; line-height: 1.8; color: #756154; margin-top: 8px; }
.mentor-note { margin-top: 19px; padding: 18px; background: #fff2c9; border-radius: 5px 15px 7px 12px; }
.mentor-heading { display: flex; align-items: center; gap: 12px; }
.mentor-icon { display: grid; place-items: center; width: 43px; height: 43px; flex-shrink: 0; background: #f8e2a0; color: #876338; border-radius: 50%; }
.mentor-icon svg { width: 26px; height: 26px; }
.mentor-heading p { color: #815b2f; font-size: 9px; letter-spacing: 1px; }
.mentor-heading h4 { font-family: 'Lora', Georgia, serif; font-size: 21px; margin-top: 4px; font-weight: 600; }
.mentor-heading > div > span { display: block; font-size: 11px; color: #75614c; margin-top: 4px; line-height: 1.7; }
.mentor-links { display: grid; gap: 10px; margin-top: 16px; padding-top: 14px; border-top: 1px dashed #dfc68d; }
.mentor-links a { display: flex; align-items: center; gap: 11px; color: #245b8a; font-size: 13px; font-weight: 600; min-height: 29px; }
.mentor-links a > span { overflow-wrap: anywhere; min-width: 0; }
.mentor-links svg { width: 18px; height: 18px; flex-shrink: 0; }
.mentor-links a > svg:last-child { margin-left: auto; width: 14px; }
.mentor-links a:hover { text-decoration: underline; text-underline-offset: 4px; }
.paper-footnote { display: flex; align-items: center; justify-content: center; gap: 9px; margin-top: 18px; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 12px; color: #7b7058; }
.paper-footnote svg { width: 20px; height: 20px; color: #739265; }
.member-notes { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 17px; margin: 34px 0 0; padding: 0; list-style: none; }
.member-notes li { min-width: 0; padding: 21px 17px 18px; background: #e6f1fa; border: 1px solid #fffdf8; border-radius: 8px 15px 7px 11px; box-shadow: 0 5px 0 #e5dccc66, 0 10px 20px #7055350c; transform: none; }
.member-notes .pink { background: #fae8ee; }
.member-notes .yellow { background: #fff3cf; }
.member-notes .sage { background: #eaf1df; }
.member-top { display: flex; align-items: center; gap: 11px; }
.member-initials { display: grid; place-items: center; width: 43px; height: 43px; flex-shrink: 0; border-radius: 50%; background: #bfdef3; color: #265b88; font-family: 'Lora', Georgia, serif; font-size: 17px; font-weight: 700; }
.pink .member-initials { background: #f3c9d5; color: #954e67; }
.yellow .member-initials { background: #ffe49f; color: #8b622f; }
.sage .member-initials { background: #cde3be; color: #4c7453; }
.member-top h3 { font-family: 'Lora', Georgia, serif; font-size: 16px; line-height: 1.6; font-weight: 700; }
.member-top p { font-size: 12px; line-height: 1.8; color: #6b5c51; margin-top: 3px; }
.member-bottom { display: flex; align-items: center; gap: 10px; margin-top: 16px; padding-top: 11px; border-top: 2px solid #acd0e4; font-size: 12px; line-height: 1.8; color: #6b5c51; }
.member-bottom svg { width: 25px; height: 25px; flex-shrink: 0; color: #518eb4; stroke-width: 1.4; }
.pink .member-bottom { border-color: #ebbacb; } .pink .member-bottom svg { color: #b97491; }
.yellow .member-bottom { border-color: #efd07b; } .yellow .member-bottom svg { color: #b78e3f; }
.sage .member-bottom { border-color: #bbd5a8; } .sage .member-bottom svg { color: #729d69; }
.team-signoff { display: flex; align-items: center; justify-content: center; gap: 22px; margin-top: 29px; padding: 20px 25px; background: #fffaf0; border: 1px solid #eadfce; border-radius: 10px; box-shadow: 0 5px 13px #7156380b; }
.team-signoff > svg { width: 38px; height: 38px; color: #759267; flex-shrink: 0; stroke-width: 1.4; }
.team-signoff p { font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 20px; line-height: 1.6; }
.team-signoff p > span { font-size: 16px; }
.signoff-divider { width: 1px; height: 46px; background: #dbc9b3; margin-inline: 15px; }
.team-signoff strong { font-size: 14px; font-weight: 500; }
.team-signoff .signoff-book { margin-left: auto; color: #88a8be; width: 55px; height: 55px; }
.team-status { display: flex; align-items: baseline; justify-content: center; gap: 8px; margin-top: 21px; font-size: 11px; line-height: 1.9; color: #7a6b57; }
.team-status > span { width: 6px; height: 6px; background: #90a67b; border-radius: 50%; flex-shrink: 0; }
@media (max-width: 1100px) { .team-information { width: calc(100% - 64px); } .team-spread { gap: 28px; } .team-paper { padding: 29px 20px 20px 36px; } .team-facts { grid-template-columns: 1fr; gap: 11px; } .team-fact { padding: 15px; } .team-fact dd { margin-top: 7px; } .member-notes { grid-template-columns: 1fr 1fr; } .team-signoff .signoff-book { display: none; } .team-intro { font-size: 14px; } }
@media (max-width: 800px) { .team-spread { grid-template-columns: 1fr; gap: 32px; } .team-heading h2 { font-size: clamp(35px, 7vw, 55px); } .team-story { width: min(600px, 100%); margin-inline: auto; } .team-heading { padding-bottom: 29px; } .class-sticker { position: absolute; right: 4px; bottom: 28px; font-size: 15px; } .team-paper { margin-top: 0; } .team-facts { grid-template-columns: 1fr 1fr; } .team-paper::after { background-size: 16px 34px; } .paper-heading h3 { font-size: 32px; } .team-signoff { flex-wrap: wrap; gap: 14px; } .signoff-divider { display: none; } .team-signoff p { font-size: 18px; } .team-signoff > svg { width: 29px; height: 29px; } }
@media (max-width: 500px) { .team-information { width: calc(100% - 40px); padding-block: 35px 40px; } .team-eyebrow { font-size: 9px; letter-spacing: 1px; } .team-heading h2 { font-size: 35px; letter-spacing: -1px; } .class-sticker { position: static; margin-top: 16px; } .team-photo { padding: 10px 10px 15px; } .team-photo figcaption { font-size: 13px; gap: 5px; } .photo-sprout { right: -16px; width: 34px; } .team-paper { padding: 27px 17px 18px 32px; } .team-paper::after { left: 7px; width: 13px; background-size: 13px 32px; } .paper-heading h3 { font-size: 27px; } .paper-heading h3 svg { width: 20px; } .team-facts { grid-template-columns: 1fr; } .team-fact dd { font-size: 17px; } .mentor-note { padding: 15px 12px; } .mentor-heading { align-items: flex-start; gap: 9px; } .mentor-heading h4 { font-size: 19px; } .mentor-icon { width: 34px; height: 34px; } .mentor-icon svg { width: 21px; } .mentor-links a { font-size: 12px; } .member-notes { gap: 13px 11px; margin-top: 28px; } .member-notes li { padding: 17px 12px 14px; } .member-top { align-items: flex-start; flex-direction: column; gap: 10px; } .member-top h3 { font-size: 14px; } .member-bottom { align-items: flex-start; gap: 7px; } .member-bottom svg { width: 20px; } .team-signoff { padding: 18px 13px; justify-content: flex-start; } .team-signoff p { font-size: 16px; } .team-signoff p > span { font-size: 13px; } .team-signoff strong { font-size: 12px; } .team-status { font-size: 10px; } }

/* Chi tiết lưu bút theo bản thiết kế đã chọn */
.team-information { position: relative; isolation: isolate; background-image: radial-gradient(ellipse at 5% 20%, #f5d8ba22, transparent 40%), radial-gradient(ellipse at 95% 80%, #c5e1f025, transparent 38%); }
.team-information::before { content: '❧'; position: absolute; z-index: -1; top: 5px; left: -48px; color: #7c9b67; font-family: Georgia, serif; font-size: 140px; transform: rotate(-30deg); opacity: .7; }
.team-heading::before { content: '✿'; position: absolute; top: 0; left: -27px; color: #e8bc5b; font-size: 27px; transform: rotate(12deg); }
.team-heading::after { content: '✧'; position: absolute; bottom: 25px; left: -19px; color: #538db4; font-size: 36px; }
.team-paper { background-color: #fffdf8; background-image: repeating-linear-gradient(15deg, #9c7a4210 0 1px, transparent 1px 5px); border-radius: 2px 9px 3px 6px; }
.team-paper::before { box-shadow: -8px -7px 0 #d6e8ef77; }
.paper-heading { position: relative; padding-right: 26px; }
.paper-heading::after { content: '♧'; position: absolute; top: -12px; right: -8px; font-size: 48px; color: #e7b64d; transform: rotate(15deg); }
.team-photo { border-radius: 2px 5px 1px 7px; }
.team-photo::after { content: '♡'; position: absolute; left: -20px; bottom: 64px; color: #e79bb4; font-size: 42px; text-shadow: 2px 3px #fffdf8, -2px -3px #fffdf8; transform: rotate(-14deg); }
.team-photo figcaption { text-decoration: underline; text-decoration-color: #efb5c9; text-decoration-thickness: 2px; text-underline-offset: 7px; }
.team-fact dt svg { width: 40px; height: 40px; padding: 9px; border-radius: 50%; background: #c9e5f6; }
.fact-pink dt svg { background: #f6d7d7; }
.member-notes li { position: relative; border: 0; border-radius: 2px; filter: none; background-image: repeating-linear-gradient(12deg, #ffffff33 0 1px, transparent 1px 4px); outline: 2px solid #fffaf3; outline-offset: -3px; }
.member-notes li::after { content: '✦'; position: absolute; right: 10px; top: 9px; font-size: 19px; color: #78acd0; }
.member-notes .pink::after { color: #d58da9; }
.member-notes .yellow::after { color: #d7ae49; }
.member-notes .sage::after { color: #83a56e; }
.member-bottom { border-radius: 35% 10% 25% 0; }
.team-signoff { position: relative; border-radius: 18px 5px 17px 7px; background-image: repeating-linear-gradient(20deg, #b29a7210 0 1px, transparent 1px 5px); }
.team-signoff::after { content: '✧'; position: absolute; right: 94px; top: 16px; color: #ddb35b; font-size: 34px; }
@media (min-width: 1200px) { .mentor-note { display: grid; grid-template-columns: 1.05fr 1fr; gap: 15px; align-items: center; margin-top: 24px; padding: 22px 15px; } .mentor-links { margin: 0; padding: 0 0 0 15px; border-top: 0; border-left: 1px solid #dfc68d; } .mentor-heading { gap: 9px; } .mentor-heading h4 { font-size: 19px; } .mentor-heading > div > span { font-size: 10px; } .mentor-icon { width: 38px; height: 38px; } .mentor-links a { font-size: 11px; gap: 7px; } .team-paper { align-self: end; } }
@media (max-width: 600px) { .team-information::before { font-size: 80px; left: -17px; top: -10px; opacity: .25; } .team-heading::before { left: auto; right: 6px; } .team-heading::after { display: none; } .team-signoff::after { display: none; } }
.team-information { padding-top: 116px; }
.team-information::before { display: none; }
.team-paper, .team-signoff { clip-path: polygon(0 1%, 5% 0, 10% 1%, 17% 0, 24% 1%, 31% 0, 38% 1%, 45% 0, 52% 1%, 60% 0, 67% 1%, 74% 0, 82% 1%, 90% 0, 97% 1%, 100% 0, 99.7% 15%, 100% 30%, 99.6% 45%, 100% 60%, 99.7% 78%, 100% 98%, 94% 99%, 88% 98%, 81% 100%, 73% 99%, 65% 100%, 57% 99%, 49% 100%, 41% 99%, 33% 100%, 25% 99%, 17% 100%, 9% 99%, 0 100%, .3% 82%, 0 65%, .4% 48%, 0 31%, .3% 15%); }
@media (max-width: 600px) { .team-information { padding-top: 38px; } }
</style>


