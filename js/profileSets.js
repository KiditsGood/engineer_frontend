$('.history__desc-open').click(function () {
    let historyToggle = $(this).parent().next()
    let historyArrow = $(this)

    $('.history__toggle').slideUp('slow')
    $('.history__desc-open').removeClass('history__desc-open--active')

    if (historyToggle.css('display') == 'block') {
        historyToggle.slideUp('slow')
        historyArrow.removeClass('history__desc-open--active')
    }
    else {
        historyToggle.slideDown('slow')
        historyArrow.addClass('history__desc-open--active')
    }
})

$('.cabinet__field-tabs--item').click(function (){
    $(this).addClass('cabinet__field-tabs--active').siblings().removeClass('cabinet__field-tabs--active')
})

$('.cabinet__field-tabs--item:first-child').click(function (){
    $('.cabinet__field-data').css({
        display: 'none'
    })
    $('.cabinet__field-history').css({
        display: 'flex'
    })
})

$('.cabinet__field-tabs--item:last-child').click(function (){
    $('.cabinet__field-data').css({
        display: 'flex'
    })
    $('.cabinet__field-history').css({
        display: 'none'
    })
})