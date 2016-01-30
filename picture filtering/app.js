/**
 * Created by rakesh on 1/29/16.
 */

var main = function() {
    $('.nav li').click(function() {
        var category = $(this).attr('class');

        $('.nav li').removeClass('active');
        $(this).addClass('active');




    });
};

$(document).ready(main);

