<script setup lang="ts">
import { computed, ref } from 'vue'
import { motion } from 'motion-v'
import { ArrowLeft, ArrowRight, CirclePlay, Film, Heart, Play, RotateCcw, Star } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { projectVideos } from '@/data/projectVideos'

const selectedId = ref('gioi-thieu-tu-lop-hoc')
const selectedVideo = computed(() => projectVideos.find(video => video.id === selectedId.value))
const selectedIndex = computed(() => projectVideos.findIndex(video => video.id === selectedId.value))
const player = ref<HTMLVideoElement | null>(null)
const playing = ref(false)
const waiting = ref(false)
const failed = ref(false)
const started = ref(false)
const status = computed(() => failed.value ? 'Chưa tải được phim' : waiting.value ? 'Đang tải video…' : playing.value ? 'Đang phát' : started.value ? 'Đã tạm dừng' : 'Sẵn sàng để xem')

function selectVideo(id: string) {
  if (id === selectedId.value || !projectVideos.some(video => video.id === id)) return
  player.value?.pause()
  playing.value = false
  waiting.value = false
  failed.value = false
  started.value = false
  selectedId.value = id
}

function selectAdjacent(offset: number) {
  const video = projectVideos[selectedIndex.value + offset]
  if (video) selectVideo(video.id)
}

function retryVideo() {
  failed.value = false
  waiting.value = false
  player.value?.load()
}
</script>

