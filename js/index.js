(function() {
    new vidbg('.video', {
        mp4: 'video/world.mp4',
        webm: 'video/world.webm',
        poster: 'img/poster.jpg',
        overlay: false
      });

    if (document.body.clientWidth >= 576) {
      new Rellax('.rocket');
    }
})();
