var inputAngle = document.querySelectorAll(".input-angle");
var isTriangleButton = document.querySelector("#is-triangle-button");
var outputDiv = document.querySelector("#output");

isTriangleButton.addEventListener("click",isTriangle)

function isTriangle(){
    var angle1 = Number(inputAngle[0].value);
    var angle2 = Number(inputAngle[1].value);
    var angle3 = Number(inputAngle[2].value);
    
    // if(inputAngle[0].value == "" || inputAngle[1].value == "" || inputAngle[2].value == ""){
    //     showOutput("Please enter all angles");
    //     return;
    // }
    // else if(angle1 < 0 || angle2 < 0 || angle3 < 0){
    //         showOutput("Please enter positive angle values");
    //         return;
    //     }
    // else if(angle1 >= 180 || angle2 >= 180 || angle3 >= 180 ){
    //         showOutput("A triangle cannot be formed with only one angle");
    //         return;
    //     }
    // else{
    //         hideOutput();
    //     }
    
    // if(angle1 + angle2 >= 180 || angle2 + angle3 >= 180 || angle3 + angle1 >= 180){
    //     showOutput("A triangle cannot be formed with only two angles");
    //     if(sumAngles > 180){
    //         showOutput("Oh no!, the angles do not form a triangle");
    //         return;
    //     }
    // }
    // else 
    
    var sumAngles = calculateSumOfAngles(angle1,angle2,angle3);
    if(sumAngles == 180){
        showOutput("Yayy, the angles form a triangle");
    
    }
    else {
        showOutput("Oh no!, the angles do not form a triangle");
        
    }
}

function calculateSumOfAngles(angle1,angle2,angle3){
    var sum = angle1+angle2+angle3;
    return sum;
}

function hideOutput(){
    outputDiv.style.display = "none";
}

function showOutput(message) {
    outputDiv.style.display = "block";
    outputDiv.innerText = message;
    
}
