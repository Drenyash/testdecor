class Dropdown {
    constructor(el) {
        this.el = el;
        this.selector = `[data-dropdown='${this.el.dataset.dropdownOpen}']`
        this.dropdown = document.querySelector(this.selector)
        this.body = document.querySelector('body');
        this.content = this.dropdown.querySelector('[data-dropdown-content]');
        this.nav = document.querySelector("[data-nav]");
        this.navUser = document.querySelector("[data-nav-user]");
        this.headerWrapper = document.querySelector("[data-header-menu]");
        this.search = this.el.querySelector('[data-search]')
        this.searchBox = document.querySelector('[data-search-box]')
        this.searchClose = this.el.querySelector('[data-close]')
        this.selectInput = this.content.querySelector('[data-city-select]')
        this.mainSearch = this.searchBox.querySelector('[data-main-search]');

        this.setListeners();
    }

    setListeners() {
        this.openDropdown()
        this.closeOverflow()
        this.closeSearch()
        this.searchBox.addEventListener('submit', (evt) => evt.preventDefault())
        window.addEventListener('keydown', (evt) => {
            if (evt.keyCode === 27) {
                this.closeDropdown();
                if (this.searchBox.classList.contains('search-box--open')) {
                    this.toggleSearch();
                }
            }
        })
    }

    openDropdown() {
        this.el.addEventListener('click', () => {
            this.content.addEventListener('click', (evt) => evt.stopPropagation())

            if (!this.searchBox.classList.contains('search-box--open')) {
                if (this.dropdown.classList.contains('show')) {
                    this.closeDropdown();
                } else {
                    this.removeAllActiveElements();
                    this.body.style.overflowY = 'hidden'
                    this.dropdown.classList.add('show')
                    this.selectActiveElement()
                }
            } else {
                this.closeSearch()
            }
        })
    }

    closeSearch() {
        if (this.searchClose) {
            this.searchClose.addEventListener('click', () => {
                this.toggleSearch()
            })
        }
    }

    removeAllActiveElements() {
        document.querySelectorAll('[data-dropdown]').forEach(el => {
            el.classList.remove('show')
            this.toggleSearch()
        })
    }

    selectActiveElement() {
        switch (this.el.dataset.dropdownOpen) {
            case 'location':
                this.openLocation();
                break;
            case 'locationMobile':
                this.openLocation();
                break;
            case 'search':
                this.toggleSearch();
                break;
        }
    }

    closeDropdown() {
        if (this.dropdown.classList.contains('show')) {
            this.body.style.overflowY = 'auto'
            this.dropdown.classList.remove('show')
        }
    }

    closeOverflow() {
        this.dropdown.addEventListener('click', () => {
            this.closeDropdown()
            if (this.searchBox.classList.contains('search-box--open')) {
                this.toggleSearch()
            }
        })
    }

    openLocation() {
        // Кастомный select с выбором города
        const selectList = this.content.querySelector('[data-city-selector]')
        selectList.addEventListener('click', (evt) => {
            const currentTarget = evt.target;
            if (currentTarget.tagName === 'LI') {
                this.selectInput.value = currentTarget.textContent;
                this.el.textContent = this.selectInput.value;
            }
            this.closeDropdown()
        });
    }

    toggleSearch() {
        this.searchBox.classList.toggle('search-box--open');
        this.nav.classList.toggle('hidden');
        this.navUser.classList.toggle('hidden');
        this.headerWrapper.classList.toggle('header-body__wrapper--menu--full');
    }
}

export {Dropdown};