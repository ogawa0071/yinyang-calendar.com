$(document).ready(function() {
  function onresize() {
    if (window.innerHeight <= window.innerWidth && 768 <= window.innerWidth) {
      $("body").css("height", window.innerHeight);
    } else {
      $("body").css("height", "");
    }
  }

  window.onresize = onresize;

  onresize();
});
