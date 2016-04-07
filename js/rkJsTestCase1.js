var noOfApples = prompt("Enter The Number Of Apples You Want");
noOfApples = parseInt(noOfApples);
var baseCost = 20;
document.getElementById("val").innerHTML = "It Will Cost You " + (baseCost * noOfApples) + " Rupees";