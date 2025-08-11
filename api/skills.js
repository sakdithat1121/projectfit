export default function handler(req, res) {
  res.status(200).json({
    title: "ความเชี่ยวชาญ",
    skills: [
      {
        name: "Frontend",
        percent: 92,
        stack: "React, Next.js, Tailwind, Motion",
      },
      { name: "Backend", percent: 85, stack: "Node.js, Express, Prisma, REST" },
      {
        name: "UI/UX",
        percent: 88,
        stack: "Design System, Wireframe, Prototype",
      },
      { name: "DevOps", percent: 76, stack: "Vercel, Docker(พื้นฐาน), CI/CD" },
    ],
  });
}
