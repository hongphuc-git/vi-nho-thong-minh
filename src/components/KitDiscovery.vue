<script setup lang="ts">
import { publicAsset } from '@/lib/publicAsset'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { motion } from 'motion-v'
import QrcodeVue from 'qrcode.vue'
import { ArrowRight, Calculator, Heart, Star, Wallet } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog } from '@/components/ui/dialog'
import ImagePreview from '@/components/ImagePreview.vue'
import ChalkboardGuide from '@/components/ChalkboardGuide.vue'

const tools = [
  {
    id: 'huong-dan-vi', title: 'Ví 4 ngăn', color: 'blue', image: publicAsset('/images/learning-kit/wallet-pastel.png?v=20261101'),
    description: 'Học cách phân bổ tiền hợp lý.',
    intro: 'Chuẩn bị một khoản tiền mô phỏng và thử phân chia theo nhu cầu của em.',
    titles: ['Làm quen bốn ngăn ví', 'Nghĩ xem điều gì cần thiết', 'Thử chia khoản tiền', 'Linh hoạt điều chỉnh'],
    steps: ['Nhận biết bốn ngăn: chi tiêu cần thiết, tiết kiệm, mục tiêu cá nhân và chia sẻ.', 'Xác định các khoản cần thiết trước, sau đó cân nhắc khoản để dành, mục tiêu và chia sẻ.', 'Chia tiền vào các ngăn và kiểm tra tổng không vượt số tiền đang có.', 'Khi có khoản chi phát sinh, điều chỉnh và giải thích lý do. Không có một tỷ lệ chia cố định cho tất cả.'],
    link: '#trai-nghiem', action: 'Thử chia tiền mô phỏng',
  },
  {
    id: 'huong-dan-so', title: 'Sổ thu–chi 30 ngày', color: 'yellow', image: publicAsset('/images/learning-kit/daily-journal.png'),
    description: 'Ghi chép và theo dõi chi tiêu mỗi ngày.',
    intro: 'Một vài dòng ghi chép giúp em nhìn lại những lựa chọn của mình.',
    titles: ['Ghi lại một ngày', 'Tính khoản tiền còn lại', 'Nhìn lại mỗi tuần', 'Nuôi thói quen nhỏ'],
    steps: ['Ghi ngày, khoản nhận vào, khoản chi ra và lý do của từng khoản.', 'Tính số dư bằng số dư trước đó cộng khoản thu và trừ khoản chi.', 'Cuối tuần, xem lại khoản nào cần thiết và khoản nào có thể điều chỉnh.', 'Tiếp tục thực hành theo lộ trình 30 ngày đề xuất. Có thể ghi bằng tiền mô phỏng; không cần công khai thông tin tài chính cá nhân.'],
    link: '#hanh-trinh', action: 'Xem hành trình 30 ngày',
  },
  {
    id: 'huong-dan-the', title: 'Thẻ tình huống', color: 'pink', image: publicAsset('/images/learning-kit/situation-card.png'),
    description: 'Luyện quyết định tài chính qua các tình huống.',
    intro: 'Có thể chơi cùng bạn bè, phụ huynh hoặc thầy cô.',
    titles: ['Chọn một thẻ', 'Nghĩ xem điều gì cần thiết', 'Thử một cách giải quyết', 'Cùng nhau trao đổi'],
    steps: ['Chọn một thẻ, đọc tình huống và xác định số tiền mô phỏng đang có.', 'Phân biệt nhu cầu cần thiết với điều em mong muốn.', 'Đề xuất cách xử lý, tính toán số tiền và giải thích lựa chọn.', 'Cùng trao đổi những phương án khác hợp lý; cân nhắc lại khi có thông tin mới.'],
    link: '#trai-nghiem', action: 'Thử một tình huống',
  },
  {
    id: 'huong-dan-muc-tieu', title: 'Bảng mục tiêu cá nhân', color: 'green', image: publicAsset('/images/learning-kit/personal-goal.png'),
    description: 'Lập kế hoạch tiết kiệm và theo dõi mục tiêu.',
    intro: 'Chọn một mục tiêu phù hợp với điều kiện của em và chia thành những bước nhỏ.',
    titles: ['Chọn một mục tiêu', 'Tính xem cần bao nhiêu', 'Lên kế hoạch từng tuần', 'Theo dõi và điều chỉnh'],
    steps: ['Ghi mục tiêu, lý do lựa chọn và thời hạn em dự định hoàn thành.', 'Xác định số tiền cần có, số đã dành được và số còn thiếu.', 'Lập kế hoạch theo tuần bằng khoản để dành phù hợp; không bỏ qua nhu cầu thiết yếu.', 'Theo dõi tiến độ và điều chỉnh số tiền hoặc thời hạn nếu hoàn cảnh thay đổi.'],
    link: '#hanh-trinh', action: 'Khám phá lộ trình thực hành',
  },
]

