# Hướng dẫn Deploy lên GitHub

## 1. Khởi tạo Git Repository

```bash
# Khởi tạo git repository
git init

# Add tất cả files
git add .

# Commit lần đầu
git commit -m "Initial commit: Vercel CSV API"
```

## 2. Tạo Repository trên GitHub

1. Đăng nhập vào GitHub
2. Tạo repository mới (New Repository)
3. **KHÔNG** tích vào "Initialize this repository with a README"
4. Copy URL của repository (ví dụ: `https://github.com/username/repo-name.git`)

## 3. Push code lên GitHub

```bash
# Thêm remote repository
git remote add origin https://github.com/username/repo-name.git

# Đổi tên branch thành main (nếu cần)
git branch -M main

# Push code lên GitHub
git push -u origin main
```

## 4. Deploy lên Vercel từ GitHub

### Cách 1: Deploy qua Vercel Dashboard
1. Đăng nhập vào [Vercel](https://vercel.com)
2. Click "New Project"
3. Import repository từ GitHub
4. Vercel sẽ tự động detect và deploy

### Cách 2: Deploy qua Vercel CLI
```bash
# Cài đặt Vercel CLI (nếu chưa có)
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

## 5. Các lệnh Git thường dùng

```bash
# Xem status
git status

# Add file cụ thể
git add <filename>

# Commit changes
git commit -m "Your commit message"

# Push lên GitHub
git push

# Pull từ GitHub
git pull

# Xem log
git log
```

## Lưu ý

- File `.gitignore` đã được tạo để bỏ qua `node_modules`, `.vercel`, và các file nhạy cảm
- Không commit file `.env` chứa thông tin bí mật
- Set environment variables trên Vercel Dashboard nếu cần

