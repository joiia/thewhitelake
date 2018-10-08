import jQuery from 'jquery';

import Stickers from "./modules/Stickers";
import RevealOnScroll from "./modules/RevealOnScroll";
import OpenSearch from "./modules/OpenSearch";

new RevealOnScroll(jQuery('.row'), '85%');
new RevealOnScroll(jQuery('.hero'), '85%');

var openSearch = new OpenSearch(); 
var stickers = new Stickers();






class MobileMenu {
    
    constructor() {
        this.advBtn = jQuery('.site-header__btn');
        this.rightCol = jQuery('.site-header__col-3'); 
        this.social = jQuery('.site-header__social');
        this.menu = jQuery('.site-header__menu');
        this.menuButton = jQuery('.site-header__menu-btn');
        this.menuClose = jQuery('.site-header__menu-close');
        this.events();
    }

    events() {
        this.ReplaceBtn();
        jQuery(window).resize(this.ReplaceBtn.bind(this));
        this.menuButton.click(this.ShowMenu.bind(this));
        this.menuClose.click(this.HideMenu.bind(this));
    }
    
    ReplaceBtn() {
        if (jQuery(window).width() < 992) {
            this.advBtn.insertBefore(this.social);
            
        } else {
            this.advBtn.appendTo(this.rightCol);
        }
    }

    ShowMenu() {
        this.menu.addClass("site-header__menu--is-visible");
        return false;
    }

    HideMenu() {
        this.menu.removeClass("site-header__menu--is-visible");
        return false;
    }
    
}

var mobileMenu = new MobileMenu(); 