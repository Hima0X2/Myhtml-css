var s=document.querySelector(".class1");
s.addEventListener("click",func1);
function func1(){
s.classList.add("Sam");
s.innerHTML=this.innerHTML+ "is clicked";
}
s.addEventListener("mouseout",myfunc1);
function myfunc1(){
	s.classList.remove("Sam");
}
var q=document.querySelector(".class2");
q.addEventListener("mouseover",func2);
function func2(){
q.classList.add("Sam2");
}
q.addEventListener("mouseout",myfunc2);
function myfunc2(){
	q.classList.remove("Sam2");
}
var t=document.querySelector(".class3");
t.addEventListener("mouseover",func3);
function func3(){
t.classList.add("Sam3");
}
t.addEventListener("mouseout",myfunc3);
function myfunc3(){
	t.classList.remove("Sam3");
}