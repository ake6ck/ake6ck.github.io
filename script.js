document.addEventListener("DOMContentLoaded", () => {
  const cursorBox = document.querySelector('.cursorbox');
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    cursorBox.style.left = `${x}px`;
    cursorBox.style.top = `${y}px`;
  });
});

function updateTime() {
        const timeElement = document.querySelector('.timetext');
        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        timeElement.textContent = currentTime;
      }
      setInterval(updateTime, 1000);
      updateTime();