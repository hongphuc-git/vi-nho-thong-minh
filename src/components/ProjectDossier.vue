<script setup lang="ts">
import { ref } from 'vue'
import type { Component } from 'vue'
import { motion } from 'motion-v'
import { ChevronDown, Handshake, Settings, Gem, Users, UserRound, Database, Truck, Receipt, ChartColumn, Lightbulb, Pencil, Ruler, Star, Sparkles, Coins, Send } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { collapseFromButton, returnToCollapsedHeading } from '@/lib/collapse'
import { canvasBlocks, projectTopics } from '@/data/projectContent'

interface Chapter {
  decoration: Component
  detailDecoration: Component
  title: string
  intro: string
  accent: string
  ink: string
  topics: { id: string; hint: string }[]
}

const chapterDefinitions: Chapter[] = [
  {
    title: 'Tính cần thiết',
    decoration: Lightbulb, detailDecoration: Sparkles,
    intro: 'Bắt đầu từ nhu cầu và người sẽ sử dụng.',
    accent: 'var(--blue)', ink: '#305d83',
    topics: [
      { id: 'tinh-trang', hint: 'Mẫu hiện tại và những việc cần tiếp tục.' },
      { id: 'muc-tieu', hint: 'Kỹ năng muốn hỗ trợ và hướng phát triển.' },
      { id: 'doi-tuong', hint: 'Người sử dụng và các bên đồng hành.' },
      { id: 'doi-tuong-uu-tien', hint: 'Ưu tiên học sinh trong quá trình thiết kế.' },
      { id: 'ly-do-lua-chon', hint: 'Khách hàng dự kiến và cách thực hành.' },
      { id: 'so-sanh-giai-phap', hint: 'Đối chiếu định hướng với các cách làm hiện có.' },
      { id: 'khao-sat', hint: 'Đọc số liệu cùng giới hạn của khảo sát.' },
    ],
  },
  {
    title: 'Tính khả thi',
    decoration: Pencil, detailDecoration: Ruler,
    intro: 'Tìm hiểu cách làm, chi phí và điều cần cải thiện.',
    accent: 'var(--yellow)', ink: '#73551f',
    topics: [
      { id: 'san-xuat', hint: 'Từ học liệu đến gia công và kiểm tra.' },
      { id: 'gia-thanh', hint: 'Các khoản dự toán và chi phí còn thiếu.' },
      { id: 'thuan-loi', hint: 'Điều kiện thực hiện và cách điều chỉnh.' },
      { id: 'canh-tranh', hint: 'Hướng khác biệt cần tiếp tục kiểm chứng.' },
    ],
  },
  {
    title: 'Tính độc đáo, sáng tạo',
    decoration: Star, detailDecoration: Sparkles,
    intro: 'Xem điểm sáng tạo và kế hoạch đánh giá trải nghiệm.',
    accent: 'var(--pink)', ink: '#80455e',
    topics: [
      { id: 'sang-tao', hint: 'Cách kết hợp ví, học liệu và hoạt động.' },
      { id: 'kiem-chung', hint: 'Kế hoạch trải nghiệm và đánh giá trước – sau.' },
    ],
  },
  {
    title: 'Kết quả tiềm năng',
    decoration: Coins, detailDecoration: ChartColumn,
    intro: 'Đọc các giả định tài chính và kế hoạch triển khai.',
    accent: 'var(--sage)', ink: '#49613b',
    topics: [
      { id: 'nguon-thu', hint: 'Vốn góp và các nguồn thu dự kiến.' },
      { id: 'doanh-thu', hint: 'Phân biệt phương án cơ sở và mở rộng.' },
      { id: 'tai-chinh', hint: 'Chi phí và chênh lệch theo từng kịch bản.' },
      { id: 'trien-khai', hint: 'Điều kiện hoàn vốn và ghi nhận dòng tiền.' },
    ],
  },
  {
    title: 'Các kênh truyền thông',
    decoration: Send, detailDecoration: Sparkles,
    intro: 'Tìm cách giới thiệu sản phẩm đến người quan tâm.',
    accent: 'var(--blue)', ink: '#305d83',
    topics: [{ id: 'truyen-thong', hint: 'Thông điệp, kênh giới thiệu và phản hồi.' }],
  },
]

