// api/sheet.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

const CSV = `"key","expire",""
"e9a3bf77dab2f369f78cb6a2d64e451f","2222-12-31","Máy Chính"
"4c132b2afe2481937ea9220b678558f4","2025-12-11","Sáu toàn"
"17452aac5b1c9cf9cb81e39f4f32be50","2025-12-31","M2"
"55e42f9ae26760d08ad1438e9ac6f08a","2025-12-31","M3"
"26bb402a280cd99521a40be475d8f5ae","2025-12-31","M1"
"f7a5f6c19cd1653892acd18938f00235","2025-12-31","M4"
"3db8c2279732fda0cd873583d18356cd","2025-12-31","M5"
`;

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Set headers để hiển thị text trực tiếp trên trình duyệt (không download)
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Content-Disposition", "inline"); // quan trọng: không tải xuống
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=60, stale-while-revalidate=300");
  
  res.status(200).send(CSV);
}

