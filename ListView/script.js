/**
 * Created by rakesh on 2/1/16.
 */

var template = function(text) {
    return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
    $('form').submit(function() {



        return false;
    });


};

$(document).ready(main);

