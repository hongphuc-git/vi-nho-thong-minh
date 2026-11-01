<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Button } from '@/components/ui/button'

const currentHash = ref('#tom-tat')
const navigationElement = ref<HTMLElement | null>(null)
let scrollFrame: number | undefined
let navigationObserver: ResizeObserver | undefined

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
  <nav ref="navigationElement" class="site-navigation" aria-label="Điều hướng các phần của dự án">
    <div class="navigation-inner">
      <Button
        v-for="item in navigation"
        :key="item.href"
        as-child
        variant="secondary"
        class="navigation-pill"
      >
        <a :href="item.href" :aria-current="currentHash === item.href ? 'location' : undefined">{{ item.label }}</a>
      </Button>
    </div>
  </nav>
</template>

<style scoped>
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
  justify-content: center;
  gap: 4px;
  width: fit-content;
  max-width: 100%;
  min-height: 58px;
  margin-inline: auto;
  padding: 6px 10px;
  border: 1px solid #79583d1a;
  border-radius: 40px;
  background: var(--surface-paper);
  box-shadow: 0 3px 14px #62453015, 0 1px 3px #62453012;
  overflow-x: auto;
}

.navigation-pill {
  flex-shrink: 0;
  height: 44px;
  padding: 9px 15px;
  border: 1px solid transparent;
  border-radius: 100px;
  background: transparent;
  color: #285b8f;
  font-size: 12px;
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
  .navigation-inner {
    justify-content: flex-start;
    width: 100%;
    padding-inline: 8px;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-padding-inline: 20px;
  }
}

@media (max-width: 600px) {
  .site-navigation { padding: 8px 12px; }
  .navigation-inner { min-height: 55px; }
  .navigation-pill { height: 42px; padding-inline: 15px; font-size: 12px; }
}
</style>
