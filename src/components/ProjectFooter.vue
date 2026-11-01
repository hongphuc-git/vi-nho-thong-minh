<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { ArrowUp, Mail, Phone, School, Heart } from '@lucide/vue'
</script>

<template>
  <footer class="project-footer">
    <div class="footer-ribbon" aria-hidden="true"></div>
    <div class="footer-content">
      <a class="footer-identity" href="#dau-trang" aria-label="Ví nhỏ thông minh — về đầu trang"><img :src="publicAsset('/images/vi-nho-logo.png')" alt="" width="1280" height="1280" loading="lazy" /><span><strong>Ví nhỏ thông minh</strong><small>Ví nhỏ · Thói quen lớn.</small></span></a>
      <div class="footer-contact"><p><School aria-hidden="true" />Trường THCS Thượng Long · Phân hiệu Phúc Khánh</p><div><a href="tel:0327227803"><Phone aria-hidden="true" />0327 227 803</a><a href="mailto:thuha03ulis@gmail.com"><Mail aria-hidden="true" />thuha03ulis@gmail.com</a></div></div>
      <a class="footer-top" href="#dau-trang"><ArrowUp aria-hidden="true" /><span>Về đầu trang</span></a>
    </div>
    <div class="footer-colophon"><p>Bộ công cụ giáo dục tài chính cá nhân cho học sinh THCS.</p><span>Làm từ những điều nhỏ <Heart aria-hidden="true" /> Dự án học sinh · 2026–2027</span></div>
  </footer>
</template>

<style scoped>
.project-footer { margin-top: 42px; background: #f1d8d4; color: #52392c; border-top: 1px solid #dcb9b7; }
.footer-ribbon { height: 10px; background: repeating-linear-gradient(110deg, #adcfe7 0 15px, #fff0bf 15px 30px, #edc9d6 30px 45px, #d0e1bc 45px 60px); }
.footer-content { width: min(1240px, calc(100% - 80px)); margin-inline: auto; display: flex; align-items: center; gap: 36px; padding-block: 31px; }
.footer-identity { display: flex; align-items: center; gap: 16px; text-decoration: none; flex-shrink: 0; }
.footer-identity img { width: 82px; height: 82px; object-fit: contain; background: var(--surface-paper); border: 1px solid #d1dce3; border-radius: 19px 8px 19px 8px; }
.footer-identity strong { display: block; font-family: 'Lora', Georgia, serif; font-size: 22px; font-weight: 600; line-height: 1.5; }
.footer-identity small { display: block; margin-top: 4px; font-size: 12px; color: #756354; }
.footer-contact { margin-left: auto; font-size: 12px; line-height: 1.9; }
.footer-contact p, .footer-contact a { display: flex; align-items: center; gap: 8px; }
.footer-contact svg { width: 16px; height: 16px; flex-shrink: 0; color: #5e87a4; }
.footer-contact > div { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-top: 8px; }
.footer-contact a:hover { text-decoration: underline; text-underline-offset: 4px; }
.footer-top { display: grid; justify-items: center; gap: 7px; font-size: 10px; flex-shrink: 0; }
.footer-top svg { width: 39px; height: 39px; padding: 10px; border-radius: 50%; background: #fff7df; border: 1px solid #d7c7a5; }
.footer-colophon { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; width: min(1240px, calc(100% - 80px)); margin-inline: auto; border-top: 1px dashed #cca6a6; padding-block: 17px 24px; font-size: 10px; line-height: 1.8; color: #6d6258; }
.footer-colophon > span { display: flex; align-items: center; flex-wrap: wrap; gap: 7px; }
.footer-colophon svg { width: 13px; height: 13px; color: #b36f8a; }
@media (max-width: 1000px) { .footer-content { flex-wrap: wrap; gap: 22px; } .footer-contact { margin-left: 0; flex: 1; min-width: 250px; } }
@media (max-width: 600px) { .footer-content, .footer-colophon { width: calc(100% - 40px); } .footer-content { align-items: flex-start; gap: 22px 12px; } .footer-identity { flex: 1; gap: 12px; } .footer-identity img { width: 65px; height: 65px; } .footer-identity strong { font-size: 18px; } .footer-identity small { font-size: 11px; } .footer-top { order: 1; } .footer-contact { order: 2; flex-basis: 100%; min-width: 0; font-size: 11px; } .footer-contact > div { flex-direction: column; gap: 8px; } .footer-colophon { padding-bottom: 75px; } }
</style>
