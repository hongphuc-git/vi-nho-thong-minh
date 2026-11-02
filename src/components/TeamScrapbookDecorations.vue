<script setup lang="ts">
import { Heart, Send, Sprout } from '@lucide/vue'
</script>

<template>
  <div class="scrapbook-flight" aria-hidden="true">
    <p>Cùng nhau bắt đầu<br />những điều tốt đẹp hơn...</p>
    <Send class="paper-plane" />
    <svg class="flight-path" viewBox="0 0 190 60" fill="none"><path d="M5 22C45 70 108 53 119 29C134-7 82-4 91 25C99 50 153 40 181 5" /></svg>
    <Heart class="flight-heart" />
  </div>
  <div class="scrapbook-leaves" aria-hidden="true"><Sprout /><span>✿</span></div>
</template>

<style scoped>
.scrapbook-flight { position: absolute; right: 6px; top: -5px; width: 260px; height: 112px; pointer-events: none; color: #7694ad; transform: rotate(-6deg); }
.scrapbook-flight p { font-family: 'Lora', Georgia, serif; font-size: var(--text-body); font-style: italic; line-height: 1.7; padding: 5px 45px 0 12px; text-align: center; }
.paper-plane { position: absolute; right: 0; top: 0; width: 43px; height: 43px; stroke-width: 1; transform: rotate(-8deg); }
.flight-path { position: absolute; width: 180px; height: 57px; right: 10px; bottom: 0; }
.flight-path path { stroke: currentColor; stroke-width: 1.5; stroke-dasharray: 5 7; stroke-linecap: round; }
.flight-heart { position: absolute; bottom: 18px; left: 74px; width: 16px; height: 16px; stroke-width: 1.3; }
.scrapbook-leaves { position: absolute; top: -22px; left: -43px; color: #7d9b68; pointer-events: none; transform: rotate(27deg); }
.scrapbook-leaves > svg { width: 92px; height: 110px; stroke-width: 1; fill: #d6e4bb; }
.scrapbook-leaves > span { position: absolute; right: -8px; top: 50px; color: #e8ba56; font-size: 30px; }
@media (max-width: 800px) { .scrapbook-flight { top: 14px; right: -8px; transform: scale(.8) rotate(-6deg); transform-origin: right top; } }
@media (max-width: 600px) { .scrapbook-flight { display: none; } .scrapbook-leaves { left: -16px; top: -12px; opacity: .4; } .scrapbook-leaves > svg { width: 48px; height: 62px; } }
.scrapbook-flight { top: 28px; right: 15px; }
@media (max-width: 800px) { .scrapbook-flight { top: 44px; right: 4px; } }
@media (max-width: 600px) { .scrapbook-flight { display: none; } }
</style>

