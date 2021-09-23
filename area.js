var sideInput = document.querySelectorAll(".side-input");
var areaBtn = document.querySelector("#area-btn");
var outputDiv = document.querySelector("#output");

function calculateArea(){
    var a = Number(sideInput[0].value);
    var b = Number(sideInput[1].value);
    if(a == 0 || b == 0){
        outputDiv.innerText = "Please Enter all required fields 🧐";
    }
    else if(a < 0 || b < 0){
        outputDiv.innerText = "Please Enter positive values only 😐";
    }
    else{
    var baseAndHeightMultiply = a * b;
    var area = baseAndHeightMultiply/2;
    outputDiv.innerText = "The area of the triangle is " + area + " cm²";
    }
}
areaBtn.addEventListener("click", calculateArea);