const pageUrl = ref('')
const currentGuide = ref('')
const guideLinks = computed(() => tools.map(item => ({ ...item, url: `${pageUrl.value}#${item.id}` })))

const selectedGuide = computed(() => tools.find(item => item.id === currentGuide.value))
let guideOpener: HTMLElement | null = null
let practiceDestination = ''

function syncGuide() {
  const id = window.location.hash.slice(1)
  currentGuide.value = tools.some(item => item.id === id) ? id : ''
}

function revealGuide(id: string, event: Event) {
  practiceDestination = ''
  guideOpener = event.currentTarget instanceof HTMLElement ? event.currentTarget : null
  currentGuide.value = id
}

function openFromCard(id: string, event: MouseEvent) {
  if (!(event.target instanceof Element)) return
  if (event.target.closest('a, button')) return
  revealGuide(id, event)
}

function updateGuideOpen(open: boolean) {
  if (open) return
  currentGuide.value = ''
  if (tools.some(item => `#${item.id}` === window.location.hash)) {
    const url = new URL(window.location.href)
    url.hash = 'qr-cong-cu'
    window.history.replaceState(window.history.state, '', url)
  }
}

function restoreGuideFocus(event: Event) {
  event.preventDefault()
  if (practiceDestination) {
    const destination = document.getElementById(practiceDestination.slice(1))
    const heading = destination?.querySelector('h2')
    requestAnimationFrame(() => {
      destination?.scrollIntoView({ block: 'start' })
      if (heading) {
        heading.setAttribute('tabindex', '-1')
        heading.focus({ preventScroll: true })
      }
    })
    practiceDestination = ''
    guideOpener = null
    return
  }
  if (guideOpener?.isConnected) {
    guideOpener.focus({ preventScroll: true })
  } else {
    document.getElementById('qr-cong-cu')?.scrollIntoView({ block: 'start' })
    document.getElementById('discovery-title')?.focus({ preventScroll: true })
  }
  guideOpener = null
}

function followPracticeLink(href: string) {
  practiceDestination = href
  updateGuideOpen(false)
}

onMounted(() => {
  const url = new URL(window.location.href)
  url.hash = ''
  url.search = ''
  pageUrl.value = url.href
  syncGuide()
  window.addEventListener('hashchange', syncGuide)
})
onUnmounted(() => window.removeEventListener('hashchange', syncGuide))
</script>

