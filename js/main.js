

function getTime() {
const clock = document.getElementById('clock')
    const time = new Date()
    const hrs = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    console.log(hrs, min, sec)
    clock.innerText = hrs, min, sec;
    // console.log(typeof(hrs))
// console.log(hrs)
}



console.log(clock.innerText)
setInterval(getTime, 1000)