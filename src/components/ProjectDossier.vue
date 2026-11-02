<script setup lang="ts">
import type { Component } from 'vue'
import { ref } from 'vue'
import { motion } from 'motion-v'
import { ChevronDown, Grid2X2, Users, Wrench, Lightbulb, Coins, Megaphone } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { collapseFromButton, returnToCollapsedHeading } from '@/lib/collapse'
import { canvasBlocks, projectTopics } from '@/data/projectContent'

interface Chapter {
  title: string
  intro: string
  icon: Component
  accent: string
  ink: string
  topics: { id: string; hint: string }[]
}

const chapterDefinitions: Chapter[] = [
  {
    title: 'Tính cần thiết',
    intro: 'Bắt đầu từ nhu cầu và người sẽ sử dụng.',
    icon: Users, accent: 'var(--blue)', ink: '#305d83',
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
    intro: 'Tìm hiểu cách làm, chi phí và điều cần cải thiện.',
    icon: Wrench, accent: 'var(--yellow)', ink: '#73551f',
    topics: [
      { id: 'san-xuat', hint: 'Từ học liệu đến gia công và kiểm tra.' },
      { id: 'gia-thanh', hint: 'Các khoản dự toán và chi phí còn thiếu.' },
      { id: 'thuan-loi', hint: 'Điều kiện thực hiện và cách điều chỉnh.' },
      { id: 'canh-tranh', hint: 'Hướng khác biệt cần tiếp tục kiểm chứng.' },
    ],
  },
  {
    title: 'Tính độc đáo, sáng tạo',
    intro: 'Xem điểm sáng tạo và kế hoạch đánh giá trải nghiệm.',
    icon: Lightbulb, accent: 'var(--pink)', ink: '#80455e',
    topics: [
      { id: 'sang-tao', hint: 'Cách kết hợp ví, học liệu và hoạt động.' },
      { id: 'kiem-chung', hint: 'Kế hoạch trải nghiệm và đánh giá trước – sau.' },
    ],
  },
  {
    title: 'Kết quả tiềm năng',
    intro: 'Đọc các giả định tài chính và kế hoạch triển khai.',
    icon: Coins, accent: 'var(--sage)', ink: '#49613b',
    topics: [
      { id: 'nguon-thu', hint: 'Vốn góp và các nguồn thu dự kiến.' },
      { id: 'doanh-thu', hint: 'Phân biệt phương án cơ sở và mở rộng.' },
      { id: 'tai-chinh', hint: 'Chi phí và chênh lệch theo từng kịch bản.' },
      { id: 'trien-khai', hint: 'Điều kiện hoàn vốn và ghi nhận dòng tiền.' },
    ],
  },
  {
    title: 'Các kênh truyền thông',
    intro: 'Tìm cách giới thiệu sản phẩm đến người quan tâm.',
    icon: Megaphone, accent: 'var(--blue)', ink: '#305d83',
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

const openChapters = ref(chapters.map(chapter => chapter.id))

function toggleChapter(id: string) {
  openChapters.value = openChapters.value.includes(id)
    ? openChapters.value.filter(chapterId => chapterId !== id)
    : [...openChapters.value, id]
}

function openChapter(id: string) {
  if (!openChapters.value.includes(id)) openChapters.value.push(id)
}
</script>

<template>
  <section id="ho-so" class="project-content" aria-labelledby="project-content-title">
    <header class="folder-heading">
      <div class="folder-heading-copy">
        <span class="folder-label">GÓC HỒ SƠ · VÍ NHỎ THÔNG MINH</span>
        <h2 id="project-content-title">Một ý tưởng nhỏ.<br /><em>Một kế hoạch rõ ràng.</em></h2>
        <p>Từ nhu cầu đến cách làm và nguồn lực. Cùng mở từng trang để hiểu thêm về dự án.</p>
      </div>
      <aside class="folder-reading-note" aria-label="Cách đọc hồ sơ">
        <span class="reading-note-tape" aria-hidden="true"></span>
        <Grid2X2 aria-hidden="true" />
        <strong>Đọc theo điều bạn quan tâm</strong>
        <p>Chọn chương để đến nhanh.<br />Bấm dấu + để mở nội dung.</p>
        <span>Tóm lược Phần III · Hồ sơ 01.11.2026</span>
      </aside>
    </header>

    <motion.div class="folder-reveal"
      :initial="{ opacity: 0, y: 12 }" :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }" :transition="{ duration: 0.4 }"
    >
      <Card class="canvas-folder">
        <details>
          <summary class="canvas-summary" @click="returnToCollapsedHeading">
            <span class="canvas-cover">
              <span class="canvas-kicker">BỨC TRANH TỔNG THỂ</span>
              <strong>9 mảnh ghép, một mô hình.</strong>
              <span class="canvas-subtitle">Business Model Canvas · Giá trị, khách hàng và nguồn lực của dự án.</span>
              <span class="canvas-open-label">Mở mô hình <ChevronDown aria-hidden="true" /></span>
            </span>
              <span class="canvas-preview" aria-hidden="true">
                <span v-for="(block, index) in canvasBlocks" :key="block.title">{{ String(index + 1).padStart(2, '0') }}</span>
              </span>
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
      <nav class="chapter-index" aria-label="Mục lục năm chương hồ sơ">
        <p>ĐI ĐẾN CHƯƠNG</p>
        <ol>
          <li v-for="chapter in chapters" :key="chapter.id" :style="{ '--chapter-accent': chapter.accent, '--chapter-ink': chapter.ink }">
            <a :href="`#${chapter.id}`" @click="openChapter(chapter.id)"><span>{{ chapter.number }}</span>{{ chapter.title }}</a>
          </li>
        </ol>
      </nav>
      <div class="chapter-papers">
        <motion.div v-for="chapter in chapters" :key="chapter.id" class="folder-reveal"
          :initial="{ opacity: 0, y: 18, clipPath: 'inset(0px 0px 65% 0px)' }"
          :while-in-view="{ opacity: 1, y: 0, clipPath: 'inset(-24px -24px -24px -24px)' }"
          :in-view-options="{ once: true, amount: 0.15 }" :transition="{ duration: 0.65, ease: 'easeOut' }"
        >
          <Card class="chapter-paper" :style="{ '--chapter-accent': chapter.accent, '--chapter-ink': chapter.ink }">
            <span class="paper-roll paper-roll-top" aria-hidden="true"></span>
            <section :id="chapter.id" class="chapter-sheet" :aria-labelledby="`${chapter.id}-title`">
              <header class="chapter-heading">
                <span class="chapter-number" aria-hidden="true">{{ chapter.number }}</span>
                <div><span class="chapter-eyebrow">TRANG HỒ SƠ / {{ chapter.number }}</span><h3 :id="`${chapter.id}-title`">{{ chapter.title }}</h3><p>{{ chapter.intro }}</p></div>
                <component :is="chapter.icon" class="chapter-icon" aria-hidden="true" />
                <Button type="button" variant="outline" class="chapter-roll-button" :aria-label="`${openChapters.includes(chapter.id) ? 'Thu gọn' : 'Mở'} chương ${chapter.number}: ${chapter.title}`" :title="openChapters.includes(chapter.id) ? 'Thu gọn trang giấy' : 'Mở trang giấy'" :aria-expanded="openChapters.includes(chapter.id)" :aria-controls="`${chapter.id}-body`" @click="toggleChapter(chapter.id)">
                  <ChevronDown aria-hidden="true" />
                </Button>
              </header>
              <div v-show="openChapters.includes(chapter.id)" :id="`${chapter.id}-body`" class="chapter-body">
              <div class="chapter-scroll" data-collapse-scroll role="region" :aria-labelledby="`${chapter.id}-title`" :aria-describedby="`${chapter.id}-scroll-hint`" tabindex="0">
              <details v-for="topic in chapter.topics" :id="`noi-dung-${topic.id}`" :key="topic.id" class="folder-topic">
                <summary @click="returnToCollapsedHeading">
                  <span class="topic-heading"><strong>{{ topic.title }}</strong><span>{{ topic.hint }}</span></span>
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
            </section>
            <span class="paper-roll paper-roll-bottom" aria-hidden="true"></span>
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
.folder-heading { display: grid; grid-template-columns: minmax(0, 1fr) 280px; align-items: center; gap: 48px; padding: 0 16px 40px; }
.folder-label { color: #396884; font-size: 12px; font-weight: 600; letter-spacing: 1.4px; line-height: 1.8; }
.folder-heading h2 { margin-top: 14px; font: 700 clamp(30px, 3.3vw, 43px)/1.4 'Lora', Georgia, serif; letter-spacing: -.8px; }
.folder-heading h2 em { font-weight: 500; color: #39779f; }
.folder-heading-copy > p { max-width: 560px; margin-top: 16px; font-size: 16px; line-height: 1.85; }
.folder-reading-note { position: relative; padding: 25px 24px 20px; background: #fff2c9; border: 1px solid #e7d6a3; box-shadow: 3px 4px 0 #b89c6020; transform: rotate(2deg); }
.reading-note-tape { position: absolute; width: 76px; height: 22px; left: calc(50% - 38px); top: -11px; background: repeating-linear-gradient(90deg, #e6b3c3aa 0 5px, #fce5eccc 5px 10px); transform: rotate(-4deg); }
.folder-reading-note > svg { width: 22px; height: 22px; margin-bottom: 12px; color: #88682d; }
.folder-reading-note strong { display: block; font: 600 17px/1.6 'Lora', Georgia, serif; }
.folder-reading-note p { font-size: 14px; line-height: 1.8; margin-top: 7px; }
.folder-reading-note > span:last-child { display: block; margin-top: 15px; padding-top: 12px; border-top: 1px dashed #d8c58f; font-size: 12px; line-height: 1.7; }
.canvas-folder { padding: 0; border: 1px solid #c7dce5; border-radius: 4px 18px 4px 4px; background: #f4f9fa; box-shadow: 0 5px 0 #bfd4de4d; color: inherit; }
summary { display: flex; align-items: center; justify-content: space-between; min-height: 48px; gap: 20px; list-style: none; cursor: pointer; }
summary::-webkit-details-marker { display: none; }
summary:focus-visible, a:focus-visible, .collapse-button:focus-visible, .content-table-scroll:focus-visible, .chapter-scroll:focus-visible { outline: 3px solid #2a659a; outline-offset: 4px; border-radius: 4px; }
.canvas-summary { padding: 25px 32px; }
.canvas-cover { display: grid; gap: 9px; min-width: 0; }
.canvas-kicker { font-size: 12px; letter-spacing: 1.3px; font-weight: 600; color: #396884; }
.canvas-cover > strong { font: 600 clamp(22px, 2.4vw, 29px)/1.5 'Lora', Georgia, serif; }
.canvas-subtitle { max-width: 620px; font-size: 15px; line-height: 1.8; color: #526571; }
.canvas-open-label { display: inline-flex; align-items: center; gap: 10px; margin-top: 4px; color: #305d83; font-size: 14px; font-weight: 600; }
.canvas-open-label svg { width: 17px; height: 17px; transition: transform .2s; }
details[open] > summary .canvas-open-label svg { transform: rotate(180deg); }
.canvas-preview { flex-shrink: 0; display: grid; grid-template-columns: repeat(3, 37px); gap: 5px; transform: rotate(-4deg); padding: 10px; border: 1px solid #d4e0e4; background: #fffdf7; box-shadow: 3px 4px 0 #d1dee54d; }
.canvas-preview > span { display: grid; place-items: center; height: 31px; background: #dfedf4; color: #396884; font: 500 12px 'Lora', Georgia, serif; border-radius: 2px; }
.canvas-preview > span:nth-child(3n + 2) { background: #faedc3; color: #73551f; }
.canvas-preview > span:nth-child(3n) { background: #f3dfe6; color: #80455e; }
.canvas-content { padding: 0 28px 26px; }
.business-canvas { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; padding-top: 22px; border-top: 1px dashed #c7d7dd; }
.canvas-piece { min-width: 0; padding: 18px; border: 1px solid #ddd3bf; background: #fffcf5; border-radius: 3px 9px 3px 3px; }
.canvas-piece-wide { grid-column: span 2; }
.canvas-piece-highlighted { background: #e5f0f5; border-color: #bdd4de; }
.canvas-block-head { display: flex; justify-content: space-between; gap: 12px; padding-bottom: 12px; margin-bottom: 12px; border-bottom: 1px dashed #d5c9b4; }
.canvas-piece h3 { font: 600 17px/1.6 'Lora', Georgia, serif; }
.canvas-block-num { color: #6b7c87; font-size: 13px; }
.canvas-piece ul { margin: 0; padding-left: 18px; display: grid; gap: 9px; }
.canvas-piece li { font-size: 15px; line-height: 1.8; }
.canvas-note { margin-top: 20px; font-size: 13px; line-height: 1.8; color: #526571; }
.folder-layout { margin-top: 36px; }
.chapter-index { margin-bottom: 38px; padding: 0 4px; }
.chapter-index > p { font-size: 11px; font-weight: 600; letter-spacing: 1.3px; color: #725b47; margin-bottom: 12px; }
.chapter-index ol { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); list-style: none; margin: 0; padding: 0; gap: 9px; }
.chapter-index a { display: flex; align-items: center; gap: 9px; min-height: 62px; height: 100%; padding: 10px 12px; background: #fffbf2; border: 1px solid #e1d3c2; border-bottom: 3px solid var(--chapter-accent); border-radius: 3px 9px 3px 3px; color: #54392c; font-size: 13px; line-height: 1.6; text-decoration: none; transition: background .2s, transform .2s; }
.chapter-index a:hover { background: var(--chapter-accent); transform: translateY(-2px); }
.chapter-index a span { flex-shrink: 0; color: var(--chapter-ink); font: 600 18px 'Lora', Georgia, serif; }
.chapter-papers { display: grid; gap: 38px; }
.chapter-paper { position: relative; min-width: 0; padding: 0; border: 1px solid #dfd0bc; border-radius: 5px; background: #fffbf4; color: inherit; box-shadow: 0 5px 0 #dfd0bc55, 0 12px 24px #77523408; }
.chapter-paper::before { content: ''; position: absolute; width: 8px; top: 27px; bottom: 27px; left: -1px; background: var(--chapter-accent); border-radius: 0 3px 3px 0; }
.chapter-sheet { min-width: 0; padding-block: 14px; }
.chapter-body > .chapter-scroll { max-height: min(560px, calc(100svh - 350px)); }
.chapter-roll-button { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; width: 44px; height: 44px; min-height: 44px; padding: 0; border: 1px solid #d8cbb8; border-radius: 50%; background: #fffaf0; color: var(--chapter-ink); }
.chapter-roll-button:hover { background: var(--chapter-accent); }
.chapter-roll-button svg { width: 16px; height: 16px; transition: transform .2s; }
.chapter-roll-button[aria-expanded='true'] svg { transform: rotate(180deg); }
.paper-roll { position: absolute; z-index: 2; left: 0; right: 0; height: 10px; border: 1px solid #dacbb6; border-radius: 5px; background: linear-gradient(180deg, #eee3d0 0%, #fffcf3 40%, #f9f1e2 70%, #dfcfb7 100%); box-shadow: 0 2px 3px #62472d0d; pointer-events: none; }
.paper-roll-top { top: -2px; }
.paper-roll-bottom { bottom: -2px; transform: rotate(180deg); box-shadow: 0 -2px 3px #62472d0d; }
.chapter-heading { display: flex; flex: 0 0 auto; align-items: center; gap: 23px; padding: 23px 34px 22px; }
.chapter-scroll { min-height: 0; overflow-y: auto; overflow-x: hidden; padding-block: 10px 14px; scrollbar-gutter: stable; scrollbar-width: thin; scrollbar-color: var(--chapter-ink) #f0e7d7; -webkit-overflow-scrolling: touch; background: linear-gradient(#fffbf4 25%, #fffbf400) center top / 100% 30px local no-repeat, linear-gradient(#fffbf400, #fffbf4 75%) center bottom / 100% 30px local no-repeat, radial-gradient(farthest-side at 50% 0, #76533426, #76533400) center top / 100% 10px scroll no-repeat, radial-gradient(farthest-side at 50% 100%, #76533426, #76533400) center bottom / 100% 10px scroll no-repeat; }
.chapter-scroll::-webkit-scrollbar { width: 6px; }
.chapter-scroll::-webkit-scrollbar-track { background: #f0e7d7; border-radius: 6px; }
.chapter-scroll::-webkit-scrollbar-thumb { background: var(--chapter-ink); border-radius: 6px; }
.chapter-scroll > details { scroll-margin-top: 12px; }
.chapter-sheet-footer { display: flex; flex: 0 0 auto; justify-content: space-between; gap: 16px; padding: 12px 30px 4px; margin-inline: 5px; border-top: 1px dashed #dfd0bc; color: #725b47; font-size: 12px; line-height: 1.7; }
.chapter-sheet-footer > span:last-child { flex-shrink: 0; color: var(--chapter-ink); font-variant-numeric: tabular-nums; }
.chapter-number { flex-shrink: 0; color: var(--chapter-ink); background: var(--chapter-accent); width: 64px; height: 70px; display: grid; place-items: center; font: 500 30px 'Lora', Georgia, serif; border-radius: 4px 15px 4px 4px; }
.chapter-heading > div { min-width: 0; flex: 1; }
.chapter-eyebrow { display: block; font-size: 11px; letter-spacing: 1.2px; font-weight: 600; color: var(--chapter-ink); margin-bottom: 5px; }
.chapter-heading h3 { font: 600 clamp(22px, 2.3vw, 28px)/1.5 'Lora', Georgia, serif; }
.chapter-heading p { font-size: 14px; line-height: 1.8; margin-top: 5px; color: #725b47; }
.chapter-icon { width: 34px; height: 34px; flex-shrink: 0; color: var(--chapter-ink); stroke-width: 1.3; }
.folder-topic { min-width: 0; margin: 0 30px 10px; border: 1px solid #e7ddce; border-radius: 5px; background: #fffef9; }
.folder-topic:last-child { margin-bottom: 0; }
.folder-topic > summary { padding: 16px 19px; border-radius: 5px; transition: background .2s; }
.folder-topic > summary:hover { background: #f7f0e4; }
.topic-heading { display: grid; gap: 4px; min-width: 0; }
.topic-heading strong { font: 600 17px/1.7 'Lora', Georgia, serif; color: #4b3022; }
.topic-heading > span { font-size: 13px; line-height: 1.7; color: #715b49; }
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
@media (max-width: 850px) {
  .folder-heading { grid-template-columns: minmax(0, 1fr) 245px; gap: 24px; padding-inline: 4px; }
  .chapter-index ol { display: flex; overflow-x: auto; padding-bottom: 8px; scroll-snap-type: x proximity; }
  .chapter-index li { flex: 0 0 180px; scroll-snap-align: start; }
  .business-canvas { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .canvas-piece-wide { grid-column: auto; }
}
@media (max-width: 600px) {
  .project-content { width: calc(100% - 32px); padding: 35px 0 48px; }
  .folder-heading { grid-template-columns: minmax(0, 1fr); gap: 28px; padding-bottom: 28px; }
  .folder-heading h2 { font-size: 30px; letter-spacing: -.5px; }
  .folder-reading-note { transform: none; padding: 20px; }
  .folder-reading-note > svg { float: right; margin: 0; }
  .folder-reading-note > span:last-child { margin-top: 10px; padding-top: 8px; }
  .canvas-summary { padding: 22px 20px; gap: 14px; }
  .canvas-preview { grid-template-columns: repeat(3, 20px); gap: 3px; padding: 5px; }
  .canvas-preview > span { height: 22px; font-size: 10px; }
  .canvas-cover > strong { font-size: 22px; }
  .canvas-kicker { font-size: 11px; letter-spacing: .6px; }
  .canvas-subtitle { font-size: 14px; }
  .canvas-content { padding: 0 16px 22px; }
  .business-canvas { grid-template-columns: minmax(0, 1fr); }
  .folder-layout { margin-top: 28px; }
  .chapter-index { margin-bottom: 24px; }
  .chapter-papers { gap: 28px; }
  .chapter-body > .chapter-scroll { max-height: min(520px, calc(100svh - 325px)); }
  .chapter-heading { flex-wrap: wrap; }
  .chapter-heading > div { flex-basis: calc(100% - 75px); }
  .chapter-roll-button { margin-left: 59px; }
  .chapter-heading { gap: 14px; padding: 17px 20px 16px; }
  .chapter-sheet-footer { padding: 10px 15px 3px; font-size: 12px; }
  .chapter-number { width: 45px; height: 56px; font-size: 24px; }
  .chapter-heading h3 { font-size: 22px; }
  .chapter-heading p { font-size: 13px; }
  .chapter-icon { display: none; }
  .folder-topic { margin: 0 14px 9px; }
  .folder-topic > summary { padding: 14px 12px; gap: 12px; }
  .topic-heading strong { font-size: 16px; }
  .topic-heading > span { font-size: 13px; }
  .content-topic-body { margin-inline: 14px; font-size: 15px; }
  .folder-topic:last-child { margin-bottom: 0; }
}
@media (max-height: 500px) {
  .chapter-body > .chapter-scroll { max-height: 55svh; }
}
@media (prefers-reduced-motion: reduce) {
  .folder-reveal { opacity: 1 !important; transform: none !important; clip-path: none !important; animation: none !important; transition: none !important; }
  .chapter-index a, .folder-topic > summary, .topic-toggle::after, .canvas-open-label svg, .chapter-roll-button svg { transition: none; }
}
</style>
