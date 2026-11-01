# Ví nhỏ thông minh

Website cho bộ công cụ giáo dục tài chính cá nhân dành cho học sinh THCS.

## Công nghệ

Vue 3, TypeScript, Vite, Tailwind CSS, Shadcn-vue và motion-v. Website giới thiệu dự án có phần trải nghiệm tương tác; chưa có API, cơ sở dữ liệu hoặc chức năng lưu đơn hàng.

## Nội dung và giao diện

Nội dung được biên tập từ `../hồ sơ dự án sửa ngày 01.11.docx`: câu chuyện dự án, bộ công cụ, bốn ngăn ví, tình huống TH01, hành trình thực hành 30 ngày, nhóm thực hiện, khảo sát và phương án phát triển. Website tóm lược hồ sơ cho người đọc; không sao chép toàn bộ phụ lục hoặc các bài đánh giá DGA/DGB lên trang.

Màn hình đầu tiên được thiết kế lại theo bộ học liệu trong thư mục `image`: nền kem giấy, xanh da trời nhạt, chữ nâu và nhãn vàng ghi chú. Tên dự án cỡ lớn có nét đánh dấu xanh; cột hình ảnh sắp xếp như các tấm giấy có băng dính, dùng ảnh ví và học liệu thật từ tài liệu. Thanh menu và dải số liệu ngay dưới dùng cùng tông xanh nhạt–kem–nâu. Các phần hồ sơ bên dưới vẫn giữ thiết kế banner đã chốt trước đó.

Nền bìa thêm ô ly mờ, mảng pastel xanh–hồng, họa tiết đồng xu/bút chì/ngôi sao/trái tim, băng dính hồng và nhãn giấy vàng. Những chi tiết trang trí được ẩn khỏi trình đọc màn hình và không nhận tương tác; không thêm chuyển động lặp làm mất tập trung. Chủ dự án tự kiểm tra độ dễ đọc và bố cục trên thiết bị của mình theo hướng dẫn bên dưới.

Ảnh và học liệu của bìa mới nằm tại `public/images/learning-kit/`: ảnh ví đen và thẻ tình huống trích từ trang 4–5 của PDF trong `image`, bìa sổ lấy từ `1.png` trong ZIP sổ theo dõi, bảng mục tiêu sao chép từ PNG và tiền mô phỏng lấy từ `1.png` trong ZIP tương ứng. Các tài liệu nguồn không bị sửa. Chỉ dùng các trang liên quan tới dự án; không lấy thông tin liên hệ mẫu có sẵn trong template PDF. Trang bìa hiện tại không sử dụng ảnh ví bốn ngăn do AI tạo trước đó.

Các ảnh nền cũ vẫn được giữ trong `public/images/` để tham chiếu và banner phần nội dung: `financial-learning-hero-selected.png`, `financial-learning-hero.png`. Prompt ảnh cũ ở `docs/hero-image-prompt.md` không còn mô tả trang bìa đang dùng. Các hình học liệu và logo từ hồ sơ Word vẫn được giữ ở những phần nội dung đã triển khai.

Giữ rõ trạng thái đang hoàn thiện mẫu, giá thử nghiệm dự kiến 55.000đ/bộ và các giả định chi phí. Số liệu khảo sát 55 người được dẫn theo hồ sơ, chưa được kiểm chứng độc lập và không được trình bày thành kết quả đánh giá hiệu quả. Bốn tuần trong hành trình là cách biên tập lộ trình thực hành đề xuất, không phải hoạt động đã hoàn thành.

Phần trải nghiệm chỉ giữ trạng thái trong bộ nhớ của trang, không gửi hoặc lưu câu trả lời. Các nút liên hệ mở ứng dụng email hoặc điện thoại; không tạo đơn hàng. Không thêm thư viện mới trong lần nâng cấp giao diện này.

