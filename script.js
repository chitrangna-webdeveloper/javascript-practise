// //Answer-1
// // function greet(name){
// //     console.log(name);
// // }
// // greet("hello"+" "+"name");

// // //Answer-2
// // function add(a,b){
// //     console.log(a+b);
// // }
// // add(4,3);

// //Answer-3
// function square(a){
//     console.log(a*a);
// }
// square(5);

// //Answer-4
// function multiply(a,b){
//     console.log(a*b);
// }
// multiply(2,3);

// //Answer-5
// function maxoftwo(a,b){

//     if(a>b){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }
// maxoftwo(7,4);

// //Answer-6
// function kelvin(c){
//     console.log(k=273+c);
// }
// kelvin(4);

// //Answer-7
// function even(a){

//     if(a%2===0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// even(4);

// //Answer-8
// function areaofcircle(r){
//     console.log(A=22/7*r*r);
// }
// areaofcircle(4);

// //Answer-9




// //loops questions
// // 1 se 10 tk numbers print karo

// for (let i=1; i<11; i++){
//     console.log(i);

// }
// let i=1;
// do{
//     console.log(i);
//     i++
// }while(i<9);

// while(i<9){
//     console.log(i);
//     i++
// }
// //doubt ki kya let waki k liye bhi kam krega ya nhi



// //10 se 1 tk reverse counting print karo
// for (let i=10; i>1; i-- ){
//     console.log(i);
// }

// //1 se 100 tk even number print karo
// for (let i=1; i<40; i++){

//     if(i%2===0){
//         console.log(i);

//     }

// }

// //1 se 100 tk odd number print karo 
// for (let i=0; i<40; i++){

//     if(i%2!==0){
//         console.log(i);
//     }

// }

//number ka table print karo
 for (let i=5; i<51; i+=5 ){
     console.log(i);

 }

 // 1se n tk numbers ka sum nikalo
 let sum=0;
 for (let i=1; i<n; i++ ){

  // console.log("chitrangna");

// function add(a,b){
//     console.log(a-b);
// }
// add("5",1);

// //what is array described by square bracis and store multiple values 

// let arr=[1,2,3,4];

// console.log(arr);//print the whole array
// console.log(arr[0]);//print the particular element of array

// //if we want to add any value to array we use push 
// arr.push("sciences");// it will always add at the last 
// console.log(arr);

// //if we want to remove the element if use pop

// arr.pop(2);// it will always remove from the last it
// //  does'nt care what you have written in the bracis
// console.log(arr);

// //if we want to add any element to the starting of the array we use unshift
// arr.unshift("hello");
// console.log(arr);

// //if we want to remove any element from the starting of the array we use shift
// arr.shift();
// console.log(arr);

// // if we want to check kya koi element kisi array me present h to hum use krte h 

// function array(){
// let age=[12,13,26,29];

// let adults=age.filter(age>=18);

// console.log(age);
// }



// //-----------------------------------------------------------------------------------//

// //objects
// // isme hum keywords k form me data store krte hai 

// let student={
//     name:" chitrangna",
//     class:12,
    

// };
// console.log(student.name);
// console.log(student.class);

// //Count how many numbers are between 1 and 100  //dont know this question

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

//Find the sum of numbers from 1 to 100

// 



//Answer

// var a=3;

// {
//     var b=3;
//     console.log(a);
// }
// console.log(b)
    console.log(i+i);

 }
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

 
