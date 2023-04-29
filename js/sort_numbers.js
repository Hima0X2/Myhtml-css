//Array.html
var num= new Array();
var n=parseInt(prompt("Enter the number"));
for(var i=0;i<n;i++){
	num[i]=parseInt(prompt("Enter elements of Array"));
}
	num.sort(function(a,b){
		return a-b;
	});
	document.write("Ascending order :"+ num+"<br>");
	num.sort(function(a,b){
		return b-a;
	});
	document.write("Decending order :"+ num+"<br>");