Font Be Vietnam Pro dùng cho nội dung và Lora dùng cho chữ có chân/chữ nghiêng, bao gồm bộ ký tự tiếng Việt. Font được lưu tại `public/fonts/`, không cần tải từ máy chủ font bên ngoài khi người dùng xem trang. Giấy phép OFL của hai bộ font nằm cùng thư mục. Sau khi cập nhật font, tải lại bằng Ctrl+F5; nếu vẫn thấy giao diện đầu trang cũ, dừng máy chủ Vite, chạy lại `npm.cmd run dev` trong đúng thư mục dự án và mở đúng địa chỉ vừa hiển thị.

## Chạy trên máy

Dùng Node.js đáp ứng yêu cầu engines của Vite trong package-lock.json và npm.

```powershell
cd C:\Users\hongp\Downloads\Project_khoi_nghiep\vi-nho-thong-minh
npm.cmd install
npm.cmd run dev
```

Mở địa chỉ Vite hiển thị trong terminal. Sau khi đã cài thư viện, những lần tiếp theo chỉ cần chạy npm.cmd run dev.

## Các lệnh

- npm.cmd run dev: chạy máy chủ phát triển.
- npm.cmd run build: kiểm tra kiểu TypeScript và tạo bản triển khai trong dist.
- npm.cmd run preview: xem bản đã build.

Agent chưa chạy ứng dụng, build, kiểm thử, lint hoặc format theo hướng dẫn của chủ dự án. Người dùng tự kiểm tra trên máy tính, điện thoại, thao tác bàn phím và chế độ giảm chuyển động.

## Cấu trúc

- src/App.vue: giao diện chính, bộ công cụ, hành trình, nhóm thực hiện và liên hệ.
- src/components/HeroCover.vue: bìa phong cách sổ tay, nền kem–xanh nhạt, ảnh ví và học liệu từ thư mục image, tên dự án và liên kết khám phá/video.
- src/components/SiteNavigation.vue: thanh điều hướng nền kem, viền và nút xanh nhạt; ghim trên cùng khi cuộn và vuốt ngang trên màn hình nhỏ.
- src/components/ProjectHighlights.vue: dải nền xanh nhạt, chữ nâu ngay dưới thanh điều hướng, gồm 4 ngăn ví, hành trình đề xuất 30 ngày, 1 bộ mẫu và 55 phiếu khảo sát theo hồ sơ; dòng nội dung chạy bằng motion-v có nút dừng/chạy lại, chuyển sang hiển thị tĩnh khi giảm chuyển động. Chủ dự án tự kiểm tra bố cục bốn cột/hai cột và nút dừng/chạy; agent chưa chạy ứng dụng hoặc kiểm thử.
- src/components/ProjectVideos.vue: khung xem video lớn và danh sách lựa chọn, đặt sau Phần III; có ảnh xem trước, điều khiển video gốc của trình duyệt và xử lý lỗi tải file.
- src/data/projectVideos.ts: danh sách video, tiêu đề, mô tả hình ảnh, thời lượng làm tròn và đường dẫn media/phụ đề nếu được bổ sung.
- src/components/FloatingContact.vue: nút điện thoại tròn vàng cố định góc dưới bên phải, dẫn tới số 0327 227 803; có nhãn cho trình đọc màn hình và khoảng cách theo safe area trên điện thoại. Chủ dự án tự kiểm tra vị trí nút và liên kết gọi trên thiết bị có ứng dụng điện thoại.
- src/components/TeamInformation.vue: Phần I — Thông tin chung, khung ảnh nhóm, thông tin liên hệ, danh sách thành viên và giáo viên hướng dẫn.
- src/components/ProjectSummary.vue: Phần II — Tóm tắt dự án; ý tưởng chính, hình phối cảnh và ba mục mở rộng về sản phẩm, khách hàng, mô hình kinh doanh.
- src/components/ProjectSectionBanner.vue: banner dùng chung cho Phần I và Phần II.
- src/components/MoneyPlayground.vue: phân bổ tiền mô phỏng, phản hồi tình huống và đặt lại trải nghiệm.
- src/components/ProjectDossier.vue: Phần III — Nội dung chính của dự án, Canvas chín ô và các mục nội dung có thể mở/đóng.
- src/data/projectContent.ts: dữ liệu Canvas, nội dung chi tiết và các bảng khảo sát, chi phí, phương án tài chính, biên tập từ hồ sơ.
- src/components/ui/: component Shadcn-vue.
- src/lib/utils.ts: tiện ích class CSS của Shadcn-vue.
- src/style.css: Tailwind và giao diện chung.
- public/images/: các hình từ hồ sơ được sử dụng trên website.
- components.json: cấu hình Shadcn-vue.

