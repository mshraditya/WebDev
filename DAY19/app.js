let roll=Math.floor(Math.random()*37)+1;
let n = 38;
let arr = new Array(n).fill(0);
for(let i=0;i<1000;i++){
  roll=Math.floor(Math.random()*37)+1;
  arr[roll]+=1;
}
console.log(arr); 