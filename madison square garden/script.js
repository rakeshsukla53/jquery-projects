/**
 * Created by rakesh on 1/29/16.
 */


$(".cart").click(function(){
    $(".cart .dropdown-menu").show();
    $(".account .dropdown-menu").hide();
    $(".help .dropdown-menu").hide();
});

$(".account").click(function(){
    $(".cart .dropdown-menu").hide();
    $(".account .dropdown-menu").show();
    $(".help .dropdown-menu").hide();
});

$(".help").click(function(){
    $(".cart .dropdown-menu").hide();
    $(".account .dropdown-menu").hide();
    $(".help .dropdown-menu").show();
});


