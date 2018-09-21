import $ from 'jquery';

import Stickers from "./modules/Stickers";
import RevealOnScroll from "./modules/RevealOnScroll";
import OpenSearch from "./modules/OpenSearch";

new RevealOnScroll($('.row'), '85%');
new RevealOnScroll($('.hero'), '85%');

var stickers = new Stickers();
var openSearch = new OpenSearch(); 