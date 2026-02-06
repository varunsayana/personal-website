// subtle parallax for the right glow (mouse + touch)
const glow = document.querySelector(".bg__glow");

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

function onMove(clientX, clientY) {
  const x = (clientX / window.innerWidth - 0.5) * 2;
  const y = (clientY / window.innerHeight - 0.5) * 2;
  targetX = x;
  targetY = y;
}

window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY), { passive: true });
window.addEventListener("touchmove", (e) => {
  if (!e.touches?.length) return;
  onMove(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });

function tick() {
  currentX += (targetX - currentX) * 0.06;
  currentY += (targetY - currentY) * 0.06;

  glow.style.transform = `translate3d(${currentX * 10}px, ${currentY * 10}px, 0)`;
  requestAnimationFrame(tick);
}

tick();
