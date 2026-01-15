const playlist = [
  { title: "TEST", artist: "EXAMPLE", src: "https://example.com/song.mp3"},
  { title: "TEST", artist: "EXAMPLE", src: "https://example.com/song.mp3"}
];

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("playpause");
  const prevBtn = document.getElementById("previous");
  const skipBtn = document.getElementById("skip");
  const songNameEl = document.getElementById("songname");
  const artistNameEl = document.getElementById("artistname");

  let currentTrack = 0;
  let isPlaying = false;

  function loadTrack(index) {
  const track = playlist[index];

  fadeTextChange(songNameEl, track.title);
  fadeTextChange(artistNameEl, track.artist);

  audio.src = track.src;
  }

  function togglePlayPause() {
    if (isPlaying) {
      audio.pause();
      playPauseBtn.textContent = "⏵";
    } else {
      audio.play();
      playPauseBtn.textContent = "⏸";
    }
    isPlaying = !isPlaying;
  }

  function prevTrack() {
    if (audio.currentTime > 2) {
      audio.currentTime = 0;
    } else {
      currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
      loadTrack(currentTrack);
      audio.play();
      playPauseBtn.textContent = "⏸";
      isPlaying = true;
    }
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = "⏸";
    isPlaying = true;
  }

  audio.addEventListener("ended", nextTrack);

  playPauseBtn.addEventListener("click", togglePlayPause);
  prevBtn.addEventListener("click", prevTrack);
  skipBtn.addEventListener("click", nextTrack);

  loadTrack(currentTrack);
  
  function fadeTextChange(element, newText) {
  element.style.transition = "opacity 0.3s ease";
  element.style.opacity = 0;

  setTimeout(() => {
    element.textContent = newText;
    element.style.opacity = 1;
  }, 250);
  }

});