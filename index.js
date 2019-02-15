function setTime() {
  var time = new Date();
  var seconds = time.getSeconds();
  var minutes = time.getMinutes();
  var hours = time.getHours() % 12;

  setSeconds(seconds);
  setMinutes(minutes, seconds);
  console.log(minutes);
  setHours(hours, minutes);
  console.log(hours);
}

function setSeconds(seconds) {
  var secondDregrees = seconds * 6;
  document
    .getElementById("secondHand")
    .setAttribute("style", `transform: rotate(${secondDregrees}deg)`);
}

function setMinutes(minutes, seconds) {
  var minuteDegrees = minutes * 6 + 0.1 * seconds;
  document
    .getElementById("minuteHand")
    .setAttribute("style", `transform: rotate(${minuteDegrees}deg)`);
}

function setHours(hours, minutes) {
  var hourDegrees = hours * 30 + 0.5 * minutes;
  document
    .getElementById("hourHand")
    .setAttribute("style", `transform: rotate(${hourDegrees}deg)`);
}

setInterval(setTime, 1000);
setTime();
