$(document).ready(function() {
    $(document).ajaxStart(function() {
        $("#spinner").css("display", "block");
    });
    $(document).ajaxComplete(function() {
        $("#spinner").css("display", "none")
    });
$.ajax({

    url: "https://pfser.herokuapp.com/",
    type: "GET",
    dataType : "json"
})
  .done(function( data ) {

    var items = data

    $.each(items, function(key, val) {

        $("#img_json")
            .append("<div class='col-sm-6 col-md-6 col-lg-3 col-6 mb-3 web'>" + "<div class=' card text-center' data-toggle='modal' data-target='#exampleModalCenter'>" +
                "<a href='#' target='_blank' id='img_json'></a>" +
                "<img class='card-img-top img-fluid img-card' src=" + val.url + "   alt='abc' width='200' height='200'></a>" +


                "</div>" + "</div>"

            )
    });
    var itms = $("#nav-home .web");
    var numItems = itms.length;
    var perPage = 24;

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

function getUiDesigns(e){
  $("#nav-profile-tab").off("click");
  e.preventDefault();
    $("#spinner2").css("display", "block");
  $.ajax({

    url: "https://pfser.herokuapp.com/ui",
    type: "GET",
    dataType : "json",
})
  .done(function( data ) {
    
    $("#spinner2").css("display", "none");
    var items = data
    $.each(items, function(key, val) {

        $("#temp")
        .append("<div class='col-sm-6 col-md-6 col-lg-3 col-6 mb-3 tem'>" + "<div class='card text-center'>" +
        "<a href='"+val.main+"' target='_blank' >" +
        "<img class='img-card card-img-top img-fluid' src=" + val.thumb + "   alt='"+val.caption+"'></a>" +

        "<div class='card-body'>" +
        "<p class='card-text colorLight fontBold fontMedium'>"+(val.caption).toUpperCase()+"</p>" +
        "</div>" +
        "</div>" + "</div>"

    )
    });
    var itms = $("#nav-profile .tem");
    var numItems = itms.length;
    var perPage = 18;

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

  })
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
  })
}


function getBootstrapProjects(){
  $("#nav-contact-tab").off("click");
  $("#spinner3").css("display", "block");

  $.ajax({

    url: "https://pfser.herokuapp.com/web",
    type: "GET",
    dataType : "json",
})
  .done(function( data ) {
    $("#spinner3").css("display", "none");
    var items = data
    $.each(items, function(key, val) {



        $("#graphics")
        .append("<div class='col-sm-6 col-md-6 col-lg-3 col-6 mb-3 tem'>" + "<div class='card text-center'>" +
        "<a href='"+val.main+"' target='_blank' >" +
        "<img class='img-card card-img-top img-fluid' src=" + val.thumb + "   alt='"+val.caption+"'></a>" +

        "<div class='card-body'>" +
        "<p class='card-text colorLight fontBold fontMedium'>"+(val.caption).toUpperCase()+"</p>" +
        "</div>" +
        "</div>" + "</div>"

    )
    });
    var itms = $("#nav-contact .gr");
    var numItems = itms.length;
    var perPage = 18;

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

  })
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
  })



}
$("#nav-profile-tab").on("click", getUiDesigns)
$("#nav-contact-tab").on("click", getBootstrapProjects);


        $("body").on('click', '.img-card', function() {
            var src = $(this).attr("src");
            $("#modal_img").attr("src", src);
            $("#download").attr("href", src)
        })
  
})