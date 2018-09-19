import $ from 'jquery';

class OpenSearch {
    constructor() {
        this.searchButton = $('.search__btn');
        this.searchField = $('.search__field');
        this.searchClose = $('.search__close'); 
        this.searchInput = $('.search__input'); 
        this.searchResults = $('.search__results'); 
        this.events();
    }
    
    events() {       
        this.searchButton.click(this.ShowField.bind(this));
        $(document).keyup(this.KeyPressHandler.bind(this));
        
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
        return false;
    }
    
    HideField() {
        this.searchField.removeClass("search__field--is-visible");
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