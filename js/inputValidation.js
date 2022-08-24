document.querySelectorAll('.col__change-number').forEach(currValue => {
    currValue.addEventListener('keyup', function () {
        currValue.value = currValue.value.replace(/[^\d]/g, '1')
    })
})