<template>
  <section id="video-du-an" class="film-section" aria-labelledby="project-videos-title">
    <header class="film-section-heading">
      <span class="film-heading-icon" aria-hidden="true"><Film /><Star /></span>
      <div><p class="film-eyebrow">GÓC LƯU NIỆM CỦA CHÚNG MÌNH</p><h2 id="project-videos-title">Chuyện nhỏ, <em>kỷ niệm lớn.</em></h2><p>Gặp gỡ nhóm thực hiện và những khoảnh khắc của “Ví nhỏ thông minh”.</p></div>
      <span class="film-heading-sticker"><Heart aria-hidden="true" /> Cùng làm, cùng lớn lên.</span>
    </header>

    <motion.div v-if="selectedVideo" class="film-gallery" :initial="{ opacity: 0, y: 14 }" :while-in-view="{ opacity: 1, y: 0 }" :in-view-options="{ once: true }" :transition="{ duration: 0.45 }">
      <div class="film-main-column">
        <Card class="film-featured">
          <span class="film-tape" aria-hidden="true"></span>
          <div class="film-player-heading"><span><CirclePlay aria-hidden="true" /> VÍ NHỎ CINEMA</span><span class="film-status" :class="{ 'film-status-playing': playing }" role="status"><i aria-hidden="true"></i>{{ status }}</span></div>
          <div class="film-screen">
            <video :key="selectedVideo.id" ref="player" :poster="selectedVideo.poster" :aria-label="selectedVideo.title" aria-describedby="selected-video-description" controls playsinline preload="none" @play="playing = true; started = true" @playing="waiting = false" @waiting="waiting = true" @canplay="waiting = false" @pause="playing = false; waiting = false" @ended="playing = false; waiting = false; started = false" @error="failed = true; playing = false; waiting = false">
              <source :src="selectedVideo.source" type="video/mp4" @error="failed = true; playing = false; waiting = false" />
              <track v-if="selectedVideo.captions" kind="captions" :src="selectedVideo.captions" srclang="vi" label="Tiếng Việt" default />
              Trình duyệt chưa hỗ trợ xem video. <a :href="selectedVideo.source">Mở video trực tiếp</a>.
            </video>
          </div>
          <div v-if="failed" class="film-error" role="status"><p>Chưa tải được video. Bạn có thể thử lại hoặc mở file trực tiếp.</p><div><Button type="button" variant="outline" @click="retryVideo"><RotateCcw aria-hidden="true" /> Thử lại</Button><a :href="selectedVideo.source">Mở video trực tiếp ↗</a></div></div>
          <div class="film-featured-copy">
            <div class="film-title-row"><span class="film-large-number" aria-hidden="true">{{ String(selectedIndex + 1).padStart(2, '0') }}</span><div><p class="film-eyebrow">MỘT KHOẢNH KHẮC CỦA DỰ ÁN</p><h3>{{ selectedVideo.title }}</h3></div><span class="film-time">{{ selectedVideo.duration }}</span></div>
            <p id="selected-video-description">{{ selectedVideo.description }}</p>
            <div class="film-featured-footer"><span><Film aria-hidden="true" /> Tư liệu do nhóm cung cấp</span><span>Ví nhỏ · Thói quen lớn</span></div>
          </div>
        </Card>
        <div class="film-controls" aria-label="Chuyển video"><Button variant="outline" type="button" :disabled="selectedIndex <= 0" @click="selectAdjacent(-1)"><ArrowLeft aria-hidden="true" /> Phim trước</Button><span>Đoạn <strong>{{ selectedIndex + 1 }}</strong> / {{ projectVideos.length }}</span><Button variant="outline" type="button" :disabled="selectedIndex >= projectVideos.length - 1" @click="selectAdjacent(1)">Phim tiếp <ArrowRight aria-hidden="true" /></Button></div>
      </div>

      <aside class="film-playlist" aria-labelledby="film-playlist-title">
        <header class="film-playlist-heading"><p class="film-eyebrow">LẬT TỪNG KHOẢNH KHẮC</p><div><h3 id="film-playlist-title">Album thước phim</h3><span>{{ projectVideos.length }} đoạn</span></div><p>Chọn một tấm thẻ để đổi phim.</p></header>
        <ol class="film-playlist-items">
          <motion.li v-for="(video, index) in projectVideos" :key="video.id" :while-hover="{ x: -4 }" :transition="{ type: 'spring', stiffness: 300, damping: 25 }">
            <Button type="button" variant="ghost" class="film-choice" :class="{ 'film-choice-selected': video.id === selectedId }" :aria-pressed="video.id === selectedId" :aria-label="`Chọn video ${index + 1}: ${video.title}`" @click="selectVideo(video.id)">
              <span class="film-choice-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="film-thumbnail"><img :src="video.poster" alt="" width="1024" height="576" loading="lazy" /><span class="film-thumbnail-play"><Play aria-hidden="true" /></span><span class="film-duration">{{ video.duration }}</span></span>
              <span class="film-choice-copy"><span class="film-choice-title">{{ video.title }}</span><span class="film-choice-status"><span v-if="video.id === selectedId" class="film-choice-dot" aria-hidden="true"></span>{{ video.id === selectedId ? (playing ? 'Đang phát' : 'Đang chọn xem') : 'Khám phá đoạn phim' }}</span></span>
            </Button>
          </motion.li>
        </ol>
        <p class="film-album-note"><Heart aria-hidden="true" /> Những điều nhỏ, được lưu lại cùng nhau.</p>
      </aside>
    </motion.div>
    <p v-else class="film-empty" role="status">Chưa có video để hiển thị.</p>
    <p class="film-section-note"><CirclePlay aria-hidden="true" /><span>Chủ động bấm phát để xem. Bạn có thể bật âm thanh, tua và xem toàn màn hình bằng các nút trong video.</span></p>
  </section>
</template>

