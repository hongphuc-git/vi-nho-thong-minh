import { PhHeart as Heart, PhPiggyBank as PiggyBank, PhShoppingBag as ShoppingBag, PhTarget as Target } from '@phosphor-icons/vue'

export const walletPockets = [
  { number: '01', name: 'Chi tiêu cần thiết', short: 'Cần thiết', description: 'Dành cho sách vở, đồ dùng học tập và những điều thực sự cần.', icon: ShoppingBag, color: 'sage', reminder: 'Điều cần trước nhé!', example: 'Bút đã hết mực, vở đã hết trang: đây là lúc ưu tiên đồ dùng học tập.', label: 'ƯU TIÊN NHU CẦU' },
  { number: '02', name: 'Tiết kiệm', short: 'Tiết kiệm', description: 'Tích lũy từng chút một. Một khoản nhỏ hôm nay, một thói quen tốt ngày mai.', icon: PiggyBank, color: 'yellow', reminder: 'Để dành một chút.', example: 'Còn dư sau khoản chi cần thiết? Em có thể dành lại cho những ngày sau.', label: 'TÍCH LŨY MỖI NGÀY' },
  { number: '03', name: 'Mục tiêu cá nhân', short: 'Mục tiêu', description: 'Biến điều em mong muốn thành một kế hoạch có thể thực hiện.', icon: Target, color: 'blue', reminder: 'Từng bước tới điều muốn.', example: 'Muốn mua một cuốn sách yêu thích? Ghi số tiền cần có và lập kế hoạch theo tuần.', label: 'CÓ MỘT KẾ HOẠCH' },
  { number: '04', name: 'Chia sẻ', short: 'Chia sẻ', description: 'Để việc học về tiền luôn đi cùng sự quan tâm đến những người xung quanh.', icon: Heart, color: 'pink', reminder: 'Một chút để sẻ chia.', example: 'Một món quà nhỏ hoặc một việc làm giúp bạn: chia sẻ theo khả năng của em.', label: 'QUAN TÂM MỌI NGƯỜI' },
]
