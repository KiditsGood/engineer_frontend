$('.cart--select').click(function (){
    let cartToggle = $(this).find('.sort--toggle')
    let cartArrow = $(this).find('.sort__input-field--arrow')
    let cartInput = $(this)

    $('.sort--toggle').slideUp(200)
    $('.cart--select').removeClass('select--active')
    $('.sort__input-field--arrow').removeClass('arrow--active')

    if (cartToggle.css('display') == 'none'){
        cartToggle.slideDown('200')
        cartArrow.addClass('arrow--active')
        cartInput.addClass('select--active')
    }
    else {
        cartToggle.slideUp('200')
        cartArrow.removeClass('arrow--active')
        cartInput.removeClass('select--active')
    }

    $(this).find('.sort__hidden-item').click(function (){
        let cartParent = $(this).parent().parent().parent()
        let inputParent = cartParent.next()

        cartParent.find('.sort__input-filed--text').html($(this).text())
        inputParent.val($(this).attr('data-value'))
    })
})

// $('.sort__hidden-item').click(function () {
//     $(this).find('.sort__input-filed--text').html($(this).text())
//
//     $(this).each(function () {
//         let selectValue = $(this).attr('data-value')
//
//         $('.sort__input-value').val(selectValue)
//     })
// })