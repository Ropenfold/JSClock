var secondHand = document.getElementById("hour-hand");
var minuteHand = document.getElementById("minute-hand");
var secondHand = document.getElementById("second-hand");


function setTime() {
  var time = new Date();
  var seconds = time.getSeconds();
  var minutes = time.getMinutes();
  var hours = time.getHours() % 12;

  setSeconds(seconds);
  console.log(seconds);
  setMinutes(minutes);
  console.log(minutes);
  setHours(hours);
  console.log(hours);
}

function setSeconds(seconds) {
  var secondDregrees = seconds * 6;
  secondHand.style.transform = 'rotate (' + secondDregrees + ' )';
}

function setMinutes(minutes) {

}

function setHours(hours) {


}

setInterval(setTime, 1000);
setTime();