<style scoped>
.film-section { width: min(1360px, calc(100% - 80px)); margin: 0 auto; padding: 38px 0 65px; color: #55382a; }
.film-section-heading { display: flex; align-items: center; gap: 24px; margin-bottom: 38px; }
.film-heading-icon { position: relative; display: grid; place-items: center; width: 80px; height: 84px; flex-shrink: 0; border: 5px solid #fffdf6; border-radius: 20px; background: #dcecf8; box-shadow: 3px 5px 0 #aecadb33; transform: rotate(-8deg); color: #527c9d; }
.film-heading-icon > svg:first-child { width: 43px; height: 43px; stroke-width: 1.4; }
.film-heading-icon > svg:last-child { position: absolute; top: -12px; right: -12px; width: 25px; height: 25px; fill: #ffe499; color: #b48c45; }
.film-eyebrow { color: #3773a2; font-size: 10px; letter-spacing: 1.3px; font-weight: 600; line-height: 1.8; }
.film-section-heading h2 { margin-top: 9px; font-family: 'Lora', Georgia, serif; font-size: clamp(29px, 3vw, 43px); font-weight: 700; line-height: 1.4; letter-spacing: -.8px; }
.film-section-heading h2 em { color: #3475a5; font-weight: 500; }
.film-section-heading > div > p:last-child { margin-top: 12px; font-size: 14px; line-height: 1.8; color: #7a624e; }
.film-heading-sticker { display: inline-flex; align-items: center; gap: 9px; flex-shrink: 0; margin-left: auto; padding: 15px 20px; background: #f8dae5; border: 1px solid #edc8d6; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 14px; transform: rotate(4deg); }
.film-heading-sticker svg { width: 19px; height: 19px; color: #c27999; }
.film-gallery { display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(330px, 1fr); gap: 30px; align-items: start; }
.film-main-column { min-width: 0; }
.film-featured { position: relative; min-width: 0; padding: 12px 12px 0; background: #fffdf7; border: 1px solid #e3d7c4; border-radius: 5px 12px 6px 9px; box-shadow: -7px 7px 0 #d9e8f2, 0 14px 28px #5e412918; }
.film-tape { position: absolute; z-index: 2; top: -12px; left: 36%; width: 110px; height: 28px; background: repeating-linear-gradient(135deg, #f0b8ccbb 0 8px, #fff5e9bb 8px 16px); transform: rotate(-5deg); pointer-events: none; }
.film-player-heading { display: flex; justify-content: space-between; align-items: center; gap: 15px; padding: 18px 13px 14px; }
.film-player-heading > span:first-child { display: inline-flex; align-items: center; gap: 8px; font-size: 10px; font-weight: 700; letter-spacing: 1.3px; color: #735743; }
.film-player-heading svg { width: 18px; height: 18px; color: #a9843f; }
.film-status { display: inline-flex; align-items: center; gap: 7px; padding: 4px 9px; border-radius: 20px; border: 1px solid #d3dfd1; background: #f0f5ec; color: #5e7456; font-size: 10px; line-height: 1.7; }
.film-status i { width: 6px; height: 6px; background: #9eaf8b; border-radius: 50%; }
.film-status-playing i { background: #478248; }
.film-screen { padding: 12px 0; background: #342d29; background-image: repeating-linear-gradient(90deg, #a39782 0 11px, transparent 11px 23px), repeating-linear-gradient(90deg, #a39782 0 11px, transparent 11px 23px); background-size: auto 5px; background-position: left 4px, left bottom 4px; background-repeat: repeat-x; border-radius: 5px; }
.film-screen video { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: contain; background: #191511; }
.film-screen video:focus-visible { outline: 3px solid #edc46c; outline-offset: -4px; }
.film-featured-copy { padding: 23px 14px 18px; }
.film-title-row { display: flex; align-items: center; gap: 14px; }
.film-large-number { font-family: 'Lora', Georgia, serif; font-size: 46px; font-style: italic; color: #bacfdd; line-height: 1; }
.film-title-row > div { min-width: 0; }
.film-title-row h3 { margin-top: 4px; font-family: 'Lora', Georgia, serif; font-size: clamp(21px, 2vw, 28px); font-weight: 700; line-height: 1.5; }
.film-time { margin-left: auto; padding: 5px 9px; color: #866b45; background: #fbf0d6; border: 1px solid #ecdfc0; border-radius: 5px; font-size: 12px; flex-shrink: 0; }
.film-featured-copy > p { margin-top: 14px; font-size: 14px; line-height: 1.85; color: #785d47; }
.film-featured-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 18px; padding-top: 13px; border-top: 1px dashed #e0d4c2; color: #8b745e; font-size: 11px; line-height: 1.7; }
.film-featured-footer > span:first-child { display: inline-flex; align-items: center; gap: 7px; }
.film-featured-footer svg { width: 15px; height: 15px; color: #6d95b0; }
.film-controls { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 19px 0 0; }
.film-controls button { min-height: 44px; height: auto; border-radius: 24px; gap: 7px; padding: 10px 16px; font-size: 12px; background: #fffdf7; color: #75523b; }
.film-controls > span { font-size: 12px; color: #89735e; }
.film-controls strong { color: #31698f; }
.film-playlist { position: relative; min-width: 0; padding: 25px 20px 20px 30px; background: #edf4f8; border: 1px solid #d6e4ee; border-radius: 6px 18px 18px 6px; box-shadow: 4px 5px 0 #d8e7f04d; }
.film-playlist::before { content: ''; position: absolute; top: 23px; bottom: 23px; left: 9px; width: 6px; background: radial-gradient(circle, #becfda 2px, transparent 3px) center top / 6px 23px repeat-y; pointer-events: none; }
.film-playlist-heading { margin-bottom: 20px; padding-bottom: 17px; border-bottom: 1px dashed #c2d5e3; }
.film-playlist-heading > div { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 6px; }
.film-playlist-heading h3 { font-family: 'Lora', Georgia, serif; font-size: 23px; font-weight: 700; }
.film-playlist-heading > div > span { padding: 4px 10px; border-radius: 20px; background: #fffdf7; border: 1px solid #cddde8; font-size: 11px; color: #547b99; flex-shrink: 0; }
.film-playlist-heading > p:last-child { margin-top: 9px; font-size: 12px; color: #7990a1; line-height: 1.7; }
.film-playlist-items { display: grid; gap: 13px; list-style: none; padding: 0; margin: 0; }
.film-playlist-items li { min-width: 0; }
.film-choice { position: relative; display: grid; grid-template-columns: 104px minmax(0, 1fr); align-items: center; gap: 13px; width: 100%; min-height: 112px; height: auto; padding: 16px 12px 12px; border: 1px solid #e3d7c6; border-radius: 5px 11px 5px 9px; background: #fffdf7; color: #593c2b; box-shadow: 2px 3px 0 #d9cbb733; white-space: normal; text-align: left; }
.film-choice:hover { background: #fff8e9; }
.film-choice-selected { background: #fff4d5; border-color: #d2b778; box-shadow: 3px 4px 0 #d7c0883d; }
.film-choice-index { position: absolute; top: -5px; right: 13px; padding: 2px 8px; background: #f3d0de; font-size: 9px; letter-spacing: 1px; font-weight: 600; line-height: 1.5; color: #9e6c7a; transform: rotate(4deg); }
.film-playlist-items li:nth-child(even) .film-choice-index { background: #dbe8c9; color: #778b5d; transform: rotate(-5deg); }
.film-thumbnail { position: relative; display: block; width: 100%; padding: 4px 4px 10px; background: #fff; border: 1px solid #e3dbc9; box-shadow: 0 3px 5px #63492a14; transform: rotate(-3deg); }
.film-thumbnail img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
.film-thumbnail-play { position: absolute; inset: 4px 4px 10px; display: grid; place-items: center; background: #20140d26; }
.film-thumbnail-play svg { width: 23px; height: 23px; padding: 4px; border-radius: 50%; background: #4b342bb3; color: #fffdf5; }
.film-duration { position: absolute; bottom: 13px; right: 6px; padding: 1px 4px; border-radius: 3px; color: #fffaf0; background: #3a2b24d9; font-size: 9px; line-height: 1.6; }
.film-choice-copy { display: grid; gap: 8px; min-width: 0; }
.film-choice-title { font-size: 13px; font-weight: 600; line-height: 1.7; }
.film-choice-status { display: inline-flex; align-items: center; gap: 5px; font-size: 10px; font-weight: 400; color: #8d7963; line-height: 1.7; }
.film-choice-selected .film-choice-status { color: #8a6934; font-weight: 600; }
.film-choice-dot { width: 6px; height: 6px; border-radius: 50%; background: #ab8c4d; flex-shrink: 0; }
.film-album-note { display: flex; align-items: center; justify-content: center; gap: 7px; margin-top: 22px; color: #7890a2; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 12px; line-height: 1.7; text-align: center; }
.film-album-note svg { width: 16px; height: 16px; color: #c38ca6; }
.film-error { margin-top: 12px; padding: 16px; background: #fff0d9; border: 1px solid #e7cfa8; border-radius: 8px; color: #806039; font-size: 13px; line-height: 1.8; }
.film-error > div { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; margin-top: 12px; }
.film-error button { min-height: 44px; }
.film-error a { text-decoration: underline; text-underline-offset: 3px; }
.film-empty { padding: 28px; border: 1px dashed #d6c7b1; border-radius: 15px; color: #7e6954; }
.film-section-note { display: flex; align-items: flex-start; justify-content: center; gap: 9px; margin: 24px auto 0; max-width: 920px; font-size: 12px; line-height: 1.8; color: #8b755e; }
.film-section-note svg { width: 17px; height: 17px; color: #7e9eb5; margin-top: 3px; }
@media (max-width: 1150px) { .film-heading-sticker { display: none; } .film-gallery { gap: 22px; grid-template-columns: minmax(0, 1.4fr) minmax(310px, 1fr); } .film-choice { grid-template-columns: 88px minmax(0, 1fr); gap: 10px; padding-inline: 10px; } .film-playlist { padding-right: 15px; padding-left: 25px; } }
@media (max-width: 950px) { .film-gallery { grid-template-columns: 1fr; gap: 28px; } .film-playlist-items { grid-template-columns: repeat(2, minmax(0, 1fr)); } .film-choice { grid-template-columns: 100px minmax(0, 1fr); } }
@media (max-width: 600px) { .film-section { width: calc(100% - 36px); padding-block: 30px 45px; } .film-section-heading { gap: 16px; margin-bottom: 30px; align-items: flex-start; } .film-heading-icon { width: 54px; height: 62px; border-width: 4px; border-radius: 14px; } .film-heading-icon > svg:first-child { width: 30px; height: 30px; } .film-section-heading h2 { font-size: 29px; } .film-section-heading > div > p:last-child { font-size: 12px; } .film-eyebrow { font-size: 8px; letter-spacing: .8px; } .film-featured { padding: 8px 8px 0; } .film-player-heading { gap: 8px; padding: 17px 5px 12px; } .film-player-heading > span:first-child { font-size: 8px; letter-spacing: .8px; } .film-status { font-size: 9px; padding: 3px 6px; } .film-featured-copy { padding: 18px 8px 14px; } .film-title-row { gap: 10px; } .film-large-number { font-size: 34px; } .film-title-row h3 { font-size: 21px; } .film-time { display: none; } .film-featured-copy > p { font-size: 13px; } .film-featured-footer { font-size: 10px; } .film-controls { gap: 8px; } .film-controls button { font-size: 11px; padding: 10px 12px; } .film-controls > span { font-size: 11px; } .film-playlist-items { grid-template-columns: 1fr; } .film-playlist { padding: 20px 15px 18px 25px; } .film-choice { grid-template-columns: 100px minmax(0, 1fr); } .film-choice-title { font-size: 14px; } .film-album-note { font-size: 11px; } }
</style>
