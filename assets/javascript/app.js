let number = 300;
let intervalID;

$("#start").on("click", run)

function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {

    number--;

    $("#clock").html("<h4>" + "Time Remaining: " + "</h4>" + "<h4>" + number + "</h4>");

    if (number === 0) {

      stop();
    }
  }

  function stop() {

    clearInterval(intervalId);
  }

  $("#clock").hide();

  $("#questions").hide();

  $("#begin").on("click", show());