Alias @/ trỏ đến src/. TypeScript bật strict và noUncheckedIndexedAccess. Không dùng any, type assertion hoặc non-null assertion trong mã nguồn dự án.

## Các bước chủ dự án tự kiểm tra

### Video dự án

Đã tích hợp 4 đoạn phim khác nhau từ thư mục `Vid`. Hai file `75b19e1f-e2e2-4a02-9ad5-a105e9f674c0.mp4` và `75b19e1f-e2e2-4a02-9ad5-a105e9f674c0 (1).mp4` có cùng SHA-256 nên chỉ đưa một bản lên giao diện. Các file trong `Vid` được giữ nguyên. Bản sao để phục vụ website nằm trong `public/videos/`, ảnh xem trước được trích từ chính video bằng ffmpeg và nằm trong `public/images/video-posters/`. Đối chiếu tên file gốc và file dùng trên web tại `docs/video-sources.json`.

Không tự phát video hoặc âm thanh khi tải trang. Chọn một mục trong danh sách rồi bấm phát trong khung xem; khi đổi video, video cũ được dừng. Chỉ có một trình phát để tránh nhiều đoạn phát tiếng đồng thời. Tiêu đề và mô tả được biên tập theo khung hình, không phải bản chép lời. Chưa có file phụ đề đi kèm; có thể bổ sung WebVTT và trường `captions` cho từng mục trong `src/data/projectVideos.ts` khi đã có bản lời được rà soát.

Chủ dự án tự kiểm tra từng video, âm thanh, tua, toàn màn hình, đổi video khi đang phát, thao tác bằng bàn phím và bố cục trên điện thoại. Đối chiếu lại tiêu đề/mô tả với nội dung thực tế; các thao tác này chưa được agent chạy. Thử dùng chế độ offline để kiểm tra thông báo lỗi tải video và nút thử lại sau khi kết nối trở lại.

### Các phần nội dung

Phần II nằm ngay sau Phần I. Nội dung được biên tập từ hồ sơ Ví nhỏ thông minh, hình bên phải là phối cảnh dự kiến từ hồ sơ. Ba mục mở rộng đóng mặc định, có thể mở bằng chuột hoặc bàn phím. Phần III nằm ngay sau Phần II, có Canvas chín ô mở sẵn, các mục chi tiết đóng mặc định và bảng khảo sát/dự toán có thể cuộn ngang khi cần. Chủ dự án tự kiểm tra bố cục trên máy tính và điện thoại, mở/đóng bằng chuột hoặc bàn phím, cuộn bảng và đối chiếu số liệu với hồ sơ; agent không chạy các bước kiểm tra này.

Agent không chạy ứng dụng, build, kiểm thử, lint hoặc format theo AGENTS.md. Các bước sau dành cho người dùng thực hiện:

