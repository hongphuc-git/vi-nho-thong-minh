import { PhBookOpen as BookOpen, PhCalendarDots as CalendarDays, PhShoppingBag as ShoppingBag, PhBicycle as Bike, PhPencil as Pencil } from '@phosphor-icons/vue'
import type { Component } from 'vue'

export interface PracticeScenario {
  id: string
  title: string
  subtitle: string
  skill: string
  story: string
  question: string
  icon: Component
  facts: string[]
  answers: { id: string; text: string; feedback: string; correct: boolean }[]
}

// TH01–TH05: hồ sơ dự án sửa ngày 01.11.2026. Phương án và gợi ý được biên tập cho web.
export const firstScenario: PracticeScenario = {
  id: 'TH01', title: 'Hộp bút mới', subtitle: 'hay đồ dùng cần thiết?',
  skill: 'Phân biệt nhu cầu – mong muốn', icon: Pencil,
  facts: ['Có 100.000đ', 'Hộp bút mới 45.000đ'],
  story: 'Em có 100.000đ để chuẩn bị đồ dùng học tập. Cửa hàng có hộp bút mới giá 45.000đ, trong khi hộp bút cũ vẫn dùng tốt nhưng em còn thiếu vở, bút.',
  question: 'Em sẽ chi tiêu thế nào?',
  answers: [
    { id: 'want', text: 'Mua hộp bút mới vì mình rất thích.', feedback: 'Thích một món đồ là điều bình thường. Nhưng hộp bút cũ vẫn dùng tốt, còn vở và bút đang thiếu. Em thử cân nhắc điều cần trước nhé.', correct: false },
    { id: 'need', text: 'Mua đủ vở, bút cần thiết; giữ lại phần còn dư.', feedback: 'Ưu tiên đồ dùng đang thiếu, tiếp tục dùng hộp bút cũ và để dành phần tiền còn lại cho mục tiêu khác.', correct: true },
    { id: 'save', text: 'Giữ lại toàn bộ, chưa mua gì cả.', feedback: 'Tiết kiệm là tốt, nhưng cũng cần đáp ứng việc học. Em có thể mua những đồ dùng thực sự cần, rồi tiết kiệm phần còn lại.', correct: false },
  ],
}

