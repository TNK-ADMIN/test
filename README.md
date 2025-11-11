# Vercel CSV API

Simple API endpoint that returns CSV text in Google Sheets format.

## Setup & Deploy

### 1. Install dependencies
```bash
npm i
```

### 2. Push to GitHub
```bash
# Đã khởi tạo git và commit, bây giờ push lên GitHub:
# Tạo repository trên GitHub trước, sau đó:

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel
```bash
# Deploy với Vercel CLI
vercel

# Hoặc deploy qua Vercel Dashboard:
# 1. Đăng nhập Vercel
# 2. Import project từ GitHub
# 3. Vercel sẽ tự động deploy
```

### Use

CSV endpoint: `https://<your-deployment>/spreadsheets/d/1ooutDlm2SOxviPB4RjLyB-AUoncqpFSjpysU5gVdZPY/gviz/tq?tqx=out:csv&gid=0&something=ignored`

Returns CSV text with the following format:
```
"key","expire",""
"e9a3bf77dab2f369f78cb6a2d64e451f","2222-12-31","Máy Chính"
...
```

### Notes

* The endpoint returns static CSV data - no external API calls needed.
* Any query parameters after `gviz/tq` are ignored.

