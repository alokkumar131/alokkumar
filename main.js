function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  function hello(){
    alert("Hii")
  }

  $(function() {
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
  
