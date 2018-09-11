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
  if(m==0 && s==0){
    redirect();
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

  function redirect() {
    window.location="file:///Users/lewisgregerson-spencer/Desktop/trivia-game/results.html"
  }

  


  var numberCorrect = 0;

function checkAnswers() { 
var yup = $("input");
var answerButtons = Array.from(yup)
console.log(answerButtons)
for(i=0; i<answerButtons.length; i++) {
  var button = answerButtons[i];
  //console.log(button.value)
  //console.log(button.checked)
  
  if (button.value == "correct") {
    console.log('found one')
    numberCorrect++;
    }
  }
  $("#correctans").text("Correct: " + numberCorrect);
  console.log(numberCorrect);
}

$("#submit").on("click", checkAnswers())



  
