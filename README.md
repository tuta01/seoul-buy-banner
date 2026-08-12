# 🏪 Multi-Store Banner Hub

Hệ thống lưu trữ và quản lý **Banner HTML5/CSS3 Responsive** dành cho nhiều cửa hàng khác nhau. 

Cấu trúc dự án được phân chia theo từng thư mục cửa hàng con nằm bên trong thư mục `stores/`.

---

## 📁 Cấu Trúc Dự Án (Multi-Store Architecture)

```text
seoul-buy-banner/
├── index.html                  # Master Hub - Trang tổng hợp & quản lý tất cả Banner cửa hàng
├── README.md                   # Tài liệu dự án
└── stores/                     # THƯ MỤC CHỨA TẤT CẢ CỬA HÀNG
    ├── seoul-buy/              # Cửa hàng: SEOUL BUY Bách Hóa
    │   ├── index.html          # Studio thử nghiệm Responsive (Mobile/Tablet/Desktop)
    │   ├── standalone-embed.html # File HTML nhúng độc lập 1-file
    │   ├── styles.css          # CSS thiết kế Minimalist
    │   ├── script.js          # JavaScript xử lý sao chép mã ưu đãi
    │   └── assets/images/      # Ảnh sản phẩm Lotte
    │
    └── <ten-cua-hang-moi>/     # Thư mục cho các cửa hàng tiếp theo (GS25, Seven Eleven...)
```

---

## 🛍️ Danh Sách Cửa Hàng Hiện Có

### 1. **SEOUL BUY Bách Hóa** (`stores/seoul-buy/`)
- **Mô tả**: Banner Hero Minimalist giới thiệu 3 tuyệt phẩm Lotte K-Snack (*Kẹo Caramel Sữa, Kẹo Malang Cow, Snack Doritos*).
- **Tính năng**: 100% Responsive, 1-Click sao chép mã giảm giá, thiết kế không đè ảnh trên Mobile.
- **Trang trải nghiệm**: [`stores/seoul-buy/index.html`](stores/seoul-buy/index.html)
- **Mã nhúng web**: [`stores/seoul-buy/standalone-embed.html`](stores/seoul-buy/standalone-embed.html)

---

## ➕ Cách Thêm Cửa Hàng Mới

Để thêm một cửa hàng mới vào hệ thống:
1. Tạo thư mục mới trong `stores/`: `stores/<ten-cua-hang-moi>/`
2. Đặt các file `index.html`, `styles.css`, `assets/` của cửa hàng đó vào thư mục mới.
3. Cập nhật thẻ danh sách cửa hàng mới trong trang tổng hợp `index.html`.
