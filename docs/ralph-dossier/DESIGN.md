# Thiết kế hồ sơ: tập nghiên cứu scrapbook

## Phạm vi và nền tảng

D01 chỉ chốt thiết kế; triển khai thuộc D02, đọc nguồn tinh chỉnh thuộc D03. Đã đọc `ProjectDossier.vue`, token trong `style.css`/`scrapbook.css`, Card/Button, tiện ích collapse và cấu trúc dữ liệu. Giữ toàn bộ nội dung thực chất hiện có, kể cả chỉnh sửa của người dùng, số thứ tự trong `topic.title`, 9 Canvas blocks, bảng, chú thích, dữ liệu khảo sát và cảnh báo mẫu thử/tài chính dự kiến/chưa kiểm chứng độc lập. Không sửa `projectContent.ts`.

## Cấu trúc và phân cấp

- Giữ section `ho-so` và tiêu đề h2 hiện có. Phần mở đầu gọn: tiêu đề Lora nâu, lời dẫn và thông tin hiện có; bỏ nhãn lặp, giảm chồng giấy minh họa dư thừa, không tạo hero cao cố định.
- Canvas đứng đầu như một bìa hồ sơ nổi bật: Card chứa accordion native, tiêu đề gốc, phụ đề giải thích cách đọc mô hình và preview 9 ô nhỏ lấy tên trực tiếp từ `canvasBlocks`. Preview chỉ là mục lục, không lặp nội dung chi tiết. Khi mở, giữ đầy đủ 9 khối, ghi chú và nút thu gọn.
- Sau Canvas là mục lục chương và 5 tờ giấy chương. Mỗi chương có số 01–05, một icon lucide, tên gần gũi, một câu dẫn và màu nhấn riêng. Các chủ đề bên trong là hàng accordion gọn, ngăn bằng đường mảnh thay vì từng Card rời giống nhau.
- Mỗi summary giữ nguyên `topic.title`, thêm một gợi ý ngắn về nội dung khi mở và chevron; bỏ eyebrow “CHUYÊN ĐỀ HỒ SƠ” và icon tài liệu lặp ở từng hàng. Gợi ý chỉ mô tả nội dung, không tạo kết quả hay bằng chứng mới.

| Chương / anchor | Câu dẫn | Icon dự kiến / màu | IDs theo thứ tự |
| --- | --- | --- | --- |
| 01 · Vì sao, cho ai? / `chuong-1` | Bắt đầu từ nhu cầu và người sẽ sử dụng. | Users / xanh lam | tinh-trang, muc-tieu, doi-tuong, doi-tuong-uu-tien, ly-do-lua-chon, khao-sat |
| 02 · Làm thử, cải tiến / `chuong-2` | Tìm hiểu cách làm, chi phí và điều cần cải thiện. | Wrench / vàng | san-xuat, gia-thanh, thuan-loi, canh-tranh |
| 03 · Ý tưởng và đánh giá / `chuong-3` | Xem điểm sáng tạo và kế hoạch đánh giá trải nghiệm. | Lightbulb / hồng | so-sanh-giai-phap, sang-tao, kiem-chung |
| 04 · Nguồn lực và tài chính / `chuong-4` | Đọc các giả định tài chính và kế hoạch triển khai. | Coins / sage | nguon-thu, doanh-thu, tai-chinh, trien-khai, hieu-qua |
| 05 · Chia sẻ dự án / `chuong-5` | Tìm cách giới thiệu sản phẩm đến người quan tâm. | Megaphone / xanh lam | truyen-thong |

Mục lục dùng nav có nhãn và liên kết anchor thật tới năm chương; không cần trạng thái chương đang đọc. Giữ `noi-dung-${topic.id}` trên từng details. Chương dùng h3; panel tiếp tục render nguyên paragraphs/table/note và nút thu gọn. Giữ lời dẫn nguồn cuối hồ sơ.

## Vật liệu, màu và khoảng cách

Điều chỉnh theo nguồn tại D02: `projectTopics` đã được bổ sung thành 19 mục. Giữ cả năm mục mới: `doi-tuong-uu-tien`, `ly-do-lua-chon` thuộc chương 01; `canh-tranh` thuộc chương 02; `so-sanh-giai-phap` thuộc chương 03; `doanh-thu` thuộc chương 04. Các mục trong brief vẫn giữ chương đã chốt, gồm `hieu-qua` ở chương 04. Giữ nguyên tiêu đề và số mục từ dữ liệu dù thứ tự đọc theo chương khác thứ tự đánh số gốc.

