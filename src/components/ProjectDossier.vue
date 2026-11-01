<script setup lang="ts">
import { motion } from 'motion-v'
import { ChevronDown, FileText, Grid2X2, Coins } from '@lucide/vue'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { collapseFromButton, returnToCollapsedHeading } from '@/lib/collapse'

import { canvasBlocks, projectTopics } from '@/data/projectContent'
</script>

<template>
  <section id="ho-so" class="project-content" aria-labelledby="project-content-title">
    <header class="dossier-heading">
      <div class="dossier-label"><span>HỒ SƠ CHI TIẾT</span><small>TỪ Ý TƯỞNG ĐẾN KẾ HOẠCH</small></div>
      <div class="dossier-title-row"><h2 id="project-content-title">Từ ý tưởng<br />đến kế hoạch<span aria-hidden="true">.</span></h2></div>
      <div class="dossier-paper-stack" aria-hidden="true">
        <div class="dossier-mini mini-model"><Grid2X2 /><span>Mô hình</span><div class="mini-grid"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
        <div class="dossier-mini mini-survey"><FileText /><span>Khảo sát</span><i></i><i></i><i></i></div>
        <div class="dossier-mini mini-finance"><Coins /><span>Tài chính</span><div class="mini-bars"><i></i><i></i><i></i></div></div>
      </div>
      <p>Dành cho người muốn tìm hiểu sâu: mở từng mục để xem mô hình, khảo sát và phương án tài chính dự kiến.</p>
      <ul aria-label="Nội dung trong phần III"><li><Grid2X2 aria-hidden="true" />9 mảnh ghép mô hình</li><li><FileText aria-hidden="true" />55 phiếu khảo sát</li><li>55.000đ · Giá thử nghiệm dự kiến</li></ul>
    </header>

    <motion.div
      :initial="{ opacity: 0, y: 14 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }"
      :transition="{ duration: 0.45 }"
    >
      <Card class="content-accordion canvas-accordion">
        <details>
          <summary @click="returnToCollapsedHeading">
            <span class="content-heading">
              <span class="content-icon"><Grid2X2 aria-hidden="true" /></span>
              <span>
                <small class="heading-eyebrow">KHUNG MÔ HÌNH KHỞI NGHIỆP</small>
                <strong>I. Tổng quan dự án – Business Model Canvas (9 mảnh ghép)</strong>
              </span>
            </span>
            <ChevronDown class="content-chevron" aria-hidden="true" />
          </summary>
          <div class="canvas-content">
            <div class="business-canvas">
              <article
                v-for="(block, index) in canvasBlocks"
                :key="block.title"
                class="canvas-block"
                :class="{ 'canvas-wide': block.wide, 'canvas-highlighted': block.highlighted }"
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

    <div class="content-topics">
      <Card v-for="(topic, index) in projectTopics" :key="topic.id" class="content-accordion">
        <details :id="`noi-dung-${topic.id}`">
          <summary @click="returnToCollapsedHeading">
            <span class="content-heading">
              <span class="content-icon"><FileText aria-hidden="true" /></span>
              <span>
                <small class="heading-eyebrow">CHUYÊN ĐỀ HỒ SƠ {{ String(index + 1).padStart(2, '0') }}</small>
                <strong>{{ topic.title }}</strong>
              </span>
            </span>
            <ChevronDown class="content-chevron" aria-hidden="true" />
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
      </Card>
    </div>

    <p class="content-source">Nội dung được biên tập từ hồ sơ dự án; số liệu khảo sát và ghi nhận mẫu được dẫn theo hồ sơ, chưa được kiểm chứng độc lập.</p>
  </section>
</template>

<style scoped>
.project-content {
  width: min(1240px, calc(100% - 96px));
  margin-inline: auto;
  padding-bottom: 80px;
}

.content-accordion {
  border: 1px solid #dfd3c0;
  border-radius: 22px;
  overflow: hidden;
  background: #fffdf8;
  color: #463120;
  box-shadow: 0 4px 0 #e9dfd0, 0 12px 24px #54392c0a;
}

.canvas-accordion {
  margin-top: 32px;
}

.content-accordion details {
  scroll-margin-top: 95px;
}

.content-accordion summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 76px;
  padding: 18px 26px;
  list-style: none;
  cursor: pointer;
}

.content-accordion summary::-webkit-details-marker {
  display: none;
}

.content-heading {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.heading-eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #2f6593;
  margin-bottom: 2px;
}

.content-heading strong {
  display: block;
  font-family: 'Lora', Georgia, serif;
  font-size: 18.5px;
  line-height: 1.4;
  font-weight: 700;
  color: #3f2818;
}

.content-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #e1eff8;
  color: #2c6496;
  border: 1px solid #c6dced;
}

.content-icon svg {
  width: 20px;
  height: 20px;
  stroke-width: 1.7;
}

