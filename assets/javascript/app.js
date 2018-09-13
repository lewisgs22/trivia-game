function hideResults() {
  $("#resultspage").hide();
}

hideResults();

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
     timesUp();
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

  // function redirect() {
  //   window.location="file:///Users/lewisgregerson-spencer/Desktop/trivia-game/results.html"
  // }




  var numberCorrect = 0;

  function checkAnswers() { 
    var yup = $("input");
    var answerButtons = Array.from(yup);
    for(i=0; i<answerButtons.length; i++) {
      let button = answerButtons[i];
      
      //this check was running when the page loads, so no button could be checked. that's why this conditional always failed.
      if (button.checked == true && button.value == "correct") {
        console.log('found one')
        numberCorrect++;
        }
      }
      $("#correctans").text("Correct: " + numberCorrect);
      $("#incorrectans").text("Incorrect: " + (20 - numberCorrect));
    }

    //**********************/

    //Instead of running the quizOver function when the page loads, we only want to check the answers when we actually hit submit.

    //ADDED a click listener for that submit button

    $('#submit').on("click", quizOver);

    function quizOver() {

      //instead of click listeners in the quizOver function, just run the answer check, and swap the pages over. Since this function was being called when the page loads, the answers were being checked before a user had the chance to click anything
      checkAnswers()
      $("#resultspage").show();
      $("#questionspage").hide();
    }

    // Your original invocation of this function. Would run as the page is loaded. We only want to do that when we submit. This way, a user can check some of the radio buttons.
    // quizOver()

    

