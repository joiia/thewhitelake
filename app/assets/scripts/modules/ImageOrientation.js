import $ from 'jquery';

class ImageOrientation {
    constructor(img) {
        this.img = img;
        this.setOrientation()
    }
    
    setOrientation() {      
        this.img.each(function(){
            const img = $(this);
            const imgHeight = img.height();
            const imgWidth = img.width();
            
            if(imgHeight > imgWidth) {
                img.removeClass('img--gorisontal');
                img.addClass('img--vertical');
            } else {
                img.removeClass('img--vertical');
                img.addClass('img--gorisontal');
            }
        })
    }
    
}

export default ImageOrientation;