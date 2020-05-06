function openNav() {
    document.getElementById("myNav").style.width = "70%";
    $('body').attr("scroll","no").attr("style", "overflow: hidden");
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    $('body').css('overflow', 'auto');

  }






$(document).ready(function(){



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


  $('#my-latest-section, #nav-tabContent, #fabnav').waypoint(function(direction) {
         if (direction == "down") {
      $('nav').addClass('fixed-top');
      $('nav').css('padding-top','0px');
      $('nav').css('opacity', '1');
      $('nav').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)')
      $('nav').css('background-color','#ffffff');
      $('nav').css('padding-bottom','0px');
      $('.containe').css('display','block');
      
    } else {
      $('nav').removeClass('fixed-top');


      $('nav').css('background-color','#ffffff');
      $('nav').css('box-shadow', '0 0px 0px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)')
     $('nav').css('background-color','#ffffff');
      $('.containe').css('display','none');
     
    }


  })
	




 

})
