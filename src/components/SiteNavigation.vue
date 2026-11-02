<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { publicAsset } from '@/lib/publicAsset'

const currentHash = ref('#tom-tat')
const navigationElement = ref<HTMLElement | null>(null)
let scrollFrame: number | undefined
let navigationObserver: ResizeObserver | undefined

watch(currentHash, async () => {
  await nextTick()
  const container = navigationElement.value?.querySelector('.navigation-inner')
  const activeLink = container?.querySelector('[aria-current="location"]')
  if (!(container instanceof HTMLElement) || !(activeLink instanceof HTMLElement)) return
  const containerBounds = container.getBoundingClientRect()
  const linkBounds = activeLink.getBoundingClientRect()
  if (linkBounds.left < containerBounds.left || linkBounds.right > containerBounds.right) {
    container.scrollTo({ left: container.scrollLeft + linkBounds.left - containerBounds.left - (container.clientWidth - activeLink.offsetWidth) / 2, behavior: 'instant' })
  }
})

function updateCurrentSection() {
  scrollFrame = undefined
  const activationLine = (navigationElement.value?.getBoundingClientRect().height ?? 78) + 40
  let activeHref = '#tom-tat'
  let lastHref = activeHref

  for (const item of navigation) {
    const section = document.getElementById(item.href.slice(1))
    if (!section) continue
    lastHref = item.href
    if (section.getBoundingClientRect().top <= activationLine) activeHref = item.href
  }

  if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    activeHref = lastHref
  }
  currentHash.value = activeHref
}

function scheduleSectionUpdate() {
  if (scrollFrame !== undefined) return
  scrollFrame = window.requestAnimationFrame(updateCurrentSection)
}

onMounted(() => {
  scheduleSectionUpdate()
  window.addEventListener('scroll', scheduleSectionUpdate, { passive: true })
  window.addEventListener('resize', scheduleSectionUpdate)
  window.addEventListener('hashchange', scheduleSectionUpdate)
  window.addEventListener('pageshow', scheduleSectionUpdate)
  navigationObserver = new ResizeObserver(scheduleSectionUpdate)
  navigationObserver.observe(document.documentElement)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scheduleSectionUpdate)
  window.removeEventListener('resize', scheduleSectionUpdate)
  window.removeEventListener('hashchange', scheduleSectionUpdate)
  window.removeEventListener('pageshow', scheduleSectionUpdate)
  navigationObserver?.disconnect()
  if (scrollFrame !== undefined) window.cancelAnimationFrame(scrollFrame)
})

const navigation = [
  { href: '#tom-tat', label: 'Dự án' },
  { href: '#thong-tin', label: 'Nhóm thực hiện' },
  { href: '#bo-cong-cu', label: 'Bộ công cụ & QR' },
  { href: '#video-du-an', label: 'Video' },
  { href: '#trai-nghiem', label: 'Trải nghiệm' },
  { href: '#hanh-trinh', label: 'Hành trình 30 ngày' },
  { href: '#ho-so', label: 'Hồ sơ chi tiết' },
  { href: '#dong-hanh', label: 'Đồng hành & Hỏi đáp' },
  { href: '#lien-he', label: 'Liên hệ' },
]
</script>

<template>
  <header ref="navigationElement" class="site-navigation">
    <div class="navigation-header">
    <a class="navigation-brand" href="#dau-trang" aria-label="Ví nhỏ thông minh — về đầu trang"><img :src="publicAsset('/images/vi-nho-logo.png')" alt="Ví nhỏ thông minh" width="1280" height="1280" /></a>
    <nav class="navigation-inner" aria-label="Điều hướng các phần của dự án">
      <Button
        v-for="item in navigation"
        :key="item.href"
        as-child
        variant="secondary"
        class="navigation-pill"
      >
        <a :href="item.href" :aria-current="currentHash === item.href ? 'location' : undefined">{{ item.label }}</a>
      </Button>
    </nav>
    <div class="navigation-actions"><span id="hero-effect-control"></span><Button as-child class="navigation-contact"><a href="#lien-he">Liên hệ <span aria-hidden="true">↗</span></a></Button></div>
    </div>
  </header>
</template>

<style scoped>
.navigation-header {
  display: grid;
  grid-template-columns: 86px minmax(0, 1fr) auto;
  align-items: center;
  gap: 18px;
  width: min(1500px, 100%);
  margin-inline: auto;
}

