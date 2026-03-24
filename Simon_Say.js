let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let h2 =document.querySelector("h2");

document.addEventListener("keydown", function() {
    if(started == false){
    console.log("Game is started");
    started = true;
    levelUp();
}
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() *4);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b></br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
 let btn = this;
 userFlash(btn);

let userColor = btn.getAttribute("id");
 userSeq.push(userColor);

 checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}
