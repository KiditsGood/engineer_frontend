$(window).on("scroll", function () {
    let mainTop = $('.form__item:first-child').find('.form__top').offset().top

    if ($(window).width() > 999) {
        if ($(window).scrollTop() > mainTop) {
            $('.sum').addClass('sum__block')
            $('.sum--wrap').css({
                padding: '0'
            })
        }
        else {
            $('.sum').removeClass('sum__block')
            $('.sum--wrap').css({
                padding: '0 10px 0 336px'
            })
        }
    }
})
