export interface CanvasBlock {
  title: string
  items: string[]
  wide?: boolean
  highlighted?: boolean
}

export interface ProjectTable {
  caption: string
  headers: string[]
  rows: string[][]
  note: string
}

export interface ProjectTopic {
  id: string
  title: string
  paragraphs: string[]
  table?: ProjectTable
}

export const canvasBlocks: CanvasBlock[] = [
  {
    title: 'Đối tác chính',
    items: ['Giáo viên GDCD, giáo viên chủ nhiệm.', 'Phụ huynh tình nguyện.', 'Cơ sở in ấn, may và thủ công.'],
  },
  {
    title: 'Hoạt động chính',
    items: ['Thiết kế học liệu.', 'Chế tạo sản phẩm.', 'Hướng dẫn dùng thử.', 'Đánh giá trước – sau.', 'Cải tiến và giới thiệu.'],
  },
  {
    title: 'Giải pháp giá trị',
    items: ['Rèn kỹ năng tài chính qua tình huống đời sống địa phương.', 'Kết hợp ví bốn ngăn với học liệu và hoạt động thực hành.', 'Thử thách 30 ngày có chỉ số theo dõi.', 'Có thể thực hành bằng tiền mô phỏng, không cần điện thoại.'],
  },
  {
    title: 'Quan hệ khách hàng',
    items: ['Hướng dẫn sử dụng ngắn gọn.', 'Nhóm hỗ trợ giáo viên.', 'Phiếu phản hồi để cải tiến.', 'Không thu thập dữ liệu tài chính nhạy cảm.'],
  },
  {
    title: 'Phân khúc khách hàng',
    items: ['Học sinh THCS: người sử dụng trực tiếp.', 'Phụ huynh.', 'Giáo viên.', 'Lớp học, CLB kỹ năng sống và nhà trường.'],
  },
  {
    title: 'Tài nguyên chính',
    items: ['Nội dung thẻ tình huống.', 'Thiết kế ví bốn ngăn.', 'Sổ theo dõi 30 ngày.', 'Nhóm học sinh thực hiện.', 'Nguyên vật liệu.'],
  },
  {
    title: 'Kênh phân phối',
    items: ['Hoạt động trải nghiệm.', 'Gian hàng giới thiệu.', 'Truyền thông của trường khi được kiểm duyệt.'],
  },
  {
    title: 'Cấu trúc chi phí',
    wide: true,
    highlighted: true,
    items: ['Vật liệu ví, giấy và in ấn, bao gói, thiết kế, vận chuyển, hao hụt.', 'Chi phí trực tiếp tạm tính: 36.000đ/bộ, chưa phải giá vốn đầy đủ.', 'Chi phí chung và vận hành giả định: 1.300.000đ.', 'Tiếp tục khảo giá, xác minh chi phí và tránh tính trùng các khoản mục.'],
  },
  {
    title: 'Dòng doanh thu',
    items: ['Bộ cá nhân: giá thử nghiệm dự kiến 55.000đ/bộ.', 'Bộ thẻ bổ sung.', 'Bộ dùng cho lớp học.', 'Tài liệu số hợp pháp.', 'Các dòng mở rộng là định hướng dự kiến.'],
  },
]

