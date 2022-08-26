$('.col__change-number').each(function () {
    let counter = 1
    let minusButton = $(this).prev()
    let plusButton = $(this).next()
    let currentValue = $(this)

    minusButton.click(function () {
        if (currentValue.val() == 1) {
            counter = 1

            currentValue.val(counter)
        }
        else {
            counter = parseInt(currentValue.val())

            currentValue.val(counter - 1)
        }
    })

    plusButton.click(function () {
        if (currentValue.val() == 999) {
            counter = 999

            currentValue.val(counter)
        }
        else {
            counter = parseInt(currentValue.val())

            currentValue.val(counter + 1)
        }
    })
})

$('.products__item-buttons--buy').each(function () {
    let productItem = $(this)

    productItem.click(function () {
        productItem.html('В корзине')
        productItem.addClass('product--cart--active')

        setTimeout(function () {
            productItem.html('Купить')
            productItem.removeClass('product--cart--active')
        }, 2000)
    })
})

$('.card__buy-buttons_buy').each(function () {
    let productItem = $(this)

    productItem.click(function () {
        productItem.html('Добавлено')
        productItem.addClass('product--cart--active')

        setTimeout(function () {
            productItem.html('В корзину')
            productItem.removeClass('product--cart--active')
        }, 2000)
    })
})
