function setTime() {
  var time = new Date();
  var seconds = time.getSeconds();
  var minutes = time.getMinutes();
  var hours = time.getHours();

  setSeconds(seconds);
  console.log(seconds);
  setMinutes(minutes);
  console.log(minutes);
  setHours(hours);
  console.log(hours);
}

function setSeconds(seconds) {}

function setMinutes(minutes) {}

function setHours(hours) {}

setInterval(setTime, 1000);
setTime();
