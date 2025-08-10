const fish = document.getElementById("fish");

// เริ่มให้ปลาขยับตามเมาส์แบบติดหนึบ (ง่ายสุด)
document.addEventListener("mousemove", (e) => {
  // จัดตำแหน่งให้ปลาศูนย์กลางอยู่จุดเมาส์
  const x = e.pageX - fish.width / 2;
  const y = e.pageY - fish.height / 2;
  fish.style.left = x + "px";
  fish.style.top = y + "px";

  // กลับด้านปลาให้หันซ้าย/ขวาตามทิศการเคลื่อน
  if (e.movementX < 0) {
    fish.style.transform = "scaleX(-1)"; // หันซ้าย
  } else if (e.movementX > 0) {
    fish.style.transform = "scaleX(1)"; // หันขวา
  }
});
