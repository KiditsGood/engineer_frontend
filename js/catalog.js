$('.header__nav-item:first-child').click(() => {
  if ($(window).width() < 1000) {
      $('.catalog').show(400)

      $('.mobile__nav').slideToggle('slow')
      $('.burger').removeClass('open')

      $('.mobile__bot-item:first-child').addClass('mobile__bot-item--active')
  }
})

$('.catalog--burger').click(() => {
    $('.catalog').hide(400)

    $('.mobile__bot-item:first-child').removeClass('mobile__bot-item--active')
})

$('.mobile__bot-item:first-child').click(() => {
    if ($('.catalog').css('display') == 'block') {
        $('.catalog').hide(400)
    }
    else {
        $('.catalog').show(400)
    }
})

$('.mobile__bot-item:not(:first-child)').click(() => {
    if ($('.catalog').css('display') == 'block') {
        $('.catalog').hide(400)
    }
})

$('.catalog--flex').click(function () {

   if ($(window).width() > 999) {
       $('.catalog--toggle').hide(400)
       $('.catalog--flex').removeClass('catalog__item-active')

       $(document).mouseup(function (e) {
           let catalogItem = $('.catalog--toggle')

           if ( !catalogItem.is(e.target) && catalogItem.has(e.target).length === 0) {
               catalogItem.hide(400)
               $('.catalog--flex').removeClass('catalog__item-active')
           }
       })

       if ($(this.lastElementChild).css('display') == 'block') {

           $(this).removeClass('catalog__item-active')
           $(this.lastElementChild).hide(400)
       }
       else {
           $(this).addClass('catalog__item-active')
           $(this.lastElementChild).show(400)
       }
   }
   else {
       $('.catalog--toggle').hide('slow')
       $('.open--arrow').removeClass('open--arrow').addClass('catalog__item-text')

       if ($(this.lastElementChild).css('display') == 'block') {
           $(this.firstElementChild.lastElementChild).removeClass('open--arrow').addClass('catalog__item-text')
           $(this.lastElementChild).hide('slow')
       }
       else {
           $(this.firstElementChild.lastElementChild).addClass('open--arrow').removeClass('catalog__item-text')
           $(this.lastElementChild).show('slow')
       }
   }
})