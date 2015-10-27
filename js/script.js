(function(window, document, undefined) {
  $(document).ready(function() {
    $('body').keyup(function(event) {
      if (event.keyCode === 65) {
        window.location = '/about';
      } else if (event.keyCode === 72) {
        window.location = '/';
      } else if (event.keyCode === 83) {
        window.location = '/sponsors'
      }
    });

    var path = window.location.pathname;
    if (path === '/about/') {
      $('.sidebar-left .links a[name="about"]').toggleClass('selected');
    } else if (path === '/' || path === '/index.html') {
      $('.sidebar-left .links a[name="home"]').toggleClass('selected');
    } else if (path === '/sponsors/') {
      $('.sidebar-left .links a[name="sponsors"]').toggleClass('selected');
    }
  });
  
  $(document).mousemove(function(e) {
    $('svg.gear').css('transform', 'rotate('+((e.pageY/5)%360)+'deg)');
  });

})(this, this.document);
  
