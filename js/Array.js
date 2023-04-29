var num= new Array();
var sum=0;
var n=parseInt(prompt("Enter number of elements :"));
for(var i=0;i<n;i++){
num[i]=parseInt(prompt("Enter Array"));
console.log("sum: "+num[i]+"<br>");
sum=sum+num[i];
}
console.log("sum: "+sum+"<br>");
document.write("sum: "+sum+"<br>");