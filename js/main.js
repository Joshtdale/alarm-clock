

function getTime() {
const clock = document.getElementById('clock')
    const time = new Date()
    var hrs = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()

    if (hrs < 10) {
        hrs = '0' + hrs;
    };
    if (min < 10) {
        min = '0' + min;
    };
    if (sec < 10) {
        sec = '0' + sec;
    };
    // console.log(hrs, min, sec)
    clock.innerText = hrs + ':' + min + ':' + sec;


    // console.log(typeof(hrs))
// console.log(hrs)
}



// console.log(clock.innerText)
setInterval(getTime, 1000)
// getTime()