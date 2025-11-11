// api/sheet.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set header for CSV text output
  res.setHeader("Content-Type", "text/csv; charset=utf-8");
  
  // CSV data - chỉ trả về text CSV
  const csvData = [
    ["key","expire",""],
    ["e9a3bf77dab2f369f78cb6a2d64e451f","2222-12-31","Máy Chính"],
    ["4c132b2afe2481937ea9220b678558f4","2025-12-11","Sáu toàn"],
    ["17452aac5b1c9cf9cb81e39f4f32be50","2025-12-31","M2"],
    ["55e42f9ae26760d08ad1438e9ac6f08a","2025-12-31","M3"],
    ["26bb402a280cd99521a40be475d8f5ae","2025-12-31","M1"],
    ["f7a5f6c19cd1653892acd18938f00235","2025-12-31","M4"],
    ["3db8c2279732fda0cd873583d18356cd","2025-12-31","M5"],
  ];
  
  const csvText = csvData.map(r => r.map(c => `"${c}"`).join(",")).join("\n") + "\n";
  return res.status(200).send(csvText);
}

