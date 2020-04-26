//Display Output
// let displayNum = () => {
//     return document.getElementById("button").addEventListener("click",)
//     ) 
// }
let var1 = 0;
let var2 = 0;
let var3 = 0;
let outputValue = "0";

const display = (a) => {
    let b = document.querySelectorAll("button")[a].getAttribute("value");
    if (var1 === 0) {
        var1 = parseInt(b);
        console.log(var1);
        outputValue = b;
    }else{ 
        outputValue = outputValue.concat(b);
        var1 = parseInt(outputValue);
    }    
    document.querySelector("p").innerHTML = outputValue;
}

//Add Function 
const add = () => {
    console.log(var1+var2);
    var3 = var1 + var2;
    outputValue = var3.toString();
    document.querySelector("p").innerHTML = outputValue;
    var1 = 0;
    var1 = 0;
}

const subtract = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
}

