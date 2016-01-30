/**
 * Created by rakesh on 1/29/16.
 */

var main = function() {
    $('form').submit(function() {

        if(comment !== "") {
            var html = $('<li>').text(comment);

        }

        return false;
    });
};

$(document).ready(main);

