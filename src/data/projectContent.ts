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
    title: '1.3 Đối tượng được hưởng giá trị',
    paragraphs: [
      'Học sinh THCS là người sử dụng và hưởng lợi trực tiếp. Phụ huynh, giáo viên, lớp học, câu lạc bộ và nhà trường là các nhóm khách hàng hoặc đơn vị đồng hành tiềm năng.',
      'Gia đình có học liệu để cùng con trao đổi về tiền; nhà trường và câu lạc bộ có thể tổ chức hoạt động thực hành. Nhóm thực hiện được rèn kỹ năng khảo sát, thiết kế, làm mẫu và làm việc nhóm.',
    ],
  },
  {
    id: 'doi-tuong-uu-tien',
    title: '1.4 Đối tượng quan trọng nhất',
    paragraphs: [
      'Học sinh THCS là người sử dụng và hưởng lợi trực tiếp, được ưu tiên khi thiết kế ngôn ngữ, tình huống và thao tác của bộ công cụ.',
      'Phụ huynh, giáo viên, lớp học và nhà trường có thể là người mua hoặc tổ chức sử dụng. Vì vậy, khảo sát nhu cầu học sinh và khảo sát khả năng mua được thực hiện riêng, không coi học sinh là người phải trả tiền.',
    ],
  },
  {
    id: 'ly-do-lua-chon',
    title: '1.5.1–1.5.2 Khách hàng và lý do lựa chọn',
    paragraphs: [
      'Khách hàng dự kiến gồm phụ huynh muốn hướng dẫn con quản lý tiền, giáo viên bổ sung học liệu, lớp học và câu lạc bộ tổ chức trải nghiệm. Việc sử dụng trong nhà trường tùy nhu cầu và điều kiện triển khai.',
      'Lý do lựa chọn được định hướng từ một quy trình thống nhất: phân bổ tiền vào ví, ghi chép thu–chi, xử lý tình huống, đặt mục tiêu và tự nhìn lại. Có thể thực hành bằng tiền mô phỏng, không bắt buộc tiền tiêu vặt, điện thoại hoặc Internet.',
      'Tính dễ hiểu, dễ sử dụng và khả năng hỗ trợ học sinh cần tiếp tục được kiểm chứng qua trải nghiệm và phản hồi.',
    ],
  },
  {
    id: 'so-sanh-giai-phap',
    title: '1.5.3 So sánh với giải pháp hiện có',
    paragraphs: [
      'Hồ sơ đối chiếu với sổ thu–chi giấy, ứng dụng Money Lover và nền tảng giáo dục tài chính Rùa Vàng. Bảng dưới tóm lược nhận định của nhóm từ lần tra cứu 27–28/10/2026, không xác nhận tính năng hoặc giá hiện tại của các dịch vụ.',
    ],
    table: {
      caption: 'Đối chiếu định hướng thiết kế theo hồ sơ',
      headers: ['Giải pháp', 'Cách sử dụng được đối chiếu', 'Hướng khác biệt của Ví nhỏ thông minh'],
      rows: [
        ['Sổ thu–chi giấy', 'Chủ yếu ghi chép và theo dõi khoản tiền.', 'Gắn sổ với ví bốn ngăn, thẻ tình huống và bảng mục tiêu.'],
        ['Ứng dụng quản lý chi tiêu', 'Thao tác qua thiết bị số; cách dùng phụ thuộc ứng dụng.', 'Thực hành trực tiếp bằng học liệu giấy và tiền mô phỏng.'],
        ['Nền tảng học tài chính', 'Bài học và trò chơi theo nội dung của nền tảng.', 'Quy trình thực hành bằng bộ vật lý tại gia đình và lớp học.'],
      ],
      note: 'Đây là nhận định định hướng của nhóm, không phải kết quả thử nghiệm so sánh. Không khẳng định bộ công cụ vượt trội hơn các giải pháp khác khi chưa có minh chứng.',
    },
  },
  {
    id: 'khao-sat',
    title: '1.5.4 Khảo sát nhu cầu khách hàng',
    paragraphs: [
      'Hồ sơ tổng hợp 55 phiếu hợp lệ thuộc bốn nhóm. Phiếu KS01 dành cho học sinh tìm hiểu nhu cầu sử dụng; KS02 dành cho người mua tiềm năng tìm hiểu mức độ phù hợp của sản phẩm và giá dự kiến.',
    ],
    table: {
      caption: 'Kết quả khảo sát ban đầu theo hồ sơ dự án',
      headers: ['Nhóm đối tượng', 'Phiếu hợp lệ', 'Có nhu cầu sử dụng', 'Chấp nhận giá 55.000đ/bộ', 'Muốn trải nghiệm / có ý định mua'],
      rows: [
        ['Học sinh THCS (KS01)', '30', '24/30', 'Không áp dụng', '22/30 muốn trải nghiệm'],
        ['Phụ huynh (KS02)', '15', '11/15', '9/15', '7/15 có ý định mua'],
        ['Giáo viên (KS02)', '8', '6/8', '5/8', '5/8 có ý định mua'],
        ['Đơn vị giáo dục (KS02)', '2', '1/2', '1/2', '1/2 có ý định mua'],
      ],
      note: 'Tổng cộng 55 phiếu; 42/55 có nhu cầu sử dụng. Trong 25 người mua tiềm năng (KS02), 15/25 chấp nhận giá và 13/25 quan tâm/có ý định mua. Hồ sơ chưa ghi nhận đơn đặt mua xác nhận. Nhu cầu sử dụng, mong muốn trải nghiệm và ý định mua là ba chỉ số khác nhau; quy mô khảo sát chưa đại diện toàn bộ thị trường.',
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
    title: '2.2 Cơ cấu chi phí và giá thành',
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
      note: 'Chưa định giá đầy đủ việc xử lý vải jean, tiền mô phỏng, bảng mục tiêu nếu in riêng và vận chuyển liên quan. Giá bán thử nghiệm dự kiến 55.000đ/bộ có thể thay đổi sau khảo giá. Hồ sơ kê khai bộ mẫu số 1 đã chi 33.000đ, chưa tính vải tận dụng và công làm của nhóm; ước tính thuê sản xuất bộ mẫu là 37.000đ. Ba mức 33.000đ, 36.000đ và 37.000đ có cơ sở tính khác nhau, không dùng thay thế nhau.',
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
    id: 'canh-tranh',
    title: '2.4 Tính cạnh tranh của sản phẩm',
    paragraphs: [
      'Nhóm hướng tới khả năng cạnh tranh nhờ bộ học liệu gắn với đời sống học sinh THCS, sử dụng linh hoạt trong gia đình và lớp học, có thể thực hành không cần thiết bị số.',
      'Tận dụng vải jean cũ là định hướng vật liệu; vẫn cần tính chi phí thu gom, làm sạch, gia công và hao hụt. Giá 55.000đ/bộ là mức thử nghiệm dự kiến, chưa phải lợi thế giá đã được xác nhận bằng giá vốn đầy đủ.',
      'Cần kiểm tra độ bền, tính tiện dụng, mức độ dễ hiểu và phản hồi thực tế trước khi khẳng định lợi thế cạnh tranh hoặc mở rộng sản xuất.',
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
    title: '3. Kế hoạch kiểm chứng tính sáng tạo và hiệu quả',
    paragraphs: [
      'Giai đoạn đầu dự kiến tổ chức trải nghiệm ngắn, tự nguyện với khoảng 20–30 học sinh khi có đủ sự đồng ý cần thiết. Giáo viên rà soát hai bài DGA, DGB và rubric trước khi triển khai; điều kiện tổ chức được giữ tương đương.',
      'DGA và DGB cùng đánh giá 5 kỹ năng, mỗi kỹ năng 0–2 điểm, tổng tối đa 10 điểm và thời lượng 10 phút. Hai bài thay đổi bối cảnh, số liệu nhưng dùng cùng rubric: ưu tiên nhu cầu, phân bổ tiền, tính toán mục tiêu, xử lý chi phát sinh và điều chỉnh kế hoạch. Phiếu PH01 ghi nhận phản hồi sử dụng; kết quả hiện chưa có.',
      'Theo dõi thói quen trong 30 ngày là một giai đoạn riêng. Chỉ báo cáo kết quả sau khi có dữ liệu và minh chứng thực tế; không dùng trải nghiệm ngắn để kết luận đã hình thành thói quen lâu dài. Dữ liệu được tổng hợp bằng mã số, không thu thập tiền tiêu vặt thực tế hay thông tin tài chính nhạy cảm.',
      'Chỉ số dự kiến gồm số bài hợp lệ, điểm trước–sau, số học sinh tăng/không đổi/giảm điểm và phản hồi sử dụng. Thử nghiệm nhỏ, chưa có nhóm đối chứng nên chưa thể quy sự thay đổi hoàn toàn cho sản phẩm.',
    ],
  },
  {
    id: 'nguon-thu',
    title: '4.1 Các nguồn vốn và nguồn thu',
    paragraphs: [
      'Bộ cá nhân là sản phẩm chủ lực trong giai đoạn đầu, với giá thử nghiệm dự kiến 55.000đ/bộ. Nhóm ưu tiên hoàn thiện mẫu, kiểm chứng tính hữu ích và khảo sát khả năng chấp nhận giá.',
      'Bộ lớp học, bộ thẻ bổ sung, sổ bán riêng và tài liệu số hợp pháp là các hướng mở rộng dự kiến. Hoạt động trải nghiệm trả phí chỉ được xem xét khi có đơn vị đặt tổ chức và phương án triển khai phù hợp.',
      'Các giả định sản lượng trong hồ sơ dùng để lập phương án tài chính, chưa phải đơn đặt mua hoặc doanh thu đã đạt được.',
      'Bảng nguồn vốn trong hồ sơ ghi nhận thực thu 200.000đ từ bốn thành viên ngày 20/09/2026, theo sổ thu–chi nhóm. Hỗ trợ của phụ huynh, nhà trường và doanh thu tái đầu tư chưa được ghi nhận là đã nhận. Với dự toán 36.000đ/bộ, 10 bộ cần 360.000đ, vượt vốn góp 160.000đ; nhóm dự kiến làm từng đợt nhỏ và chỉ bổ sung nguồn hỗ trợ khi có xác nhận.',
    ],
  },
  {
    id: 'doanh-thu',
    title: '4.2 Dự kiến doanh thu',
    paragraphs: [
      'Phương án cơ sở giả định bán 50 bộ cá nhân với giá 55.000đ/bộ, tương ứng doanh thu 2.750.000đ. Đây là sản lượng lập kế hoạch, chưa phải đơn mua đã xác nhận.',
    ],
    table: {
      caption: 'Nguồn doanh thu trong kịch bản mở rộng của hồ sơ',
      headers: ['Dòng sản phẩm / hoạt động', 'Giả định', 'Doanh thu dự kiến'],
      rows: [
        ['Bộ cá nhân', '50 bộ × 55.000đ', '2.750.000đ'],
        ['Bộ dùng cho lớp học', '5 bộ × 200.000đ', '1.000.000đ'],
        ['Sổ hoặc thẻ bổ sung', '50 sản phẩm × 20.000đ', '1.000.000đ'],
        ['Hoạt động trải nghiệm', '5 buổi × 300.000đ', '1.500.000đ'],
        ['Tổng kịch bản mở rộng', 'Cộng bốn dòng trên', '6.250.000đ'],
      ],
      note: 'Bộ lớp học, sản phẩm bổ sung và trải nghiệm trả phí là hướng phát triển. Chỉ triển khai khi có nhu cầu xác nhận, nguồn lực và sự cho phép cần thiết; không cộng doanh thu mở rộng vào phương án cơ sở chỉ bán bộ cá nhân.',
    },
  },
  {
    id: 'tai-chinh',
    title: '4.3 Dự kiến chi phí và hiệu quả tài chính',
    paragraphs: ['Kịch bản cơ sở dưới đây chỉ xét 50 bộ cá nhân. Chi phí chung giả định 1.300.000đ gồm thiết kế 300.000đ, vận chuyển 200.000đ, truyền thông 300.000đ và dự phòng chung 500.000đ. Bao bì và hao hụt vật tư đã nằm trong chi phí trực tiếp, không cộng lại.'],
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
      note: 'Kịch bản cơ sở âm 350.000đ. Kịch bản mở rộng trong hồ sơ cộng thêm 5 bộ lớp học, 50 sản phẩm bổ sung và 5 buổi trải nghiệm: tổng doanh thu 6.250.000đ, tổng chi phí 5.450.000đ, chênh lệch 800.000đ. Nếu giữ các dòng sản phẩm mở rộng nhưng không có buổi trải nghiệm trả phí, chênh lệch là 300.000đ. Các kịch bản này có phạm vi khác nhau; đều là giả định, chưa phải lợi nhuận ròng hay kết quả kinh doanh.',
    },
  },
  {
    id: 'trien-khai',
    title: '4.4 Khả năng hoàn vốn và thời điểm hoàn vốn',
    paragraphs: [
      'Theo giả định giá bán 55.000đ và chi phí trực tiếp 36.000đ, mỗi bộ còn chênh lệch 19.000đ trước chi phí chung. Để bù 1.300.000đ chi phí chung cần 1.300.000 ÷ 19.000 ≈ 68,42, tức tối thiểu 69 bộ cá nhân.',
      'Đây là phép tính riêng cho dòng bộ cá nhân, chưa phải điểm hòa vốn của toàn dự án. Khả năng hoàn vốn phụ thuộc giá vốn đầy đủ, sản lượng, các dòng sản phẩm và thời điểm thực thu, thực chi.',
      'Hồ sơ chưa đủ dữ liệu xác định thời điểm hoàn vốn. Nhóm dự kiến ghi nhận dòng tiền theo tháng: làm mẫu và khảo giá, thử nghiệm và điều chỉnh, sau đó bán thử nếu đủ điều kiện. Chỉ ghi nhận doanh thu, khoản hỗ trợ và đơn mua khi thực tế phát sinh.',
    ],
  },
  {
    id: 'truyen-thong',
    title: '5.1–5.4 Kế hoạch, công cụ và kênh truyền thông',
    paragraphs: [
      'Dự kiến xây dựng poster, video giới thiệu và hướng dẫn sử dụng tối đa 3 phút; tổ chức hoạt động trải nghiệm tự nguyện và giới thiệu qua các kênh của nhà trường khi được kiểm duyệt.',
      'Bộ nhận diện thống nhất tên Ví nhỏ thông minh và khẩu hiệu “Ví nhỏ – Thói quen lớn”. Nội dung giới thiệu nêu đúng cấu phần, công dụng, tình trạng mẫu và giá dự kiến; ưu tiên ảnh sản phẩm thực tế khi có ảnh được phép sử dụng.',
      'Nhóm theo dõi lượt tiếp cận, đăng ký tìm hiểu, phản hồi, số đơn xác nhận và điều chỉnh sản phẩm. Lượt xem hoặc lượt thích không được coi là bằng chứng trực tiếp về nhu cầu mua; hoạt động tại trường cần được cho phép và bảo đảm tự nguyện.',
      'Theo mục 5.3, hướng truyền thông gồm thử thách 30 ngày, hoạt động “Một tình huống – Nhiều lựa chọn”, nội dung do học sinh thực hiện và minh chứng từ sản phẩm, hoạt động thực tế. Chỉ công bố hình ảnh, phản hồi và dữ liệu khi được phép.',
    ],
    table: {
      caption: 'Tóm lược mục 5.1, 5.2 và 5.4: kênh, công cụ và cách theo dõi',
      headers: ['Kênh / công cụ dự kiến', 'Nội dung', 'Chỉ số ghi nhận khi triển khai'],
      rows: [
        ['Poster, bảng tin', 'Giới thiệu thành phần, công dụng, giá dự kiến và QR.', 'Số poster sử dụng, chi phí, lượt quét và phản hồi.'],
        ['Video của nhóm', 'Giới thiệu, hướng dẫn và minh họa tình huống.', 'Lượt xem, câu hỏi, người đăng ký trải nghiệm.'],
        ['Hoạt động tại trường, lớp, CLB', 'Trải nghiệm tự nguyện và ghi phản hồi.', 'Người thực tế tham gia, phiếu hợp lệ, góp ý cải tiến.'],
        ['Kênh trường, phụ huynh và giáo viên', 'Thông tin được duyệt, trao đổi nhu cầu.', 'Lượt tiếp cận, người hỏi thêm, đơn xác nhận nếu có.'],
        ['QR và tài liệu số', 'Dẫn đến học liệu, video hoặc phiếu phù hợp.', 'Lượt truy cập, lượt quét, phản hồi tự nguyện.'],
      ],
      note: 'Các kênh trong bảng là kế hoạch của hồ sơ, không khẳng định website đã tích hợp bộ đếm, khảo sát trực tuyến hay hệ thống nhận đơn. Website hiện mở hướng dẫn qua QR và mở email để liên hệ.',
    },
  },
]
