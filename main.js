function openNav() {
    document.getElementById("myNav").style.width = "100%";
    $('body').attr("scroll","no").attr("style", "overflow: hidden");
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    $('body').css('overflow', 'auto');

  }

  function hello(){
    alert("Hii")
  }

  $(function() {
      $("#myCarousel").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;
    
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "right") {
              $(".carousel-item")
                .eq(0)
                .appendTo($(this).find(".carousel-inner"));
            } else {
              $(".carousel-item")
                .eq(0)
                .appendTo($(this).find(".carousel-inner"));
            }
          }
        }
      });
    
    
    $('.scroll').on('click', function(e) {
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


    $(".se-pre-con").fadeOut("slow");;


    setInterval(function(){


      $("#div3").fadeOut(4000,function(){
       $("#div3").text("UI");
        $("#div3").fadeIn(4000,function(){
        
          $("#div3").text("UX");
        })
      });
         
          
    
      
    },1000);

    
  });
  
  