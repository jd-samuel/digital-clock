let hoursId = document.getElementById('hours')
let minutesId = document.getElementById('minutes')
let secondsId = document.getElementById('seconds')
let ampmId = document.querySelector('.ampm')

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h>12){
        h = h - 12;
        ampm = "PM"
    }
    else{
        ampm = "AM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

setInterval(()=>{
    let currentTime = new Date();


    hoursId.innerText = h
    minutesId.innerText = m
    secondsId.innerText = s
    ampmId.innerText= ampm    
},1000)

}

updateClock()