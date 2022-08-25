$('.header__nav-city').click(() => {
    $('#map').modal({
        fadeDuration: 200
    })
})

$('.header__buttons-item--drop:first-child').click(() => {
    $('#login').modal({
        fadeDuration: 200,
    })
})

$('#login > .login__form > .login__form-button:last-child').click(() => {
    console.log(123)

    $('#registration').modal({
        fadeDuration: 200,
    })
})

$('.login__form-reset').click(() => {
    $('#reset').modal({
        fadeDuration: 200
    })
})

$('.mobile__bot-item:nth-child(4)').click(function () {
    if($.modal.isActive()) {
        $(this).removeClass('mobile__bot-item--active')
        $.modal.close()
    }
    else {
        $('#login').modal({
            fadeDuration: 200,
        })
    }
})

$('.product--modal--close, .current').click(() => {
    $('.mobile__bot-item:nth-child(4)').removeClass('mobile__bot-item--active')
})

$('.mobile__bot-item:not(:nth-child(4))').click(() =>{
    $.modal.close()
})