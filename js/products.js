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
            counter -= 1

            currentValue.val(counter)
        }
    })

    plusButton.click(function () {
        if (currentValue.val() == 999) {
            counter = 999

            currentValue.val(counter)
        }
        else {
            counter += 1

            currentValue.val(counter)
        }
    })
})

$('.products__item-buttons--buy').each(function () {
    let productItem = $(this)

    productItem.click(function () {
        if (productItem.text() == 'Купить') {
            productItem.html('В корзине')
        }
        else {
            productItem.html('Купить')
        }
    })
})