1. Chạy `npm.cmd run dev`, mở địa chỉ Vite hiển thị và xem trang ở màn hình máy tính và điện thoại (gợi ý 360px, 390px, 768px, 1280px). Kiểm tra chữ, các tấm học liệu/ảnh ví trên bìa và khả năng cuộn ngang ngoài ý muốn.
2. Kiểm tra tông kem–xanh nhạt–nâu, chữ tiêu đề và hai nút, rồi dùng liên kết mũi tên xuống để chuyển đến Phần I. Trên điện thoại, phần hình được xếp dưới nội dung; vuốt ngang thanh điều hướng và chọn từng mục. Dùng Tab để đi qua các liên kết, nút, câu hỏi và thanh trượt; kiểm tra viền focus rõ ràng.
3. Trong phần trải nghiệm, dùng chuột hoặc phím mũi tên thay đổi từng thanh trượt. Kiểm tra ba trạng thái tổng tiền: thiếu, đủ 100.000đ và vượt. Chọn ba phương án tình huống để xem phản hồi khác nhau, rồi dùng nút đặt lại.
4. Mở các mục hồ sơ và câu hỏi thường gặp bằng chuột hoặc Enter/Space. Đối chiếu nội dung, tên nhóm, email, số điện thoại và giá dự kiến với hồ sơ gốc.
5. Kiểm tra các liên kết email/điện thoại trên thiết bị có ứng dụng tương ứng. Liên kết chỉ mở trình soạn hoặc trình gọi, không tự gửi email hay thực hiện cuộc gọi.
6. Bật tùy chọn giảm chuyển động của hệ điều hành, tải lại trang để xem hiệu ứng. Khi sẵn sàng, tự chạy `npm.cmd run build` để kiểm tra TypeScript và tạo bản triển khai.

## Phát triển tiếp

### Bổ sung ảnh nhóm thực tế

Phần I dùng bố cục hồ sơ nhóm kiểu sổ tay: banner giấy nhiều lớp, khung Polaroid có băng dính hồng, nhãn ghi chú vàng và các thẻ thông tin có màu nhấn, bóng đổ mềm. Component mặc định dùng `public/images/video-posters/nhom-du-an-tai-truong.jpg`, là khung hình thật đã trích từ video nhóm cung cấp; không có giáo viên trong khung hình này. Không gán tên thành viên theo vị trí trong ảnh. Nếu ảnh không tải được, component hiện khung dự phòng. Banner nhiều lớp chỉ bật cho Phần I qua biến thể `scrapbook`; các phần khác giữ giao diện hiện có.

Để bổ sung ảnh nhóm được phép sử dụng, đặt ảnh tại `public/images/team-photo.jpg`, rồi đổi `<TeamInformation />` trong `src/App.vue` thành `<TeamInformation photo-src="/images/team-photo.jpg" />`. Nếu không tải được ảnh, component tự hiển thị lại khung chờ ảnh. Thông tin trưởng nhóm là Hoàng Thu Phượng; điện thoại và email liên hệ lấy từ hồ sơ của dự án Ví nhỏ thông minh.

Sau khi tải lại trang, chủ dự án tự kiểm tra mục “Thông tin chung” trên máy tính và điện thoại, mở hai mục thành viên/giáo viên bằng chuột hoặc bàn phím và đối chiếu thông tin liên hệ. Agent không chạy ứng dụng, build, test, lint hoặc format.

Thay minh họa bằng ảnh sản phẩm thật khi có ảnh được phép sử dụng, cập nhật quy cách và giá sau khi xác nhận. Chỉ bổ sung quản lý đơn hoặc đăng ký trải nghiệm sau khi chốt yêu cầu lưu dữ liệu. Cloudflare Pages là phương án triển khai giao diện; Workers và D1 chỉ bổ sung khi cần lưu dữ liệu. Chưa tạo tài nguyên đám mây hoặc xuất bản website.

Khi bổ sung schema, cấu hình công cụ và dùng npm run db:generate để tạo migration; không viết hoặc chỉnh SQL migration bằng tay.

Tham khảo thiết lập: https://www.shadcn-vue.com/docs/installation/vite và https://motion.dev/docs/vue.

## Lưu ý từ quá trình cài đặt

CLI Shadcn-vue kéo theo validate-npm-package-name yêu cầu Node ^22.22.2, ^24.15.0 hoặc >=26.0.0; máy hiện dùng Node 24.14.0 nên npm có cảnh báo engine. Nên cập nhật Node trong nhánh hỗ trợ trước khi thêm component tiếp theo.