export const practiceScenarios: PracticeScenario[] = [firstScenario,
  {
    id: 'TH02', title: 'Một buổi trải nghiệm', subtitle: 'mình cùng lên kế hoạch nhé!',
    skill: 'Lập kế hoạch, chia nhỏ mục tiêu', icon: CalendarDays,
    facts: ['Cần 30.000đ', 'Chuẩn bị trong 3 tuần'],
    story: 'Lớp em tổ chức buổi trải nghiệm cuối học kỳ, mỗi bạn chuẩn bị 30.000đ trong 3 tuần. Em lập kế hoạch để dành từ ngăn nào, mỗi tuần bao nhiêu?',
    question: 'Kế hoạch nào giúp em chuẩn bị đều đặn?',
    answers: [
      { id: 'weekly', text: 'Đặt mục tiêu 30.000đ, để dành 10.000đ mỗi tuần vào ngăn mục tiêu.', feedback: '10.000đ × 3 tuần = 30.000đ. Em có thể ghi mục tiêu và theo dõi từng tuần, đồng thời bảo đảm các khoản thiết yếu vẫn đủ.', correct: true },
      { id: 'later', text: 'Đợi đến tuần cuối rồi mới tìm cách đủ 30.000đ.', feedback: 'Đợi đến cuối kỳ có thể khiến em khó chuẩn bị. Chia nhỏ thành 10.000đ mỗi tuần giúp em chủ động hơn. Nếu chưa đủ khả năng, hãy trao đổi sớm với người lớn.', correct: false },
      { id: 'all', text: 'Chuyển hết tiền cần mua đồ dùng học tập sang mục tiêu trải nghiệm.', feedback: 'Mục tiêu mới vẫn cần cân đối với nhu cầu thiết yếu. Em thử chọn khoản có thể để dành mà không làm thiếu đồ dùng học tập nhé.', correct: false },
    ],
  },
  {
    id: 'TH03', title: 'Cuốn sách em thích', subtitle: 'còn bao lâu để đủ tiền?',
    skill: 'Tính toán, theo dõi tiến độ', icon: BookOpen,
    facts: ['Giá sách 60.000đ', 'Đã có 24.000đ', 'Để dành 12.000đ/tuần'],
    story: 'Em muốn mua cuốn sách tham khảo giá 60.000đ, hiện ngăn mục tiêu có 24.000đ. Nếu mỗi tuần để dành 12.000đ thì sau mấy tuần em mua được sách?',
    question: 'Em cần để dành thêm mấy tuần?',
    answers: [
      { id: 'two', text: '2 tuần là đủ.', feedback: 'Sau 2 tuần, em có 24.000đ + 24.000đ = 48.000đ, vẫn thiếu 12.000đ. Em thử tính thêm một tuần nhé.', correct: false },
      { id: 'three', text: '3 tuần nữa, vì còn thiếu 36.000đ.', feedback: '60.000đ − 24.000đ = 36.000đ; 36.000đ ÷ 12.000đ = 3 tuần. Ghi lại mỗi khoản để dành sẽ giúp em thấy mình đang tiến gần mục tiêu.', correct: true },
      { id: 'five', text: '5 tuần nữa vì lấy 60.000đ chia 12.000đ.', feedback: 'Em đã có sẵn 24.000đ, nên chỉ cần tính phần còn thiếu. Hãy lấy 60.000đ trừ 24.000đ trước khi chia nhé.', correct: false },
    ],
  },
  {
    id: 'TH04', title: 'Một vòng chợ phiên', subtitle: 'thích nhiều, chọn thế nào?',
    skill: 'Kiểm soát chi tiêu theo cảm xúc', icon: ShoppingBag,
    facts: ['Mang theo 20.000đ', 'Dừng lại trước khi mua'],
    story: 'Em đi chợ phiên cùng người thân, mang theo 20.000đ và thấy nhiều đồ ăn vặt, đồ chơi hấp dẫn. Em xử lý thế nào để không chi tiêu theo cảm xúc?',
    question: 'Em sẽ làm gì trước khi quyết định mua?',
    answers: [
      { id: 'impulse', text: 'Thích món nào thì mua ngay, hết tiền mới dừng.', feedback: 'Mua ngay có thể khiến em hết tiền trước khi nghĩ tới điều cần thiết. Em thử dừng lại, xem giá và cân nhắc từng món nhé.', correct: false },
      { id: 'borrow', text: 'Mượn thêm tiền để mua hết các món mình thích.', feedback: 'Mượn thêm chỉ vì thích nhiều món có thể làm em chi vượt khả năng. Hãy cân nhắc trong khoản 20.000đ đang có và trao đổi với người thân.', correct: false },
      { id: 'pause', text: 'Dừng lại, xem giá, chọn món phù hợp và đặt giới hạn trong 20.000đ.', feedback: 'Dừng một chút giúp em phân biệt thích nhất thời với điều thật sự muốn. Em có thể chọn món phù hợp hoặc chưa mua, không cần tiêu hết tiền.', correct: true },
    ],
  },
  {
    id: 'TH05', title: 'Xe đạp thủng săm', subtitle: 'xoay xở khoản chi bất ngờ.',
    skill: 'Xử lý khoản chi phát sinh', icon: Bike,
    facts: ['Sửa xe 15.000đ', 'Ngăn cần thiết còn 10.000đ', 'Còn thiếu 5.000đ'],
    story: 'Xe đạp của em bị thủng săm, sửa hết 15.000đ; ngăn chi tiêu cần thiết chỉ còn 10.000đ. Em điều chỉnh các ngăn ví thế nào?',
    question: 'Cách xử lý nào giúp em giải quyết khoản thiếu?',
    answers: [
      { id: 'adjust', text: 'Nếu ngăn khác còn đủ, chuyển thêm 5.000đ để sửa xe và ghi lại điều chỉnh.', feedback: '15.000đ − 10.000đ = 5.000đ. Em có thể cân nhắc chuyển từ khoản chưa cấp thiết, điều chỉnh mục tiêu và ghi lại. Nếu không đủ hoặc chưa rõ cách xử lý, hãy nhờ người lớn hỗ trợ.', correct: true },
      { id: 'ignore', text: 'Chưa sửa, tiếp tục đi xe dù săm đã thủng.', feedback: 'Tiếp tục đi xe bị thủng săm có thể không an toàn và làm xe hỏng thêm. Em nên dừng lại ở nơi an toàn, trao đổi với người lớn và tìm cách sửa.', correct: false },
      { id: 'unchanged', text: 'Lấy thêm 5.000đ từ ngăn khác nhưng không ghi lại vì tổng tiền không đổi.', feedback: 'Chuyển tiền giữa các ngăn không làm tăng tổng tiền, nhưng kế hoạch từng ngăn đã đổi. Ghi lại việc chuyển và khoản sửa xe 15.000đ giúp em biết số dư thực tế.', correct: false },
    ],
  },
]
