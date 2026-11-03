<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { motion } from 'motion-v'
import { PageFlip } from 'page-flip/dist/js/page-flip.module.js'
import { ArrowLeft, ArrowRight, CirclePlay, Heart, Play, RotateCcw } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { projectVideos } from '@/data/projectVideos'

const selectedId = ref(projectVideos[0]?.id ?? '')
const selectedVideo = computed(() => projectVideos.find(video => video.id === selectedId.value))
const selectedIndex = computed(() => projectVideos.findIndex(video => video.id === selectedId.value))
const player = ref<HTMLVideoElement | null>(null)
const spread = ref<HTMLElement | null>(null)
const flipLayer = ref<HTMLElement | null>(null)
const playing = ref(false)
const waiting = ref(false)
const failed = ref(false)
const started = ref(false)
const turningVideo = ref(false)
const showPageTurn = ref(false)
let pageFlip: PageFlip | undefined
let motionPreference: MediaQueryList | undefined
let disposed = false
let resizeObserver: ResizeObserver | undefined
let turnVersion = 0
const status = computed(() => failed.value ? 'Chưa tải được phim' : waiting.value ? 'Đang tải video…' : playing.value ? 'Đang phát' : started.value ? 'Đã tạm dừng' : 'Sẵn sàng để xem')

// Only inert poster copies enter the flip engine; Vue retains the live player.
function copySpread(): HTMLElement[] {
  if (!spread.value) return []
  const copies: HTMLElement[] = []
  for (const page of spread.value.querySelectorAll(':scope > .book-page')) {
    const copy = page.cloneNode(true)
    if (!(copy instanceof HTMLElement)) continue
    copy.className = 'album-flip-page'
    copy.inert = true
    copy.setAttribute('aria-hidden', 'true')
    copy.setAttribute('data-density', 'soft')
    for (const element of copy.querySelectorAll('[id], [aria-describedby], [aria-labelledby]')) {
      element.removeAttribute('id')
      element.removeAttribute('aria-describedby')
      element.removeAttribute('aria-labelledby')
    }
    for (const video of copy.querySelectorAll('video')) {
      const poster = document.createElement('img')
      poster.src = video.poster
      poster.alt = ''
      poster.className = 'album-flip-poster'
      video.replaceWith(poster)
    }
    if (page.classList.contains('book-contents-page')) {
      const content = document.createElement('div')
      content.className = 'album-flip-contents'
      content.append(...Array.from(copy.childNodes))
      copy.appendChild(content)
    }
    copies.push(copy)
  }
  return copies
}

function finishPageTurn() {
  showPageTurn.value = false
  turningVideo.value = false
}

function cancelPageTurn() {
  turnVersion += 1
  pageFlip?.getRender().finishAnimation()
  finishPageTurn()
}

