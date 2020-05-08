// Custom
$(function() {
    var $typed = $("#typed");
    $typed.typed({
      strings: [$typed.text()],
      typeSpeed: 100,
      startDelay: 200
    });
  });