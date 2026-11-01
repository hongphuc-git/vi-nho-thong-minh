# Rà soát bảo mật mã nguồn — 02/11/2026

## Kết luận

Chưa đủ căn cứ để xác nhận hệ thống an toàn khi triển khai công khai. Trong phạm vi mã nguồn đã đọc, chưa xác định được lỗ hổng nghiêm trọng có đường khai thác cụ thể. Đây là rà soát tĩnh, không phải kết quả kiểm thử xâm nhập hoặc chứng nhận bảo mật.

Website hiện là Vue tĩnh: chưa thấy backend, API, đăng nhập, cơ sở dữ liệu, thanh toán hoặc lưu đơn hàng. Không coi việc thiếu các chức năng này là lỗi phân quyền. Những đánh giá về xác thực, SQL injection và giao dịch D1 chưa áp dụng cho phiên bản này.

Theo hướng dẫn của chủ dự án, không chạy ứng dụng, build, kiểm thử, npm audit, lint hoặc format. Không kiểm tra website đang triển khai, HTTP response headers, thiết lập tài khoản GitHub, lịch sử Git hoặc nội dung bên trong toàn bộ ảnh/video/tài liệu gốc. Không thay đổi mã ứng dụng trong lần rà soát này.

## Các mục cần xử lý hoặc xác nhận

### 1. Ưu tiên cao: làm rõ cảnh báo phụ thuộc

- Bằng chứng: `README.md:113` ghi nhận 18 cảnh báo từ lần cài Shadcn-vue, gồm 6 cao. `package.json:19` có Shadcn-vue trong dependencies; workflow cài cây phụ thuộc bằng `npm ci`.
- Trạng thái: thông tin lịch sử, chưa xác nhận số lượng hiện tại, advisory, phiên bản bị ảnh hưởng hoặc khả năng khai thác. Không suy diễn thành 6 lỗ hổng cao trên website đang chạy.
- Tác động cần đánh giá riêng: thư viện được gửi tới trình duyệt và công cụ chạy lúc cài đặt/build. Công cụ không có trong bundle vẫn cần xem xét vì chạy trong môi trường phát triển/CI.
- Hành động: chủ dự án tự lấy báo cáo audit hiện tại, sau đó đối chiếu đường phụ thuộc và điều kiện khai thác. Chỉ chọn bản nâng cấp hoặc gỡ thư viện sau khi có bằng chứng; tránh tự động dùng `audit fix --force`.

### 2. Ưu tiên trước công khai: xác nhận phạm vi thông tin cá nhân được phép đăng

- Bằng chứng: `src/components/TeamInformation.vue:14` khai báo họ tên thành viên; component hiển thị ảnh nhóm và liên hệ giáo viên. `src/data/projectVideos.ts` dẫn tới các video trong `public/videos/`.
- Rủi ro: người truy cập có thể xem và tải nội dung công khai, kể cả bằng đường dẫn file trực tiếp. Ẩn nút trên giao diện không bảo vệ file còn được triển khai.
- Trạng thái: xác nhận có công khai thông tin trong mã; chưa có bằng chứng cho thấy việc công khai chưa được cho phép. Đây là mục quyền riêng tư cần chủ dự án xác nhận, không phải kết luận vi phạm pháp luật.
- Hành động: xác nhận quyền sử dụng tên, hình ảnh, giọng nói và thông tin liên hệ; chỉ giữ nội dung cần thiết. Nếu cần gỡ, xử lý cả tệp công khai và nơi lưu/phân phối liên quan, không chỉ component hiển thị.

### 3. Củng cố bảo vệ: chưa thấy chính sách bảo mật trình duyệt trong dự án

- Bằng chứng: `index.html` chưa khai báo CSP hoặc referrer policy; chưa thấy cấu hình response headers trong các tệp triển khai đã đọc. Workflow `.github/workflows/deploy-pages.yml` hướng tới GitHub Pages.
- Trạng thái: chưa biết hosting thực tế đang trả những header nào. Không kết luận website trực tuyến thiếu header chỉ từ repository.
- Hành động: chủ dự án kiểm tra HTTPS và response headers. Cân nhắc CSP giới hạn nguồn script/tài nguyên, `object-src 'none'`, `base-uri 'self'`; dùng `frame-ancestors` nếu không cho phép nhúng trang. Chính sách phải phù hợp với Vue, motion-v và tài nguyên hiện tại; cần chủ dự án kiểm tra trước khi áp dụng chính thức.
- Giới hạn: `frame-ancestors` cần HTTP header, không có tác dụng khi chỉ thêm vào meta CSP. Thiếu CSP riêng lẻ không chứng minh có XSS. Tham khảo [MDN về frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors).
- Nếu triển khai trên GitHub Pages, chủ dự án xác nhận tùy chọn Enforce HTTPS. Tham khảo [hướng dẫn HTTPS của GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

## Điểm tích cực trong phạm vi đã đọc

- Không thấy `v-html`, `innerHTML`, `eval` hoặc `new Function` trong mã ứng dụng đã tìm kiếm; nội dung hiển thị qua template Vue.
- Không thấy gọi `fetch`/Axios, lưu localStorage/sessionStorage hoặc thao tác cookie trong mã ứng dụng đã tìm kiếm. Đây không phải kiểm chứng lưu lượng mạng của toàn bộ thư viện khi chạy.
- `MoneyPlayground.vue` giữ trạng thái trong bộ nhớ, kiểm tra số hữu hạn và giới hạn mỗi khoản từ 0 đến 100.
- `KitDiscovery.vue` giới hạn hash mở hướng dẫn theo danh sách ID có sẵn, bỏ query string khi tạo URL QR; không thấy đưa hash vào HTML trực tiếp.
- `.gitignore` bỏ qua `.env`, `.env.*`, `node_modules`, bản build và tài liệu nguồn. Quy tắc ignore không chứng minh những tệp đó chưa từng được commit.
- Tìm kiếm một số mẫu khóa bí mật phổ biến trong tệp văn bản thuộc phạm vi dự án không trả về kết quả. Chưa rà toàn bộ dạng secret, lịch sử Git hoặc dữ liệu nhúng trong media.
- Workflow ghim action bằng commit SHA, mặc định chỉ đọc repository, và cấp quyền xuất bản Pages ở job deploy riêng. Chưa xác minh nguồn gốc từng SHA hoặc thiết lập bảo vệ nhánh/environment trên GitHub.

## Các bước chủ dự án tự thực hiện

1. Trong thư mục `vi-nho-thong-minh`, chạy `npm.cmd audit --json > audit-full.json` và `npm.cmd audit --omit=dev --json > audit-production.json`. Hai báo cáo hỗ trợ phân loại cây phụ thuộc; báo cáo omit-dev không tự chứng minh gói nào thực sự nằm trong bundle trình duyệt.
2. Trên bản triển khai, tự mở DevTools → Network → chọn request HTML chính để xem HTTPS và response headers; xem trang có request tới bên thứ ba hay không.
3. Xác nhận những tên, thông tin liên hệ, ảnh và video nào được phép công khai; rà cả các file được phục vụ trực tiếp trong `public/`.
4. Trong GitHub, tự kiểm tra 2FA cho tài khoản có quyền quản trị, quyền cộng tác viên, bảo vệ nhánh `main` và quyền triển khai Pages.
5. Sau khi chốt thay đổi, tự build và kiểm tra QR, ảnh, video, hộp thoại và phần mô phỏng theo hướng dẫn trong README.

Chỉ nên kết luận lại mức độ sẵn sàng sau khi có báo cáo phụ thuộc hiện tại và kết quả xác nhận triển khai từ chủ dự án.
