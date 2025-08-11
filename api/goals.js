export default function handler(req, res) {
  res.status(200).json({
    title: "เป้าหมาย",
    html: "<p>สร้างประสบการณ์ผู้ใช้ที่ <strong>เหนือจินตนาการ</strong></p>",
  });
}
