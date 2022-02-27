 const daysEl = document.getElementById("days");
 const minsEl = document.getElementById("mins");
 const hoursEl = document.getElementById("hours");
 const secondsEl = document.getElementById("seconds");



const newYear ="1 jan 2023";
function countdown() {

    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const daysRemainig = newYearDate - currentDate;
    

    const totalSeconds = daysRemainig / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const mins = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = (hours);
    minsEl.innerHTML = (mins);
    secondsEl.innerHTML = (seconds);

}
function formatTime(time) {
    return time < 10 ?  '0${time}' : time;
}
countdown();
setInterval(countdown, 1000);
