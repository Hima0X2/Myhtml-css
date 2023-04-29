var s =document.querySelector("h1");
s.addEventListener("mouseover",myfunc);
function myfunc(){
	s.classList.add("Sam");
}
s.addEventListener("mouseout",myfunc1);
function myfunc1(){
	s.classList.remove("Sam");
}