$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("header--hidden");
            $('.header__buttons-item').removeClass('header__buttons-item--drop')
            $('body').append('<a class="up"><i class="up__icon icon-"></i></a>')
            $('.up').click(() => {
                console.log(123)
                $('html, body').animate({scrollTop: 0}, 600);
            })
        } else {
            $(".header").removeClass("header--hidden");
            $('.header__buttons-item').addClass('header__buttons-item--drop')
            $('.up').remove()
        }
    });

});

$('.mobile__bot-item').click(function () {
    if ($(this).hasClass('mobile__bot-item--active')) {
        $(this).removeClass('mobile__bot-item--active')
    }
    else {
        $(this).addClass('mobile__bot-item--active').siblings().removeClass('mobile__bot-item--active')
    }
})
