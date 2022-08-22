$('.burger').click(function () {
    $(this).toggleClass('open')

    $('.mobile__nav').slideToggle('slow')
})