const chapters = chapterDefinitions.map((chapter, index) => ({
  ...chapter,
  number: String(index + 1).padStart(2, '0'),
  id: `chuong-${index + 1}`,
  topics: chapter.topics.flatMap(({ id, hint }) => {
    const topic = projectTopics.find((item) => item.id === id)
    return topic ? [{ ...topic, hint }] : []
  }),
}))

const openChapters = ref<string[]>(['chuong-1'])

function toggleChapter(id: string) {
  openChapters.value = openChapters.value.includes(id)
    ? openChapters.value.filter(chapterId => chapterId !== id)
    : [...openChapters.value, id]
}

const canvasPreview = [
  { title: 'Đối tác', icon: Handshake },
  { title: 'Hoạt động', icon: Settings },
  { title: 'Giá trị', icon: Gem },
  { title: 'Quan hệ', icon: Users },
  { title: 'Khách hàng', icon: UserRound },
  { title: 'Nguồn lực', icon: Database },
  { title: 'Phân phối', icon: Truck },
  { title: 'Chi phí', icon: Receipt },
  { title: 'Doanh thu', icon: ChartColumn },
]
</script>

<template>
  <section id="ho-so" class="project-content" aria-labelledby="project-content-title">
    <header class="folder-heading">
      <span class="folder-label">HỒ SƠ DỰ ÁN</span>
      <h2 id="project-content-title">Từ ý tưởng đến <em>kế hoạch.</em></h2>
      <p>Cùng mở từng trang để hiểu thêm về dự án.</p>
    </header>

    <motion.div class="folder-reveal"
      :initial="{ opacity: 0, y: 12 }" :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }" :transition="{ duration: 0.4 }"
    >
      <Card class="canvas-folder">
        <span class="paper-pin pin-left" aria-hidden="true"></span>
        <span class="paper-pin pin-right" aria-hidden="true"></span>
        <span class="paper-fold" aria-hidden="true"></span>
        <details>
          <summary class="canvas-summary" @click="returnToCollapsedHeading">
            <span class="canvas-cover">
              <span class="canvas-kicker">BỨC TRANH TỔNG THỂ</span>
              <strong>9 mảnh ghép, một mô hình.</strong>
              <span class="canvas-subtitle">Giá trị · Khách hàng · Nguồn lực</span>
              
            </span>
              <span class="canvas-preview" aria-hidden="true">
                <span v-for="block in canvasPreview" :key="block.title"><component :is="block.icon" />{{ block.title }}</span>
              </span>
            <span class="canvas-arrow" aria-hidden="true"><ChevronDown /></span>
          </summary>
          <div class="canvas-content">
            <div class="business-canvas">
              <article
                v-for="(block, index) in canvasBlocks"
                :key="block.title"
                class="canvas-piece"
                :class="{ 'canvas-piece-wide': block.wide, 'canvas-piece-highlighted': block.highlighted }"
              >
                <div class="canvas-block-head">
                  <h3>{{ block.title }}</h3>
                  <span class="canvas-block-num" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
                </div>
                <ul>
                  <li v-for="item in block.items" :key="item">{{ item }}</li>
                </ul>
              </article>
            </div>
            <p class="canvas-note">Mô hình được tóm lược từ hồ sơ “Ví nhỏ thông minh” sửa ngày 01.11.2026. Các mức giá, chi phí và hướng mở rộng nêu trên là dự kiến, cần tiếp tục kiểm chứng khi triển khai.</p>
            <Button type="button" variant="ghost" class="collapse-button" @click="collapseFromButton">Thu gọn mô hình <ChevronDown aria-hidden="true" /></Button>
          </div>
        </details>
      </Card>
    </motion.div>

    <div class="folder-layout">
      <div class="chapter-papers">
        <motion.div v-for="chapter in chapters" :key="chapter.id" class="folder-reveal"
          :initial="{ opacity: 0, y: 18, clipPath: 'inset(-24px -24px -24px -24px)' }"
          :while-in-view="{ opacity: 1, y: 0, clipPath: 'inset(-24px -24px -24px -24px)' }"
          :in-view-options="{ once: true, amount: 0.15 }" :transition="{ duration: 0.65, ease: 'easeOut' }"
        >
          <Card class="chapter-paper" :class="{ 'chapter-paper-open': openChapters.includes(chapter.id) }" :style="{ '--chapter-accent': chapter.accent, '--chapter-ink': chapter.ink }">
            <span class="paper-pin pin-right" aria-hidden="true"></span><span class="paper-fold" aria-hidden="true"></span>
            <section :id="chapter.id" class="chapter-sheet" :aria-labelledby="`${chapter.id}-title`">
              <header class="chapter-heading">
                <span class="chapter-number" aria-hidden="true">{{ chapter.number }}</span>
                <div><h3 :id="`${chapter.id}-title`">{{ chapter.title }}</h3><p>{{ chapter.intro }}</p></div>
                <span class="chapter-doodle" aria-hidden="true">
                  <span class="doodle-wash"></span>
                  <component :is="chapter.decoration" class="doodle-main" />
                  <component :is="chapter.detailDecoration" class="doodle-detail" />
                  <span class="doodle-dash"></span>
                </span>
                <Button type="button" variant="outline" class="chapter-roll-button" :aria-label="`${openChapters.includes(chapter.id) ? 'Thu gọn' : 'Mở'} chương ${chapter.number}: ${chapter.title}`" :title="openChapters.includes(chapter.id) ? 'Thu gọn trang giấy' : 'Mở trang giấy'" :aria-expanded="openChapters.includes(chapter.id)" :aria-controls="`${chapter.id}-body`" @click="toggleChapter(chapter.id)">
                  <ChevronDown aria-hidden="true" />
                </Button>
              </header>
              <div :id="`${chapter.id}-body`" class="chapter-body" :inert="!openChapters.includes(chapter.id)" :aria-hidden="!openChapters.includes(chapter.id)">
              <div class="chapter-body-inner">
              <div class="chapter-scroll" data-collapse-scroll role="region" :aria-labelledby="`${chapter.id}-title`" :aria-describedby="`${chapter.id}-scroll-hint`" tabindex="0">
              <details v-for="topic in chapter.topics" :id="`noi-dung-${topic.id}`" :key="topic.id" class="folder-topic" :open="topic.id === 'tinh-trang'">
                <summary @click="returnToCollapsedHeading">
                  <span class="topic-heading"><strong>{{ topic.title }}</strong></span>
                  <span class="topic-toggle" aria-hidden="true"></span>
                </summary>
          <div class="content-topic-body">
            <p v-for="paragraph in topic.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <template v-if="topic.table">
              <div class="content-table-scroll" role="region" :aria-label="topic.table.caption" tabindex="0">
                <table>
                  <caption>{{ topic.table.caption }}</caption>
                  <thead>
                    <tr>
                      <th v-for="heading in topic.table.headers" :key="heading" scope="col">{{ heading }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, rowIndex) in topic.table.rows" :key="rowIndex">
                      <template v-for="(cell, cellIndex) in row" :key="cellIndex">
                        <th v-if="cellIndex === 0" scope="row">{{ cell }}</th>
                        <td v-else>{{ cell }}</td>
                      </template>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="content-table-note">{{ topic.table.note }}</p>
            </template>
            <Button type="button" variant="ghost" class="collapse-button" @click="collapseFromButton">Thu gọn nội dung <ChevronDown aria-hidden="true" /></Button>
          </div>
              </details>
              </div>
              <footer class="chapter-sheet-footer"><span :id="`${chapter.id}-scroll-hint`">Mở mục để đọc · Cuộn trong trang giấy khi nội dung dài</span><span aria-hidden="true">{{ chapter.number }} / 05</span></footer>
              </div>
              </div>
            </section>
          </Card>
        </motion.div>
      </div>
    </div>
    <p class="content-source">Tóm lược hồ sơ dự án sửa ngày 01.11.2026, không thay thế toàn bộ hồ sơ và phụ lục. Số liệu khảo sát và bộ mẫu được ghi nhận theo hồ sơ; kế hoạch, giá và kết quả tài chính dự kiến được phân biệt với những việc đã thực hiện.</p>
  </section>
