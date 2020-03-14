

 // if($( "#submitButton" ).hasClass( "disabled" )){
    //     $("#submitButton").click(function(e){
    //         console.log("")
    //     })
      
    // }

    // else{

        // (function() {
         
        
        //         var empty = false;
        //         $('form > input').each(function() {
        //             if ($(this).val() == '') {
        //                 empty = true;
        //             }
        //         });
        

         
        // })()

        $(document).ready(function(){
            var empty;
            $("input").keyup(function(){
                // if($("#fname").val() =='' && $("#lname").val() =='' &&  $("#email").val() == '' &&  
                // $("#subject").val() =='' &&  $("#message").val() ==''){
                //     alert("empty")
                // }
                // else{
                //     alert("full")
                // }
              if($("#lname").val() ==''){
                    alert("empty");
                }
                else{
                    alert("full")
                }
                
            
            });




   
        $("#submitButton").click(function(e){

       
                var data = {};
                $("#contactForm").serializeArray().map(function(x){data[x.name] = x.value;}); 
              
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
                  alert("success");
            },
            error:function(){
                 alert("error")
            }
                })
      
           
        

    
       
  

    });
    });
