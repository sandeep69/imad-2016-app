var main = function() {
    $('.menuHeading').click(function() {
        $('.menu').animate({
            left:'0px'
        },200);
    });

};

$(document).ready(main);
