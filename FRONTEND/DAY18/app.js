let numb= prompt("Enter a random Maximum Number");
let numbrandom= Math.floor(Math.random()*numb)+1;
let EnteredNumber=prompt("Guess The Number");
let count=0;
while(true){
  if(EnteredNumber=="quit"){
    console.log("You quit");
    break;
  }
  else if(EnteredNumber==numbrandom){
    console.log("Congratulation ",EnteredNumber," is corect you won the game at ",count,"try");
    break;
  }
  else {
    EnteredNumber=prompt("Guess The Number");
    count++;
    if(EnteredNumber>numbrandom) {
      console.log("Your Number is large");
    }
    else {
      console.log("Your Number is small");

    }
  }
}