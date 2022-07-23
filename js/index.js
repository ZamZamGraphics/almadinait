
sal();


// navbar-fixed-top
$(window).scroll(function () {
    
    //const element = document.querySelector('.navbar');
    if ($(this).scrollTop() > 120) {
        $('.navbar').addClass("sticky-top");
    } else {
        $('.navbar').removeClass('sticky-top');
    }
    
    //Display or hide scroll to top button 
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});


// Scroll to top
$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 800);
    return false;
});

