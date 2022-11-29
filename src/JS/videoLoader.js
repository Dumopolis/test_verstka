function videoLoader(){

    const mediaQuery = window.matchMedia('(min-width: 768px)')
    if (mediaQuery.matches) {
        document.querySelector('.mobile').classList.add('none')
        document.querySelector('.desktop').classList.remove('none')
    } else {
        document.querySelector('.desktop').classList.add('none')
        document.querySelector('.mobile').classList.remove('none')
    }
}
export {videoLoader}