class Category {
    constructor(el) {
        this.el = el;
        this.item = this.el.querySelectorAll('[data-category-item]')
        this.listItem = null;
        this.categoryMain = this.el.querySelector('[data-category-main]')
        this.categoryDetail = this.el.querySelector('[data-category-detail]')
        this.linkItem = this.el.querySelectorAll('[data-category-link]');
        if (this.categoryDetail) {
            this.linkBack = this.categoryDetail.querySelector('[data-category-back]')
        }

        window.addEventListener('DOMContentLoaded', () => {
            this.setListeners();
        })
    }

    setListeners() {
        this.showHiddenBlock();
        this.showDetail();
        this.closeDetail()

        console.log(this.list)
    }

    showHiddenBlock() {
        this.item.forEach(item => {
            item.addEventListener('click', (evt) => {
                this.linkItem = item.querySelector('[data-category-link]');
                this.listItem = item.querySelector('[data-category-list]');
                if (evt.target !== this.linkItem) {
                    item.classList.toggle('category__item--toggle')
                }

                this.listItem.addEventListener('click', evt => evt.stopPropagation())
            })
        })
    }

    showDetail() {
        this.linkItem.forEach(linkItem => {
            linkItem.addEventListener('click', () => {
                this.categoryMain.classList.add('hidden');
                this.categoryDetail.classList.remove('hidden');

            })
        })
    }

    closeDetail() {
        this.linkBack.addEventListener('click', () => {
            this.categoryMain.classList.remove('hidden');
            this.categoryDetail.classList.add('hidden');
        })
    }
}

export {Category}