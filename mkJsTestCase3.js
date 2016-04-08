/* 
File Name: JsTestCase2
Project: Front-End Code Practice
Description: write a program to concatinate to add and display to string inputted by the user through two input satements.
Author: Manish Singh
*/
document.querySelector("#submit").addEventListener("click", MyFunc);
function MyFunc(){
	var str1=document.getElementById("str1").value;
	var str2=document.getElementById("str2").value;
	var add=str1+str2;
	document.getElementById("display").innerHTML= add;
}


