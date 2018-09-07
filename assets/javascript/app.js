/*let number = 300;
let intervalID;

$("#begin").on("click", run)

$(index.html).ready (function run() {
    intervalId = setInterval(decrement, 1000);
  });

  function decrement() {

    number--;

    $("#clock").html("<h4>" + "Time Remaining: " + "</h4>" + "<h4>" + number + "</h4>");

    if (number === 0) {

      stop();
    }
  }

  function stop() {

    clearInterval(intervalId);
  }*/

  document.getElementById('clock').innerHTML = 05 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('clock').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){
    m=m-1;
  }
  if(m==0 && s==0){redirect();}

  function redirect() {
    window.location="file:///Users/lewisgregerson-spencer/Desktop/trivia-game/results.html"
  }
  
  document.getElementById('clock').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
  }



  
