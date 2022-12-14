// grab selectors
const selectors = document.querySelectorAll('select')
// grab alarm button
const alarmBtn = document.getElementById('alarm')


function select() {
    // selectors[0].innerHTML = selectors[1].innerHTML = selectors[2].innerHTML = "";
    selectors[0].innerHTML = `<option value="hrs" selected disabled hidden>Hour</option>`;
    selectors[1].innerHTML = `<option value="min" selected disabled hidden>Minute</option>`;
    selectors[2].innerHTML = `<option value="AM/PM" selected disabled hidden>AM/PM</option>`;

    // Loop through 12hrs for selector
        for (let i = 12; i > 0; i--) {
            i = i < 10 ? `0${i}` : i;
            let option = `<option value="${i}">${i}</option>`;
            selectors[0].firstElementChild.insertAdjacentHTML("afterend", option);
            //The insertAdjacentHTML() method of the Element interface parses 
            //the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
        }

        // Loop through 59min for selector
        for (let i = 59; i >= 0; i--) {
            i = i < 10 ? `0${i}` : i;
            let option = `<option value="${i}">${i}</option>`;
            selectors[1].firstElementChild.insertAdjacentHTML("afterend", option);
        }

        // Loop through 2 options for am/pm
        for (let i = 2; i > 0; i--) {
            let ampm = i == 1 ? "AM" : "PM"; // assigns values 1 & 2 to AM & PM
            let option = `<option value="${ampm}">${ampm}</option>`;
            selectors[2].firstElementChild.insertAdjacentHTML("afterend", option);
        }
}

select();



function getTime() {
    const clock = document.getElementById('clock')
    const time = new Date()
    var hrs = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var ampm = 'PM';
    // if hrs is greater than or = to 12 then the time is PM else AM
        if (hrs > 12) {
            hrs = hrs - 12;
        } else if (hrs >=12 ) {
            ampm = "PM";
        } else {
            ampm = "AM";
        };

        // has to go after 12hr conversion
        // add 0 before number is number is less than 10 "01, 02, 03"
        if (hrs < 10) {
            hrs = '0' + hrs;
        };

        if (min < 10) {
            min = '0' + min;
        };

        if (sec < 10) {
            sec = '0' + sec;
        };

    // adds number values together with colon ":" and ' (single space)' so that innerText = hrs:min:sec am/pm
    clock.innerText = hrs + ':' + min + ':' + sec + ' ' + ampm;

    const alarmTime = selectors[0].value + ':' + selectors[1].value + ':' + '00' + ' ' + selectors[2].value;

        if (alarmTime === clock.innerText) {
            var alarm = new Audio('images/Daydreaming.mp3')
            alarm.play();
            let clock = document.getElementById('clock')
            document.body.style.backgroundColor = 'white';
            clock.style.color = 'black'; 
        };
};




// updates time value from getTime function every 1000 milliseconds so that clock counts seconds in real time
setInterval(getTime, 1000)

// event handler to run setAlarm function when button is clicked
alarmBtn.addEventListener('click', resetAlarm);

function resetAlarm() {
    document.getElementById('myForm').reset()
}

// Pseudocode

// Alarm clock


// time() {

// Get current time from browser: hrs, min, sec


// If time.hrs >= (???greater than or equal to???) 12 {
// Time is pm
// } else {
// Time is Am
// }


// If time.hrs > (???greater than???) 12 {
// Hrs = hrs - 12
// }



// }


// setInterval(time) {
// loop every 1000 milliseconds
// }

//new