// alert()

var hrPara=document.getElementById("hr")
var minPara=document.getElementById("min")
var secPara=document.getElementById("sec")
var msecPara=document.getElementById("msec")


var hr=0
var min=0
var sec=0
var msec=0

function timer(){
    msec++
    msecPara.innerHTML=msec
    if(msec==100){
        sec++
        secPara.innerHTML=sec
        msec=0
    }
    else if(sec==60){
        min++
        minPara.innerHTML=min
        sec=0
    }
    else if(min==60){
        hr++
        hrPara.innerHTML=hr
        min=0
    }

}
var interval;  


function start(){
    var startBtn=document.getElementById("startBtn")
    interval=setInterval(timer,10)
    startBtn.disabled=true

}

function pause(){
    var startBtn=document.getElementById("startBtn")
     clearInterval(interval)
     startBtn.disabled=false
}

function reset(){
   clearInterval(interval)

    msecPara.innerHTML = 0
    secPara.innerHTML = 0
    minPara.innerHTML = 0
    hrPara.innerHTML=0
    hr=0
    min=0
    sec=0
    msec=0

}