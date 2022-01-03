let startStopBtn = document.getElementById('start-stop');
let lapResetBtn = document.getElementById('lap-reset');
let uL = document.getElementById('laps');
let output = document.getElementById('output');

startStopBtn.addEventListener('click',startStopTimer);
lapResetBtn.addEventListener('click',lapResetTimer);


let milliSeconds = 0;
let seconds = 0;
let minutes = 0;

// function()

let displayMS = 0;
let displayS = 0;
let displayM = 0;

let interval = null;

let timerStatus = false;


function stopWatch(){
   
    milliSeconds++;
    if(milliSeconds === 1000){
        milliSeconds = 0;
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }

    if(milliSeconds < 10){
        displayMS = "0" + milliSeconds.toString();
    }
    else{
        displayMS = milliSeconds;
    }

    if(seconds < 10){
        displayS = "0" + seconds.toString();
    }
    else{
        displayS = seconds;
    }

    if(minutes < 10){
        displayM = "0" + minutes.toString();
    }
    else{
        displayM = minutes;
    }
    document.getElementById("output").textContent = displayM + " : " + displayS + " : " + displayMS;

}


function startStopTimer(){
    if(!timerStatus){
        interval = window.setInterval(stopWatch,10);
        startStopBtn.textContent = "Stop";
        startStopBtn.className = "stop";
        lapResetBtn.textContent = "Lap";
        lapResetBtn.className = "lap";
        timerStatus = true;
    }
    else{
        window.clearInterval(interval);
        startStopBtn.textContent = "Start";
        startStopBtn.className = "start";
        lapResetBtn.textContent = "Reset";
        lapResetBtn.className = "reset";
        timerStatus = false;
    }
    
}

function lapResetTimer(){
    if(timerStatus){
            let lap = document.createElement('li');
            lap.textContent = output.textContent;
            uL.appendChild(lap);
    }
    else{
        window.clearInterval(interval);
        milliSeconds = 0;
        seconds = 0;
        minutes = 0;
        output.textContent = "00 : 00 : 00";
        while(uL.firstChild){
            uL.removeChild(uL.firstChild);
        }
   
    }
}
