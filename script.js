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

    result.innerText = Number(num1.value) + Number(num2.value);

});

subbtn.addEventListener("click", function () {

    if (!checkInputs()) return;

    result.innerText = Number(num1.value) - Number(num2.value);

});

multiplybtn.addEventListener("click", function () {

    if (!checkInputs()) return;

    result.innerText = Number(num1.value) * Number(num2.value);

});

dividebtn.addEventListener("click", function () {

    if (!checkInputs()) return;

    if (Number(num2.value) === 0) {

        alert("Division by zero is not allowed!");

        return;
    }

    result.innerText = Number(num1.value) / Number(num2.value);

});
