var main = function() {
    $('.nav li').click(function() {
        var category = $(this).attr('class');

        if (category === 'nav-consumer') {
            // $('.thumbnail').removeClass('active');
            $('.thumbnail').removeClass('selected');
            $('.consumer').addClass('selected');
            // 'selected' is the css selector that you want to activate
        } else if (category === 'nav-mobile') {
            $('.thumbnail').removeClass('selected');
            $('.mobile').addClass('selected');
        } else if (category === 'nav-commerce') {
            $('.commerce').addClass('selected');
        } else if (category === 'nav-enterprise') {
            $('.enterprise').addClass('selected');
        } else if (category === 'nav-all') {
            $('.thumbnail').removeClass('selected');
        };

    });
};

$(document).ready(main);

