var hitNum
var score = 0;
var clickedNum;

function newHit() {
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitNum;
}

function makeBubble(param) {
var clutter = "";

for(var i=1; i<=param; i++) {
    ranNo = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${ranNo}</div>`;
}

document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(timer) {
    var time = setInterval(function() {
        if(timer>0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(time);
            document.querySelector("#timerval").textContent = "Time's Up";
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        
    }, 1000);
}

function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

//Jispe click karoge wo element par event raise hoga, aur event listener naa milne par event element ke parent par listener dhundega,
//waha bhi naa milne par event parent ke parent ke parent par listener dhundega.

document.querySelector("#pbtm").addEventListener("click", function(details) {
    clickedNum = Number(details.target.textContent);
    if(clickedNum === hitNum) {
        increaseScore();
        newHit();
        makeBubble(171);
    }
});



newHit();
runTimer(61);
makeBubble(171);