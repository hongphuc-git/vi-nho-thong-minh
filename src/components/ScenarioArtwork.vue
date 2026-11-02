<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ id: string }>()
const labels = computed(() => {
  switch (props.id) {
    case 'TH02': return { caption: 'Một chuyến đi đang chờ cả lớp…', note: 'Chia nhỏ mục tiêu mỗi tuần', amount: '30.000đ', tag: 'TRONG 3 TUẦN' }
    case 'TH03': return { caption: 'Từng chút một, gần hơn cuốn sách…', note: 'Theo dõi khoản tiền để dành', amount: '60.000đ', tag: 'CUỐN SÁCH MỚI' }
    case 'TH04': return { caption: 'Chợ phiên có bao điều hấp dẫn…', note: 'Dừng một chút trước khi mua', amount: '20.000đ', tag: 'KHOẢN TIỀN EM CÓ' }
    default: return { caption: 'Một khoản chi bất ngờ trên đường…', note: 'Cân đối lại các ngăn ví', amount: '15.000đ', tag: 'CHI PHÍ SỬA XE' }
  }
})
</script>

<template>
  <div class="scenario-artwork" aria-hidden="true">
    <span class="artwork-caption">{{ labels.caption }}</span>
    <svg viewBox="0 0 480 190" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="240" cy="165" rx="202" ry="13" fill="#b39a78" opacity=".14" />
      <g v-if="id === 'TH02'">
        <g transform="rotate(-7 115 95)" stroke="#718f86" stroke-width="2">
          <rect x="48" y="40" width="134" height="111" rx="9" fill="#fff9e8" />
          <path d="M48 70h134V49a9 9 0 0 0-9-9H57a9 9 0 0 0-9 9Z" fill="#bddaca" />
          <path d="M78 30v21m72-21v21" stroke-width="5" />
          <rect x="64" y="85" width="27" height="26" rx="4" fill="#dcebd2" />
          <rect x="102" y="85" width="27" height="26" rx="4" fill="#ffedb5" />
          <rect x="140" y="85" width="27" height="26" rx="4" fill="#f1c9d8" />
          <path d="m70 97 5 5 9-11m24 6 5 5 9-11m24 6 5 5 9-11M66 130h43m12 0h36" />
        </g>
        <path d="M205 99q28-29 52-3m-5-11 7 12-14 1" stroke="#b89865" stroke-width="2" stroke-dasharray="4 5" />
        <g stroke="#6e8fa1" stroke-width="2.3">
          <rect x="281" y="65" width="143" height="83" rx="15" fill="#bddce9" />
          <rect x="293" y="77" width="29" height="30" rx="4" fill="#fff8e7" />
          <rect x="331" y="77" width="29" height="30" rx="4" fill="#fff8e7" />
          <rect x="369" y="77" width="37" height="30" rx="4" fill="#fff8e7" />
          <path d="M285 121h134m-121 11h14m90 0h12" />
          <circle cx="307" cy="150" r="14" fill="#8b8578" /><circle cx="394" cy="150" r="14" fill="#8b8578" />
          <circle cx="307" cy="150" r="6" fill="#fff4d9" /><circle cx="394" cy="150" r="6" fill="#fff4d9" />
        </g>
      </g>
      <g v-else-if="id === 'TH03'">
        <g transform="rotate(-9 113 105)" stroke="#9d7385" stroke-width="2.2">
          <path d="M56 53h94a9 9 0 0 1 9 9v93H63a9 9 0 0 1-9-9V63a10 10 0 0 1 10-10Z" fill="#efc9d8" />
          <path d="M67 54v90m-2 0h94v13H66q-17-6 0-13Z" fill="#fff7e4" />
          <path d="M84 75h55m-55 12h41m-36 42 18-32 21 32Z" fill="#d6e6cd" />
          <path d="m114 129 16-24 17 24" stroke="#7f9e82" />
          <path d="M138 54v40l-8-6-8 6V54" fill="#f8d682" />
        </g>
        <path d="M196 99q26-24 53-4m-6-10 9 12-14 2" stroke="#b89865" stroke-width="2" stroke-dasharray="4 5" />
        <g stroke="#7390a0" stroke-width="2.2">
          <path d="M295 63h88l-9 18q22 14 22 34v34q0 12-14 12h-87q-14 0-14-12v-34q0-20 23-34Z" fill="#d0e6ed" />
          <rect x="290" y="49" width="96" height="17" rx="5" fill="#f2d391" stroke="#a58c5c" />
          <path d="M313 57h48" stroke="#a58c5c" />
          <rect x="294" y="96" width="89" height="41" rx="8" fill="#fff8e9" stroke="#c4b599" />
          <path d="m330 115 6 6 12-15" stroke="#8f9f70" stroke-width="3" />
        </g>
        <g fill="#f7d77f" stroke="#bd995b" stroke-width="1.7"><circle cx="293" cy="26" r="12" /><circle cx="329" cy="18" r="12" /><circle cx="365" cy="27" r="12" /><path d="M293 20v12m36-20v12m36-3v12" /></g>
      </g>
      <g v-else-if="id === 'TH04'">
        <g stroke="#a77b79" stroke-width="2">
          <path d="M55 79h151v80H55Z" fill="#fff3d9" /><path d="M49 79 68 43h126l19 36Z" fill="#f2cad3" />
          <path d="m91 43-8 36m38-36-3 36m34-36 4 36m23-36 10 36" stroke="#fff6e7" stroke-width="15" />
          <path d="M49 79q14 17 28 0 14 17 28 0 14 17 28 0 14 17 28 0 14 17 28 0 12 16 24 0" fill="#efc0cf" />
          <path d="M62 132h137v13H62Z" fill="#bed9ca" stroke="#749184" />
          <path d="m83 127-5-28 28-3 5 31Z" fill="#f6db98" /><path d="m129 127 5-31 27 4-4 27Z" fill="#c6e0e9" />
          <circle cx="180" cy="112" r="13" fill="#edb2aa" />
        </g>
        <path d="M227 102q23-19 44 0m-7-12 9 13-15 1" stroke="#b89865" stroke-width="2" stroke-dasharray="4 5" />
        <g transform="rotate(8 349 116)" stroke="#7d9281" stroke-width="2.2">
          <rect x="300" y="89" width="100" height="67" rx="12" fill="#d8e5c6" />
          <path d="M304 94h89V78h-74q-18 0-15 16Z" fill="#ecf0da" />
          <rect x="374" y="111" width="34" height="26" rx="7" fill="#bcd6b8" /><circle cx="386" cy="124" r="3" fill="#f5d388" stroke="#b89b61" />
        </g>
        <g fill="#f6d889" stroke="#ba9a60" stroke-width="1.7"><circle cx="332" cy="62" r="16" /><path d="M332 52v20" /><circle cx="368" cy="48" r="13" /><path d="M368 40v16" /></g>
      </g>
      <g v-else>
        <g stroke="#7d9395" stroke-width="2.5">
          <circle cx="107" cy="131" r="33" fill="#fff8e9" /><circle cx="259" cy="131" r="33" fill="#fff8e9" />
          <path d="m107 131 49-65 38 65H107l61-34h67l24 34-34-83m-69 18 12 31 26 34 41-34" stroke="#9b7989" stroke-width="4" />
          <path d="M141 64h33m44-16h25l7 10M194 131h17m-5-4v8M107 101v60m-30-30h60m122-30v60m-30-30h60" />
          <path d="m80 158 9-6 5 10m-9-8-12 5" stroke="#c98a72" stroke-width="2" />
          <rect x="244" y="65" width="31" height="23" rx="4" fill="#d4e6cf" />
        </g>
        <path d="M308 98q18-20 38-5m-5-9 7 11-12 2" stroke="#b89865" stroke-width="2" stroke-dasharray="4 5" />
        <g transform="rotate(20 375 110)" stroke="#7393a5" stroke-width="2">
          <path d="M367 69q-14 9-9 24l10 9v47q0 10 9 10t9-10v-47l10-9q5-15-9-24v18h-20Z" fill="#bbdce8" />
          <circle cx="377" cy="147" r="4" fill="#fff8e8" />
        </g>
        <path d="m304 50 6 8m-1-22 2 9m9-3 7-4" stroke="#caa35e" stroke-width="3" />
      </g>
      <path d="m431 31 3 9 10 1-8 6 2 9-7-5-8 5 3-9-8-6 10-1 3-9Z" fill="#f7d579" />
      <path d="m37 100-9-4m11-6-5-8" stroke="#caa35e" stroke-width="3" />
    </svg>
    <div class="artwork-labels"><span class="artwork-note">{{ labels.note }}</span><span class="artwork-price">{{ labels.amount }}<small>{{ labels.tag }}</small></span></div>
  </div>
