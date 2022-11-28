import $ from 'jquery';

function event() {
    $('.phone').on('focus', function () {
        $('.promptPhone').addClass('vision')
    })
    $('.name').on('focus', function () {
        $('.promptName').addClass('vision')
    })
    $('.phone').on('focusout', function () {
        $('.promptPhone').removeClass('vision')
    })
    $('.name').on('focusout', function () {
        $('.promptName').removeClass('vision')
    })
}

export {event}