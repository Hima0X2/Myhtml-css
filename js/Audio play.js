for(var i=0;i<3;i++){
document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
var text=this.innerHTML;
var audio= new Audio("D:\documents\web design\audioclip-1600098662000-1992.mp4");
audio.play();
});
}