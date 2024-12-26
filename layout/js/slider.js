function createSwiper(selector, paginationClass, nextClass, prevClass, startingClass, breakpoints) {
    return new Swiper(selector, {
        loop: false, // The scroll bar is infinitely scrollable by default.
        spaceBetween: 30,
        // speed: 5000,
        // autoplay: {
        //     delay: 1,
        // },
        pagination: {
            el: paginationClass,
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: nextClass,
            prevEl: prevClass
        },
        breakpoints: breakpoints,
        initialSlide: startingClass
    });
}

createSwiper('.home-card-wrapper', '.swiper-pagination', '.swiper-button-next', '.swiper-button-prev', 0, {
    0: { slidesPerView: 1 },
    500: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 3 }
});