npm báo 18 cảnh báo bảo mật trong cây phụ thuộc (1 thấp, 11 trung bình, 6 cao) khi cài Shadcn-vue. Chưa phân tích phạm vi ảnh hưởng và chưa chạy audit fix --force để tránh tự động nâng cấp phá vỡ tương thích. Cần rà soát trước khi triển khai công khai.

## Thiết kế scrapbook theo ảnh tham chiếu

Bìa mới trong `src/components/HeroCover.vue` dùng nền giấy ô ly, mép giấy xé trên nền sọc xanh–kem, chữ nâu đậm, vệt xanh dưới tiêu đề và cụm học liệu kiểu scrapbook. Ảnh là các tệp đã có trong `public/images/learning-kit/`: bìa sổ, ảnh ví và bảng mục tiêu. Băng dính, đồng xu, giấy ghi chú và đường nét trang trí được dựng bằng CSS; chữ, nút và liên kết vẫn là phần tử HTML có thể sử dụng bằng bàn phím.

Hai nút chính dẫn tới bộ công cụ và video dự án; nút trên cùng dẫn tới trải nghiệm. Thanh điều hướng giữ đủ các mục hiện có, hiển thị mục tương ứng với hash của URL và cho phép cuộn ngang trên màn hình nhỏ. Không có tự động phát video.

`src/scrapbook.css` tập trung bảng màu kem–nâu–xanh pastel–hồng và các chi tiết dùng chung. Banner các phần chuyển sang giấy ô ly, không còn ảnh nền phủ xanh rừng. Bố cục nội dung, dữ liệu hồ sơ và chức năng trải nghiệm/video được giữ lại.

Chủ dự án tự chạy `npm.cmd run dev` và kiểm tra:

- Bìa ở các chiều rộng 360px, 390px, 768px, 1280px và 1600px; cụm ảnh nằm bên phải trên máy tính và chuyển xuống dưới trên điện thoại.
- Tiêu đề không bị cắt, các ảnh học liệu tải được, các lớp giấy ghi chú không che nút hoặc chữ.
- Hai nút bìa, nút Cùng bắt đầu, thanh điều hướng và liên kết mũi tên xuống dẫn tới đúng phần.
- Thao tác bằng Tab/Enter, hiển thị focus và chế độ giảm chuyển động.
- Cuộn ngang thanh điều hướng, xem video và dùng các thanh trượt hiện có.

Agent không chạy ứng dụng, build, kiểm thử, lint hoặc format trong lần thay đổi thiết kế này. Chưa xuất bản website.

## Hiệu ứng đồng xu và ngôi sao rơi

`src/components/FallingDecorations.vue` thêm đồng xu vàng và ngôi sao pastel trong phần bìa. Dùng motion-v, chuyển động rơi chậm kèm đung đưa/xoay, tối đa 8 hình trên máy tính và 4 hình trên điện thoại. Lớp trang trí nằm dưới nội dung và không nhận thao tác chuột/chạm.

Nút Bật/Tắt hiệu ứng rơi nằm cuối bìa. Khi bật chế độ giảm chuyển động, hiệu ứng được tắt và nút ghi rõ trạng thái. Hiệu ứng ngừng khi bìa ngoài màn hình hoặc tab bị ẩn; chạy lại khi quay về nếu người dùng chưa tắt. Tùy chọn bật/tắt chỉ giữ trong phiên trang hiện tại.

Chủ dự án tự kiểm tra hiệu ứng, nút Bật/Tắt bằng bàn phím, chế độ giảm chuyển động, cuộn khỏi bìa và chuyển tab; agent chưa chạy ứng dụng, build, kiểm thử, lint hoặc format.

### Cập nhật độ rõ của hiệu ứng rơi

