document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('mobileclick');
    
    const animation = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/click.json'
    });
    
    setInterval(function() {
        const current = container.style.filter;
        container.style.filter = current === 'invert(1)' ? 'invert(0)' : 'invert(1)';
    }, 1000);
});