<template>
  <section id="qr-cong-cu" class="kit-discovery" aria-labelledby="discovery-title">
    <div class="discovery-shell">
      <header class="discovery-heading">
        <Wallet class="heading-wallet" aria-hidden="true" />
        <p class="discovery-eyebrow">BỘ CÔNG CỤ · XEM ẢNH VÀ MỞ HƯỚNG DẪN</p>
        <h2 id="discovery-title" tabindex="-1"><span>Nhỏ gọn trong tay. Đủ đầy để bắt đầu.</span></h2>
        <p>Mỗi học liệu có ảnh phóng to và hướng dẫn riêng. Bấm vào thẻ để đọc, hoặc quét QR để mở trên điện thoại.</p>
        <Calculator class="heading-calculator" aria-hidden="true" />
      </header>

      <div class="discovery-grid">
        <motion.div v-for="(item, index) in guideLinks" :key="item.id" class="discovery-item" :while-hover="{ y: -3, rotate: index % 2 === 0 ? -0.5 : 0.5 }" :initial="{ opacity: 0, y: 16 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: 0.4, delay: index * 0.08 }">
          <svg class="frame-hanger" viewBox="0 0 200 58" preserveAspectRatio="none" aria-hidden="true"><path class="frame-cord-shadow" d="M8 56 100 7 192 56" /><path class="frame-cord" d="M8 54 100 5 192 54" /></svg>
          <span class="frame-pin" aria-hidden="true"></span>
          <Card class="discovery-card" :class="`discovery-${item.color}`" @click="openFromCard(item.id, $event)">
            <a class="qr-link" :href="`#${item.id}`" :aria-label="`Mở hướng dẫn ${item.title}`" @click.prevent="revealGuide(item.id, $event)">
              <QrcodeVue v-if="pageUrl" :value="item.url" :size="176" :margin="4" level="M" render-as="svg" foreground="#173d2d" background="#fffaf0" role="img" :aria-label="`Mã QR hướng dẫn ${item.title}`" />
              <span v-else class="qr-loading">Đang chuẩn bị mã QR…</span>
            </a>
            <div class="discovery-art">
              <span class="discovery-blob" aria-hidden="true"></span>
              <ImagePreview :src="item.image" :alt="item.title"><img :src="item.image" :alt="item.title" loading="lazy" width="240" height="220" /></ImagePreview>
              <Star v-if="index % 2 === 0" class="card-doodle" aria-hidden="true" /><Heart v-else class="card-doodle" aria-hidden="true" />
            </div>
            <h3><span>{{ item.title }}</span></h3>
            <p class="discovery-description">{{ item.description }}</p>
            <Button variant="outline" type="button" class="discovery-link" @click="revealGuide(item.id, $event)">Mở hướng dẫn <ArrowRight aria-hidden="true" /></Button>
          </Card>
        </motion.div>
      </div>
      <p class="discovery-local-note"><Wallet aria-hidden="true" /><span><strong>Chọn một công cụ, bắt đầu một điều nhỏ.</strong><br />Bấm “Mở hướng dẫn” để đọc ngay, hoặc quét mã QR bằng điện thoại để cùng thực hành.</span></p>
      <p class="discovery-footer"><Star aria-hidden="true" /><span>Tự tay thực hành. Từng bước trưởng thành.</span><Heart aria-hidden="true" /></p>

      <Dialog :open="Boolean(selectedGuide)" appearance="chalkboard" :title="selectedGuide?.title ?? 'Hướng dẫn sử dụng'" :description="selectedGuide?.intro ?? 'Thực hành từng bước cùng Ví nhỏ thông minh.'" @update:open="updateGuideOpen" @close-auto-focus="restoreGuideFocus">
        <ChalkboardGuide v-if="selectedGuide" :key="selectedGuide.id" :titles="selectedGuide.titles" :steps="selectedGuide.steps" :link="selectedGuide.link" :action="selectedGuide.action" @practice="followPracticeLink">
          <ImagePreview v-if="selectedGuide.id === 'huong-dan-vi'" class="guide-reference-page" :src="publicAsset('/images/learning-kit/pocket-guide.png')" alt="Trang học liệu giải thích ý nghĩa bốn ngăn ví" />
        </ChalkboardGuide>
      </Dialog>
    </div>
  </section>
</template>

