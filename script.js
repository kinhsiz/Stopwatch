  //removed window.onload on function since not need to load document before executing. 
  //script is tagged at the end of the HTML document when all doc has already been loaded

    let seconds = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");
    let interval;

    buttonStart.onclick = function() {
        clearInterval(interval); // clears a timer set with the setInterval() method.
        interval = setInterval(startTimer, 10); //setInterval() method; 10 is 1 millisecond. The time it will take to execute the timer. 3000 will start in 3 seconds
    }

    buttonStop.onclick = function() {
        clearInterval(interval); //will stop timer 
    }

    buttonReset.onclick = function() {
        clearInterval(interval); 
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer() {
        tens++;

        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9) {
            appendTens.innerHTML = tens;
        }

        if(tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
 
