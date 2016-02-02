/**
 * Created by rakesh on 1/29/16.
 */
var main = function() {

    $( "#top-text" ).keyup(function() {
        var text_value = $("#top-text").val();
        $('h1.top-caption').text(text_value);
    });

    $( "#bottom-text" ).keyup(function() {
        var text_value = $("#bottom-text").val()
        $('h1.bottom-caption').text(text_value);
    });

    $( "#image-url" ).keyup(function() {
        var text_value = $("#image-url").val()
        $('img').attr('src', text_value);
    });

}

$(document).ready(main);

