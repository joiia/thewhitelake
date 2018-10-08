import jQuery from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class Stickers { 
    constructor() {
        this.sticker = jQuery('.sticker');
        this.triggerElement = jQuery('.post');
        this.hero = jQuery('.hero');

        if( jQuery(this.triggerElement).length > 0 ) {
            this.createWaypoint();
        }

    }

    createWaypoint() { 
        var that = this;
        var headerWaypoint = new Waypoint({
            element: this.triggerElement[0],
            handler: function(direction) {
                
                const top = that.triggerElement.outerHeight() + that.hero.outerHeight() - 220;
                that.sticker.toggleClass('sticker--is-fixed');
                
                if (direction === 'down') {
                    that.sticker.css('top', top + 'px');
                } else {
                    that.sticker.css('top', '182px');
                }
                
            },
            offset: function() {
                return - that.triggerElement.outerHeight() + 472 ;
            }

        });
    }


}

export default Stickers;