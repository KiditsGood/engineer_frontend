$('.products__filter-show').click(() => {
    $('.products__filter-hidden').slideToggle('slow')
    if ($('.products__filter-show').text() == 'Скрыть') {
        $('.products__filter-show').html('Показать все фильтры <span class="products__filter-show--value">12</span>')
    }
    else {
        $('.products__filter-show').html('Скрыть')
    }
})
