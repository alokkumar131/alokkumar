function openNav() {
    document.getElementById("myNav").style.width = "100%";
    $('body').attr("scroll","no").attr("style", "overflow: hidden");
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    $('body').css('overflow', 'auto');

  }


//   $(function() {
//       $("#myCarousel").on("slide.bs.carousel", function(e) {
//         var $e = $(e.relatedTarget);
//         var idx = $e.index();
//         var itemsPerSlide = 3;
//         var totalItems = $(".carousel-item").length;
    
//         if (idx >= totalItems - (itemsPerSlide - 1)) {
//           var it = itemsPerSlide - (totalItems - idx);
//           for (var i = 0; i < it; i++) {
//             // append slides to end
//             if (e.direction == "right") {
//               $(".carousel-item")
//                 .eq(0)
//                 .appendTo($(this).find(".carousel-inner"));
//             } else {
//               $(".carousel-item")
//                 .eq(0)
//                 .appendTo($(this).find(".carousel-inner"));
//             }
//           }
//         }
//       });
    
    






$(document).ready(function(){
//Scroll button
  $('.herobtn').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });
  });


  $('#fab').on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });
  });






//Navbar sticky animation
  $('#my-latest-section').waypoint(function(direction) {
         if (direction == "down") {
      $('nav').addClass('fixed-top');
      $('nav').css('padding-top','0px');
      $('nav').css('box-shadow', '0 4px 8px 0 rgba(0,0,0,0.2)');
      $('nav').css('background-color','#020251');
      $('nav').css('padding-bottom','0px');
      $('.containe').css('display','block');
      
    } else {
      $('nav').removeClass('fixed-top');
      $('nav').css('padding-top','59px');
      $('nav').css('padding-bottom','0px');
      $('nav').css('box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px');
      $('nav').css('background-color','#ffffff00');
      $('.containe').css('display','none');
     
    }


  })
   

})
