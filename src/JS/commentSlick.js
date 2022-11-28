import $ from 'jquery';
import slick from 'slick-carousel';

function comments(){

    $('.comments').slick({
        
        autoplay: true,
    autoplaySpeed: 0,
    vertical:true,
    verticalSwiping:true,
    speed:5000,
    infinite:true,
    arrows:false,
    touchMove:false,
    slidesToShow:2,
    cssEase: 'linear',
    pauseOnHover:false,
    centerMode:true,
    
});
}
export {comments}