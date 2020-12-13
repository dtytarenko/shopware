(() => {
        const mySwiper = new Swiper(".swiper-container", {
            speed: 1000,
            grabCursor: true,
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
              },
            navigation: {
                nextEl: ".intro__button_next",
                prevEl: ".intro__button_prev"
            },
        });
})();

console.log('work')