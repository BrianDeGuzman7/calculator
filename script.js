//Display Output
// let displayNum = () => {
//     return document.getElementById("button").addEventListener("click",)
//     ) 
// }
let var1 = 0.0;
let var2 = 0.0;
let var3 = 0.0;
let outputValue = "0";
let prim = "0";
let deci = false;

display = (a) => {
    let b = document.querySelectorAll("button")[a].getAttribute("value");
    if (var1 === 0) {
        var1 = parseFloat(b);
        outputValue = b;
    }else{ 
        outputValue = outputValue.concat(b);
        var1 = parseFloat(outputValue);
    }    
    document.querySelector("p").innerHTML = outputValue;
}

//Add Function 
add = () => {
    if(var2===0){
        var2=var1;
    }else{
        var2 = var2+var1;
        outputValue = var2.toString();
        document.querySelector("p").innerHTML = outputValue;
    }
    var1 = 0;
    prim = "add";
    deci = false;
}

//Subtract 
sub = () => {
    if(var2===0){
        var2=var1;
    }else{
        var2 = var2-var1;
        outputValue = var2.toString();
        document.querySelector("p").innerHTML = outputValue;
    }
    var1 = 0;
    prim = "sub";
    deci = false;
}

//Multiply 
mul = () => {
    if(var2 === 0){
        var2 = var1;
    }else{
        var2=var2*var1;
        outputValue = var2.toString();
        document.querySelector("p").innerHTML = outputValue;
    }
    var1 = 0;
    prim = "mul";
    deci = false;
}

//Division
div = () => {
    if(var2===0){
        var2 = var1;
    }else{
        var2=var2/var1;
        outputValue = var2.toString();
        document.querySelector("p").innerHTML = outputValue;
    }
    var1 = 0;
    prim = "div";
    deci = false;
}

//Equal Function
equal = () => {
    if(prim==="add"){
        var3=var1+var2;
    }else if(prim==="sub"){
        var3=var2-var1; 
    }else if(prim==="mul"){
        var3=var1*var2;
    }else if(prim==="div"){
        var3=var2/var1;
    }
    outputValue = var3.toString();
    document.querySelector("p").innerHTML = outputValue;
    var1 = var3;
    var2 = 0;
    prim = "0";
    deci = false;
}

//AC Function
wipe = () => {
    var1 = 0;
    var2 = 0;
    var3 = 0;
    outputValue = "0";
    prim = "0";
    document.querySelector("p").innerHTML = outputValue;
}

// +/- Negative Function
neg = () => {
    var1 = -Math.abs(var1)
    outputValue = var1.toString();
    document.querySelector("p").innerHTML = outputValue;
}

// % Divides by 100
div100 = () => {
    var1 = var1/100;
    outputValue = var1.toString();
    document.querySelector("p").innerHTML = outputValue;
}

// . Adds a decimal to the Output Value
dec = () => {
    if(deci === false){
        let d = ".";
        outputValue = outputValue.concat(d);
        var1 = parseFloat(outputValue);
        document.querySelector("p").innerHTML = outputValue;
        deci = true;
    }else{
        return;
    }
}