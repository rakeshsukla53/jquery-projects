/**
 * Created by rakesh on 1/29/16.
 */

var main = function() {

    $( ".day" ).click(function() {
        $(".hourly").toggle();
        $(".weekday").find("span.glyphicon").toggleClass('glyphicon-minus');
    });


};

$(document).ready(main);


