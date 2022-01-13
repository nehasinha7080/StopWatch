var minutes = 0; 
var seconds = 0; 

// Initially timer will be 0, hence set the value to false
var timer = false;

// When start button is clicked start() will be called.
function start() {
    timer = true;
    // To start the stopwatch below stopWatch() is called
    stopWatch();
}

// To stop the stopwatch
function stop() {
    timer = false;
}

// Resets the StopWatch
function reset() {
    timer = false;
    seconds = 0;
    minutes = 0;

    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

}

// start() will call stopWatch() to begin the count
function stopWatch() {
    if(timer == true) {
        seconds = seconds + 1;

        if(seconds == 100) {
            minutes = minutes + 1;
            seconds = 0;
        }

        var secString = seconds;
        var minString = minutes;

        if(seconds < 10) {
            secString = "0" + secString;
        }
        if(minutes < 10) {
            minString = "0" + minString;
        }
        document.getElementById("minutes").innerHTML =minString;
        document.getElementById("seconds").innerHTML =secString;
        
        setTimeout("stopWatch()", 10);
    }
}

