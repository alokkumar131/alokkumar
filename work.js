        $(document).ready(function(){
            console.log("khsdkhj")
            setTimeout(function(){
                $(".img-card").click(function(){
                    var src = $(this).attr("src");
                    alert(src);
                    $("#modal_img").attr("src", src);
                    $("#download").attr("href", src)
                })
            },1000)
        })

        // $(document).ready(function(){
        // setTimeout(function(){
        //     $("img").click(function(){
        //         alert("jhhhhh")
        //          $("#myModal").css('display', 'block')
        //          var src = $(this).attr("src")
        //          alert(src)
        //         $("#myModal img").attr("src", src)
        //       })
        // },1000)


        // modal.onclick = function() {
//     img01.className += " out";
//     setTimeout(function() {
//        modal.style.display = "none";
//        img01.className = "modal-content";
//      }, 400);
    
//  }

// $("#myModal").click(function(){
//     setTimeout(function(){
//         $("#myModal").css('display', 'none');
//         $("#myModal img").addClass("modal-content")
//     },400)
// })
//     })

// Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }


// When the user clicks on <span> (x), close the modal
