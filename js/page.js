document.getElementById("exploreBtn").addEventListener("click", () => {
  window.location.href = "page2.html"; // placeholder for next page
});

const canvas = document.getElementById("sparkleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function createParticle() {
  const colors = ["#ff80ab", "#f06292", "#ff4081", "#f8bbd0"];
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1,
  };
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      Object.assign(p, createParticle());
    }
  });
  requestAnimationFrame(drawParticles);
}

for (let i = 0; i < 100; i++) {
  particles.push(createParticle());
}
drawParticles();
