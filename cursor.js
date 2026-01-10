document.addEventListener("DOMContentLoaded", () => {
  const cursorBox = document.getElementById("cursorbox");
  let enlargeTimeout = null;
  let clickHoldTimeout = null;
  let pendingMouseUp = null;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    cursorBox.style.left = `${x}px`;
    cursorBox.style.top = `${y}px`;

    const isImportant = isImportantTarget(event.target);

    if (isImportant) {
      clearEnlargeTimeout();
      cursorBox.style.width = "min(1vw, 1vh)";
      cursorBox.style.height = "min(1vw, 1vh)";
    } else {
      if (!enlargeTimeout) {
        enlargeTimeout = setTimeout(() => {
          cursorBox.style.width = "min(20vw, 20vh)";
          cursorBox.style.height = "min(20vw, 20vh)";
          enlargeTimeout = null;
        }, 500);
      }
    }
  });

  document.addEventListener("mousedown", (event) => {
    clearEnlargeTimeout();
    clearClickHoldTimeout();

    const isImportant = isImportantTarget(event.target);
    if (isImportant) {
      cursorBox.style.width = "min(0.75vw, 0.75vh)";
      cursorBox.style.height = "min(0.75vw, 0.75vh)";
    } else {
      cursorBox.style.width = "min(19vw, 19vh)";
      cursorBox.style.height = "min(19vw, 19vh)";
    }

    clickHoldTimeout = setTimeout(() => {
      clickHoldTimeout = null;
      if (pendingMouseUp) {
        pendingMouseUp();
        pendingMouseUp = null;
      }
    }, 250);
  });

  document.addEventListener("mouseup", (event) => {
    const isImportant = isImportantTarget(event.target);

    const handleMouseUp = () => {
      if (isImportant) {
        cursorBox.style.width = "min(1vw, 1vh)";
        cursorBox.style.height = "min(1vw, 1vh)";
      } else {
        cursorBox.style.width = "min(20vw, 20vh)";
        cursorBox.style.height = "min(20vw, 20vh)";
      }
    };

    if (clickHoldTimeout) {
      pendingMouseUp = handleMouseUp;
    } else {
      handleMouseUp();
    }
  });

  function isImportantTarget(el) {
    return el.matches("p, h1, h2, h3, h4, h5, h6, a, button, img, li");
  }

  function clearEnlargeTimeout() {
    if (enlargeTimeout) {
      clearTimeout(enlargeTimeout);
      enlargeTimeout = null;
    }
  }

  function clearClickHoldTimeout() {
    if (clickHoldTimeout) {
      clearTimeout(clickHoldTimeout);
      clickHoldTimeout = null;
    }
    pendingMouseUp = null;
  }
});
