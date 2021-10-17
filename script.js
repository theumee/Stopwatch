let startStopBtn = document.getElementById('start-stop');
let lapResetBtn = document.getElementById('lap-reset');
let uL = document.getElementById('laps');
let output = document.getElementById('output');

startStopBtn.addEventListener('click',startStopTimer);
lapResetBtn.addEventListener('click',lapResetTimer);


let milliSeconds = 0;
let seconds = 0;
let minutes = 0;

let displatMS = 0;
let displayS = 0;
let displatM = 0;

let interval = null;

let timerStatus = false;



function stopWatch(){
   
    milliSeconds++;
    if(milliSeconds === 100){
        milliSeconds = 0;
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }

    if(milliSeconds < 10){
        displatMS = "0" + milliSeconds.toString();
    }
    else{
        displatMS = milliSeconds;
    }

    if(seconds < 10){
        displayS = "0" + seconds.toString();
    }
    else{
        displayS = seconds;
    }

    if(minutes < 10){
        displatM = "0" + minutes.toString();
    }
    else{
        displatM = minutes;
    }
    document.getElementById("output").textContent = displatM + " : " + displayS + " : " + displatMS;

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
        output.textContent = "00 : 00 : 00";
        let laps = uL.children;
        console.log(laps);
        while(uL.children.length != 0){
            for (let i of laps) {
                uL.removeChild(i);
            }
        }
   
    }
}
