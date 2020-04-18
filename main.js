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


// //Navbar sticky animation
//   $('#my-latest-section, ').waypoint(function(direction) {
//          if (direction == "down") {
//       $('nav').addClass('fixed-top');
//       $('nav').css('padding-top','0px');
//       $('nav').css('opacity', '1');
//       $('nav').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)')
//       $('nav').css('background-color','#ffffff');
//       $('nav').css('padding-bottom','0px');
//       $('.containe').css('display','block');
      
//     } else {
//       $('nav').removeClass('fixed-top');


//       $('nav').css('background-color','#ffffff');
//       $('nav').css('box-shadow', '0 0px 0px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)')
//      $('nav').css('background-color','#ffffff');
//       $('.containe').css('display','none');
     
//     }


//   })

  //Navbar sticky animation
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
	


// var items = $("#v-pills-bs.card");
//     var numItems = items.length;
//     var perPage = 9;

//     items.slice(perPage).hide();

//     $('#pagination-container2').pagination({
//         items: numItems,
//         itemsOnPage: perPage,
//         prevText: "&laquo;",
//         nextText: "&raquo;",
//         onPageClick: function (pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//         }
//     });


// var items = $("#v-pills-mt.card");
//     var numItems = items.length;
//     var perPage = 9;

//     items.slice(perPage).hide();

//     $('#pagination-container3').pagination({
//         items: numItems,
//         itemsOnPage: perPage,
//         prevText: "&laquo;",
//         nextText: "&raquo;",
//         onPageClick: function (pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//         }
//     });

// var items = $("#v-pills-ps.card");
//     var numItems = items.length;
//     var perPage = 9;

//     items.slice(perPage).hide();

//     $('#pagination-container4').pagination({
//         items: numItems,
//         itemsOnPage: perPage,
//         prevText: "&laquo;",
//         nextText: "&raquo;",
//         onPageClick: function (pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//         }
//     });


// var items = $("#v-pills-html .card");
//     var numItems = items.length;
//     var perPage = 9;

//     items.slice(perPage).hide();

//     $('#pagination-container5').pagination({
//         items: numItems,
//         itemsOnPage: perPage,
//         prevText: "&laquo;",
//         nextText: "&raquo;",
//         onPageClick: function (pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//         }
//     });

// var items = $("#v-pills-html .card");
//     var numItems = items.length;
//     var perPage = 9;

//     items.slice(perPage).hide();

//     $('#pagination-container6').pagination({
//         items: numItems,
//         itemsOnPage: perPage,
//         prevText: "&laquo;",
//         nextText: "&raquo;",
//         onPageClick: function (pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//         }
//     });

// var items = $("#v-pills-html .card");
//     var numItems = items.length;
//     var perPage = 9;

//     items.slice(perPage).hide();

//     $('#pagination-container7').pagination({
//         items: numItems,
//         itemsOnPage: perPage,
//         prevText: "&laquo;",
//         nextText: "&raquo;",
//         onPageClick: function (pageNumber) {
//             var showFrom = perPage * (pageNumber - 1);
//             var showTo = showFrom + perPage;
//             items.hide().slice(showFrom, showTo).show();
//         }
//     });


	






 

})