Hiệu ứng mặc định bật, các hạt bắt đầu ở những giai đoạn khác nhau của chu kỳ để có thể thấy ngay khi vào bìa. Tăng kích thước, độ rõ và đưa lớp trang trí lên trên cụm ảnh; lớp này vẫn không chặn chuột/chạm. Khi hệ điều hành bật giảm chuyển động, người dùng có thể chủ động bấm Bật hiệu ứng rơi để xem; thay đổi tùy chọn hệ điều hành sẽ hủy lựa chọn ghi đè này. Nút không còn bị vô hiệu hóa trong chế độ giảm chuyển động.

Chủ dự án tự tải lại trang và kiểm tra. Agent không chạy ứng dụng, build, kiểm thử, lint hoặc format.

## QR khám phá bộ công cụ

`src/components/KitDiscovery.vue` đặt sau phần giới thiệu bốn ngăn và trước trải nghiệm. Bốn thẻ theo mẫu tham chiếu gồm QR, ảnh học liệu, tiêu đề trên nền pastel và nút mở hướng dẫn: ví 4 ngăn, sổ thu–chi 30 ngày, thẻ tình huống và bảng mục tiêu cá nhân. Dùng Card/Button Shadcn-vue và hiệu ứng xuất hiện motion-v.

Thư viện `qrcode.vue` tạo QR dạng SVG ngay trong trình duyệt. Mỗi mã mã hóa URL trang hiện tại kèm hash riêng của hướng dẫn; khi truy cập trực tiếp URL đó, hướng dẫn tương ứng được mở. Không dùng mã QR mẫu hoặc dịch vụ QR bên ngoài. Không lưu câu trả lời hoặc thu thập dữ liệu học sinh.

QR sinh từ localhost chỉ mở localhost: điện thoại không truy cập được máy tính qua địa chỉ này. Để sử dụng QR từ điện thoại, chủ dự án mở website qua địa chỉ mạng phù hợp hoặc tên miền triển khai rồi tạo/in lại QR tại địa chỉ đó. Mã đã in từ localhost không tự cập nhật khi triển khai. Khu vực QR hiển thị lưu ý khi đang mở trên localhost.

Chủ dự án tự chạy ứng dụng và kiểm tra bốn mã QR, các nút mở hướng dẫn, tải trực tiếp từng URL có hash, đóng/mở bằng bàn phím, chế độ giảm chuyển động và bố cục 4/2/1 cột trên các kích thước màn hình. Agent chưa chạy ứng dụng, build, kiểm thử, lint hoặc format.

## Thao tác xem hướng dẫn và ảnh lớn

- Bấm mã QR hoặc nút Quét hoặc bấm để xem sẽ mở hướng dẫn trong Dialog của Shadcn-vue trên nền Reka UI. Các URL QR có hash vẫn mở đúng hướng dẫn khi truy cập trực tiếp. Bấm đóng, Esc hoặc vùng nền sẽ đóng cửa sổ; khi mở từ thẻ, focus quay về đúng liên kết mà không cuộn trang đi nơi khác.
- Nút thực hành trong hướng dẫn đóng cửa sổ, dẫn tới hoạt động/hành trình tương ứng và đưa focus tới tiêu đề của phần đích.
- Ảnh chính trên bìa, ảnh bộ sản phẩm Phần II, ảnh trong Bộ công cụ và ảnh trong các thẻ QR có nút Xem ảnh lớn. Cửa sổ ảnh giữ tỷ lệ, hiển thị lỗi nếu ảnh chưa tải được, hỗ trợ Esc và trả focus về nút mở ảnh. Không mở tab trình duyệt mới.
- Phần II và hồ sơ Phần III có nút thu gọn ở cuối nội dung dài. Khi đóng, chỉ cuộn trở lại tiêu đề nếu tiêu đề nằm ngoài vùng dễ nhìn, có tính đến thanh điều hướng. Các thao tác này tuân theo tùy chọn giảm chuyển động.
- Component dùng chung: src/components/ui/dialog/Dialog.vue, src/components/ImagePreview.vue. Logic thu gọn dùng chung: src/lib/collapse.ts. Không thêm phụ thuộc hoặc thay đổi database.

