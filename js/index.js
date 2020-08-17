(function() {
    const PARALLAX_SIZE = 560;

    new vidbg('.video', {
        mp4: 'video/world.mp4',
        webm: 'video/world.webm',
        poster: 'img/poster.jpg',
        overlay: false
    });

    let parallax = null;
    resize();

    window.addEventListener('resize', resize);

    function resize() {
        if (document.body.clientWidth < PARALLAX_SIZE) {
            parallax.destroy();
            parallax = null;
        } else if (parallax == null) {
        parallax = new Rellax('.rocket');
      }
    }
})();
