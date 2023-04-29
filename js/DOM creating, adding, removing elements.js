//additing DOM
var v1=document.createElement("h3");
var h3=document.createTextNode("This is  heading3");
v1.appendChild(h3);
document.querySelector(".div").appendChild(v1);
//deleteing DOM
var rmv=document.querySelector("h1");
rmv.remove();