<style scoped>
.kit-discovery { position: relative; padding: 72px 0 30px; background-color: var(--paper); background-image: linear-gradient(var(--paper-grid) 1px, transparent 1px), linear-gradient(90deg, var(--paper-grid) 1px, transparent 1px); background-size: 28px 28px; color: #563528; border-top: 6px solid transparent; border-image: repeating-linear-gradient(90deg, #d3e5ee 0 24px, #fff6e7 24px 48px) 6; }
.discovery-shell { width: min(1440px, calc(100% - 80px)); margin-inline: auto; }
.discovery-heading { position: relative; text-align: center; margin-bottom: 48px; padding-inline: 85px; }
.discovery-eyebrow { margin-bottom: 16px; color: #3972a0; font-size: var(--text-caption); font-weight: 600; letter-spacing: 1.5px; }
.discovery-heading h2 { font-family: 'Lora', Georgia, serif; font-weight: 700; font-size: clamp(30px, 3.6vw, 52px); line-height: 1.4; color: #532c20; }
.discovery-heading h2 span { padding-inline: 18px; background: #c4e3f6; border-radius: 26% 8% 18% 6% / 25% 35% 18% 30%; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
.discovery-heading > p:last-of-type { max-width: 940px; margin: 18px auto 0; font-size: var(--text-body); line-height: 1.8; }
.heading-wallet, .heading-calculator { position: absolute; top: 22px; width: 68px; height: 68px; stroke-width: 1.4; }
.heading-wallet { left: 0; color: #947142; fill: #c4e2f3; transform: rotate(-12deg); }
.heading-calculator { right: 0; color: #87a964; transform: rotate(18deg); }
.discovery-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 28px; padding-top: 52px; }
.discovery-item { position: relative; min-width: 0; display: flex; transform-origin: 50% -42px; }
.frame-hanger { position: absolute; width: 68%; height: 52px; left: 16%; top: -48px; overflow: visible; pointer-events: none; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.frame-cord-shadow { stroke: #79563b24; stroke-width: 4; }
.frame-cord { stroke: #a27b51; stroke-width: 1.7; vector-effect: non-scaling-stroke; }
.frame-pin { position: absolute; top: -47px; left: calc(50% - 6px); width: 12px; height: 12px; border-radius: 50%; border: 1px solid #806747; background: radial-gradient(circle at 35% 28%, #fff9e4, #c8a574 55%, #8c6945); box-shadow: 1px 3px 3px #64432c40; pointer-events: none; }
.discovery-card { --tool-color: #cce7f9; position: relative; width: 100%; display: flex; flex-direction: column; align-items: center; padding: 28px 16px 22px; background: #fffefa; border: 8px solid #d9bd98; border-radius: 5px; box-shadow: inset 0 0 0 1px #b39673, inset 0 0 0 6px #fff8eb, inset 0 0 15px #8b674524, 0 2px 0 1px #a88761, 5px 10px 0 #714e2f0a, 8px 16px 24px #67452f26; text-align: center; }
.discovery-card::before { content: ''; position: absolute; inset: -8px; border: 1px solid #ae8b65; border-top-color: #efdbc0; border-left-color: #efdbc0; border-radius: inherit; box-shadow: inset 0 0 0 2px #f4e2c455; pointer-events: none; }
.discovery-yellow { --tool-color: #fff0b5; }
.discovery-pink { --tool-color: #f8d0e1; }
.discovery-green { --tool-color: #dcebc5; }
.qr-link { display: grid; place-items: center; width: 192px; max-width: 100%; aspect-ratio: 1; padding: 8px; border-radius: 24px; background: #fff3dd; }
.qr-link :deep(svg) { display: block; width: 100%; height: auto; }
.qr-loading { font-size: var(--text-small); color: #776858; }
.discovery-art { position: relative; isolation: isolate; display: grid; place-items: center; width: 100%; height: 218px; margin-top: 16px; }
.discovery-blob { position: absolute; z-index: -1; inset: 17% 3% 9%; background: var(--tool-color); border-radius: 48% 40% 45% 35%; transform: rotate(-12deg); }
.discovery-art img { display: block; max-width: 86%; width: auto; height: auto; max-height: 195px; object-fit: contain; transform: rotate(-5deg); filter: drop-shadow(2px 5px 3px #51332620); }
.discovery-blue .discovery-art img { transform: rotate(3deg); }
.discovery-pink .discovery-art img { transform: rotate(6deg); }
.card-doodle { position: absolute; top: 8px; right: 0; color: #e58aae; width: 27px; height: 27px; transform: rotate(14deg); }
.discovery-blue .card-doodle, .discovery-pink .card-doodle { color: #337bb5; }
.discovery-card h3 { font-family: 'Lora', Georgia, serif; font-size: clamp(1.125rem, 1.5vw, 23px); font-weight: 700; line-height: 1.5; color: #573323; margin-top: 10px; }
.discovery-card h3 span { padding: 3px 10px; background: var(--tool-color); border-radius: 12% 8% 20% 6%; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
.discovery-description { margin: 15px 0 12px; font-size: var(--text-body); line-height: 1.7; color: #684936; }
.discovery-link { height: auto; min-height: 44px; margin-top: auto; white-space: normal; gap: 6px; color: #35673d; font-size: var(--text-small); font-weight: 600; }
.discovery-link:hover { background: #edf4e8; color: #214c2d; }
.discovery-link svg { width: 17px; height: 17px; }
.discovery-local-note { display: flex; align-items: center; justify-content: center; gap: 14px; max-width: 940px; margin: 24px auto 0; padding: 12px 18px; background: #fff3db; border: 1px dashed #d8c49e; border-radius: 12px; font-size: var(--text-small); line-height: 1.8; color: #745c3c; }
.discovery-footer { display: flex; align-items: center; justify-content: center; gap: 18px; margin-top: 32px; padding-top: 22px; border-top: 2px dashed #aacfe5; font-family: 'Lora', Georgia, serif; font-style: italic; color: #356c9a; font-size: var(--text-body); text-align: center; }
.discovery-footer > svg:last-child { color: #dd91ae; }
@media (max-width: 1150px) {
  .discovery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 80px 28px; }
  .discovery-heading { padding-inline: 60px; }
  .heading-wallet, .heading-calculator { width: 48px; height: 48px; }
  .discovery-card h3 { font-size: 23px; }
}
@media (max-width: 600px) {
  .kit-discovery { padding: 48px 0 28px; }
  .discovery-shell { width: calc(100% - 32px); }
  .discovery-heading { padding-inline: 0; margin-bottom: 28px; }
  .heading-wallet, .heading-calculator { display: none; }
  .discovery-eyebrow { font-size: var(--text-caption); line-height: 1.8; letter-spacing: .8px; }
  .discovery-heading h2 { font-size: 30px; }
  .discovery-heading > p:last-of-type { font-size: var(--text-body); }
  .discovery-grid { grid-template-columns: 1fr; gap: 76px; }
  .discovery-card { padding: 24px 20px 18px; }
  .discovery-art { height: 230px; }
  .discovery-art img { max-height: 210px; }
  .discovery-description { font-size: var(--text-body); }
  .discovery-link { font-size: var(--text-body); }
  .discovery-footer { font-size: var(--text-body); gap: 10px; }
}
.discovery-art .image-preview { width: 100%; min-width: 0; }
.discovery-art :deep(.image-preview-trigger) { display: grid; place-items: center; overflow: visible; }
.discovery-art :deep(.image-preview-hint) { bottom: 0; right: 5px; }
.guide-reference-page { max-width: 280px; margin: 0 auto 24px; }
.discovery-card { cursor: pointer; }
.discovery-card:focus-within { outline: 3px solid #3972a0; outline-offset: 4px; }
.qr-link:focus-visible { outline: 3px solid #3972a0; outline-offset: 3px; }
.discovery-link { width: 100%; margin-top: auto; border: 1px solid #bbcfb1; border-radius: 24px; background: #eff6e9; }
.discovery-art > .card-doodle { pointer-events: none; }
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .discovery-art img { transition: transform .25s; }
  .discovery-card:hover .discovery-art img { transform: rotate(0deg) scale(1.03); }
}
@media (prefers-reduced-motion: reduce) {
  .discovery-item { opacity: 1 !important; transform: none !important; }
}

.discovery-local-note > svg { width: 30px; height: 30px; flex-shrink: 0; color: #779266; stroke-width: 1.5; }
.discovery-local-note strong { font-family: 'Lora', Georgia, serif; font-size: var(--text-body); font-weight: 500; }
</style>
