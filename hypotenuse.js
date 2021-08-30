var sideInput = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#hypotenuse-btn");
var outputDiv = document.querySelector("#output");

function calculateHypotenuse(){
    var a = Number(sideInput[0].value);
    var b = Number(sideInput[1].value);
    var sumOfSquares = a**2 +b**2;
    var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputDiv.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);