Chủ dự án tự chạy ứng dụng để kiểm tra mở/đóng bốn hướng dẫn, truy cập URL QR trực tiếp, phóng to ảnh, phím Tab/Shift+Tab/Esc, trả focus và giữ vị trí cuộn. Kiểm tra nút Thu gọn khi đọc đến cuối nội dung và khi thanh điều hướng đang ghim. Kiểm tra trên điện thoại, khi ảnh bị lỗi tải và khi bật chế độ giảm chuyển động. Agent không chạy ứng dụng, build, kiểm thử, lint hoặc format.


## Deploy lên GitHub Pages

Đưa **nội dung thư mục `vi-nho-thong-minh` vào gốc repository**, để `package.json`, `src`, `public` và `.github` nằm ngay ở gốc repo. Không đưa toàn bộ thư mục cha chứa hồ sơ Word lên GitHub. Workflow mặc định chạy khi push nhánh `main` hoặc chọn Run workflow trong Actions.

1. Tạo repository và đưa mã nguồn lên nhánh `main`. Nếu dùng GitHub Free, chọn repo public để dùng Pages.
2. Vào Settings → Pages → Build and deployment → Source: GitHub Actions.
3. Vào Actions → Deploy website to GitHub Pages → Run workflow (hoặc push thay đổi mới).
4. Chờ cả `build` và `deploy` thành công, mở URL trong deployment `github-pages`.

Workflow dùng Node.js 22, `npm ci`, `npm run build` và xuất `dist`. Base path được lấy tự động từ cấu hình GitHub Pages, nên dùng được với URL dạng `https://username.github.io/repository/` và tên miền riêng. Ảnh/video trong dữ liệu và component được xử lý bằng `src/lib/publicAsset.ts`; font và mask CSS được Vite xử lý. Khi thêm ảnh mới trong template, dùng `:src="publicAsset('/images/ten-anh.png')"`; không hardcode URL bắt đầu `/images/` trong dữ liệu chạy trên trình duyệt.

Không upload `node_modules`, `dist`, `.env`, thư mục nguồn `image/`, `Vid/` và các file Word/ZIP. `.gitignore` đã loại chúng; các ảnh/video thực sự được website dùng vẫn nằm trong `public/`. `.gitignore` không loại file đã được Git theo dõi trước đó.

Chủ dự án tự kiểm tra sau deploy: ảnh và font tiếng Việt, video, phóng to ảnh, liên kết menu, QR trên điện thoại và giao diện màn hình nhỏ. QR được tạo theo URL đang mở; hãy lấy QR tại URL đã deploy, không lấy từ localhost. Chưa chạy build, lint, test hoặc mở ứng dụng để xác minh trong lần chuẩn bị cấu hình này theo hướng dẫn dự án. Nếu workflow build lỗi, mở bước thất bại để lấy thông báo lỗi trước khi xuất bản lại.

Tham khảo: https://vite.dev/guide/static-deploy.html#github-pages

## Thiết kế mục Video dự án dạng album

ProjectVideos.vue dùng khung ảnh giấy, băng dính hồng, viền cuộn phim và danh sách ảnh kiểu Polaroid trên nền sổ xanh. Giữ ID video-du-an để liên kết từ thanh điều hướng và bìa hoạt động với mục này. CSS được đặt tên riêng với tiền tố film- để tránh các style cũ ghi đè.

Thêm nút Phim trước/Phim tiếp với trạng thái vô hiệu hóa ở đầu/cuối danh sách, số thứ tự đoạn đang chọn và trạng thái tải/phát/tạm dừng. Khi đổi video, video cũ dừng và video mới chờ người dùng bấm phát. Giữ điều khiển gốc, track phụ đề tùy chọn, xử lý lỗi và nút thử lại. Không tự phát, không tự chuyển sang phim tiếp theo.

