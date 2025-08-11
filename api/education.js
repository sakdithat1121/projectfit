export default function handler(req, res) {
  res.status(200).json({
    title: "การศึกษา",
    items: [
      {
        program: "ปริญญาตรี เทคโนโลยีสารสนเทศ",
        school: "มหาวิทยาลัยเทคโนโลยีจินตนาการ",
        years: "2021–ปัจจุบัน",
        detail: "Web Dev, UI/UX, Motion",
      },
      {
        program: "ประกาศนียบัตร วิทยาการคอมฯ",
        school: "วิทยาลัยเทคนิคบางสิทธิ์",
        years: "2019–2021",
        detail: "OOP, Network, Algorithm",
      },
    ],
  });
}