</template>

<style scoped>
.project-content { width: min(1140px, calc(100% - 64px)); margin-inline: auto; padding: 56px 0 72px; color: #54392c; overflow-wrap: anywhere; }
.project-content, .project-content section, details, summary { scroll-margin-top: 130px; }
.folder-reveal, .folder-layout, .chapter-papers { min-width: 0; }
.project-content [aria-hidden='true'] { pointer-events: none; }
.folder-heading { text-align: center; padding: 0 10px 38px; }
.folder-label { display: inline-flex; align-items: center; gap: 16px; color: #70503d; font-size: 14px; letter-spacing: 2px; }
.folder-label::before, .folder-label::after { content: ''; width: 42px; border-top: 1px solid #c7a58e; }
.folder-heading h2 { margin-top: 15px; font: 600 clamp(30px, 3.5vw, 45px)/1.45 'Lora', Georgia, serif; letter-spacing: -.7px; }
.folder-heading h2 em { color: #305d83; font-weight: 500; }
.folder-heading > p { margin-top: 10px; font-size: 16px; line-height: 1.8; }
.canvas-folder, .chapter-paper { position: relative; isolation: isolate; min-width: 0; padding: 0; border: 1px solid #d8c5af; border-radius: 3px; background: linear-gradient(115deg, #fffcf5, #fcf7ee); color: inherit; box-shadow: 0 3px 5px #72533712; }
.canvas-folder::before, .chapter-paper::before { content: ''; position: absolute; z-index: -1; inset: 6px -6px -7px 6px; border: 1px solid #d8c5af; border-radius: 3px; background: #fffaf0; box-shadow: 0 3px 5px #7253370d; pointer-events: none; }
.canvas-folder::after, .chapter-paper::after { content: ''; position: absolute; top: 18px; bottom: 18px; left: 22px; width: 1px; background: #debdab99; pointer-events: none; }
.paper-pin { position: absolute; z-index: 3; top: 13px; width: 15px; height: 15px; border-radius: 50%; border: 1px solid #a38b56; background: radial-gradient(circle at 33% 27%, #fff8d4 0%, #ead598 23%, #b79853 60%, #796132 100%); box-shadow: inset -1px -1px 2px #72532555, 1px 3px 3px #65492e33; pointer-events: none; }
.pin-left { left: 13px; }
.pin-right { right: 13px; }
.paper-fold { position: absolute; z-index: 2; right: -1px; bottom: -1px; width: 20px; height: 20px; clip-path: polygon(0 0, 100% 0, 0 100%); background: linear-gradient(135deg, #eadfce, #fffcf4 55%, #cbb99f); filter: drop-shadow(-1px -1px 1px #8c715b44); pointer-events: none; }
summary { display: flex; align-items: center; justify-content: space-between; min-height: 48px; gap: 20px; list-style: none; cursor: pointer; }
summary::-webkit-details-marker { display: none; }
summary:focus-visible, a:focus-visible, .collapse-button:focus-visible, .content-table-scroll:focus-visible, .chapter-scroll:focus-visible { outline: 3px solid #2a659a; outline-offset: 4px; border-radius: 4px; }
.canvas-summary { display: grid; grid-template-columns: minmax(0, 1fr) minmax(340px, 1.05fr) 44px; gap: 24px; padding: 35px 28px 28px 45px; }
.canvas-cover { display: grid; justify-items: start; gap: 13px; }
.canvas-kicker { padding: 5px 12px; border-radius: 20px; background: #fae2e5; font-size: 12px; letter-spacing: 1px; font-weight: 600; }
.canvas-cover > strong { font: 600 clamp(22px, 2.5vw, 30px)/1.5 'Lora', Georgia, serif; }
.canvas-subtitle { font-size: 16px; line-height: 1.8; }
.canvas-preview { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; padding-left: 22px; border-left: 1px solid #dfcdb9; }
.canvas-preview > span { display: flex; align-items: center; gap: 9px; min-height: 43px; padding: 9px; background: #e7e1f3; color: #514270; border: 1px solid #dcd1ec; border-radius: 6px; font-size: 13px; line-height: 1.5; }
.canvas-preview > span:nth-child(3n + 2) { background: #e3efe0; border-color: #d2dfca; color: #48623c; }
.canvas-preview > span:nth-child(3n) { background: #fae3e6; border-color: #eed0d7; color: #7d4556; }
.canvas-preview > span:nth-child(4), .canvas-preview > span:nth-child(8) { background: #fff0c7; border-color: #edddb1; color: #73551f; }
.canvas-preview > span:nth-child(5), .canvas-preview > span:nth-child(7) { background: #e0eef8; border-color: #c9dfed; color: #305d83; }
.canvas-preview svg { width: 18px; height: 18px; flex-shrink: 0; stroke-width: 1.5; }
.canvas-arrow { display: grid; place-items: center; width: 44px; height: 44px; border: 1px solid #bda68e; border-radius: 50%; }
.canvas-arrow svg { width: 18px; height: 18px; transition: transform .25s; }
details[open] > summary .canvas-arrow svg { transform: rotate(180deg); }
.canvas-content { padding: 0 28px 26px; }
.business-canvas { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; padding-top: 22px; border-top: 1px dashed #c7d7dd; }
.canvas-piece { grid-column: span 2; min-width: 0; padding: 18px; border: 1px solid #ddd3bf; background: #fffcf5; border-radius: 3px 9px 3px 3px; }
.canvas-piece:nth-child(7) { grid-column: 1 / -1; }
.canvas-piece:nth-child(7) ul { grid-template-columns: repeat(3, minmax(0, 1fr)); column-gap: 28px; }
.canvas-piece:nth-last-child(-n + 2) { grid-column: span 3; }
.canvas-piece-highlighted { background: #e5f0f5; border-color: #bdd4de; }
.canvas-block-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; padding-bottom: 12px; margin-bottom: 12px; border-bottom: 1px dashed #d5c9b4; }
.canvas-piece h3 { min-width: 0; font: 600 17px/1.6 'Lora', Georgia, serif; }
.canvas-block-num { flex-shrink: 0; color: #6b7c87; font-size: 13px; }
.canvas-piece ul { margin: 0; padding-left: 19px; display: grid; align-content: start; align-items: start; gap: 8px; list-style: disc outside; }
.canvas-piece li { display: list-item; min-width: 0; padding-left: 3px; font-size: 15px; line-height: 1.8; overflow-wrap: break-word; }
.canvas-piece li::marker { color: #947751; font-size: .8em; }
.canvas-note { margin-top: 20px; font-size: 13px; line-height: 1.8; color: #526571; }
.folder-layout { margin-top: 30px; }
.chapter-papers { display: grid; gap: 28px; }
.chapter-sheet { min-width: 0; }
.chapter-number { position: absolute; z-index: 2; left: -13px; top: 5px; display: grid; place-items: center; width: 58px; height: 58px; border: 1px solid color-mix(in srgb, var(--chapter-ink) 35%, #fff); border-radius: 5px 5px 7px 5px; background: var(--chapter-accent); color: #54392c; box-shadow: 1px 2px 2px #76533422; font: 600 24px 'Lora', Georgia, serif; }
.chapter-heading { position: relative; display: flex; align-items: center; gap: 24px; min-height: 110px; padding: 22px 34px 20px 74px; }
.chapter-heading > div { min-width: 0; flex: 1; }
.chapter-doodle { position: relative; display: block; flex: 0 0 80px; width: 80px; height: 64px; color: var(--chapter-ink); pointer-events: none; }
.doodle-wash { position: absolute; inset: 10px 8px 4px; border-radius: 56% 44% 63% 37%; background: var(--chapter-accent); opacity: .45; transform: rotate(-12deg); }
.doodle-main { position: absolute; width: 36px; height: 36px; top: 16px; left: 17px; stroke-width: 1.35; transform: rotate(-12deg); opacity: .8; }
.doodle-detail { position: absolute; width: 21px; height: 21px; top: 4px; right: 4px; stroke-width: 1.3; transform: rotate(14deg); opacity: .65; }
.doodle-dash { position: absolute; bottom: 4px; right: 7px; width: 20px; border-top: 1px dashed currentColor; transform: rotate(-20deg); opacity: .4; }

.chapter-heading h3 { font: 600 clamp(23px, 2.5vw, 31px)/1.5 'Lora', Georgia, serif; }
.chapter-heading p { font-size: 15px; line-height: 1.8; color: #725b47; margin-top: 3px; }
.chapter-roll-button { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; width: 44px; height: 44px; min-height: 44px; padding: 0; border: 1px solid #bda68e; border-radius: 50%; background: transparent; color: #54392c; }
.chapter-roll-button:hover { background: var(--chapter-accent); }
.chapter-roll-button svg { width: 18px; height: 18px; transition: transform .3s; }
.chapter-roll-button[aria-expanded='true'] svg { transform: rotate(180deg); }
.chapter-body { display: grid; grid-template-rows: 0fr; opacity: 0; visibility: hidden; transition: grid-template-rows .4s ease, opacity .3s ease, visibility .4s; }
.chapter-paper-open .chapter-body { grid-template-rows: 1fr; opacity: 1; visibility: visible; }
.chapter-body-inner { min-height: 0; overflow: hidden; }
.chapter-body-inner > .chapter-scroll { min-height: 0; overflow-y: auto; overflow-x: hidden; padding-block: 10px 14px; scrollbar-gutter: stable; scrollbar-width: thin; scrollbar-color: var(--chapter-ink) #f0e7d7; -webkit-overflow-scrolling: touch; background: linear-gradient(#fffbf4 25%, #fffbf400) center top / 100% 30px local no-repeat, linear-gradient(#fffbf400, #fffbf4 75%) center bottom / 100% 30px local no-repeat, radial-gradient(farthest-side at 50% 0, #76533426, #76533400) center top / 100% 10px scroll no-repeat, radial-gradient(farthest-side at 50% 100%, #76533426, #76533400) center bottom / 100% 10px scroll no-repeat; }
.chapter-scroll::-webkit-scrollbar { width: 6px; }
.chapter-scroll::-webkit-scrollbar-track { background: #f0e7d7; border-radius: 6px; }
.chapter-scroll::-webkit-scrollbar-thumb { background: var(--chapter-ink); border-radius: 6px; }
.chapter-scroll > details { scroll-margin-top: 12px; }
.chapter-sheet-footer { display: flex; flex: 0 0 auto; justify-content: space-between; gap: 16px; padding: 12px 30px 4px; margin-inline: 5px; border-top: 1px dashed #dfd0bc; color: #725b47; font-size: 12px; line-height: 1.7; }
.chapter-sheet-footer > span:last-child { flex-shrink: 0; color: var(--chapter-ink); font-variant-numeric: tabular-nums; }
.folder-topic { min-width: 0; margin: 0 30px 0 44px; border: 0; border-bottom: 1px dashed #dcd1c0; background: transparent; border-radius: 0; }
.folder-topic:last-child { border-bottom: 0; }
.folder-topic > summary { padding: 17px 12px; border-radius: 4px; transition: background .2s; }
.folder-topic > summary:hover { background: #f5eddf; }
.topic-heading { min-width: 0; }
.topic-heading strong { font: 600 17px/1.7 'Lora', Georgia, serif; color: #4b3022; }
.topic-toggle { display: block; position: relative; width: 29px; height: 29px; flex-shrink: 0; border: 1px solid #d8cdbb; border-radius: 50%; background: #fffaf0; color: var(--chapter-ink); }
.topic-toggle::before, .topic-toggle::after { content: ''; position: absolute; width: 11px; height: 1.5px; left: 8px; top: 13px; background: currentColor; }
.topic-toggle::after { transform: rotate(90deg); transition: transform .2s; }
.folder-topic[open] { border-color: color-mix(in srgb, var(--chapter-ink) 35%, #fff); }
.folder-topic[open] > summary { background: color-mix(in srgb, var(--chapter-accent) 34%, #fffdf7); border-radius: 4px 4px 0 0; }
.folder-topic[open] .topic-toggle { background: var(--chapter-accent); border-color: transparent; }
.folder-topic[open] .topic-toggle::after { transform: rotate(0); }
.content-topic-body { margin: 0 20px; padding: 20px 0 22px; border-top: 1px dashed #dfd3c0; font-size: 16px; line-height: 1.95; color: #553f2d; }
.content-topic-body > p { max-width: 850px; }
.content-topic-body > p + p { margin-top: 16px; }
.content-table-scroll { max-width: 100%; margin-top: 24px; overflow-x: auto; border: 1px solid #dfd3c0; border-radius: 4px; background: #fffef9; }
.content-table-scroll table { width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; line-height: 1.8; }
.content-table-scroll caption { padding: 15px 16px; text-align: left; font-weight: 600; background: #f5f0e6; }
.content-table-scroll th, .content-table-scroll td { padding: 12px 16px; border-bottom: 1px solid #e8dfd0; vertical-align: top; }
.content-table-scroll thead { background: color-mix(in srgb, var(--chapter-accent) 35%, #fff); }
.content-table-scroll tbody th { min-width: 150px; font-weight: 600; }
.content-table-scroll td { min-width: 115px; font-variant-numeric: tabular-nums; }
.content-table-scroll tbody tr:last-child > * { border-bottom: 0; }
.content-table-scroll tbody tr:nth-child(even) { background: #faf6ee; }
.content-table-note { margin-top: 16px; padding: 12px 16px; border-left: 3px solid var(--chapter-accent); background: #faf6ee; font-size: 14px; line-height: 1.85; }
.collapse-button { min-height: 44px; max-width: 100%; height: auto; white-space: normal; margin-top: 17px; color: #62452e; font-size: 13px; }
.collapse-button svg { transform: rotate(180deg); }
.content-source { margin: 30px 12px 0; padding-top: 20px; border-top: 1px dashed #d6c6b3; font-size: 13px; line-height: 1.9; color: #725b47; }
@media (min-width: 900px) {
  .chapter-paper:not(.chapter-paper-open) .chapter-heading > div { display: flex; align-items: baseline; gap: 22px; flex-wrap: wrap; }
  .chapter-paper:not(.chapter-paper-open) .chapter-heading { min-height: 90px; }
  .chapter-paper:not(.chapter-paper-open) .chapter-heading h3 { font-size: 26px; }
}
@media (max-width: 850px) {
  .canvas-summary { grid-template-columns: minmax(0, 1fr) 44px; padding: 32px 25px 25px 38px; }
  .canvas-preview { grid-column: 1 / -1; grid-row: 2; padding: 16px 0 0; border-left: 0; border-top: 1px solid #dfcdb9; }
  .canvas-arrow { grid-column: 2; grid-row: 1; }
  .business-canvas { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .canvas-piece, .canvas-piece:nth-last-child(-n + 2) { grid-column: auto; }
  .canvas-piece:nth-child(7) ul { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 600px) {
  .project-content { width: calc(100% - 40px); padding: 35px 0 48px; }
  .folder-heading { padding-bottom: 26px; }
  .folder-heading h2 { font-size: 29px; }
  .folder-heading > p { font-size: 15px; }
  .folder-label { font-size: 12px; gap: 10px; }
  .folder-label::before, .folder-label::after { width: 25px; }
  .canvas-summary { gap: 16px; padding: 32px 16px 20px 28px; }
  .canvas-cover > strong { font-size: 23px; }
  .canvas-subtitle { font-size: 14px; }
  .canvas-preview { gap: 5px; }
  .canvas-preview > span { flex-direction: column; justify-content: center; text-align: center; gap: 4px; font-size: 12px; padding: 8px 4px; }
  .canvas-folder::after, .chapter-paper::after { left: 13px; }
  .canvas-content { padding: 0 16px 22px; }
  .business-canvas { grid-template-columns: minmax(0, 1fr); }
  .canvas-piece:nth-child(7) ul { grid-template-columns: minmax(0, 1fr); }
  .chapter-papers { gap: 25px; }
  .chapter-heading { gap: 12px; padding: 22px 19px 18px 49px; min-height: 108px; }
  .chapter-number { left: -10px; top: 10px; width: 45px; height: 47px; font-size: 21px; }
  .chapter-heading h3 { font-size: 22px; }
  .chapter-doodle { flex-basis: 28px; width: 28px; height: 34px; }
  .doodle-main { top: 4px; left: 0; width: 27px; height: 27px; }
  .doodle-wash { inset: 2px -3px 0; }
  .doodle-detail, .doodle-dash { display: none; }
  .chapter-heading p { font-size: 13px; }
  .chapter-body-inner > .chapter-scroll { max-height: min(520px, max(180px, calc(100svh - 325px))); }
  .folder-topic { margin: 0 14px 0 23px; }
  .folder-topic > summary { padding: 14px 8px; gap: 10px; }
  .topic-heading strong { font-size: 16px; }
  .content-topic-body { margin-inline: 9px; font-size: 15px; }
  .chapter-sheet-footer { padding: 12px 18px 16px 23px; font-size: 12px; }
  .paper-pin { width: 12px; height: 12px; top: 8px; }
  .pin-right { right: 8px; }
  .pin-left { left: 8px; }
}
@media (max-width: 420px) {
  .chapter-heading { gap: 9px; padding-left: 51px; padding-right: 13px; }
  .chapter-doodle { display: none; }
}
@media (max-height: 500px) {
  .chapter-body-inner > .chapter-scroll { max-height: 55svh; }
}
@media (prefers-reduced-motion: reduce) {
  .folder-reveal { opacity: 1 !important; transform: none !important; clip-path: none !important; animation: none !important; transition: none !important; }
  .chapter-body, .folder-topic > summary, .topic-toggle::after, .canvas-arrow svg, .chapter-roll-button svg { transition: none; }
}
</style>