.content-chevron {
  width: 19px;
  height: 19px;
  color: #7c6651;
  transition: transform .2s;
  flex-shrink: 0;
}

.content-accordion details[open] > summary > .content-chevron {
  transform: rotate(180deg);
}

.content-accordion details[open] > summary {
  border-bottom: 1px dashed #e2d7c5;
}

.canvas-content {
  padding: 24px 26px 26px;
}

.business-canvas {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}

.canvas-block {
  min-width: 0;
  padding: 18px 16px 20px;
  background: #fcf6e9;
  border: 1px solid #e2d5c1;
  border-radius: 16px;
  box-shadow: 0 3px 0 #ede3d2;
}

.canvas-block-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px dashed #e0d3be;
}

.canvas-block h3 {
  color: #2b5f8e;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.45;
  text-transform: uppercase;
  letter-spacing: .6px;
}

.canvas-block-num {
  font-family: 'Lora', Georgia, serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  color: #b7a38e;
  flex-shrink: 0;
}

.canvas-block ul {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.canvas-block li {
  position: relative;
  padding-left: 15px;
  font-size: 14px;
  line-height: 1.65;
  color: #543d2b;
  overflow-wrap: break-word;
}

.canvas-block li::before {
  position: absolute;
  content: '';
  left: 0;
  top: .65em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #cf972b;
}

.canvas-wide {
  grid-column: span 2;
}

.canvas-highlighted {
  background: #eaf3fa;
  border-color: #c9dced;
}

.canvas-note {
  font-size: 13.5px;
  line-height: 1.75;
  color: #6d5845;
  margin-top: 20px;
  padding: 12px 16px;
  background: #f8f2e7;
  border-radius: 10px;
  border-left: 3px solid #2b5f8e;
}

.content-topics {
  display: grid;
  gap: 16px;
  margin-top: 20px;
}

.content-topic-body {
  padding: 24px 26px 28px;
  color: #553f2d;
  font-size: 15px;
  line-height: 1.8;
}

.content-topic-body > p + p {
  margin-top: 14px;
}

.content-table-scroll {
  width: 100%;
  margin-top: 22px;
  overflow-x: auto;
  border: 1px solid #dfd3c0;
  border-radius: 14px;
  background: #fffef9;
}

.content-table-scroll table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;
  line-height: 1.7;
}

.content-table-scroll caption {
  padding: 14px 18px;
  text-align: left;
  background: #e2eef7;
  font-size: 14px;
  font-weight: 700;
  color: #2b567e;
}

.content-table-scroll th,
.content-table-scroll td {
  padding: 13px 16px;
  border-bottom: 1px solid #e8dfd0;
  vertical-align: top;
}

.content-table-scroll thead th {
  background: #f3eadd;
  color: #553927;
  font-weight: 700;
}

.content-table-scroll tbody th {
  font-weight: 600;
  color: #462f1f;
  min-width: 160px;
}

.content-table-scroll tbody td {
  min-width: 120px;
  font-variant-numeric: tabular-nums;
}

.content-table-scroll tbody tr:last-child > * {
  border-bottom: 0;
}

.content-table-scroll tbody tr:nth-child(even) {
  background: #faf6ee;
}

.content-topic-body .content-table-note {
  font-size: 13.5px;
  line-height: 1.75;
  color: #6b5642;
  margin-top: 16px;
  padding-left: 14px;
  border-left: 3px solid #c89f49;
}

.content-source {
  font-size: 13px;
  line-height: 1.75;
  color: #725d49;
  margin-top: 22px;
}

