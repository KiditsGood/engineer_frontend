document.querySelectorAll('.col__change-number').forEach(currValue => {
    currValue.addEventListener('change', function () {
        currValue.value = currValue.value.replace(/[^\d]/g, '')
    })
})