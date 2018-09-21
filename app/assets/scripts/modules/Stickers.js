import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class Stickers { 
    constructor() {
        this.sticker = $('.sticker');
        this.triggerElement = $('.post');
        this.createWaypoint();
    }

    createWaypoint() {
        var that = this;
        var headerWaypoint = new Waypoint({
            element: this.triggerElement[0],
            handler: function() {
                that.sticker.toggleClass('sticker--is-hidden');
            },
            offset: function() {
                return - that.triggerElement.outerHeight() + 472 ;
            }

        });
    }


}

export default Stickers;