Dùng nền graph-paper blush hiện có; giấy kem `--surface-paper`, mực `--ink`, các màu `--blue`, `--yellow`, `--pink`, `--sage` làm nền nhấn. Chữ chính nâu đậm, chữ phụ khoảng `#6b5140`; không dùng pastel làm màu chữ nhỏ. Heading Lora, nội dung Be Vietnam Pro theo token sẵn: body 18px, hint/index 16px, caption tối thiểu 14px, dòng 1.65–1.8.

Một layout chương dùng chung với `--chapter-accent` và `--chapter-ink`; mỗi chương chỉ cung cấp màu. Viền giấy mảnh, bóng nhẹ lệch 3–5px, một chi tiết tape/clip nhỏ và mép giấy bằng CSS/SVG. Không xoay nội dung đọc, không dùng ảnh UI. Trang trí ít, nằm trong vùng đệm và không phủ text/focus.

Giữ shell tối đa 1240px; khoảng cách chương 24–32px, đệm giấy 24–28px desktop / 16–20px mobile; summary khoảng 16px theo chiều dọc, chiều cao theo nội dung. Thay stylesheet scoped cũ bằng nhóm quy tắc rõ ràng, loại bỏ các override header/mini-card lỗi thời. `scrapbook.css` có selector `#app .content-accordion`, `.content-icon`, `.canvas-block`…: dùng class riêng cho cấu trúc mới khi cần, tránh tăng specificity hàng loạt; không sửa CSS toàn cục ngoài quyền sở hữu.

## Responsive và tương tác

Desktop từ khoảng 1050px: mục lục trái 210–230px, giấy phải `minmax(0, 1fr)`, gap 24–28px. Mục lục ở luồng trang, không sticky để tránh che khuất bởi navigation. Dưới ngưỡng này xếp mục lục trên giấy, links tự xuống hàng, không cuộn ngang toàn trang. Shell thu về lề 16px trên mobile; không cố định chiều cao chương. Canvas chi tiết giảm từ 3 cột xuống 2 rồi 1; tôn trọng thuộc tính wide/highlighted. Preview 9 mảnh tự xuống hàng.

Giữ native details/summary, cho phép mở nhiều mục và tái sử dụng `returnToCollapsedHeading`/`collapseFromButton`; không tạo accordion state manager. Chỉ thêm định nghĩa nhóm có kiểu và phép ánh xạ IDs sang `projectTopics` cần thiết; xử lý lookup không tìm thấy bằng narrowing, không assertions, non-null assertions hay `any`.

Tất cả grid children, kể cả lớp bọc motion `.folder-reveal`, dùng `min-width: 0` để chiều rộng tối thiểu của bảng không đẩy tràn cột giấy; text wrap tự nhiên. Bảng giữ caption, scope header, vùng cuộn ngang có nhãn và tabindex; không cắt bảng hoặc biến bảng thành ảnh.

## Accessibility và giới hạn xác nhận

Đặt scroll-margin-top ít nhất 120px (dự kiến 128px) cho section, chương, details và summary. Summary/link/nút có vùng bấm ít nhất 44px, focus-visible tương phản rõ với outline-offset; không lồng control tương tác trong summary. Native summary cung cấp trạng thái mở/đóng; icon trang trí `aria-hidden`, lớp trang trí `pointer-events: none`. Chương phân biệt bằng số/tên/icon cùng màu.

Reveal motion-v nhẹ một lần cho Canvas/chương (opacity, y nhỏ, khoảng 0.35–0.45s). Với prefers-reduced-motion, giữ nội dung hiện ngay và tắt chuyển động, kể cả transform/opacity do motion điều khiển; không chỉ dựa vào tắt CSS transition.

Chưa chạy ứng dụng, build, test, lint, format hay trình duyệt. Khả năng hiển thị, tương phản thực tế, bàn phím, anchor dưới navigation và responsive vẫn chờ người dùng xác nhận trên ứng dụng sau triển khai. D03 chỉ đọc nguồn, không được ghi nhận UI đã kiểm thử hay chứng nhận trực quan.

D03 đã đối chiếu nguồn: 19 mục hiện có xuất hiện một lần trong năm chương (6/4/3/5/1); chín Canvas blocks vẫn lấy trực tiếp từ dữ liệu. Giữ summary native, số tiêu đề gốc, collapse helpers, bảng và caveats. Các phần tử `aria-hidden` trong hồ sơ bỏ qua sự kiện con trỏ; tape dùng pseudo-element rỗng, không có nội dung đọc. Giữ scroll margin 128px, focus outline, nền pastel/chữ đậm và reduced-motion hiện có. Đây là nhận xét từ mã nguồn; application verification vẫn pending user review.