.navigation-brand { display: block; width: 86px; max-width: 100%; }
.navigation-brand img { display: block; width: 100%; height: auto; max-height: 76px; object-fit: contain; }
.navigation-actions { display: flex; align-items: center; justify-content: flex-end; flex-wrap: wrap; gap: 8px; max-width: 230px; }
.navigation-contact { display: inline-flex; align-items: center; gap: 10px; min-height: 46px; height: auto; padding: 10px 17px; border-radius: 24px; background: #583023; color: #fff7ed; font-size: var(--text-small); }
.navigation-brand:focus-visible { outline: 3px solid #376e95; outline-offset: 3px; border-radius: 8px; }

.site-navigation {
  position: sticky;
  top: 0;
  z-index: 40;
  padding: 10px 20px;
  background: #f8e8e4ed;
  backdrop-filter: blur(12px);
}

.navigation-inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: fit-content;
  max-width: 100%;
  min-width: 0;
  min-height: 58px;
  margin-inline: auto;
  padding: 6px 10px;
  border: 1px solid #79583d1a;
  border-radius: 40px;
  background: var(--surface-paper);
  box-shadow: 0 3px 14px #62453015, 0 1px 3px #62453012;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #b9a489 transparent;
  overscroll-behavior-x: contain;
  scroll-padding-inline: 12px;
}

.navigation-pill {
  flex-shrink: 0;
  height: 44px;
  padding: 9px 15px;
  border: 1px solid transparent;
  border-radius: 100px;
  background: transparent;
  color: #285b8f;
  font-size: var(--text-small);
  line-height: 1.6;
  font-weight: 500;
  text-decoration: none;
  transition: background .2s, border-color .2s;
}

.navigation-pill:hover {
  background: #e4eff7;
  border-color: #b5cfdf;
  color: #51351f;
}

.navigation-pill[aria-current='location'] { background: #583023; color: #fffcf5; box-shadow: inset 0 0 0 1px #ffffff1a; }

.navigation-pill:focus-visible {
  outline: 2px solid #789db5;
  outline-offset: 3px;
}

@media (max-width: 1050px) {
  .navigation-header { grid-template-columns: 72px minmax(0, 1fr); gap: 10px 16px; }
  .navigation-brand { width: 72px; }
  .navigation-actions { grid-column: 2; grid-row: 1; justify-self: end; max-width: 100%; }
  .navigation-inner {
    grid-column: 1 / -1;
    grid-row: 2;
    justify-content: flex-start;
    width: 100%;
    padding-inline: 8px;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-padding-inline: 20px;
  }
}

@media (max-width: 600px) {
  .navigation-header { grid-template-columns: 60px minmax(0, 1fr); gap: 8px 12px; }
  .navigation-brand { width: 60px; }
  .navigation-brand img { max-height: 54px; }
  .navigation-contact { padding: 8px 13px; }
  .site-navigation { padding: 8px 12px; }
  .navigation-inner { min-height: 55px; }
  .navigation-pill { height: 42px; padding-inline: 15px; font-size: var(--text-small); }
}
.navigation-header { display: grid; grid-template-columns: 74px minmax(0, 1fr) auto; align-items: center; gap: 18px; max-width: 1500px; margin-inline: auto; }
.navigation-brand { display: block; width: 66px; }
.navigation-brand img { display: block; width: 100%; height: 66px; object-fit: contain; }
.navigation-inner { min-width: 0; width: 100%; min-height: 52px; border-radius: 28px; padding: 4px; }
.navigation-pill { padding-inline: 11px; font-size: 12px; }
.navigation-actions { display: flex; align-items: center; gap: 9px; }
.navigation-contact { min-height: 48px; height: auto; padding: 12px 18px; border-radius: 24px; background: #583023; color: #fffcf5; gap: 9px; font-size: 13px; }
.navigation-contact:hover { background: #73402f; }
#hero-effect-control { display: inline-flex; }
@media (max-width: 1200px) { .navigation-header { grid-template-columns: 1fr auto; gap: 5px 12px; } .navigation-brand { grid-column: 1; grid-row: 1; width: 54px; } .navigation-brand img { height: 54px; } .navigation-actions { grid-column: 2; grid-row: 1; } .navigation-inner { grid-column: 1 / -1; grid-row: 2; min-height: 48px; } }
@media (max-width: 600px) { .site-navigation { padding: 6px 12px; } .navigation-header { gap: 4px 10px; } .navigation-brand { width: 46px; } .navigation-brand img { height: 46px; } .navigation-contact { min-height: 44px; padding: 9px 17px; } .navigation-inner { min-height: 48px; } .navigation-pill { min-height: 44px; } }
/* Soft cream paper edge between the header and the cover. */
.site-navigation { background: var(--surface-paper); box-shadow: 0 2px 7px #73553b0c; }
.site-navigation::after { content: ''; position: absolute; left: 0; right: 0; bottom: -7px; height: 9px; background: var(--surface-paper); filter: drop-shadow(0 2px 1px #73553b10); clip-path: polygon(0 0, 100% 0, 100% 48%, 97% 64%, 94% 43%, 91% 72%, 87% 54%, 83% 78%, 80% 46%, 76% 67%, 72% 49%, 68% 80%, 65% 57%, 61% 72%, 57% 45%, 53% 69%, 49% 52%, 45% 81%, 42% 59%, 38% 74%, 34% 48%, 30% 65%, 26% 44%, 22% 76%, 18% 55%, 15% 70%, 11% 47%, 7% 73%, 3% 52%, 0 66%); pointer-events: none; }
</style>