async function selectVideo(id: string) {
  if (turningVideo.value || id === selectedId.value || disposed) return
  const nextIndex = projectVideos.findIndex(video => video.id === id)
  if (nextIndex < 0) return
  const forward = nextIndex > selectedIndex.value
  const oldPages = copySpread()
  const currentSpread = spread.value
  const layer = flipLayer.value
  const shouldAnimate = !motionPreference?.matches && currentSpread && layer && currentSpread.clientWidth >= 860 && oldPages.length === 2
  player.value?.pause()
  playing.value = false
  waiting.value = false
  failed.value = false
  started.value = false
  turningVideo.value = true
  const version = ++turnVersion
  selectedId.value = id
  await nextTick()
  if (disposed || version !== turnVersion) return
  if (!shouldAnimate || !currentSpread || !layer) {
    finishPageTurn()
    return
  }
  const newPages = copySpread()
  if (newPages.length !== 2) {
    finishPageTurn()
    return
  }
  const pages = forward ? [...oldPages, ...newPages] : [...newPages, ...oldPages]
  const firstPage = forward ? 0 : 2
  try {
    if (!pageFlip) {
      const host = document.createElement('div')
      layer.appendChild(host)
      pageFlip = new PageFlip(host, {
        width: currentSpread.clientWidth / 2,
        height: currentSpread.clientHeight,
        size: 'fixed', usePortrait: false, autoSize: false,
        drawShadow: true, maxShadowOpacity: 0.24, flippingTime: 950,
        useMouseEvents: false, showPageCorners: false, mobileScrollSupport: false,
        startPage: firstPage,
      })
      const engine = pageFlip
      engine.on('changeState', event => {
        if (event.data === 'read') finishPageTurn()
      })
      await new Promise<void>(resolve => {
        engine.on('init', () => resolve())
        engine.loadFromHTML(pages)
      })
      engine.off('init')
    } else {
      const settings = pageFlip.getSettings()
      settings.width = currentSpread.clientWidth / 2
      settings.height = currentSpread.clientHeight
      const host = layer.firstElementChild
      if (host instanceof HTMLElement) {
        host.style.minWidth = `${currentSpread.clientWidth}px`
        host.style.minHeight = `${currentSpread.clientHeight}px`
      }
      pageFlip.updateFromHtml(pages)
      pageFlip.update()
    }
    if (disposed || version !== turnVersion) return
    pageFlip.turnToPage(firstPage)
    showPageTurn.value = true
    await nextTick()
    if (disposed || version !== turnVersion) return
    if (forward) pageFlip.flipNext('bottom')
    else pageFlip.flipPrev('bottom')
  } catch {
    // Keep the selected video available even if the decorative engine fails.
    finishPageTurn()
  }
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  motionPreference.addEventListener('change', cancelPageTurn)
  window.addEventListener('resize', cancelPageTurn)
  let previousWidth = spread.value?.clientWidth ?? 0
  resizeObserver = new ResizeObserver(entries => {
    const width = entries[0]?.contentRect.width ?? previousWidth
    if (Math.abs(width - previousWidth) > 1) cancelPageTurn()
    previousWidth = width
  })
  if (spread.value) resizeObserver.observe(spread.value)
})

onUnmounted(() => {
  disposed = true
  cancelPageTurn()
  resizeObserver?.disconnect()
  motionPreference?.removeEventListener('change', cancelPageTurn)
  window.removeEventListener('resize', cancelPageTurn)
  pageFlip?.off('changeState')
  pageFlip?.destroy()
  player.value?.pause()
})

function selectAdjacent(offset: number) {
  const video = projectVideos[selectedIndex.value + offset]
  if (video) void selectVideo(video.id)
}

function retryVideo() {
  failed.value = false
  waiting.value = false
  player.value?.load()
}
</script>

