/**
 * Created by rakesh on 1/29/16.
 */


var main = function() {
    $('form').submit(function() {
        var firstName = $('#first').val();

        if(firstName === "") {
            $('p.first-name-error').text('Please enter your first name');
        }

        var lastName = $('#last').val();

        if(lastName === "") {
            $('p.last-name-error').text('Please enter your last name');
        }

        var email = $('#email').val();

        if(email === '') {
            $('p.email-error').text('Please your email address');
        }

        var password = $('#password').val();

        if(password === '') {
            $('p.password-error').text('Please enter a password');
        }

        else if(password.length < 8) {
            $('p.password-error').text('Password is weak');
        }

        return false;
    })
}

$(document).ready(main);