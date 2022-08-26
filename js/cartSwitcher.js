$('.cart--switcher').find('.sort__hidden-item').click(function (){
    if ($(this).text() == 'Самовывоз'){
        $('.address--item').css({
            display: 'flex'
        })
        $('.cart--map').css({
            display: 'block'
        })
        $('.delivery--address').css({
            display: 'none'
        })
        $('.delivery--item').css({
            display: 'none'
        })
    }
    else {
        $('.address--item').css({
            display: 'none'
        })
        $('.cart--map').css({
            display: 'none'
        })
        $('.delivery--address').css({
            display: 'flex'
        })
        $('.delivery--item').css({
            display: 'flex'
        })
    }
})