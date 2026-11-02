<script setup lang="ts">
import { motion } from 'motion-v'
import { ArrowDown, ArrowUpRight, Coins, Heart, Sparkles, Star, Wallet } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { walletPockets } from '@/data/walletPockets'
</script>

<template>
  <section id="bon-ngan-vi" class="wallet-learning-section" aria-labelledby="pockets-title">
    <div class="wallet-pockets-shell">
      <header class="wallet-pockets-heading">
        <span class="wallet-sticker" aria-hidden="true"><Wallet /><Star /></span>
        <div><p class="wallet-eyebrow">MỞ CHIẾC VÍ · HIỂU TỪNG LỰA CHỌN</p><h2 id="pockets-title">Bốn ngăn nhỏ.<br /><em>Bốn cách lớn lên.</em></h2></div>
        <div class="wallet-heading-note"><span aria-hidden="true">✦</span><p>Học cách cân nhắc điều cần,<br />dành dụm điều muốn<br />và sẻ chia điều có.</p></div>
      </header>

      <div class="wallet-pocket-grid">
        <motion.article v-for="pocket in walletPockets" :key="pocket.number" class="wallet-pocket-item" :class="`wallet-${pocket.color}`" :while-hover="{ y: -7 }" :transition="{ type: 'spring', stiffness: 260, damping: 22 }">
          <div class="pocket-receipt" aria-hidden="true"><span>{{ pocket.label }}</span><i></i></div>
          <Card class="wallet-pocket-front">
            <div class="wallet-pocket-top"><span class="pocket-icon"><component :is="pocket.icon" aria-hidden="true" /></span><span class="pocket-index">NGĂN <strong>{{ pocket.number }}</strong></span></div>
            <h3>{{ pocket.name }}</h3><p class="pocket-description">{{ pocket.description }}</p>
            <div class="pocket-example"><span class="example-label">CHẲNG HẠN…</span><p>{{ pocket.example }}</p></div>
            <p class="pocket-reminder">{{ pocket.reminder }} <Heart v-if="pocket.number === '04'" aria-hidden="true" /><Sparkles v-else aria-hidden="true" /></p>
            <span class="pocket-seam" aria-hidden="true"></span>
          </Card>
        </motion.article>
      </div>

      <footer class="wallet-pockets-footer">
        <div class="wallet-footer-note"><span class="wallet-footer-icon" aria-hidden="true"><Coins /></span><div><strong>Chia tiền phù hợp với nhu cầu của em.</strong><p>Em có thể điều chỉnh số tiền trong từng ngăn theo những khoản cần chi và mục tiêu muốn dành dụm.</p></div></div>
        <Button as-child class="wallet-try-button"><a href="#trai-nghiem">Thực hành với 100.000đ <ArrowUpRight aria-hidden="true" /></a></Button>
      </footer>
      <p class="wallet-next-step"><ArrowDown aria-hidden="true" /> Cùng thử phân chia tiền mô phỏng vào bốn ngăn ví.</p>
    </div>
  </section>
</template>