export const projectTopics: ProjectTopic[] = [
  {
    id: 'tinh-trang',
    title: '1.1 Tình trạng và tính cần thiết của dự án',
    paragraphs: [
      'Theo hồ sơ, tính đến ngày 28/10/2026, nhóm đã thiết kế các cấu phần và chế tạo 01 bộ sản phẩm mẫu phiên bản số 1, đồng thời kiểm tra thao tác bước đầu. Dự án đang tiếp tục hoàn thiện sản phẩm; chưa triển khai bán hàng chính thức.',
      'Những việc cần tiếp tục thực hiện gồm làm đủ 10 bộ mẫu phục vụ trải nghiệm, kiểm tra chất lượng đầy đủ theo bảng kiểm 11 hạng mục, thu thập báo giá thực tế và tổ chức trải nghiệm có đánh giá.',
      'Bộ công cụ giúp học sinh thực hành quản lý khoản tiền nhỏ, phân biệt nhu cầu và mong muốn, ghi chép thu – chi và lập mục tiêu. Có thể dùng tiền mô phỏng để mọi học sinh đều có cơ hội tham gia, không phụ thuộc tiền tiêu vặt hay thiết bị số.',
    ],
  },
  {
    id: 'muc-tieu',
    title: '1.2 Mục tiêu, giá trị và tầm nhìn',
    paragraphs: [
      'Mục tiêu là hỗ trợ học sinh biết ghi chép, phân loại và cân nhắc việc sử dụng tiền; hình thành kỹ năng lập kế hoạch, tiết kiệm, chia sẻ và điều chỉnh khi có khoản chi phát sinh.',
      'Sản phẩm cung cấp học liệu trực quan cho gia đình, môn Giáo dục công dân, sinh hoạt lớp và hoạt động trải nghiệm. Quá trình phát triển dự án đồng thời giúp nhóm học sinh rèn kỹ năng khảo sát, thiết kế, làm sản phẩm, truyền thông và làm việc nhóm.',
      'Giai đoạn đầu ưu tiên hoàn thiện mẫu và kiểm chứng tính dễ hiểu, dễ sử dụng, chi phí. Về lâu dài, nhóm định hướng mở rộng bộ công cụ cho lớp học và các độ tuổi khác khi có căn cứ thực tế phù hợp.',
    ],
  },
  {
    id: 'doi-tuong',
    title: '1.3 Đối tượng sử dụng và lý do lựa chọn sản phẩm',
    paragraphs: [
      'Học sinh THCS là người sử dụng và hưởng lợi trực tiếp. Phụ huynh, giáo viên, lớp học, câu lạc bộ và nhà trường là các nhóm khách hàng hoặc đơn vị đồng hành tiềm năng.',
      'Bộ sản phẩm kết hợp ví bốn ngăn, sổ 30 ngày, thẻ tình huống và bảng mục tiêu thành một quy trình thực hành thống nhất. Nội dung gắn với việc mua đồ dùng học tập, tiết kiệm mua sách, hoạt động tập thể và các lựa chọn quen thuộc của học sinh.',
      'Sản phẩm dễ tiếp cận, không yêu cầu điện thoại, Internet hoặc tiền thật, có thể dùng ở nhà và ở lớp. Hình thức, học liệu và hướng dẫn sẽ được điều chỉnh dựa trên phản hồi thực tế.',
    ],
  },
  {
    id: 'khao-sat',
    title: '1.4 Khảo sát nhu cầu khách hàng',
    paragraphs: [
      'Hồ sơ tổng hợp 55 phiếu hợp lệ thuộc bốn nhóm. Phiếu KS01 dành cho học sinh tìm hiểu nhu cầu sử dụng; KS02 dành cho người mua tiềm năng tìm hiểu mức độ phù hợp của sản phẩm và giá dự kiến.',
    ],
    table: {
      caption: 'Kết quả khảo sát ban đầu theo hồ sơ dự án',
      headers: ['Nhóm đối tượng', 'Phiếu hợp lệ', 'Có nhu cầu sử dụng', 'Chấp nhận giá 55.000đ/bộ'],
      rows: [
        ['Học sinh THCS', '30', '24/30', 'Không áp dụng'],
        ['Phụ huynh', '15', '11/15', '9/15'],
        ['Giáo viên', '8', '6/8', '5/8'],
        ['Đơn vị giáo dục', '2', '1/2', '1/2'],
      ],
      note: '22/30 học sinh muốn trải nghiệm; 15/25 người mua tiềm năng chấp nhận mức giá dự kiến. Đây là khảo sát nhỏ, chưa đại diện toàn bộ thị trường; quan tâm hoặc ý định mua chưa phải đơn đặt mua đã xác nhận và chưa chứng minh hiệu quả giáo dục. Số liệu được dẫn theo hồ sơ, chưa được kiểm chứng độc lập.',
    },
  },
  {
    id: 'san-xuat',
    title: '2.1 Tính khả thi và quy trình sản xuất',
    paragraphs: [
      'Bộ công cụ có cấu tạo đơn giản, nguyên vật liệu dễ tìm và có thể làm theo quy mô nhỏ. Các công đoạn chính gồm xây dựng nội dung, thiết kế mẫu, cắt và gia công ví, biên soạn – in học liệu, đóng gói và kiểm tra.',
      'Học sinh tham gia khảo sát, thiết kế, trang trí, hoàn thiện các bộ phận phù hợp và kiểm tra sản phẩm. Các công đoạn cần kỹ thuật như máy may, gia công hoặc in số lượng lớn có thể do cơ sở chuyên môn hay người lớn hỗ trợ.',
      'Nhóm cần kiểm tra độ bền, độ rõ của chữ, tính đầy đủ của học liệu, khả năng ghi chép và sự thuận tiện khi thao tác. Chỉ xem xét sản xuất số lượng lớn khi đã rõ quy cách, chi phí và nhu cầu.',
    ],
  },
  {
    id: 'gia-thanh',
    title: '2.2 Dự toán chi phí cho 01 bộ cá nhân',
    paragraphs: ['Các khoản dưới đây là dự toán trong hồ sơ, chưa phải báo giá đã xác nhận hoặc giá vốn đầy đủ.'],
    table: {
      caption: 'Chi phí trực tiếp tạm tính cho một bộ cá nhân',
      headers: ['Khoản mục', 'Dự kiến/bộ'],
      rows: [
        ['Vải jean tái sử dụng và vật liệu làm ví', '5.000đ'],
        ['In sổ thu – chi 30 ngày', '8.000đ'],
        ['In bộ thẻ tình huống', '10.000đ'],
        ['Bao bì, tem nhãn và mã QR', '2.000đ'],
        ['Dự phòng hao hụt vật tư', '3.000đ'],
        ['Công cắt, may và hoàn thiện ví', '7.000đ'],
        ['Kiểm tra và đóng gói', '1.000đ'],
        ['Tổng các khoản đã định giá', '36.000đ'],
      ],
      note: 'Chưa định giá đầy đủ việc xử lý vải jean, tiền mô phỏng, bảng mục tiêu nếu in riêng và vận chuyển liên quan. Giá bán thử nghiệm dự kiến 55.000đ/bộ có thể thay đổi sau khảo giá và hoàn thiện sản phẩm. Theo hồ sơ, khoản chi cho bộ mẫu số 1 là 33.000đ nhưng chưa tính giá trị vải tận dụng và công làm của nhóm.',
    },
  },
  {
    id: 'thuan-loi',
    title: '2.3 Thuận lợi, khó khăn và phương án cải tiến',
    paragraphs: [
      'Thuận lợi: cấu tạo sản phẩm đơn giản, vật liệu dễ tiếp cận, có thể sản xuất từng đợt nhỏ; học sinh tham gia được nhiều công đoạn và có sự đồng hành của giáo viên, phụ huynh.',
      'Khó khăn: cần bảo đảm độ bền và sự chính xác của học liệu; giá vật tư, số lượng in và gia công ảnh hưởng đến chi phí; sự quan tâm của khách hàng chưa đồng nghĩa với nhu cầu mua thực tế.',
      'Phương án là làm mẫu, kiểm tra chất lượng, ghi nhận phản hồi, khảo giá và điều chỉnh trước khi mở rộng. Các khoản chi được ghi chép, lưu chứng từ; việc giới thiệu và bán thử tại trường phải được cho phép, bảo đảm tự nguyện.',
    ],
  },
  {
    id: 'sang-tao',
    title: '3. Tính độc đáo, sáng tạo',
    paragraphs: [
      'Điểm sáng tạo nằm ở cách kết hợp ví vật lý với học liệu và quy trình thực hành, không phải khẳng định chiếc ví chia ngăn là một phát minh hoàn toàn mới.',
      'Ví bốn ngăn gắn với sổ 30 ngày, thẻ tình huống, bảng mục tiêu và việc tự đánh giá theo tuần. Nhóm dự kiến phát triển 12–20 thẻ; một số tình huống lấy từ hoạt động quen thuộc tại địa phương sau khi rà soát cho đúng thực tế.',
      'Tiền mô phỏng và hoạt động nhóm “Một tình huống – Nhiều lựa chọn” tạo cơ hội để học sinh thảo luận, giải thích quyết định và phân tích hệ quả. Các thành phần cơ bản sử dụng trực tiếp bằng giấy và ví, không phụ thuộc thiết bị số.',
    ],
  },
  {
    id: 'kiem-chung',
    title: '3.1 Kế hoạch trải nghiệm và đánh giá',
    paragraphs: [
      'Giai đoạn đầu dự kiến tổ chức trải nghiệm ngắn, tự nguyện với khoảng 20–30 học sinh khi có đủ sự đồng ý cần thiết. Giáo viên rà soát hai bài DGA, DGB và rubric trước khi triển khai; điều kiện tổ chức được giữ tương đương.',
      'Năm kỹ năng được xem xét gồm ưu tiên nhu cầu, phân bổ tiền, tính mục tiêu tiết kiệm, xử lý khoản chi phát sinh và điều chỉnh kế hoạch. Nhóm đồng thời thu phiếu phản hồi về tính dễ hiểu, dễ sử dụng và những điểm cần cải tiến.',
      'Theo dõi thói quen trong 30 ngày là một giai đoạn riêng. Chỉ báo cáo kết quả sau khi có dữ liệu và minh chứng thực tế; không dùng trải nghiệm ngắn để kết luận đã hình thành thói quen lâu dài. Dữ liệu được tổng hợp bằng mã số, không thu thập tiền tiêu vặt thực tế hay thông tin tài chính nhạy cảm.',
    ],
  },
  {
    id: 'nguon-thu',
    title: '4.1 Nguồn thu và định hướng kinh doanh',
    paragraphs: [
      'Bộ cá nhân là sản phẩm chủ lực trong giai đoạn đầu, với giá thử nghiệm dự kiến 55.000đ/bộ. Nhóm ưu tiên hoàn thiện mẫu, kiểm chứng tính hữu ích và khảo sát khả năng chấp nhận giá.',
      'Bộ lớp học, bộ thẻ bổ sung, sổ bán riêng và tài liệu số hợp pháp là các hướng mở rộng dự kiến. Hoạt động trải nghiệm trả phí chỉ được xem xét khi có đơn vị đặt tổ chức và phương án triển khai phù hợp.',
      'Các giả định sản lượng trong hồ sơ dùng để lập phương án tài chính, chưa phải đơn đặt mua hoặc doanh thu đã đạt được.',
    ],
  },
  {
    id: 'tai-chinh',
    title: '4.2 Phương án tài chính — giả định bán 50 bộ',
    paragraphs: ['Kịch bản dưới đây chỉ xét 50 bộ cá nhân, với đơn giá và chi phí giả định trong hồ sơ.'],
    table: {
      caption: 'Phương án dự kiến, chưa phải kết quả kinh doanh',
      headers: ['Chỉ tiêu', 'Cách tính', 'Giá trị dự kiến'],
      rows: [
        ['Doanh thu', '50 × 55.000đ', '2.750.000đ'],
        ['Chi phí trực tiếp', '50 × 36.000đ', '1.800.000đ'],
        ['Chi phí chung và vận hành', 'Giả định theo hồ sơ', '1.300.000đ'],
        ['Tổng chi phí', '1.800.000đ + 1.300.000đ', '3.100.000đ'],
        ['Chênh lệch thu – chi', '2.750.000đ − 3.100.000đ', '−350.000đ'],
      ],
      note: '50 bộ cá nhân chưa đủ bù đắp chi phí chung. Theo giả định giá bán và chi phí trực tiếp không đổi, cần khoảng 69 bộ để chênh lệch 19.000đ/bộ bù đắp 1.300.000đ chi phí chung. Đây chưa phải điểm hòa vốn toàn dự án và chưa đủ dữ liệu xác định thời điểm hoàn vốn.',
    },
  },
  {
    id: 'trien-khai',
    title: '4.3 Kế hoạch triển khai và nguồn lực',
    paragraphs: [
      'Ưu tiên hoàn thiện bộ mẫu, rà soát thiết kế, kiểm tra chất lượng, khảo giá và chuẩn bị học liệu. Sau khi đủ điều kiện, tổ chức trải nghiệm ngắn có đánh giá trước – sau; dùng phản hồi để cải tiến.',
      'Giai đoạn theo dõi 30 ngày bắt đầu sau khi mẫu hoàn thiện và có đủ điều kiện triển khai. Kế hoạch được cập nhật theo tiến độ thực tế, không sử dụng chỉ tiêu dự kiến thay cho kết quả đã đạt được.',
      'Theo hồ sơ, nhóm góp vốn 200.000đ. Với chi phí trực tiếp tạm tính 36.000đ/bộ, 10 bộ cần khoảng 360.000đ, vượt vốn góp 160.000đ. Nhóm dự kiến sản xuất từng đợt nhỏ, tận dụng vật liệu được tặng và tìm hỗ trợ tự nguyện khi cần; chỉ đặt in lớn khi có căn cứ nhu cầu.',
    ],
  },
  {
    id: 'hieu-qua',
    title: '4.4 Hiệu quả dự kiến và nguyên tắc công bố kết quả',
    paragraphs: [
      'Dự án hướng tới khả năng hỗ trợ học sinh cân nhắc chi tiêu, ghi chép và lập mục tiêu; tạo công cụ đồng hành cho phụ huynh và giáo viên, đồng thời rèn năng lực khởi nghiệp cho nhóm thực hiện.',
      'Chỉ số theo dõi gồm số bài đánh giá hợp lệ, điểm trước – sau, số học sinh có điểm tăng/không đổi/giảm, mức độ dễ hiểu và phản hồi sử dụng. Kết quả trải nghiệm ngắn và kết quả theo dõi 30 ngày được báo cáo riêng.',
      'Hồ sơ chưa có dữ liệu đánh giá hiệu quả hoàn chỉnh. Với thử nghiệm nhỏ, chưa có nhóm đối chứng, kết quả ghi nhận sau này cũng không đủ để khẳng định sản phẩm là nguyên nhân duy nhất của sự thay đổi.',
    ],
  },
  {
    id: 'truyen-thong',
    title: '5. Kênh truyền thông và giới thiệu sản phẩm',
    paragraphs: [
      'Dự kiến xây dựng poster, video giới thiệu và hướng dẫn sử dụng tối đa 3 phút; tổ chức hoạt động trải nghiệm tự nguyện và giới thiệu qua các kênh của nhà trường khi được kiểm duyệt.',
      'Bộ nhận diện thống nhất tên Ví nhỏ thông minh và khẩu hiệu “Ví nhỏ – Thói quen lớn”. Nội dung giới thiệu nêu đúng cấu phần, công dụng, tình trạng mẫu và giá dự kiến; ưu tiên ảnh sản phẩm thực tế khi có ảnh được phép sử dụng.',
      'Nhóm theo dõi lượt tiếp cận, đăng ký tìm hiểu, phản hồi, số đơn xác nhận và điều chỉnh sản phẩm. Lượt xem hoặc lượt thích không được coi là bằng chứng trực tiếp về nhu cầu mua; hoạt động tại trường cần được cho phép và bảo đảm tự nguyện.',
    ],
  },
]