Chủ dự án tự kiểm tra bố cục hai cột trên máy tính, danh sách hai/một cột ở màn hình nhỏ, chọn video khi đang phát, các nút trước/tiếp, tải lại video lỗi và điều khiển bằng bàn phím. Agent không chạy ứng dụng, build, kiểm thử, lint hoặc format trong lần chỉnh sửa này.


## Luồng đọc đã tinh gọn

Thứ tự: Bìa → Dự án trong một phút → Số liệu tổng quan → Nhóm thực hiện → Bộ công cụ & QR → Cách dùng bốn ngăn → Video → Trải nghiệm → Hành trình 30 ngày → Hồ sơ chi tiết → Đồng hành & hỏi đáp → Liên hệ → Chân trang.

Bỏ gallery học liệu trùng với thẻ QR (thẻ QR đã có ảnh, phóng to và hướng dẫn). Tóm tắt chỉ giữ ý tưởng và ảnh tổng; bỏ ba thẻ giải thích lại sản phẩm/khách hàng/kinh doanh và dải bốn bước trùng phần hành trình. Nội dung chi tiết vẫn ở bộ công cụ, hồ sơ và phần đồng hành. Hồ sơ chuyển xuống sau trải nghiệm, mặc định đóng các mục dài. Các anchor cũ của tóm tắt, nhóm, bộ công cụ, QR, video, trải nghiệm, hành trình và liên hệ được giữ. Chủ dự án tự kiểm tra menu, CTA, QR và các mục mở rộng; không chạy build/test/lint trong lần biên tập này.

## Đồng bộ phần Trải nghiệm với phong cách sổ tay

MoneyPlayground.vue sử dụng bố cục trang sổ phân bổ tiền và thẻ tình huống TH01, có băng dính, lỗ gáy sổ, ngân sách mô phỏng và lựa chọn A/B/C. Giữ tổng ngân sách 100.000đ, bước điều chỉnh 5.000đ, ba trạng thái tổng tiền và nội dung phản hồi gốc. Bổ sung nút cộng/trừ có nhãn và giới hạn 0–100.000đ cho mỗi ngăn; nút Làm lại đặt lại cả phân bổ và câu trả lời. Tỷ lệ chia chỉ là ví dụ tự do, không phải đáp án chuẩn. Không thêm lưu trữ hoặc gửi câu trả lời.

Tên CSS riêng practice-* tránh trùng các phần trước. Bố cục chuyển về một cột khi màn hình hẹp. Thẻ thành viên vẫn là HTML, đã bỏ xoay/filter trên cả thẻ và tăng cỡ chữ để giảm cảm giác mờ.

Chủ dự án tự kiểm tra bố cục, các thanh trượt, nút cộng/trừ tại hai giới hạn, tổng tiền thiếu/đủ/vượt, ba lựa chọn, phản hồi, nút Làm lại và thao tác bàn phím. Agent không chạy ứng dụng, build, kiểm thử, lint hoặc format.

## Liên hệ dự án dạng trang sổ

ContactInvitation.vue thay mục liên hệ nền nâu bằng trang giấy xanh nhạt, thông tin giáo viên hướng dẫn, liên kết email/điện thoại và thẻ ảnh bộ công cụ có thể phóng to. Ảnh dùng publicAsset để hỗ trợ đường dẫn triển khai có thư mục con. Nhãn giá 55.000đ/bộ ghi rõ giá thử nghiệm dự kiến; quy cách và giá có thể điều chỉnh. Không có đặt hàng hoặc thanh toán tự động.

Nút gửi lời nhắn chỉ mở ứng dụng email với tiêu đề/nội dung gợi ý; người dùng tự điền và gửi. Liên kết điện thoại chỉ mở trình gọi. CSS dùng tiền tố invitation-* để không bị các quy tắc contact/price cũ ghi đè, đặc biệt tránh chữ nhạt trên nền vàng.

Chủ dự án tự kiểm tra bố cục hai/một cột, nút email và gọi điện, phóng to ảnh, khả năng đọc nhãn giá và thao tác bàn phím. Agent không chạy ứng dụng, build, kiểm thử, lint hoặc format.
