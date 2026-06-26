let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let addbtn = document.getElementById("addbtn");
let subbtn = document.getElementById("subbtn");
let multiplybtn = document.getElementById("multiplybtn");
let dividebtn = document.getElementById("dividebtn");

let result = document.getElementById("result");

function checkInputs() {

    if (num1.value.trim() === "" || num2.value.trim() === "") {

        alert("Please fill both input boxes!");

        return false;
    }

    return true;
}

addbtn.addEventListener("click", function () {

    if (!checkInputs()) return;

    let sum = Number(num1.value) + Number(num2.value);
    result.innerText = "Addition = " + sum;
    

});

subbtn.addEventListener("click", function () {

    if (!checkInputs()) return;

    let sub = Number(num1.value) - Number(num2.value);
    result.innerText = "Subtraction = " + sub;
});

multiplybtn.addEventListener("click", function () {

    if (!checkInputs()) return;

    let mul = Number(num1.value) * Number(num2.value);
    result.innerText = "Multiplication = " + mul;

});

dividebtn.addEventListener("click", function () {

    if (!checkInputs()) return;

    if (Number(num2.value) === 0) {

        alert("Division by zero is not allowed!");

        return;
    }

    let div = Number(num1.value) / Number(num2.value);
    result.innerText = "Division = " + div;
});

resetbtn.addEventListener("click", function () {

    num1.value = "";
    num2.value = "";
    result.innerText = "Result";

});