<template>
  <section id="video-du-an" class="video-album" aria-labelledby="project-videos-title">
    <header class="album-heading">
      <p class="album-eyebrow">VIDEO DỰ ÁN</p>
      <h2 id="project-videos-title">Gặp nhóm, <em>xem những đoạn phim.</em></h2>
      <p>Các đoạn phim ngắn do nhóm cung cấp; chưa thay thế video hướng dẫn hoàn chỉnh dự kiến trong hồ sơ.</p>
    </header>

    <motion.div v-if="selectedVideo" :initial="{ opacity: 0, y: 14 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: 0.45 }">
      <Card class="video-book">
        <div class="book-paper-stack" aria-hidden="true">
          <template v-for="sheet in 8" :key="sheet">
            <span class="book-paper-sheet book-paper-left" :style="{ '--sheet': sheet }"></span>
            <span class="book-paper-sheet book-paper-right" :style="{ '--sheet': sheet }"></span>
          </template>
        </div>
        <div ref="spread" class="book-spread" :class="{ 'book-is-turning': showPageTurn }">
          <div class="book-page book-player-page">
            <motion.div
              class="book-player-content"
              :inert="turningVideo"
            >
            <div class="book-page-face">
            <div class="book-page-heading"><span>THƯỚC PHIM {{ String(selectedIndex + 1).padStart(2, '0') }}</span><span class="book-heading-rule" aria-hidden="true"></span></div>
            <div class="book-screen">
              <video :key="selectedVideo.id" ref="player" :poster="selectedVideo.poster" :aria-label="selectedVideo.title" aria-describedby="selected-video-description" controls playsinline preload="none" @play="playing = true; started = true" @playing="waiting = false" @waiting="waiting = true" @canplay="waiting = false" @pause="playing = false; waiting = false" @ended="playing = false; waiting = false; started = false" @error="failed = true; playing = false; waiting = false">
                <source :src="selectedVideo.source" type="video/mp4" @error="failed = true; playing = false; waiting = false" />
                <track v-if="selectedVideo.captions" kind="captions" :src="selectedVideo.captions" srclang="vi" label="Tiếng Việt" default />
                Trình duyệt chưa hỗ trợ xem video. <a :href="selectedVideo.source">Mở video trực tiếp</a>.
              </video>
            </div>
            <div v-if="failed" class="book-error" role="status">
              <p>Chưa tải được video. Bạn có thể thử lại hoặc mở file trực tiếp.</p>
              <div><Button type="button" variant="outline" @click="retryVideo"><RotateCcw aria-hidden="true" /> Thử lại</Button><a :href="selectedVideo.source">Mở video trực tiếp ↗</a></div>
            </div>
            <div class="book-video-copy">
              <div class="book-title-row"><h3>{{ selectedVideo.title }}</h3><span class="book-time">{{ selectedVideo.duration }}</span></div>
              <p id="selected-video-description">{{ selectedVideo.description }}</p>
              <svg class="book-copy-flourish" viewBox="0 0 120 20" fill="none" aria-hidden="true"><path d="M2 15C20 4 51 4 59 10C66 17 33 21 40 11C47 1 67 0 60 8C54 16 98 19 117 5" /></svg>
            </div>
            <footer class="book-page-footer"><span class="book-footer-number" aria-hidden="true">{{ String(selectedIndex + 1).padStart(2, '0') }}</span><span class="book-footer-copy book-player-status" role="status">{{ status }}</span><CirclePlay aria-hidden="true" /></footer>
            </div>
            </motion.div>

          </div>

          <aside class="book-page book-contents-page" aria-labelledby="book-contents-title">
            <span class="book-ribbon" aria-hidden="true"><Heart /></span>
            <header class="book-contents-heading"><p class="album-eyebrow">NHỮNG TRANG CHUYỆN NHỎ</p><h3 id="book-contents-title">Mục lục thước phim</h3></header>
            <ol class="book-contents-list">
              <li v-for="(video, index) in projectVideos" :key="video.id">
                <Button type="button" variant="ghost" class="book-choice" :class="{ 'book-choice-selected': video.id === selectedId }" :aria-pressed="video.id === selectedId" :aria-disabled="Boolean(turningVideo)" :aria-label="`Chọn video ${index + 1}: ${video.title}`" @click="selectVideo(video.id)">
                  <span class="book-choice-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="book-thumbnail"><img :src="video.poster" alt="" width="1024" height="576" loading="lazy" /><span class="book-thumbnail-play" aria-hidden="true"><Play /></span><span class="book-duration">{{ video.duration }}</span></span>
                  <span class="book-choice-copy"><span class="book-choice-title">{{ video.title }}</span><span class="book-choice-status"><span v-if="video.id === selectedId" class="book-choice-dot" aria-hidden="true"></span>{{ video.id === selectedId ? (playing ? 'Đang phát' : 'Đang chọn') : 'Khám phá đoạn phim' }}</span></span>
                </Button>
              </li>
            </ol>
            <footer class="book-page-footer"><span class="book-footer-number">{{ String(projectVideos.length).padStart(2, '0') }}</span><span class="book-footer-copy">thước phim · Những điều nhỏ, được lưu lại.</span><Heart aria-hidden="true" /></footer>
          </aside>
          <div ref="flipLayer" class="album-flip-layer" :class="{ 'album-flip-visible': showPageTurn }" aria-hidden="true" inert></div>
        </div>
      </Card>
      <div class="album-controls" role="group" aria-label="Chuyển video trong album">
        <Button variant="outline" type="button" :disabled="selectedIndex <= 0" :aria-disabled="Boolean(turningVideo) || selectedIndex <= 0" @click="selectAdjacent(-1)"><ArrowLeft aria-hidden="true" /> Trang trước</Button>
        <span aria-live="polite" aria-atomic="true"><span class="sr-only">Video </span>{{ String(selectedIndex + 1).padStart(2, '0') }} / {{ String(projectVideos.length).padStart(2, '0') }}</span>
        <Button type="button" class="album-next" :disabled="selectedIndex >= projectVideos.length - 1" :aria-disabled="Boolean(turningVideo) || selectedIndex >= projectVideos.length - 1" @click="selectAdjacent(1)">Trang tiếp <ArrowRight aria-hidden="true" /></Button>
      </div>
    </motion.div>
    <p v-else class="album-empty" role="status">Chưa có video để hiển thị.</p>
    <p class="album-play-note"><CirclePlay aria-hidden="true" /><span>Chọn một video rồi bấm phát để xem. Dùng các nút trong video để bật âm thanh, tua hoặc xem toàn màn hình.</span></p>
  </section>
