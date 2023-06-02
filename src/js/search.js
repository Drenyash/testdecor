class Search {
    constructor(el) {
        this.el = el;
        this.searchInput = this.el.querySelectorAll('[data-search="input"]');
        this.searchIcon = this.el.querySelector('[data-icon]')
        this.history = document.querySelector('[data-search-list]')
        this.mainSearch = null;
        this.targetElem = null;
        this.currentSearchTitle = document.querySelector('[data-searched]')
        this.historyElem = document.querySelector('[data-history]');
        this.productsElem = document.querySelector('[data-search-products]');

        this.setListeners()
    }

    setListeners() {
        this.inputTyping()
        this.currentSearch()
        this.useHistoryItem()
    }


    inputTyping() {
        this.searchInput.forEach(el => {
            el.addEventListener('input', () => {
                if (el.value.length >= 1) {
                    el.classList.add('input--typing')
                    this.searchIcon.classList.add('hide')
                } else {
                    el.classList.remove('input--typing')
                    this.searchIcon.classList.remove('hide')
                }
            })
        })
    }

    currentSearch() {
        this.searchInput.forEach(el => {
            if (el.dataset.mainSearch === '') {
                this.mainSearch = el;
            }
        })
        if (this.mainSearch) {
            this.mainSearch.addEventListener('change', (evt) => {
                this.targetElem = evt.target;
                if (this.targetElem.value === '') {
                    this.currentSearchTitle.classList.remove('hidden')
                    this.historyElem.classList.remove('hidden')
                    this.productsElem.classList.add('hidden')
                } else {
                    this.currentSearchTitle.classList.add('hidden')
                    this.historyElem.classList.add('hidden')
                    this.productsElem.classList.remove('hidden')
                }
            })
        }
    }

    useHistoryItem() {
        this.history.addEventListener('click', (evt) => {
            const targetElement = evt.target;
            if (targetElement.tagName === 'LI') {
                if (this.mainSearch) {
                    this.mainSearch.value = targetElement.textContent;
                    this.historyElem.classList.add('hidden')
                    this.productsElem.classList.remove('hidden')
                }
                this.searchInput.forEach(el => {
                    el.classList.add('input--typing')
                    this.searchIcon.classList.add('hide')
                })
                this.currentSearchTitle.classList.add('hidden')
            }
        })
    }

}

export {Search}