# Hướng dẫn sử dụng trang Library

## Tổng quan
Trang Library hiển thị một gallery ảnh với mô tả. Mỗi ảnh được quản lý thông qua front matter trong file `library.html`.

## Cách thêm ảnh mới

### Bước 1: Thêm ảnh vào thư mục
Đặt ảnh của bạn vào thư mục `/assets/uploads/` (hoặc bất kỳ thư mục nào trong `assets/`)

Ví dụ:
- `/assets/uploads/my-photo.jpg`
- `/assets/uploads/nature-landscape.png`

### Bước 2: Mở file `library.html`
Mở file `library.html` ở thư mục gốc của dự án.

### Bước 3: Thêm ảnh vào front matter
Trong phần front matter (phần giữa `---` và `---`), tìm đến mảng `images:` và thêm một item mới:

```yaml
images:
  - url: /assets/uploads/avatar-square.JPG
    description: "Ảnh avatar mẫu"
  - url: /assets/uploads/my-photo.jpg
    description: "Mô tả cho ảnh mới của bạn"
```

### Ví dụ đầy đủ:

```yaml
---
layout: default
title: Library
permalink: /library/
images:
  - url: /assets/uploads/avatar-square.JPG
    description: "Ảnh avatar mẫu"
  - url: /assets/uploads/nature.jpg
    description: "Cảnh thiên nhiên đẹp"
  - url: /assets/uploads/city.jpg
    description: "Thành phố về đêm"
---
```

## Cách sửa mô tả ảnh

1. Mở file `library.html`
2. Tìm đến ảnh cần sửa trong mảng `images:`
3. Sửa nội dung trong trường `description:`

Ví dụ:
```yaml
- url: /assets/uploads/my-photo.jpg
  description: "Mô tả cũ"  # Sửa thành "Mô tả mới"
```

## Cách xóa ảnh

1. Mở file `library.html`
2. Xóa toàn bộ block của ảnh đó (từ `- url:` đến `description:`)

Ví dụ, để xóa ảnh này:
```yaml
- url: /assets/uploads/old-photo.jpg
  description: "Ảnh cũ"
```
Chỉ cần xóa 3 dòng trên.

## Lưu ý

- **Đường dẫn ảnh**: Luôn bắt đầu với `/assets/` hoặc sử dụng đường dẫn tuyệt đối từ thư mục gốc
- **Định dạng ảnh**: Hỗ trợ tất cả định dạng ảnh web (jpg, jpeg, png, gif, webp, svg)
- **Kích thước ảnh**: Ảnh sẽ tự động resize để vừa với grid, nhưng nên sử dụng ảnh có kích thước hợp lý để tối ưu tốc độ tải
- **Thứ tự hiển thị**: Ảnh sẽ hiển thị theo thứ tự trong mảng `images:`

## Cấu trúc file library.html

```yaml
---
layout: default
title: Library
permalink: /library/
images:
  - url: [đường dẫn ảnh]
    description: "[mô tả ảnh]"
  - url: [đường dẫn ảnh khác]
    description: "[mô tả ảnh khác]"
---
```

Phần HTML và CSS đã được thiết lập sẵn, bạn chỉ cần chỉnh sửa phần front matter (phần YAML giữa `---`).