<style scoped>
.wallet-learning-section { display: block; width: 100%; min-width: 0; position: relative; padding: 32px 0 38px; color: #563b2a; background-image: radial-gradient(ellipse at 0 40%, #cce7f63d, transparent 38%), radial-gradient(ellipse at 100% 70%, #f4d4df38, transparent 35%); }
.wallet-pockets-shell { width: min(1360px, calc(100% - 80px)); margin-inline: auto; }
.wallet-pockets-heading { display: flex; align-items: center; gap: 28px; margin-bottom: 28px; }
.wallet-sticker { position: relative; display: grid; place-items: center; width: 92px; height: 92px; background: #e0eff8; border: 5px solid #fffdf6; border-radius: 28px; box-shadow: 3px 5px 0 #b0ccdb33; transform: rotate(-9deg); flex-shrink: 0; }
.wallet-sticker > svg:first-child { width: 52px; height: 52px; stroke-width: 1.4; color: #608ba7; }
.wallet-sticker > svg:last-child { position: absolute; top: -12px; right: -13px; width: 28px; height: 28px; fill: #ffe595; color: #a77b39; }
.wallet-eyebrow { color: #3471a2; font-size: var(--text-caption); letter-spacing: 1.3px; font-weight: 600; margin-bottom: 12px; }
.wallet-pockets-heading h2 { font-family: 'Lora', Georgia, serif; font-size: clamp(30px, 3vw, 43px); font-weight: 700; line-height: 1.3; letter-spacing: -.8px; }
.wallet-pockets-heading h2 br { display: block; }
.wallet-pockets-heading h2 em { color: #3275a6; font-weight: 500; }
.wallet-heading-note { display: flex; align-items: flex-start; gap: 12px; margin-left: auto; padding: 16px 22px; background: #fff0c6; border: 1px solid #eee0b7; box-shadow: 3px 4px 0 #eadcaf38; transform: rotate(3deg); flex-shrink: 0; }
.wallet-heading-note > span { color: #bf8d2f; font-size: 24px; }
.wallet-heading-note p { font-family: 'Lora', Georgia, serif; font-style: italic; font-size: var(--text-body); line-height: 1.7; }
.wallet-pocket-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 22px; }
.wallet-pocket-item { --pocket-fill: #dce9cf; --pocket-shadow: #becfaf; position: relative; min-width: 0; padding-top: 63px; display: flex; }
.wallet-yellow { --pocket-fill: #fae6a6; --pocket-shadow: #e0c77e; }
.wallet-blue { --pocket-fill: #cce3f3; --pocket-shadow: #abc9df; }
.wallet-pink { --pocket-fill: #f4d3df; --pocket-shadow: #dbb4c4; }
.pocket-receipt { position: absolute; top: 7px; left: 12%; width: 76%; height: 112px; padding: 14px 16px; border: 1px solid #e1d5c1; background: #fffdf6; box-shadow: 0 3px 12px #5e443117; transform: rotate(-4deg); }
.wallet-pocket-item:nth-child(even) .pocket-receipt { transform: rotate(5deg); }
.pocket-receipt > span { display: block; font-size: var(--text-caption); line-height: 1.6; letter-spacing: .7px; font-weight: 600; color: #75634e; }
.pocket-receipt > svg { position: absolute; top: 34px; right: 18px; width: 31px; height: 31px; color: #a99373; stroke-width: 1.3; }
.pocket-receipt i { display: block; width: 50%; border-top: 1px dashed #d5c8b3; margin-top: 11px; }
.wallet-pocket-front { position: relative; width: 100%; padding: 26px 24px 24px; background: var(--pocket-fill); border: 1px solid var(--pocket-shadow); border-radius: 9px 9px 38px 9px; box-shadow: 0 5px 0 var(--pocket-shadow), 0 12px 22px #654b2b0b; color: #543b2c; overflow: hidden; }
.pocket-seam { position: absolute; inset: 9px; border: 1px dashed #7e735c44; border-radius: 4px 4px 30px 4px; pointer-events: none; }
.wallet-pocket-top { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; }
.pocket-icon { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: #fffdf64f; border: 1px solid #ffffff66; }
.pocket-icon svg { width: 26px; height: 26px; stroke-width: 1.5; }
.pocket-index { display: grid; gap: 3px; font-size: var(--text-caption); letter-spacing: 1.5px; color: #7f715f; text-align: right; }
.pocket-index strong { font-family: 'Lora', Georgia, serif; font-size: 25px; letter-spacing: 0; line-height: 1; font-weight: 500; }
.wallet-pocket-front h3 { font-family: 'Lora', Georgia, serif; font-size: 21px; font-weight: 700; line-height: 1.5; }
.pocket-description { margin-top: 10px; font-size: var(--text-small); line-height: 1.85; }
.pocket-example { margin-top: 19px; padding-top: 15px; border-top: 1px dashed #7d6b4938; }
.example-label { font-size: var(--text-caption); font-weight: 600; letter-spacing: 1px; color: #75634e; }
.pocket-example p { margin-top: 7px; font-size: var(--text-small); line-height: 1.85; }
.pocket-reminder { display: flex; align-items: center; gap: 7px; margin-top: 20px; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: var(--text-body); line-height: 1.5; }
.pocket-reminder svg { width: 16px; height: 16px; flex-shrink: 0; }
.wallet-pockets-footer { display: flex; align-items: center; justify-content: space-between; gap: 28px; margin-top: 30px; padding: 22px 24px; border: 1px dashed #d7c7aa; border-radius: 13px; background: #fff9ec; }
.wallet-footer-note { display: flex; align-items: center; gap: 15px; }
.wallet-footer-icon { display: grid; place-items: center; width: 44px; height: 44px; background: #ffe8a7; color: #a27a37; border-radius: 50%; flex-shrink: 0; }
.wallet-footer-note strong { font-size: var(--text-body); font-weight: 600; }
.wallet-footer-note p { margin-top: 6px; font-size: var(--text-small); line-height: 1.8; color: #7d6953; }
.wallet-try-button { min-height: 48px; height: auto; padding: 12px 20px; border-radius: 24px; background: #583527; color: #fffaf0; gap: 10px; flex-shrink: 0; font-size: var(--text-small); white-space: normal; }
.wallet-try-button:hover { background: #754b38; }
.wallet-next-step { display: flex; justify-content: center; align-items: center; gap: 10px; padding-top: 24px; font-family: 'Lora', Georgia, serif; font-style: italic; color: #4f7b9b; font-size: var(--text-body); }
@media (max-width: 1200px) { .wallet-heading-note { display: none; } .wallet-pocket-grid { gap: 15px; } .wallet-pocket-front { padding: 23px 19px; } .wallet-pocket-front h3 { font-size: 19px; } }
@media (max-width: 950px) { .wallet-pocket-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; } .wallet-pockets-heading h2 br { display: block; } .wallet-pockets-footer { flex-direction: column; align-items: stretch; gap: 18px; } .wallet-try-button { align-self: flex-start; } }
@media (max-width: 600px) { .wallet-learning-section { padding: 28px 0 30px; } .wallet-pockets-shell { width: calc(100% - 36px); } .wallet-pockets-heading { gap: 18px; margin-bottom: 18px; } .wallet-sticker { width: 58px; height: 65px; border-radius: 18px; } .wallet-sticker > svg:first-child { width: 32px; height: 32px; } .wallet-sticker > svg:last-child { width: 22px; height: 22px; } .wallet-eyebrow { font-size: var(--text-caption); letter-spacing: .7px; line-height: 1.8; margin-bottom: 8px; } .wallet-pockets-heading h2 { font-size: 29px; } .wallet-pockets-footer { padding: 18px; } .wallet-footer-note { align-items: flex-start; gap: 12px; } .wallet-next-step { font-size: var(--text-small); text-align: center; } }
@media (max-width: 520px) { .wallet-pocket-grid { grid-template-columns: 1fr; gap: 22px; } .wallet-pocket-front { padding: 26px; } .wallet-pocket-front h3 { font-size: 23px; } .pocket-description { font-size: var(--text-body); } .pocket-example p { font-size: var(--text-small); } .wallet-pocket-item { padding-top: 52px; } .wallet-pocket-top { margin-bottom: 15px; } }
</style>
