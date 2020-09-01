$('a').click(function() {
    var top = $('body').find($(this).attr('href')).offset().top;
    $('html, body').animate({
        scrollTop: top
    }, 400, 'easeOutExpo');

    return false;
});