</template>

<style scoped>
.scenario-artwork { position: relative; margin: 18px 0 22px; padding: 14px 14px 12px; border: 1px solid #e4bccb; border-radius: 14px; background-color: #f8e4eb; background-image: linear-gradient(#b9779010 1px, transparent 1px), linear-gradient(90deg, #b9779010 1px, transparent 1px); background-size: 18px 18px; }
.artwork-caption { display: block; margin: 0 4px 5px; font: italic 400 var(--text-small)/1.7 'Lora', Georgia, serif; color: #795064; }
.scenario-artwork > svg { display: block; width: 100%; height: auto; }
.artwork-labels { display: flex; justify-content: space-between; align-items: flex-end; gap: 10px; }
.artwork-note { padding: 6px 9px; border-radius: 20px; background: #e3ecd5; color: #49674a; font-size: var(--text-caption); line-height: 1.6; }
.artwork-price { flex-shrink: 0; padding: 7px 11px; border: 1px solid #e5ce93; border-radius: 3px; background: #ffedb5; color: #806338; font: 400 var(--text-body)/1.5 'Lora', Georgia, serif; transform: rotate(5deg); }
.artwork-price small { display: block; margin-top: 2px; font: 400 var(--text-caption)/1.6 var(--font-sans); letter-spacing: .7px; }
@media (max-width: 460px) { .scenario-artwork { padding-inline: 8px; } .artwork-caption { font-size: var(--text-caption); } .artwork-labels { gap: 6px; } .artwork-price { padding: 6px 8px; } }
</style>
