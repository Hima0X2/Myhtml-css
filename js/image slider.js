var photoes =["image1.jpg","image2.jpg","image3.jpeg","image4.jfif"];
var photo= document.querySelector("img");
var count=0;
function prev(){
	count--;
	if(count<0){
		count=photoes.length-1;
	}
photo.src=photoes[count];
}
function next(){
	count++;
	if(count>=photoes.length){
        count=0;
	}
	photo.src=photoes[count];
}