import { scrollify } from 'jquery-scrollify'
import $ from 'jquery'

function scroll() {
  $(function () {
    $.scrollify({
      section: ".scroll",
    });
  });

}
export { scroll }

function handleButton() {
  $('.button').click(function () {
    $.scrollify.move("#form");

  })
}
export { handleButton }

function animate(){
  if ($.scrollify.currentIndex() == 1) {
    $('.ingredientIcon').addClass('vision')
  }else{
    $('.ingredientIcon').removeClass('vision')
  }
  if($.scrollify.currentIndex() == 3 || $.scrollify.currentIndex() == 0){
    $('.listItem').addClass('vision')
  }else{
    $('.listItem').removeClass('vision')
  }
}

function useAnimate() {
  $('.listItem').addClass('vision')
  $(window).on('scroll', function(){
    animate()
  })
}
export { useAnimate }