</template>

<style scoped>
.video-album { width: min(1360px, calc(100% - 64px)); margin-inline: auto; padding-block: 44px 52px; color: #583023; scroll-margin-top: 110px; }
.album-heading { margin-bottom: 32px; text-align: center; padding-inline: 12px; }
.album-eyebrow { color: #945164; font-size: var(--text-small); line-height: 1.8; font-weight: 600; letter-spacing: 2px; }
.album-heading h2 { margin-top: 9px; font-family: 'Lora', Georgia, serif; font-size: clamp(31px, 3.6vw, 49px); font-weight: 600; line-height: 1.4; letter-spacing: -.8px; text-wrap: balance; }
.album-heading h2 em { color: #a64f68; font-weight: 500; }
.album-heading > p:last-child { margin-top: 12px; color: #5c4633; font-size: var(--text-body); line-height: 1.8; }
.video-book { position: relative; isolation: isolate; --book-side: 28px; --book-bottom: 34px; --paper-offset-x: 1.5px; --paper-offset-y: 2.7px; padding: 10px var(--book-side) var(--book-bottom); border: 1px solid #a86d76; border-radius: 30px 30px 34px 34px; background: linear-gradient(90deg, #be858c, #d5a1a6 47%, #a46870 50%, #d5a1a6 53%, #be858c); box-shadow: 0 5px 0 #a16b7566, 0 17px 30px #75424e1c; color: #583023; }
.book-paper-stack { position: absolute; z-index: 0; inset: 10px var(--book-side) var(--book-bottom); pointer-events: none; }
.book-paper-sheet { position: absolute; top: 0; bottom: 0; width: calc(50% + var(--sheet) * var(--paper-offset-x)); z-index: calc(9 - var(--sheet)); border: 1px solid #dfcdb6; background: linear-gradient(180deg, #fff9ef, #f8ecdc); box-shadow: 0 1px 2px #76543c0d; }
.book-paper-left { left: 0; border-right: 0; border-radius: 24px 0 0 30px; transform: translate(calc(var(--sheet) * var(--paper-offset-x) * -1), calc(var(--sheet) * var(--paper-offset-y))); }
.book-paper-right { right: 0; border-left: 0; border-radius: 0 24px 30px 0; transform: translate(calc(var(--sheet) * var(--paper-offset-x)), calc(var(--sheet) * var(--paper-offset-y))); }
.book-paper-stack::after { content: ''; position: absolute; z-index: 10; top: 0; bottom: calc(-8 * var(--paper-offset-y)); left: calc(50% - 14px); width: 28px; background: linear-gradient(90deg, transparent, #bfa58a18 40%, #a98c6c26 50%, #bfa58a18 60%, transparent); pointer-events: none; }
.book-spread { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: stretch; border: 1px solid #ead7bf; border-radius: 22px 22px 27px 27px; background: #fff7ed; box-shadow: 0 2px 4px #76543c1f; }
.book-page { position: relative; min-width: 0; display: flex; flex-direction: column; padding: clamp(23px, 2.6vw, 37px); background-color: #fff7ed; }
.book-page.book-player-page { padding: 0; }
.book-player-content { display: flex; flex-direction: column; flex: 1; min-width: 0; border-radius: inherit; }
.book-page-face { display: flex; flex-direction: column; flex: 1; min-width: 0; padding: clamp(23px, 2.6vw, 37px); border-radius: inherit; background-color: #fff7ed; background-image: linear-gradient(90deg, #e7d3bb22, transparent 10%, transparent 93%, #9b735b1f); }
.book-player-content[inert] { pointer-events: none; }
.album-flip-layer { position: absolute; inset: 0; z-index: 10; visibility: hidden; pointer-events: none; overflow: hidden; border-radius: inherit; }
.album-flip-visible { visibility: visible; }
.album-flip-layer :deep(.stf__parent) { width: 100%; height: 100%; }
.album-flip-layer :deep(.stf__wrapper) { height: 100%; }
.album-flip-layer :deep(.album-flip-page) { overflow: hidden; background: #fff7ed; color: #583023; }
.album-flip-layer :deep(.album-flip-page > .book-player-content) { height: 100%; }
.album-flip-layer :deep(.album-flip-contents) { position: relative; display: flex; flex-direction: column; height: 100%; padding: clamp(23px, 2.6vw, 37px); background-image: linear-gradient(90deg, #9b735b18, transparent 8%, transparent 94%, #e7d3bb22); }
.album-flip-layer :deep(.album-flip-poster) { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: contain; border-radius: 9px; background: #281d18; }
.book-is-turning > .book-page { visibility: hidden; }
@media (max-width: 1100px) { .book-page-face { padding: 25px; } .album-flip-layer :deep(.album-flip-contents) { padding: 25px; } }
@media (max-width: 500px) { .book-page-face { padding: 23px 17px; } }
.book-choice[aria-disabled='true'], .album-controls button[aria-disabled='true'] { cursor: wait; }
.book-player-page { border-radius: 18px 0 0 21px; background-image: linear-gradient(90deg, #e7d3bb22, transparent 10%, transparent 93%, #9b735b1f); }
.book-contents-page { border-radius: 0 18px 21px 0; background-image: linear-gradient(90deg, #9b735b18, transparent 8%, transparent 94%, #e7d3bb22); }
.book-page-heading { display: flex; align-items: center; gap: 17px; min-height: 26px; margin-bottom: 20px; color: #945164; font-size: var(--text-small); font-weight: 600; line-height: 1.8; letter-spacing: 1.7px; }
.book-heading-rule { flex: 1; min-width: 18px; border-top: 1px solid #dbb4b2; }
.book-screen { border-radius: 9px; background: #281d18; }
.book-screen video { display: block; width: 100%; aspect-ratio: 16 / 9; border-radius: inherit; object-fit: contain; background: #281d18; }
.book-screen video:focus-visible { outline: 3px solid #92516c; outline-offset: 4px; }
.book-video-copy { padding-block: 20px 24px; }
.book-title-row { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 14px; }
.book-title-row h3 { font-family: 'Lora', Georgia, serif; font-size: clamp(23px, 2.1vw, 29px); font-weight: 600; line-height: 1.5; }
.book-time { padding: 3px 11px; border: 1px solid #e5c3bc; border-radius: 20px; background: #f9e6dd; color: #6c4538; font-size: var(--text-small); line-height: 1.7; }
.book-video-copy > p { margin-top: 12px; font-size: var(--text-body); line-height: 1.85; color: #5c4633; }
.book-copy-flourish { display: block; width: 106px; height: 19px; margin-top: 12px; stroke: #bd7189; stroke-width: 1.2; stroke-linecap: round; }
.book-page-footer { display: flex; align-items: center; gap: 14px; min-height: 52px; margin-top: auto; padding-top: 16px; border-top: 1px solid #dbb4b2; color: #78503e; font-size: var(--text-small); line-height: 1.8; }
.book-footer-number { flex-shrink: 0; font-family: 'Lora', Georgia, serif; font-size: 19px; font-style: italic; font-variant-numeric: tabular-nums; color: #a8556b; }
.book-footer-copy { flex: 1; min-width: 0; }
.book-page-footer > svg { width: 18px; height: 18px; flex-shrink: 0; color: #a8556b; }
.book-ribbon { position: absolute; z-index: 1; top: -12px; right: 25px; display: flex; align-items: flex-end; justify-content: center; width: 40px; height: 88px; padding-bottom: 20px; background: linear-gradient(90deg, #c87d91, #e8aabb 18%, #e2a1b4 82%, #ba7185); clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%); pointer-events: none; }
.book-ribbon svg { width: 19px; height: 19px; color: #894354; }
.book-contents-heading { padding-right: 27px; margin-bottom: 18px; }
.book-contents-heading .album-eyebrow { font-size: var(--text-caption); letter-spacing: 1.5px; }
.book-contents-heading h3 { margin-top: 10px; font-family: 'Lora', Georgia, serif; font-size: clamp(23px, 2.2vw, 30px); line-height: 1.5; font-weight: 600; }
.book-contents-list { display: grid; gap: 6px; list-style: none; padding: 0; margin: 0 0 20px; }
.book-contents-list li { min-width: 0; }
.book-contents-list li + li { border-top: 1px solid #e7c8bf; padding-top: 6px; }
.book-choice { display: grid; grid-template-columns: 24px minmax(110px, 136px) minmax(0, 1fr); align-items: center; gap: 12px; width: 100%; height: auto; min-height: 100px; padding: 10px; white-space: normal; text-align: left; color: #583023; border: 1px solid transparent; border-left: 3px solid transparent; border-radius: 9px; background: transparent; box-shadow: none; }
.book-choice:hover { background: #f8e7df; color: #583023; }
.book-choice-selected { border-color: #edccd3; border-left-color: #a44d67; background: #f6dfe6; }
.book-choice-selected:hover { background: #f0d3de; }
.book-choice:focus-visible, .album-controls button:focus-visible, .book-error a:focus-visible, .book-error button:focus-visible { outline: 3px solid #92516c; outline-offset: 3px; }
.book-choice-number { font-family: 'Lora', Georgia, serif; font-size: 20px; font-style: italic; color: #a8556b; font-weight: 500; }
.book-thumbnail { position: relative; display: block; min-width: 0; padding: 3px; background: #fffaf3; border: 1px solid #e0cbbb; border-radius: 4px; }
.book-thumbnail img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 2px; }
.book-thumbnail-play { position: absolute; inset: 3px; display: grid; place-items: center; background: #2f1c1610; }
.book-thumbnail-play svg { width: 23px; height: 23px; padding: 4px; border-radius: 50%; background: #583023b3; color: #fff7ed; }
.book-duration { position: absolute; right: 5px; bottom: 5px; padding: 1px 4px; border-radius: 3px; background: #35241ee6; color: #fff7ed; font-size: var(--text-caption); font-weight: 500; line-height: 1.5; }
.book-choice-copy { display: grid; gap: 6px; min-width: 0; }
.book-choice-title { font-size: var(--text-body); line-height: 1.65; font-weight: 600; }
.book-choice-status { display: flex; align-items: center; gap: 6px; font-size: var(--text-small); line-height: 1.7; font-weight: 400; color: #715644; }
.book-choice-selected .book-choice-status { color: #86405b; font-weight: 500; }
.book-choice-dot { width: 6px; height: 6px; flex-shrink: 0; border-radius: 50%; background: #a44d67; }
.album-controls { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 16px 28px; margin-top: 29px; }
.album-controls button { min-height: 46px; height: auto; padding: 11px 20px; gap: 10px; border: 1px solid #d3a8a4; border-radius: 26px; background: #fff7ed; color: #583023; font-size: var(--text-body); line-height: 1.6; }
.album-controls button:hover { background: #f6dfe6; color: #583023; }
.album-controls button.album-next { background: #583023; color: #fff7ed; border-color: #583023; }
.album-controls button.album-next:hover { background: #734333; }
.album-controls > span { font-size: var(--text-body); color: #674434; font-variant-numeric: tabular-nums; }
.album-controls svg { width: 17px; height: 17px; }
.album-play-note { display: flex; align-items: flex-start; justify-content: center; gap: 8px; max-width: 900px; margin: 22px auto 0; text-align: center; color: #5c4633; font-size: var(--text-body); line-height: 1.8; }
.album-play-note svg { width: 18px; height: 18px; margin-top: 3px; flex-shrink: 0; color: #a04f69; }
.book-error, .album-empty { padding: 16px; border: 1px solid #d8bba0; border-radius: 8px; background: #fff0d9; color: #6d492d; font-size: var(--text-body); line-height: 1.8; }
.book-error { margin-top: 14px; }
.book-error > div { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 12px; }
.book-error button { min-height: 44px; height: auto; white-space: normal; }
.book-error a { display: inline-flex; align-items: center; min-height: 44px; text-decoration: underline; text-underline-offset: 4px; }
@media (prefers-reduced-motion: no-preference) { .book-choice { transition: background-color .2s, border-color .2s; } }
@media (max-width: 1100px) { .book-page { padding: 25px; }  .book-choice { grid-template-columns: 20px 82px minmax(0, 1fr); gap: 8px; padding-inline: 7px; } .book-choice-title { font-size: var(--text-body); } .book-ribbon { right: 17px; } }
@media (max-width: 900px) { .video-album { width: calc(100% - 40px); } .book-spread { grid-template-columns: 1fr; } .book-player-page { border-radius: 18px 18px 0 0; background-image: linear-gradient(90deg, #e7d3bb22, transparent 10%); } .book-contents-page { border-left: 0; border-top: 1px solid #dcc3af; border-radius: 0 0 21px 21px; background-image: linear-gradient(180deg, #9b735b14, transparent 20px); padding: 29px 25px 25px; } .book-ribbon { top: -1px; height: 61px; } .book-choice { grid-template-columns: 28px 112px minmax(0, 1fr); gap: 15px; } .book-page-footer { margin-top: 8px; } }
@media (max-width: 500px) { .video-album { width: calc(100% - 24px); padding-block: 32px 40px; } .album-heading { padding-inline: 4px; margin-bottom: 25px; } .album-heading h2 { font-size: 31px; letter-spacing: -.6px; } .album-heading > p:last-child { font-size: var(--text-body); } .album-eyebrow { font-size: var(--text-caption); letter-spacing: 1.5px; } .video-book { padding: 6px 6px 13px; border-radius: 18px; } .book-page { padding: 23px 17px; } .book-page-heading { font-size: var(--text-caption); letter-spacing: 1px; gap: 10px; } .book-contents-page { padding-top: 26px; } .book-contents-heading h3 { font-size: 24px; } .book-contents-heading .album-eyebrow { font-size: var(--text-caption); letter-spacing: .7px; } .book-choice { grid-template-columns: 21px 82px minmax(0, 1fr); gap: 8px; padding: 10px 6px; min-height: 92px; } .book-choice-number { font-size: var(--text-body); } .book-choice-status { font-size: var(--text-small); } .book-page-footer { gap: 10px; font-size: var(--text-small); } .album-controls { gap: 12px; } .album-controls button { padding-inline: 13px; font-size: var(--text-small); } .album-controls > span { font-size: var(--text-small); } .album-play-note { padding-inline: 6px; text-align: left; } }
@media (max-width: 350px) { .book-choice { grid-template-columns: 18px 68px minmax(0, 1fr); gap: 6px; } .book-contents-heading h3 { font-size: 22px; } .album-controls > span { order: -1; width: 100%; text-align: center; } }
.book-player-page { border-top-left-radius: 22px; border-bottom-left-radius: 27px; }
.book-contents-page { border-top-right-radius: 22px; border-bottom-right-radius: 27px; }
@media (max-width: 900px) {
  .video-book { --book-side: 20px; --book-bottom: 28px; --paper-offset-x: 1px; --paper-offset-y: 2px; }
  .book-paper-stack::after { display: none; }
  .book-player-page { border-radius: 22px 22px 0 0; }
  .book-contents-page { border-radius: 0 0 27px 27px; }
  .book-ribbon { width: 34px; height: 70px; padding-bottom: 17px; }
}
@media (max-width: 500px) {
  .video-book { --book-side: 14px; --book-bottom: 22px; --paper-offset-x: .7px; --paper-offset-y: 1.5px; padding: 10px var(--book-side) var(--book-bottom); border-radius: 24px; }
  .book-paper-left { border-bottom-left-radius: 25px; }
  .book-paper-right { border-bottom-right-radius: 25px; }
  .book-ribbon { right: 15px; width: 30px; height: 64px; padding-bottom: 15px; }
  .book-ribbon svg { width: 16px; height: 16px; }
}
</style>
