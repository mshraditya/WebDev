let gameseq = [];
let userseq = [];
let started =false;
let level=0;

let btns =["red","yellow","green","purple"];

document.addEventListener("keypress",function() {
    if(started==false) {
        console.log("Game Started");
        started=true;

        levelup();
    }
     
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100)
}
function btnuserflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100)
}
function levelup(){
    level++;
    userseq=[];
    let h2=document.querySelector("h2");
    h2.innerText=`level ${level}`;
    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnflash(randbtn);
}
function checkAns(indx){
        if( userseq[indx] === gameseq[indx] ){
            if(userseq.length==gameseq.length){
                setTimeout(levelup,1000)
            }
        }
        else {
            gameOver();
            resest();
        }
}
function btnpress(){
let btn=this;
btnuserflash(btn);
let usercolor=btn.getAttribute("id");
     userseq.push(usercolor);
     checkAns(userseq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function resest() {
  gameseq = [];
  userseq = [];
  started = false;
  level = 0;

}

function gameOver() {
 let h2 = document.querySelector("h2");
  h2.textContent = "💥 GAME OVER 💥";
  allbtns.forEach((c) => {
    setTimeout(() => c.classList.add("fall"), 1);
  });
}