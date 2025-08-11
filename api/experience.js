export default function handler(req, res) {
  res.status(200).json({
    title: "ประสบการณ์ทำงาน",
    items: [
      {
        role: "Full-Stack Developer",
        org: "บริษัท XYZ",
        years: "2023–ปัจจุบัน",
        detail: "ออกแบบระบบ, API, CI/CD, React/Next.js",
      },
      {
        role: "Frontend Dev (Intern)",
        org: "Startup ABC",
        years: "2022–2023",
        detail: "React, Tailwind, Motion",
      },
    ],
  });
}
