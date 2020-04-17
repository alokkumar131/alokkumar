$(document).ready(function(){
  $("form").submit(function(e){

    var data = {};
    $(".php-email-form").serializeArray().map(function(x){data[x.name] = x.value;}); 
    console.log(data)



    function validateName($name) {
      var nameReg = /^[a-zA-Z0-9][a-zA-Z0-9 ]*$/;
      return nameReg.test( $name );
    }
    function validateEmail($email) {
      var val =$("#email").val() !== "";
      var emailReg = /^[a-zA-Z0-9][a-zA-Z0-9 ]*$/;
      return emailReg.test($email) && val;
    }
    function validateSubject($subject) {
      var val =$("#subject").val() !== "";
      var subjectReg = /^[a-zA-Z0-9][a-zA-Z0-9 ]*$/
      return subjectReg.test( $subject ) && val;
  }
    
    function validateMessage($message) {
      var val = $("#message").val() !== "";
      var messageReg = /^[a-zA-Z0-9][a-zA-Z0-9 ]*$/
      return messageReg.test( $message ) && val;
    }


    var name = data.name;
    var email = data.name;
    var subject = data.name;
    var message = data.name;

    if(validateName(name) && validateEmail(email) && validateSubject(subject) && validateMessage(message)){
      $(".readmore").val('Please wait ...')
      .attr('disabled','disabled')
      .css('opacity', 0.5)
      $.ajax({
        type: "POST",
        url: "https://pfser.herokuapp.com/api/userform",
        data: JSON.stringify(data),
        crossDomain: true,
        contentType: "application/json",
        headers: {
          "Accept": "application/json"
        },
      success:function(data){
        $(".readmore").val('Submit')
        .attr('disabled',false)
        .css({'opacity': 1})
        $( 'form' ).each(function(){
          this.reset();
      });
        $("#success").show(function(){
          setTimeout(function(){
            $("#success").hide(1000)
          },5000)
        
        })
        
      },
      error:function(){
        $("#warning").show(function(){
          setTimeout(function(){
            $("#warning").hide(1000)
          },5000)
        
        })
        $(".readmore").val('Submit')
        .attr('disabled',false)
        .css({'opacity': 1})
        $( 'form' ).each(function(){
          this.reset();
      });
      }
  
      })
    }
    else{
      return false
    }
    e.preventDefault(); //STOP default action 


  });

})