var main = function() {
    alert('app.js loaded');
    $('.menuHeading').click(function() {
        alert('clicked menu');
        $('.menu').animate({
            left:'0px'
        },200);
        $('.aboutBody').animate({
            left:'285px'
        },200);
        });
    });

};

$(document).ready(main);
