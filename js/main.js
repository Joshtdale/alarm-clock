
function getTime() {

    const time = new Date()
    const hrs = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    console.log(hrs, min, sec)
}

setInterval(getTime, 1000)