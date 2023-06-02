import Swiper from "swiper";
import sliderFactory from "./slider";
import {Form} from "./form";
import {Agreement} from "./agreement";
import {Dropdown} from "./dropdown";
import {Input} from "./input";
import {Search} from "./search";
import {Category} from "./category";

class App {
    constructor() {
        this.createSliders();
        this.initForms();
        this.initAgreement();
        this.initInputs();
        this.initDropdown();
        this.initSearch();
        this.initCategory();
    }

    initAgreement() {
        const el = document.querySelectorAll('[data-agreement]');
        el.forEach(item => new Agreement(item));
    }

    initInputs() {
        const el = document.querySelectorAll('[data-input-item]');

        el.forEach(item => new Input(item));
    }

    initCategory() {
        const el = document.querySelectorAll('[data-category]');
        el.forEach(item => new Category(item));
    }

    initDropdown() {
        const el = document.querySelectorAll('[data-dropdown-open]');

        el.forEach(item => new Dropdown(item));
    }

    initSearch() {
        const el = document.querySelectorAll('[data-search]');

        el.forEach(item => new Search(item));
    }

    createSliders() {
        const el = document.querySelectorAll('[data-slider]');

        if (el) this.sliders = [];

        el.forEach(item => {

            let slider = this.initSlider(item)

            item.onkeydown = evt => {
                if (evt.key === 'Tab') {
                    evt.preventDefault();
                }
            }

            const updateSlider = () => {
                if (typeof slider === "undefined") {
                    slider = this.initSlider(item)
                    slider.update();
                }
            }

            const changeStateOfSlider = (width) => {
                if (width <= 572) {
                    if (typeof slider !== 'undefined') {
                        slider.destroy(true, true)
                        slider = undefined;
                    }
                } else {
                    updateSlider();
                }
            }

            if (item.hasAttribute('data-mobile')) {
                changeStateOfSlider(window.innerWidth)
                window.addEventListener('resize', () => {
                    changeStateOfSlider(window.innerWidth);
                })
            }

            this.sliders.push(slider);
        });
    }

    initForms() {
        const el = document.querySelectorAll('[data-form]');

        el.forEach(item => new Form(item));
    }

    initSlider(item) {
        return new Swiper(
            item.querySelector('[data-slide]'),
            sliderFactory(item)
        );
    }
}

export default App;
