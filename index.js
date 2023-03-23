var div=document.createElement( "div");
div.style.textAlign="center"; 
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country"); 
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.addEventListener("click",foo); 
let active=document.createElement("div");
active.setAttribute("id","active"); 
let death=document.createElement("div");
death.setAttribute("id","death"); 
let recover=document.createElement("div");
recover.setAttribute("id","recover"); 
div.append(input,button,active,death,recover);
document.body.append(div); 
async function foo() {
     try {
       let res = document.getElementById("country").value;
       console.log(res);
       let url = `https://api.covid19api.com/total/dayone/country/${res}`;
       let res1 = await fetch(url);
       let res2 = await res1.json();
       let index = res2.length - 1;
       console.log(res2[index]);
       console.log(res2[index].Active);
       active.innerHTML = `Total Active cases:${res2[index].Active}`;
       death.innerHTML = `Total Deaths:${res2[index].Deaths}`;
       recover.innerHTML = `Total Recovered:${res2[index].Recovered}`;
     } catch (error) {
       console.error(error);
     }
   }
   

