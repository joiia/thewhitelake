import $ from 'jquery';

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
//import StickyHeader from "./modules/StickyHeader";
import OpenModal from "./modules/OpenModal";
import ImageOrientation from "./modules/ImageOrientation";

var mobileMenu = new MobileMenu();

new RevealOnScroll($('.row'), '85%');

//var stickyHeader = new StickyHeader();

var openModal = new OpenModal();  

new ImageOrientation($('.feed-item__img img'));

