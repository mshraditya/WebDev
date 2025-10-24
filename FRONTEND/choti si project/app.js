 let btn=document.querySelector("button");

 btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomcolor=getrandomcolor();
    h3.innerText=randomcolor; 
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
 })
 function getrandomcolor(){
     let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let a=Math.random();
    let color= `rgba(${r},${g},${b},${a})`;
    return color;
 }
 function generateUntilRepeat() {
  let seen = new Set();  
  let count = 0;

  while (true) {
    let color = getrandomcolor();
    count++;
    if (seen.has(color)) {
      console.log(`Repeat found after ${count} generations: ${color}`);
      break;
    }
    seen.add(color);
  }
}
