# Tiến độ Ralph dossier

## D01 — hoàn thành · 2026-11-02

- Đọc nguồn hiện tại của ProjectDossier.vue, quy định AGENTS.md cấp cha, token/style toàn cục, Card/Button, collapse helpers và cấu trúc projectTopics/canvasBlocks.
- Viết DESIGN.md: Canvas nổi bật có preview 9 mảnh, mục lục 5 chương với ánh xạ đủ 14 topic IDs, layout giấy dùng chung và màu qua CSS custom properties; chốt spacing, typography, responsive, focus, anchors và reduced motion.
- Ghi rõ các selector toàn cục có thể ảnh hưởng CSS scoped và yêu cầu giữ nguyên dữ liệu, heading numbers, bảng, caveats cùng hành vi thu gọn hiện có.
- Không thay đổi ProjectDossier.vue hoặc file ngoài phạm vi. D02 và D03 vẫn pending.
- Chỉ đọc nguồn và ghi tài liệu; không chạy ứng dụng, build, tests, lint, formatter hay browser. Xác nhận ứng dụng và đánh giá giao diện thực tế đang chờ người dùng tự thực hiện sau triển khai; chưa có kết luận UI đã kiểm thử.

## D02 — hoàn thành · 2026-11-02

- Triển khai bìa Canvas nổi bật, phụ đề giải thích và preview tên 9 mảnh từ canvasBlocks; giữ nội dung chi tiết, ghi chú dự kiến và nút thu gọn.
- Thay 14 Card rời bằng 5 chương giấy có số, câu dẫn, icon lucide và màu pastel qua custom properties dùng chung; mục lục anchor ở trái desktop và xếp trên khi màn hình nhỏ. Loại bỏ stylesheet cũ cùng các override và minh họa mini-card dư thừa.
- Nguồn projectTopics được bổ sung trong phiên thành 19 mục; ánh xạ đủ các IDs hiện có vào 5 chương, giữ tiêu đề/số mục, paragraphs, bảng, chú thích và caveats từ dữ liệu. Ghi điều chỉnh trong DESIGN.md; không sửa projectContent.ts.
- Giữ ho-so, noi-dung-${topic.id}, details/summary native và hai collapse helpers; thêm hint mô tả, focus-visible, vùng bấm tối thiểu 44px, scroll margin 128px, bảng cuộn ngang và reduced-motion CSS cho motion-v reveal. Không thêm state manager hay dependency.
- Chỉ sửa các tệp được giao. Không chạy ứng dụng, build, tests, browser, lint, formatter hoặc lệnh xác minh ứng dụng; không commit. Application verification đang chờ người dùng tự thực hiện, chưa kết luận UI đã kiểm thử hoặc được chứng nhận trực quan. D03 vẫn pending, dành cho đọc nguồn và tinh chỉnh tiếp.

## D03 — hoàn thành · 2026-11-02

- Đọc nguồn component, dữ liệu, Card/Button, collapse helpers và CSS liên quan. Đối chiếu 19 topic IDs hiện có: mỗi mục xuất hiện đúng một lần trong năm chương, phân bố 6/4/3/5/1; giữ đủ chín Canvas blocks, tiêu đề có số, paragraphs, bảng, chú thích và caveats. Không sửa projectContent.ts.
- Bổ sung min-width: 0 cho lớp bọc motion để bảng có chiều rộng tối thiểu không đẩy tràn grid; thêm pointer-events: none cho phần tử aria-hidden trong hồ sơ. Giữ native details/summary, hành vi thu gọn và focus, vùng cuộn bảng có nhãn/tabindex, scroll margin 128px và reduced-motion hiện có; không thêm helper hoặc state manager.
- Cập nhật bảng ánh xạ trong DESIGN.md theo đủ 19 mục của nguồn hiện tại và ghi rõ giới hạn rà soát. Không thêm nội dung hoặc kết quả thực nghiệm mới.
- Chỉ đọc nguồn và sửa tệp được giao; không chạy ứng dụng, build, tests, browser, lint, formatter hay lệnh xác minh ứng dụng; không commit, cài đặt, dùng mạng hoặc subagent. Application verification: pending user review. Người dùng cần tự xem responsive, cuộn bảng, mở/thu gọn bằng bàn phím, focus, anchor dưới navigation, reduced motion và tương phản thực tế; chưa có kết luận UI đã kiểm thử hoặc chứng nhận trực quan.
