var main = function() {
    $('.menuHeading').click(function() {
        alert('clicked menu');
        $('.menu').animate({
            left:'0px'
        },200);
    });

};

$(document).ready(main);
