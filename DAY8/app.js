 let para1=document.createElement('p');
 para1.innerText="Hey! I am RED";
 document.querySelector('body').append(para1);
 para1.style.color=  "red";
 

 let div=document.createElement('div');
 let h1=document.createElement("h1");
 let p2=document.createElement("p");

 h1.innerText="I am in a div";
 p2.innerText="I am also in a div";
 
 div.append(h1);
 div.append(p2);
 div.classList.add("box");
 document.querySelector('body').append(div); 
