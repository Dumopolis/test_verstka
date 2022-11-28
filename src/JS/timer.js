function timer() {

    const minuteHtml = document.querySelector('.minute')
    const secondHtml = document.querySelector('.second')

    let minute = localStorage.getItem('minute') || 30
    let second = localStorage.getItem('second') || 0

    if (second < 10) {
        secondHtml.innerHTML = '0' + second
    } else {
        secondHtml.innerHTML = second
    }
    
    if (minute < 10) {
        minuteHtml.innerHTML = '0' + minute
    } else {
        minuteHtml.innerHTML = minute
    }

    setInterval(() => {
        if (minute <= 0 && second === 0) {
            minute = 30
            minuteHtml.innerHTML = minute
            localStorage.setItem('minute', JSON.stringify(minute))
        }

        if (second <= 0) {
            minute -= 1
            if (minute < 10) {
                minuteHtml.innerHTML = '0' + minute
                localStorage.setItem('minute', JSON.stringify(minute))
            } else {
                minuteHtml.innerHTML = minute
                localStorage.setItem('minute', JSON.stringify(minute))
            }
        }
        if (second <= 0) {
            second = 60
            second -= 1

            secondHtml.innerHTML = second
            localStorage.setItem('second', JSON.stringify(second))

        }
        else {
            second -= 1
            if (second < 10) {
                secondHtml.innerHTML = '0' + second
                localStorage.setItem('second', JSON.stringify(second))
            } else {
                secondHtml.innerHTML = second
                localStorage.setItem('second', JSON.stringify(second))
            }

        }


    }, 1000)

}
export { timer }