@media (max-width: 1050px) {
  .project-content {
    width: calc(100% - 64px);
  }
  .business-canvas {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .project-content {
    width: calc(100% - 32px);
    padding-bottom: 52px;
  }
  .business-canvas {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
  .canvas-wide {
    grid-column: auto;
  }
  .canvas-block:last-child {
    grid-column: 1 / -1;
  }
  .canvas-block {
    padding: 16px 14px;
  }
  .canvas-content {
    padding: 18px 16px;
  }
  .content-accordion summary {
    padding: 16px 18px;
  }
  .content-heading strong {
    font-size: 16px;
  }
  .content-topic-body {
    padding: 18px;
    font-size: 14px;
  }
}

@media (max-width: 460px) {
  .business-canvas {
    grid-template-columns: 1fr;
  }
  .canvas-block:last-child {
    grid-column: auto;
  }
}
.collapse-button { margin-top: 20px; min-height: 44px; color: #6d5037; }
.collapse-button svg { transform: rotate(180deg); }

.dossier-heading { position: relative; padding: 27px 30px 26px; margin-bottom: 28px; border-top: 1px dashed #c6b9a5; border-bottom: 1px dashed #c6b9a5; color: #543328; background: linear-gradient(110deg, #fffaf0, #f7f2e9); }
.dossier-label { display: flex; align-items: center; gap: 17px; flex-wrap: wrap; }
.dossier-label > span { background: #c9e4f7; color: #305d83; padding: 7px 14px; font-size: 11px; letter-spacing: 2px; transform: rotate(-2deg); }
.dossier-label small { font-size: 10px; letter-spacing: 1.6px; color: #89725b; }
.dossier-title-row { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-top: 16px; }
.dossier-title-row h2 { font-family: 'Lora', Georgia, serif; font-size: clamp(30px, 3.5vw, 44px); line-height: 1.25; font-weight: 700; letter-spacing: -1px; }
.dossier-title-row h2 > span { color: #b47b93; }
.dossier-title-row > svg { width: 76px; height: 76px; padding: 16px; border: 1px solid #bfd5e3; border-radius: 15px; color: #5b8aae; background: #e0eff9; transform: rotate(8deg); stroke-width: 1.2; }
.dossier-heading > p { margin-top: 14px; font-size: 14px; line-height: 1.8; color: #79634e; }
.dossier-heading ul { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; margin: 20px 0 0; }
.dossier-heading li { display: flex; align-items: center; gap: 8px; padding: 9px 13px; background: #e2eff9; border-radius: 6px; font-size: 11px; color: #4e5d6a; }
.dossier-heading li:nth-child(2) { background: #f7e0e8; color: #89516a; }
.dossier-heading li:nth-child(3) { background: #ffedbb; color: #7b6134; }
.dossier-heading li svg { width: 17px; height: 17px; }
@media (max-width: 600px) { .dossier-heading { padding: 23px 16px; } .dossier-title-row > svg { width: 57px; height: 57px; padding: 12px; flex-shrink: 0; } .dossier-label small { font-size: 8px; letter-spacing: 1px; } .dossier-heading > p { font-size: 12px; } }

.dossier-heading { padding-right: 365px; min-height: 265px; }
.dossier-title-row { margin-top: 13px; }
.dossier-title-row h2 { font-size: clamp(30px, 3vw, 39px); }
.dossier-heading > p { max-width: 600px; font-size: 13px; }
.dossier-heading ul { gap: 8px; margin-top: 16px; }
.dossier-paper-stack { position: absolute; right: 29px; top: 50%; transform: translateY(-50%); width: 290px; height: 205px; }
.dossier-paper-stack::before { content: ''; position: absolute; inset: 25px -5px 5px; background: #e8dfcd55; border-radius: 50%; filter: blur(15px); }
.dossier-mini { position: absolute; width: 130px; height: 160px; padding: 17px; border: 2px solid #fffdf3; border-radius: 5px; box-shadow: 0 5px 10px #68492f18; color: #54758b; }
.dossier-mini > svg { width: 27px; height: 27px; stroke-width: 1.4; }
.dossier-mini > span { display: block; margin-top: 8px; font-family: 'Lora', Georgia, serif; font-size: 15px; font-weight: 500; }
.mini-model { left: 0; top: 10px; background: #d4e9f7; transform: rotate(-13deg); }
.mini-survey { left: 82px; top: 0; background: #f8dce7; color: #a16880; transform: rotate(1deg); z-index: 1; }
.mini-finance { right: 0; top: 34px; background: #fff0bd; color: #9b7c3d; transform: rotate(12deg); z-index: 2; }
.mini-survey::before { content: ''; position: absolute; top: -11px; left: 25px; width: 65px; height: 23px; background: repeating-linear-gradient(45deg, #e7b1c6bb 0 5px, #fff2e2bb 5px 10px); transform: rotate(-5deg); }
.mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; margin-top: 12px; }
.mini-grid > i { height: 13px; border: 1px solid #83adc5; border-radius: 2px; }
.mini-survey > i { display: block; width: 85%; height: 4px; background: #cf9eb3; margin-top: 9px; border-radius: 2px; }
.mini-survey > i:last-child { width: 55%; }
.mini-bars { display: flex; align-items: end; height: 45px; gap: 7px; margin-top: 7px; border-bottom: 1px solid #c8af72; }
.mini-bars > i { width: 16px; height: 18px; background: #e9cb79; border-radius: 3px 3px 0 0; }
.mini-bars > i:nth-child(2) { height: 29px; } .mini-bars > i:nth-child(3) { height: 40px; }
@media (max-width: 1000px) { .dossier-heading { padding-right: 280px; } .dossier-paper-stack { right: 10px; transform: translateY(-50%) scale(.8); transform-origin: right center; } }
@media (max-width: 700px) { .dossier-heading { padding: 24px 20px; min-height: 0; } .dossier-paper-stack { position: relative; top: auto; right: auto; transform: scale(.86); transform-origin: center; margin: 16px auto 0; height: 180px; } .dossier-heading > p { margin-top: 10px; } .dossier-title-row h2 { font-size: 32px; } }
</style>
