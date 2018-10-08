import jQuery from 'jquery';

class OpenSearch {
    constructor() {
        this.searchButton = jQuery('.search__btn');
        this.searchField = jQuery('.search__field');
        this.searchClose = jQuery('.search__close'); 
        this.searchInput = jQuery('.search__input'); 
        this.searchResults = jQuery('.search__results'); 
        this.logo = jQuery('.site-header__logo'); 
        this.events();
    }
    
    events() {       
        this.searchButton.click(this.ShowField.bind(this));
        jQuery(document).keyup(this.KeyPressHandler.bind(this));
        
        this.searchClose.click(this.HideField.bind(this));
        
        this.searchInput.click(this.ShowResults.bind(this));
        this.searchClose.click(this.HideResults.bind(this));
    }
    
    KeyPressHandler(e) {
        if (e.keyCode == 27) {
            this.HideField();
            this.HideResults();
        }; 
    }
    
    ShowField() {
        this.searchField.addClass("search__field--is-visible");
        this.logo.addClass("site-header__logo--is-unvisible");
        return false;
    }
    
    HideField() {
        this.searchField.removeClass("search__field--is-visible");
        this.logo.removeClass("site-header__logo--is-unvisible");
        return false; 
    }
    
    ShowResults() {
        this.searchResults.addClass("search__results--is-visible");
        return false;
    }
    
    HideResults() {
        this.searchResults.removeClass("search__results--is-visible");
        return false;
    }
}

export default OpenSearch;