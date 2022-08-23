$('.sort__input-field').click(() => {
    $('.sort--toggle').slideToggle(200)

    $('.sort__input-field--arrow').toggleClass('arrow--active')

    $('.sort__input-field').toggleClass('select--active')
})

$('.sort__hidden-item').click(function () {
    $('.sort__input-filed--text').html($(this).text())

    $(this).each(function () {
        let selectValue = $(this).attr('data-value')

        $('.sort__input-value').val(selectValue)
    })
})

// $('.filter__select-field').each(function () {
//     $(this).click(() => {
//         $('.filter__select-toggle').slideToggle(200)
//
//         $(this).next().slideToggle(200)
//     })
// })

$('.filter__select-field').click(function () {
    $('.filter__select-toggle').slideUp(200)
    $('.filter__select-field').removeClass('select--active')
    $('.filter__select-field--arrow').removeClass('arrow--active')
    if ($(this).next().css('display') == 'block') {
        $(this).next().slideUp(200)
        $(this).removeClass('select--active')
        $(this.lastElementChild).removeClass('arrow--active')
    }
    else {
        $(this).next().slideDown(200)
        $(this).addClass('select--active').removeClass('arrow--active')
        $(this.lastElementChild).addClass('arrow--active')
    }
})