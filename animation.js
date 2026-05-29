document.addEventListener('DOMContentLoaded', function() {
  lottie.loadAnimation({
    container: document.getElementById('mobileclick'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/click.json'
  });
});