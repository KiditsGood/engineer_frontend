$('.mobile__bot-item:nth-child(3)').click(() => {
    if ($('.mobile__search').css('display') == 'block') {
        $('.mobile__search').css({
            display: 'none'
        })
    }
    else {
        $('.mobile__search').css({
            display: 'block'
        })
    }
})

$('.mobile__bot-item:not(:nth-child(3))').click(() => {
    $('.mobile__search').css({
        display: 'none'
    })
})