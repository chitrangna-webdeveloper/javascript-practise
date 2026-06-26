
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let addbtn = document.getElementById("addbtn");
let subbtn = document.getElementById("subbtn");
let multiplybtn = document.getElementById("multiplybtn");
let dividebtn = document.getElementById("dividebtn");

function checkInputs() {
    if (num1.value === "" || num2.value === "") {
        alert("Please fill both input boxes!");
        return false;
    }
    return true;
}

addbtn.addEventListener("click" , function(){
    console.log(Number(num1.value)+Number(num2.value));
    if (!checkInputs()) return;


});
subbtn.addEventListener("click" , function(){
    console.log(Number(num1.value)-Number(num2.value));
    if (!checkInputs()) return;


});
multiplybtn.addEventListener("click" , function(){
    console.log(Number(num1.value)*Number(num2.value));
    if (!checkInputs()) return;


});
dividebtn.addEventListener("click" , function(){
    console.log(Number(num1.value)/Number(num2.value));
    if (!checkInputs()) return;


});

 
