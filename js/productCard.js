const swiper2 = new Swiper('.card__pseudo-images', {
    direction: 'horizontal',
    watchSlidesProgress: true,
    slidesPerView: 5,
    freeMode: true,
    breakpoints: {
        360: {
            slidesPerView: 3
        },
        515: {
            slidesPerView: 4
        },
        700: {
            slidesPerView: 5
        },
        800: {
            slidesPerView: 6
        },
        900: {
            slidesPerView: 7
        },
        1000: {
            slidesPerView: 5
        }
    }
})

const swiper = new Swiper('.card__main', {
    // Optional parameters
    thumbs: {
        swiper: swiper2
    },
    navigation: {
        nextEl: '.right',
        prevEl: '.left'
    }
})

const swiper3 = new Swiper('.before--swiper', {
    slidesPerView: 4,
    navigation: {
        prevEl: '.after__left',
        nextEl: '.after__right'
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        590: {
            slidesPerView: 2,
        },
        825: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 2,
        },
        1150: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
})

const swiper4 = new Swiper('.with--swiper', {
    slidesPerView: 4,
    navigation: {
        prevEl: '.before__left',
        nextEl: '.before__right'
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        590: {
            slidesPerView: 2,
        },
        825: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 2,
        },
        1150: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
})