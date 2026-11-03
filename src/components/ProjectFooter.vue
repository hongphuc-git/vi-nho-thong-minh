<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { ArrowUp, Play } from '@lucide/vue'
import { PhBookOpen as BookOpen, PhBriefcase as Briefcase, PhGraduationCap as GraduationCap, PhHeart as Heart, PhEnvelopeSimple as Mail, PhChatCircle as MessageCircle, PhPhone as Phone, PhBuildings as School, PhPaperPlaneTilt as Send } from '@phosphor-icons/vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <footer class="project-footer">
    <svg class="footer-waves" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true"><path d="M0 52C85 5 108 178 231 164S354 116 461 151S598 116 706 148S857 190 976 120S1118 14 1229 62S1357 12 1440 3V170H0Z" fill="#f7d6d2" /><path d="M0 110C91 50 136 180 260 166S434 127 534 159S721 136 831 161S1079 153 1181 94S1342 67 1440 41V170H0Z" fill="#fbe5de" /></svg>
    <div class="footer-content">
      <a class="footer-identity" href="#dau-trang" aria-label="Ví nhỏ thông minh — về đầu trang"><img :src="publicAsset('/images/vi-nho-logo.png')" alt="" width="1280" height="1280" loading="lazy" /><span><strong>Ví nhỏ<br />thông minh</strong><small>Ví nhỏ – Thói quen lớn.</small></span></a>
      <nav class="footer-links" aria-label="Liên kết nhanh"><h2>Khám phá<span aria-hidden="true">✦</span></h2><a href="#tom-tat"><BookOpen weight="duotone" aria-hidden="true" />Dự án</a><a href="#bo-cong-cu"><Briefcase weight="duotone" aria-hidden="true" />Bộ công cụ</a><a href="#trai-nghiem"><Play aria-hidden="true" />Trải nghiệm</a><a href="#hoi-dap"><MessageCircle weight="duotone" aria-hidden="true" />Hỏi đáp</a></nav>
      <address class="footer-contact"><p><School weight="duotone" aria-hidden="true" /><span>Trường THCS Thượng Long<br />Phân hiệu Phúc Khánh</span></p><a href="tel:0327227803"><Phone weight="duotone" aria-hidden="true" />0327 227 803</a><a href="mailto:thuha03ulis@gmail.com"><Mail weight="duotone" aria-hidden="true" /><span>thuha03ulis@gmail.com</span></a></address>
    </div>
    <div class="footer-doodles" aria-hidden="true"><Send weight="duotone" class="footer-plane" /><svg class="footer-flight" viewBox="0 0 140 70"><path d="M5 60Q37 20 72 38T133 4" fill="none" stroke="#e8aca8" stroke-width="2" stroke-dasharray="6 7" stroke-linecap="round" /></svg><div class="footer-books"><i></i><i></i><GraduationCap weight="duotone" /></div></div>
    <div class="footer-colophon"><p>© 2026 Nhóm 9B1 · Ví nhỏ thông minh</p><span>Làm từ những điều nhỏ <Heart weight="duotone" aria-hidden="true" /> Dự án học sinh · 2026–2027</span><Button as-child variant="ghost" class="footer-top"><a href="#dau-trang"><ArrowUp aria-hidden="true" />Về đầu trang</a></Button></div>
  </footer>
</template>

