var s= prompt("Enter shape name:").toLowerCase();
var a=prompt("Enter height:");
var b=prompt("Enter width:");
document.write("Area : ")
if(s.charAt(0)=="t"){
	document.write((a*b)/2);
}
else if(s.charAt(0)=="c"){
	document.write(Math.PI*a*a);
}
else if(s.charAt(0)=="r"){
	document.write(a*b);
}