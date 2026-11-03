<script setup lang="ts">
import { PhPaperPlaneTilt as Send, PhHeart as Heart, PhStar as Star, PhPencil as Pencil } from '@phosphor-icons/vue'
</script>

<template>
  <div class="summary-art" aria-hidden="true">
    <svg class="leaf-corner" viewBox="0 0 120 210" fill="none">
      <path d="M8 205Q28 112 99 11M35 130 15 85M57 89 102 65" stroke="#789460" stroke-width="2" />
      <g fill="#b0c589" stroke="#789460" stroke-width="1.3"><path d="M35 132Q0 130 6 99Q29 101 35 132Z" /><path d="M46 111Q36 78 62 64Q68 93 46 111Z" /><path d="M62 87Q81 58 107 72Q93 93 62 87Z" /><path d="M78 54Q70 21 98 8Q101 38 78 54Z" /><path d="M25 164Q38 135 62 147Q53 172 25 164Z" /></g>
      <g fill="#f4d180"><ellipse cx="18" cy="60" rx="5" ry="10" /><ellipse cx="18" cy="60" rx="5" ry="10" transform="rotate(60 18 60)" /><ellipse cx="18" cy="60" rx="5" ry="10" transform="rotate(120 18 60)" /><circle cx="18" cy="60" r="3" fill="#c79137" /></g>
    </svg>
    <div class="plane-note"><p>Những lựa chọn nhỏ,<br />tạo nên một<br />tương lai tốt hơn.</p><Send weight="duotone" /><svg viewBox="0 0 150 50"><path d="M5 35Q65 63 77 23Q85-5 55 10Q35 32 90 35Q126 39 145 4" /></svg></div>
    <Heart weight="duotone" class="art-heart" /><Star weight="duotone" class="art-star" /><Pencil weight="duotone" class="art-pencil" />
    <svg class="bottom-leaves" viewBox="0 0 120 210" fill="none"><path d="M8 205Q28 112 99 11" stroke="#789460" stroke-width="2" /><g fill="#b0c589" stroke="#789460"><path d="M35 132Q0 130 6 99Q29 101 35 132Z" /><path d="M46 111Q36 78 62 64Q68 93 46 111Z" /><path d="M62 87Q81 58 107 72Q93 93 62 87Z" /><path d="M78 54Q70 21 98 8Q101 38 78 54Z" /><path d="M25 164Q38 135 62 147Q53 172 25 164Z" /></g></svg>
  </div>
</template>

<style scoped>
.summary-art { position: absolute; inset: 0; pointer-events: none; z-index: -1; }
.leaf-corner { position: absolute; left: -50px; top: 22px; width: 85px; height: 145px; transform: rotate(-12deg); }
.plane-note { position: absolute; right: -15px; top: -20px; width: 168px; color: #8a8c9e; transform: rotate(7deg); }
.plane-note p { font-family: 'Lora', Georgia, serif; font-style: italic; font-size: var(--text-caption); line-height: 1.7; text-align: right; padding-right: 36px; }
.plane-note > svg:first-of-type { position: absolute; right: -3px; top: 6px; width: 29px; height: 29px; color: #6991b4; stroke-width: 1; fill: #d9eafa; }
.plane-note > svg:last-of-type { width: 105px; height: 35px; fill: none; stroke: #87a7c4; stroke-width: 1.2; stroke-dasharray: 4 5; margin-left: 25px; }
.art-heart { position: absolute; left: -24px; top: 255px; width: 25px; height: 25px; color: #c47691; stroke-width: 1.4; transform: rotate(-20deg); }
.art-star { position: absolute; right: -22px; top: 52%; width: 25px; height: 25px; color: #d6ad4c; transform: rotate(14deg); }
.art-pencil { position: absolute; left: -32px; bottom: 230px; width: 37px; height: 65px; stroke-width: 1; color: #b48e43; fill: #ffdf89; transform: rotate(23deg); }
.bottom-leaves { position: absolute; right: -37px; bottom: 2px; width: 65px; height: 115px; transform: rotate(20deg); }
@media (max-width: 1050px) { .plane-note { display: none; } }
@media (max-width: 760px) { .leaf-corner { width: 48px; height: 80px; left: -17px; top: -10px; opacity: .65; } .bottom-leaves { width: 38px; right: -12px; opacity: .5; } .art-heart, .art-star, .art-pencil { display: none; } }
</style>
