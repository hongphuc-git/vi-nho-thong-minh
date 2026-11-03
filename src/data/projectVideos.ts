import { publicAsset } from '@/lib/publicAsset'
export interface ProjectVideo {
  id: string
  title: string
  description: string
  source: string
  poster: string
  duration: string
  captions?: string
}

export const projectVideos: ProjectVideo[] = [
  {
    id: 'gioi-thieu-nhom',
    title: 'Giới thiệu nhóm',
    description: 'Gặp gỡ nhóm thực hiện dự án Ví nhỏ thông minh.',
    source: publicAsset('/videos/gioi-thieu-nhom-louder-v2.mp4'),
    poster: publicAsset('/images/video-posters/gioi-thieu-nhom-enhanced.jpg'),
    duration: '00:17',
  },
  {
    id: 'van-de-hien-nay',
    title: 'Vấn đề hiện nay',
    description: 'Nhóm trình bày vấn đề mà dự án hướng tới.',
    source: publicAsset('/videos/van-de-hien-nay-louder-v2.mp4'),
    poster: publicAsset('/images/video-posters/van-de-hien-nay-enhanced.jpg'),
    duration: '00:22',
  },
  {
    id: 'tinh-huong',
    title: 'Tình huống đời sống',
    description: 'Một tình huống được nhóm lựa chọn để giới thiệu dự án.',
    source: publicAsset('/videos/tinh-huong-louder-v2.mp4'),
    poster: publicAsset('/images/video-posters/tinh-huong-enhanced.jpg'),
    duration: '00:15',
  },
  {
    id: 'qua-trinh-lam-viec',
    title: 'Quá trình làm việc',
    description: 'Những hoạt động của nhóm trong quá trình xây dựng dự án.',
    source: publicAsset('/videos/qua-trinh-lam-viec-louder-v2.mp4'),
    poster: publicAsset('/images/video-posters/qua-trinh-lam-viec-enhanced.jpg'),
    duration: '00:21',
  },
  {
    id: 'tao-san-pham',
    title: 'Tạo sản phẩm',
    description: 'Theo dõi quá trình nhóm thực hiện sản phẩm.',
    source: publicAsset('/videos/tao-san-pham-louder-v2.mp4'),
    poster: publicAsset('/images/video-posters/tao-san-pham-enhanced.jpg'),
    duration: '00:23',
  },
  {
    id: 'thu-nghiem-san-pham',
    title: 'Thử nghiệm sản phẩm',
    description: 'Đoạn phim do nhóm cung cấp về thao tác thử sản phẩm.',
    source: publicAsset('/videos/thu-nghiem-san-pham-louder-v2.mp4'),
    poster: publicAsset('/images/video-posters/thu-nghiem-san-pham-enhanced.jpg'),
    duration: '00:17',
  },
  {
    id: 'khao-sat-san-pham',
    title: 'Khảo sát sản phẩm',
    description: 'Nhóm giới thiệu hoạt động khảo sát liên quan đến sản phẩm.',
    source: publicAsset('/videos/khao-sat-san-pham-voice-v3.mp4'),
    poster: publicAsset('/images/video-posters/khao-sat-san-pham-enhanced.jpg'),
    duration: '00:23',
  },
  {
    id: 'cong-nang-san-pham',
    title: 'Công năng sản phẩm',
    description: 'Tìm hiểu các công năng của bộ công cụ qua phần giới thiệu của nhóm.',
    source: publicAsset('/videos/cong-nang-san-pham-louder-v2.mp4'),
    poster: publicAsset('/images/video-posters/cong-nang-san-pham-enhanced.jpg'),
    duration: '00:21',
  },
  {
    id: 'du-dinh-tuong-lai',
    title: 'Dự định tương lai',
    description: 'Những dự định tiếp theo được nhóm chia sẻ.',
    source: publicAsset('/videos/du-dinh-tuong-lai-louder-v2.mp4'),
    poster: publicAsset('/images/video-posters/du-dinh-tuong-lai-enhanced.jpg'),
    duration: '00:27',
  }
]
