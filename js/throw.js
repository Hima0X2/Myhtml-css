document.querySelector("#Check").addEventListener("click",function(){
	var x =document.querySelector("#textSelector").value;
	alert("clicked");
	try{
		if(x>9||(x.tolower()<='a'&&x.tolower()>='z')){
        throw "input isn't a digit";
    }
	}
	catch(err){
		document.write(err);
	}
});
