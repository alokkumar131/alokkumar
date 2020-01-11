// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//     $('body').attr("scroll","no").attr("style", "overflow: hidden");
//   }
  
//   function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//     $('body').css('overflow', 'auto');

//   }

//   function hello(){
//     alert("Hii")
//   }

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
    
    
//     $('.scroll').on('click', function(e) {
//       e.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 1000, function(){
 
//         // when done, add hash to url
//         // (default click behaviour)
//         window.location.hash = hash;
//       });
//     });


//     $(".se-pre-con").fadeOut("slow");;


//     setInterval(function(){


//       $("#div3").fadeOut(4000,function(){
//        $("#div3").text("UI");
//         $("#div3").fadeIn(4000,function(){
        
//           $("#div3").text("UX");
//         })
//       });
         
          
    
      
//     },1000);

// $(document).ready(function(){
//   var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//       notify('I am 20px from the top of the window')
//     },
//     offset: 20 
//   })
// })
$(document).ready(function(){
  $('#my-latest-section').waypoint(function(direction) {
         if (direction == "down") {
      $('nav').addClass('fixed-top');
      $('nav').css('padding-top','0px');
      $('nav').css('box-shadow', '0 4px 8px 0 rgba(0,0,0,0.2)');
      $('nav').css('background-color','#020251');
      $('nav').css('padding-bottom','0px');
    } else {
      $('nav').removeClass('fixed-top');
      $('nav').css('padding-top','59px');
      $('nav').css('padding-bottom','0px');
      $('nav').css('box-shadow', 'rgba(0, 0, 0, 0) 0px 0px 0px 0px');
      $('nav').css('background-color','#ffffff00');
     
    }
  })
    

    

// var waypoint = new Waypoint({
//   element: document.getElementsByClassName('#my-latest-section'),
//   handler: function(direction) {
//     if (direction == "down") {
//       $('nav').addClass('fixed-top');
//     } else {
//       $('nav').removeClass('fixed-top');
//     }
//   },
//   offset: '60px'
//   });
// var inview = new Waypoint.Inview({
//   element: $('#my-latest-section')[0],
//   entered: function(direction) { 
//      console.log("working");        
//   }
// });
})

    // var waypoint = new Waypoint({
    //   element: document.getElementById('direction-waypoint'),
    //   handler: function(direction) {
    //     notify('Direction: ' + direction)
    //   }
    // })


  
  