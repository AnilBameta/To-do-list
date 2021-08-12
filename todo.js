let btn=document.getElementById("btn");
let txt=document.getElementById("inputval");
let last=document.getElementById("last");
let h3=document.getElementById('task');
let n=0; 
let j=0;  
btn.addEventListener('click',()=>{
n++;
j++;
localStorage.setItem(n,txt.value);
let val=localStorage.getItem(n);
let ul=document.getElementById("ul");
let li=document.createElement("li");
let litxt=document.createTextNode(val);
li.appendChild(litxt);
ul.appendChild(li);
li.setAttribute('class','list');
let btn1=document.createElement("button");
let btn1txt=document.createTextNode("Done");
btn1.appendChild(btn1txt);
li.appendChild(btn1);
btn1.setAttribute('class','btn1');
h3.innerHTML=`You have ${j} task pending`;
btn1.addEventListener('click',()=>{
    j--;
   let butn=btn1.parentNode;
   console.log(butn.nodeName);
   let par=butn.parentNode;
   console.log(par);
   par.removeChild(butn);
   h3.innerHTML=`You have ${j} task pending`;
   if(j==0)
   {
    localStorage.clear();  
   }
})

})
last.addEventListener('click',()=>{
    localStorage.clear();
    while (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
      }
      h3.innerHTML=`You have 0 task pending`;
      j=0;
})

