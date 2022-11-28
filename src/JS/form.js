import $ from 'jquery'

function form(){
    function nameNext(event) {
        if (event.key == 'Enter') {
        event.preventDefault();
        if($('.name')[0].value.trim()){
            $('.phone').focus();
        }else{
            alert('Enter your name')
        }
    }
}

function phoneNext(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        if((!$('.phone')[0].value.trim()) || ($('.phone')[0].value.trim().length < 11)){
            alert('Enter your phone')
        } else{
            alert('Completed! Our manager will contact you soon')
        }
    }
}

$('.name').on('keypress', nameNext)
$('.phone').on('keypress', phoneNext)

$('form').on('submit', function(event){
    event.preventDefault()
    if(($('.phone')[0].value.trim()) && ($('.phone')[0].value.trim().length >= 11) && ($('.name')[0].value.trim())){
        alert('Completed! Our manager will contact you soon')
    }else{
        alert('Fill in the required fields')
    }
})
}
export {form}