<style scoped>
.project-footer { position: relative; isolation: isolate; overflow: hidden; margin-top: 40px; padding-top: 14px; background: #fff7ee; color: #593b28; border-top: 1px solid #eee0cc; }
.footer-content, .footer-colophon { position: relative; z-index: 1; width: min(1280px, calc(100% - 96px)); margin-inline: auto; }
.footer-content { display: grid; grid-template-columns: 1.1fr .85fr 1.25fr; align-items: center; gap: 30px; padding-block: 38px 35px; }
.footer-identity { display: flex; align-items: center; gap: 17px; min-width: 0; text-decoration: none; }
.footer-identity img { display: block; width: 107px; height: 107px; object-fit: contain; flex-shrink: 0; }
.footer-identity strong { display: block; width: fit-content; font-family: 'Lora', Georgia, serif; font-size: clamp(23px, 2.1vw, 30px); font-weight: 700; line-height: 1.3; letter-spacing: -.7px; }
.footer-identity strong::after { content: ''; display: block; width: 95%; height: 5px; margin-top: 10px; background: #f3d17e; border-radius: 50%; transform: rotate(-1deg); }
.footer-identity small { display: block; margin-top: 13px; font-family: 'Lora', Georgia, serif; font-size: 13px; font-style: italic; line-height: 1.7; }
.footer-links { display: grid; grid-template-columns: 1fr 1fr; gap: 9px 17px; padding-left: 30px; border-left: 1px solid #e5d6c7; }
.footer-links h2 { grid-column: 1 / -1; font-family: 'Lora', Georgia, serif; font-size: 23px; font-weight: 600; margin-bottom: 8px; }
.footer-links h2 > span { font-size: 19px; color: #e5b64f; margin-left: 11px; }
.footer-links a { display: flex; align-items: center; gap: 9px; min-height: 44px; font-size: 13px; line-height: 1.7; }
.footer-links svg, .footer-contact svg { width: 22px; height: 22px; flex-shrink: 0; stroke-width: 1.5; }
.footer-contact { display: grid; gap: 8px; border-left: 1px solid #e5d6c7; padding-left: 30px; font-style: normal; }
.footer-contact p, .footer-contact a { display: flex; align-items: center; gap: 13px; font-size: 13px; line-height: 1.8; min-height: 39px; }
.footer-contact span { min-width: 0; overflow-wrap: anywhere; }
.footer-contact p { align-items: flex-start; }
.footer-contact p svg { margin-top: 3px; }
.footer-links a:hover, .footer-contact a:hover { text-decoration: underline; text-underline-offset: 5px; }
.project-footer a:focus-visible { outline: 2px solid #4b7c9b; outline-offset: 5px; border-radius: 4px; }
.footer-colophon { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px 22px; border-top: 1px solid #e2d3c2; padding-block: 18px 23px; font-size: 12px; line-height: 1.8; }
.footer-colophon > span { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
.footer-colophon > span svg { width: 16px; height: 16px; color: #be7488; }
.footer-top { display: inline-flex; gap: 7px; min-height: 44px; padding: 7px 10px; font-size: 12px; color: #65442e; border-radius: 6px; }
.footer-top svg { width: 16px; height: 16px; }
.footer-waves { position: absolute; left: 0; bottom: 0; width: 100%; height: 125px; z-index: -1; pointer-events: none; }
.footer-doodles { position: absolute; inset: 0; pointer-events: none; z-index: -1; }
.footer-plane { position: absolute; top: 26px; right: 24px; width: 37px; height: 37px; color: #deb653; fill: #ffe1a0; stroke-width: 1.1; transform: rotate(10deg); }
.footer-flight { position: absolute; top: 66px; right: 20px; width: 87px; height: 50px; }
.footer-books { position: absolute; right: 15px; bottom: 59px; width: 84px; height: 62px; transform: rotate(8deg); }
.footer-books > i { display: block; position: absolute; width: 69px; height: 21px; border: 2px solid #d3b474; border-radius: 5px 9px 9px 5px; bottom: 0; left: 7px; background: #fff1bf; box-shadow: inset 0 -5px #fffbec; }
.footer-books > i:nth-child(2) { bottom: 19px; left: 0; background: #f1c8bd; border-color: #bf9e8f; }
.footer-books > svg { position: absolute; top: -11px; left: 19px; width: 53px; height: 42px; color: #727d99; fill: #8c96ac; stroke-width: 1; }
@media (max-width: 1100px) { .footer-content, .footer-colophon { width: calc(100% - 64px); } .footer-content { gap: 23px; grid-template-columns: 1fr 1fr; } .footer-contact { grid-column: 1 / -1; border: 0; border-top: 1px solid #e5d6c7; padding: 20px 0 0; grid-template-columns: 1.2fr 1fr; column-gap: 25px; } .footer-contact p { grid-row: 1 / span 2; } .footer-books, .footer-flight { display: none; } }
@media (max-width: 600px) { .footer-content, .footer-colophon { width: calc(100% - 40px); } .footer-content { grid-template-columns: 1fr; padding-block: 27px 24px; gap: 25px; } .footer-identity img { width: 92px; height: 92px; } .footer-identity strong { font-size: 26px; } .footer-links { border: 0; border-top: 1px solid #e5d6c7; padding: 21px 0 0; gap: 5px 20px; } .footer-links h2 { font-size: 22px; } .footer-contact { grid-column: 1; grid-template-columns: 1fr; gap: 7px; padding-top: 20px; } .footer-contact p { grid-row: auto; } .footer-links a, .footer-contact a, .footer-contact p { font-size: 13px; } .footer-colophon { flex-direction: column; align-items: flex-start; gap: 12px; padding-bottom: calc(23px + env(safe-area-inset-bottom, 0px)); } .footer-colophon > span { font-size: 11px; } .footer-plane { right: 20px; top: 26px; width: 29px; height: 29px; } .footer-waves { height: 160px; } }
</style>
