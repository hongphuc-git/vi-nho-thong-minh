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
    id: 'gioi-thieu-tu-lop-hoc',
    title: 'Giới thiệu từ lớp học',
    description: 'Nhóm thực hiện xuất hiện cùng phần trình chiếu dự án Ví nhỏ thông minh.',
    source: publicAsset('/videos/gioi-thieu-tu-lop-hoc.mp4'),
    poster: publicAsset('/images/video-posters/gioi-thieu-tu-lop-hoc.jpg'),
    duration: '00:14',
  },
  {
    id: 'nhom-du-an-tai-truong',
    title: 'Gặp gỡ nhóm thực hiện',
    description: 'Bốn thành viên của nhóm trong khuôn viên nhà trường.',
    source: publicAsset('/videos/nhom-du-an-tai-truong.mp4'),
    poster: publicAsset('/images/video-posters/nhom-du-an-tai-truong.jpg'),
    duration: '00:14',
  },
  {
    id: 'cau-chuyen-do-dung-hoc-tap',
    title: 'Câu chuyện đồ dùng học tập',
    description: 'Một đoạn phim với những đồ dùng quen thuộc trong đời sống học sinh.',
    source: publicAsset('/videos/cau-chuyen-do-dung-hoc-tap.mp4'),
    poster: publicAsset('/images/video-posters/cau-chuyen-do-dung-hoc-tap.jpg'),
    duration: '00:08',
  },
  {
    id: 'khoanh-khac-cua-nhom',
    title: 'Khoảnh khắc của nhóm',
    description: 'Khoảnh khắc ngắn của các thành viên tại lớp học.',
    source: publicAsset('/videos/khoanh-khac-cua-nhom.mp4'),
    poster: publicAsset('/images/video-posters/khoanh-khac-cua-nhom.jpg'),
    duration: '00:04',
  },
]
