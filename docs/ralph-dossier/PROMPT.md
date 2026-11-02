# Ralph loop: project dossier redesign

Work on exactly the Current task given at the end. Read tasks.json and progress.md if present. This is an authorized user-requested Ralph CLI loop, with one bounded iteration per task.

## Ownership and constraints

You own ONLY src/components/ProjectDossier.vue and docs/ralph-dossier/DESIGN.md, progress.md, tasks.json. You are not alone in the codebase: do not revert other edits or modify files outside this ownership. ProjectDossier.vue already contains user edits; preserve all content, anchors, tables, collapse behavior and data bindings. Read its current source first. Never run the application, build, tests, browser, lint or formatting commands. User expressly requires doing all application verification themselves. No Git commits, push, install, deploy, subagents, background processes, network tools or other CLI agents. Do not use any, type assertions or non-null assertions. Use existing Vue3/shadcn-vue Card/Button and motion-v conventions. Do not edit projectContent.ts.

## User brief

Latest user priority: keep implementation concise. Prefer existing shadcn-vue/reka-ui, motion-v and lucide libraries already installed; no dependency installation. Remove obsolete styles and redundant decoration/text. Use shared styles with CSS custom properties for chapter colors, not repeated per-chapter layouts. Do not introduce a complex custom accordion state manager. Keep all original substantive dossier content.

The current dossier is a long monotonous list of cream accordion bars with identical blue document icons. User wants a much more attractive, student-appropriate, visually full and engaging design, consistent with the existing blush graph-paper website, cream torn paper, pastel blue/yellow/pink/sage and brown Lora headings. Implement real maintainable HTML/CSS/SVG, no generated screenshot as the UI. Preserve readable text and useful space. No fabricated evidence or results. Keep prototype/financial caveats.

## Design direction

Create a scrapbook research folder with a clear editorial hierarchy, tactile paper layers, small tape/clip/line-art details, and a useful chapter index that jumps to five chapter groups. Main Canvas is a distinct featured accordion with preview of 9 pieces and explanatory subtitle, not a generic row. Group all 14 projectTopics without losing any into five chapters: why/whom (tinh-trang, muc-tieu, doi-tuong, khao-sat); make/improve (san-xuat, gia-thanh, thuan-loi); creativity/evaluation (sang-tao, kiem-chung); resources/finance (nguon-thu, tai-chinh, trien-khai, hieu-qua); share (truyen-thong). Each chapter gets number, short approachable introduction, distinctive lucide icon and soft pastel accent. Arrange compact accordions within each chapter paper with thin dividers, semantic summaries and explanatory short hints. Avoid multiple redundant labels on every row. Keep detailed content in readable expanded panels and horizontal scroll for tables. Desktop may use chapter index at left and main paper at right, but mobile must stack naturally; prevent sticky clipping by navigation (scroll margin >=120px). Only use new computed/data helpers if genuinely needed. Prefer typed group definitions mapping IDs to existing projectTopics without assertions. Avoid removing topic heading numbers. Use subtle motion-v reveal, CSS prefers-reduced-motion. Focus-visible keyboard outlines and min44px targets. Decorative elements aria-hidden and pointer-events:none. No massive empty hero, no stretched fixed-height cards, no very small text.

## Tasks

D01: Read current component and relevant style tokens/components. Write concise DESIGN.md with structure, palette, spacing, responsive and accessibility choices. Do not change implementation yet.
D02: Implement DESIGN.md in owned Vue component, replace stale duplicated stylesheet rules instead of accumulating conflicting overrides. Preserve all data and interactions. Keep section id ho-so and topic IDs noi-dung-${topic.id}.
D03: Read source only and refine any concrete issues in the implementation: topic coverage, duplicate content, typing, responsive constraints, focus/summary semantics, contrast choices, decorative overflow, anchor positions. Do not run any verification commands. Explicitly record application verification as pending user review; do not claim UI tested or visually certified.

At end of each task update that task status to done in tasks.json and append actual work and limitations to progress.md. Mark blocked with a reason if unable. Do not mark future tasks done. Final response concise Vietnamese.
