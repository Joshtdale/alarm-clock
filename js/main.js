const selectors = document.querySelectorAll('select')
const alarmBtn = document.getElementById('alarm')

function options() {
    // selectors[0].innerHTML = selectors[1].innerHTML = selectors[2].innerHTML = "";

    selectors[0].innerHTML = `<option value="Hour" selected disabled hidden>Hour</option>`;
    for (let i = 12; i > 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        selectors[0].firstElementChild.insertAdjacentHTML("afterend", option);
    }
    
    selectors[1].innerHTML = `<option value="Minute" selected disabled hidden>Minute</option>`;
    for (let i = 59; i >= 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        selectors[1].firstElementChild.insertAdjacentHTML("afterend", option);
    }
    
    selectors[2].innerHTML = `<option value="AM/PM" selected disabled hidden>AM/PM</option>`;
    for (let i = 2; i > 0; i--) {
        let ampm = i == 1 ? "AM" : "PM";
        let option = `<option value="${ampm}">${ampm}</option>`;
        selectors[2].firstElementChild.insertAdjacentHTML("afterend", option);
    }
}
options();



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

    if (hrs >= 12) {
        hrs = hrs - 12;
            am_pm = "PM";
    };
    // console.log(hrs, min, sec)
    clock.innerText = hrs + ':' + min + ':' + sec + ' ' + am_pm;

}



// console.log(clock.innerText)
setInterval(getTime, 1000)
// getTime()