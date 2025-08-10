const dragon = document.getElementById("dragon");

// เคลื่อนตำแหน่งตามเมาส์ (โหมดติดตามทันที)
document.addEventListener("mousemove", (e) => {
  const x = e.pageX - dragon.clientWidth / 2;
  const y = e.pageY - dragon.clientHeight / 2;
  dragon.style.left = x + "px";
  dragon.style.top = y + "px";

  // กลับด้านซ้าย/ขวาตามทิศทางเมาส์
  if (e.movementX < 0) {
    dragon.style.transform = "scaleX(-1)";
  } else if (e.movementX > 0) {
    dragon.style.transform = "scaleX(1)";
  }
});
