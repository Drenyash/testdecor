import { Navigation, Pagination } from "swiper";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        slidesPerView: 3,
        spaceBetween: 30,
        slideVisibleClass: 'slider__item--visible',
        watchSlidesProgress: true,
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
