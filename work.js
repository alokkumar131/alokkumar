        $(document).ready(function(){
            setTimeout(function(){
                $(".img-card").click(function(){
                    var src = $(this).attr("src");
                    alert(src)
                    $("#modal_img").attr("src", src);
                    $("#download").attr("href", src)
                })
            },1000)
        })
