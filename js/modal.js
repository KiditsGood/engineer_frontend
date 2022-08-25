$('.products__item').each(function () {
    let product = $(this)

    $(this.lastElementChild.lastElementChild.lastElementChild).click(function () {
        ($('#product--modal').modal({
            fadeDuration: 200
        }))
        $('.product__click-item--image').attr('src', product.find('.products__item-image').attr('src'))
        $('.products__click-item--name').html(product.find('.products__item-name').text())
    })
})