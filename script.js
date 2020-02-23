var timeString;
var timerState = false;
var time = [0,0,0,0];
var timeStart = ["0","0","0","0"];

var startStop = document.getElementById("start&stop");
var reset = document.getElementById("reset");
var split = document.getElementById("split");

startStop.addEventListener("click", startStopWatch);
reset.addEventListener("click", resetWatch);
split.addEventListener("click", splitWatch);

function startStopWatch(){
    var start = function(){
        time[0]++;
        convertTime();
        document.getElementById("Zero").innerHTML = timeString;
    }
    if(timerState == false){
        link = setInterval(start, 10);
        startStop.innerHTML = "Стоп";
        startStop.className = "stop";
        timerState = true;
    }
    else{
        clearInterval(link);
        startStop.innerHTML = "Старт";
        startStop.className = "start";
        timerState = false;
    }
}

function convertTime(){
    if(time[0] > 99){
        time[1]++;
        time[0] = 0;
        if(time[1] > 59){
            time[2]++;
            time[1] = 0;
            if(time[2] > 59){
                time[3]++;
                time[2] = 0;
            }
        }
    }
    for(var i = 0; i < time.length; i++){
        if(time[i]<10)
            timeStart[i] = "0";
        else
            timeStart[i] = "";
    }
    timeString = timeStart[3] + time[3] + ":" +timeStart[2] + time[2] + ":" +timeStart[1] + time[1] + ":" + timeStart[0] + time[0];
    console.log(timeString);
}

function splitWatch(){
    if(document.getElementById("Zero").innerHTML != "00:00:00:00" && timerState == true){
        var splitResults = document.getElementById("splitResult");
        var splitResult = document.createElement("div");
        splitResult.className = "interv";
        splitResult.innerHTML = document.getElementById("Zero").innerHTML;
        splitResults.appendChild(splitResult);
    }
}


function resetWatch(){
    var splitResults = document.getElementById("splitResult");
    splitResults.innerHTML = "";
    timerState = true;
    startStopWatch();
    document.getElementById("Zero").innerHTML = "00:00:00:00";
    startStop.innerHTML = "Старт";
    time = [0,0,0,0];
}