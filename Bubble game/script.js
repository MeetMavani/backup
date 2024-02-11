var timer = 60;
var score = 0;
var hitrn = 0;

function IncreaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function GetNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function MakeBubble(){
    var clutter = ""

    for (var i = 1; i <= 147; i++) {
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = `<h2>Game Over</h2>`
        }
    }, 1000)
}

document.querySelector('#pbtm').addEventListener('click', function(dets){
    var clickedNumber = (Number(dets.target.textContent));
    if (clickedNumber === hitrn) {
        IncreaseScore()
        MakeBubble()
        GetNewHit()
    }
})

MakeBubble();
runTimer();
GetNewHit();