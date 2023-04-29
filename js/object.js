function student(firstname,lastname,age,language){
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.language=language;
document.write("name :"+(this.firstname+this.lastname)+"<br>");
document.write("Age :"+this.age+"<br>");
document.write("Language :"+this.language+"<br>");
}
var student1= new student("Sanjida ","Samanta",19,["C","C++","C#"]);
var student2= new student("Anika ","Mounota",16,["C","C++","java"]);

//console.log("name :"+(person.firstname+person.lastname));