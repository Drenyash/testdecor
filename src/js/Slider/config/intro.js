import { Navigation, Pagination, Autoplay } from "swiper";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination, Autoplay],
        slideVisibleClass: 'slider__item--visible',
        watchSlidesProgress: true,
        autoplay: true,
        loop: true,
        speed: 700,
        pagination: {
            el: el.querySelector('[data-pagination]'),
            type: 'bullets',
            bulletClass: 'slider__pagination-bullet',
            bulletActiveClass: 'slider__pagination-bullet--active',
            clickable: true,
        }
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev]'),
                disabledClass: 'slider__button--disabled',
            };
        }
    } catch (e) {
    }

    return data;
}
