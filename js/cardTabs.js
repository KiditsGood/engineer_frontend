$('.chars--tab').click(() => {
    $('.card__desc-field').css({
        display: 'flex'
    })
    $('.card__desc-description').css({
        display: 'none'
    })
    $('.card__desc-files').css({
        display: 'none'
    })
})

$('.desc--tab').click(() => {
    $('.card__desc-field').css({
        display: 'none'
    })
    $('.card__desc-description').css({
        display: 'flex'
    })
    $('.card__desc-files').css({
        display: 'none'
    })
})

$('.files--tab').click(() => {
    $('.card__desc-field').css({
        display: 'none'
    })
    $('.card__desc-description').css({
        display: 'none'
    })
    $('.card__desc-files').css({
        display: 'flex'
    })
})

$('.card__desc-tabs--item').click(function () {
    $(this).addClass('tabs--active').siblings().removeClass('tabs--active')
})