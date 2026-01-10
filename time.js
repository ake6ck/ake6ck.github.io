document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");

  function updateTime() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    timeElement.textContent = currentTime;
  }

  updateTime();
  setInterval(updateTime, 1000);
});