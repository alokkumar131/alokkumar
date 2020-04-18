$(document).ready(function() {
    $(document).ajaxStart(function() {
        $("#spinner").css("display", "block")
    });
    $(document).ajaxComplete(function() {
        $("#spinner").css("display", "none")
    });

$.ajax({

    url: "https://pfser.herokuapp.com/",
    type: "GET",
    dataType : "json",
})
  .done(function( data ) {
    var items = data
    $.each(items, function(key, val) {

        $("#img_json")
            .append("<div class='col-sm-4 mb-3 web'>" + "<div class=' card text-center' data-toggle='modal' data-target='#exampleModalCenter'>" +
                "<a href='#' target='_blank' id='img_json'></a>" +
                "<img class='card-img-top img-fluid img-card' src=" + val.url + "   alt='abc' width='200' height='200'></a>" +


                "</div>" + "</div>"

            )
    });
    var itms = $("#nav-home .web");
    var numItems = itms.length;
    var perPage = 21;

    itms.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            itms.hide().slice(showFrom, showTo).show();
        }
    });
  })
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
  })
//   .always(function( xhr, status ) {
//     alert( "The request is complete!" );
//   });


    $.getJSON("https://pfser.herokuapp.com/", function(data) {

        var items = data
        $.each(items, function(key, val) {

            $("#temp")
                .append("<div class='col-sm-4 mb-3 tem'>" + "<div class='card text-center'>" +
                    "<a href='https://alokkumar131.github.io/roar-bikes/' target='_blank' ></a>" +
                    "</a> <img class='img-card card-img-top img-fluid' src=" + val.url + "   alt='abc'></a>" +

                    "<div class='card-body'>" +
                    "<p class='card-text colorBlue fontBold fontLargex'>Roar Bikes</p>" +
                    "</div>" +
                    "</div>" + "</div>"

                )
        });

        var itms = $("#nav-profile .tem");
        var numItems = itms.length;
        var perPage = 9;

        itms.slice(perPage).hide();

        $('#pagination-container1').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&laquo;",
            nextText: "&raquo;",
            onPageClick: function(pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                itms.hide().slice(showFrom, showTo).show();
            }
        });




    });

    $.getJSON("https://pfser.herokuapp.com/", function(data) {
        var items = data
        $.each(items, function(key, val) {

            $("#graphics")
                .append("<div class='col-sm-4 mb-3 gr'>" + "<div class='card text-center'>" +
                    "<a href='https://alokkumar131.github.io/roar-bikes/' target='_blank' id='img_json'></a>" +
                    "</a> <img class='card-img-top img-fluid' src=" + val.url + "   alt='abc'></a>" +

                    "<div class='card-body'>" +
                    "<p class='card-text colorBlue fontBold fontLargex'>Roar Bikes</p>" +
                    "</div>" +
                    "</div>" + "</div>"

                )
        });

        var itms = $("#nav-contact .gr");
        var numItems = itms.length;
        var perPage = 9;

        itms.slice(perPage).hide();

        $('#pagination-container3').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&laquo;",
            nextText: "&raquo;",
            onPageClick: function(pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                itms.hide().slice(showFrom, showTo).show();
            }
        });




    });



        $("body").on('click', '.img-card', function() {
            var src = $(this).attr("src");
            $("#modal_img").attr("src", src);
            $("#download").attr("href", src)
        })
  
})