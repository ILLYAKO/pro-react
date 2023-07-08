import oddOnly, { sumValues } from "./sum";
// import { multiply, subtract as deduct } from "./operations";
import * as ops from "./operations";
import { asyncAdd } from "./async";

// const myFunc = function (name, weather = "raining", ...extraArgs) {
//     console.log("This statement is inside the function.");
//     console.log("Hello " + name + ".");
//     console.log("It is " + weather + " today.");
//     for (let i = 0; i < extraArgs.length; i++) {
//         console.log("Extra Arg: " + extraArgs[i]);
//     }
// };
// console.log("This statement is outside the function");
// myFunc("Adam", "sunny", 1, "two");
// // ----
// function myFunc(name) {
//     return "Hello " + name + ".";
// }
// console.log(myFunc("Adam"));
// // ----
// function myFunc(nameFunction) {
//     return "Hello " + nameFunction() + ".";
// }

// function printName(nameFunction, printFunction) {
//     printFunction(myFunc(nameFunction));
// }

// printName(function () {
//     return "Adam";
// }, console.log);
// // ----
// const myFunc = (nameFunction) => "Hello " + nameFunction() + ".";
// const printName = (nameFunction, printFunction) =>
//     printFunction(myFunc(nameFunction));
// printName(function () {
//     return "Adam";
// }, console.log);
// // ----
// function messageFunction(name, weather) {
//     let message = "Hello, Adam";
//     if (weather === "sunny") {
//         let message = "It is a nice day";
//         console.log(message);
//     } else {
//         let message = "It is " + weather + " today.";
//         console.log(message);
//     }
//     console.log(message);
// }
// messageFunction("Adam", "raining");
// // -----
// function messageFunction(name, weather) {
//     var message = "Hello, Adam";
//     if (weather === "sunny") {
//         var message = "It is a nice day";
//         console.log(message);
//     } else {
//         var message = "It is " + weather + " today.";
//         console.log(message);
//     }
//     console.log(message);
// }
// messageFunction("Adam", "raining");
// // -----
// function myFunc(name) {
//     let myLocalVar = "sunny";
//     let innerFunction = function () {
//         return "Hello " + name + ". Today is " + myLocalVar + ".";
//     };
//     return innerFunction()
// }
// console.log(myFunc("Adam"));
// // ----
// let products = [
//     { name: "Hat", price: 24.5, stock: 10 },
//     { name: "Kayak", price: 289.99, stock: 1 },
//     { name: "Soccer ball", price: 10, stock: 0 },
//     { name: "Running Shoes", price: 116.5, stock: 20 },
// ];
// let totalValue = products
//     .filter((item) => item.stock > 0)
//     .reduce((prev, item) => prev + item.price * item.stock, 0);
// console.log(`Total value: $${totalValue.toFixed(2)}`);
// // ----
// let myData = new Object();
// myData.name = "Adam";
// myData.weather = "sunny";
// console.log(`Hello ${myData.name}.`);
// console.log(`Today is ${myData.weather}.`);
// // ----
// let name = "Adam1"
// let myData = { name, weather: "sunny" };
// console.log(`Hello ${myData.name}.`);
// console.log(`Today is ${myData.weather}.`);
// // ----
// let myData = {
//     name: "Adam",
//     weather: "sunny",
//     printMessages: function (){
//         console.log(`Hello ${myData.name}.`);
//         console.log(`Today is ${myData.weather}.`);
//     }
// }
// myData.printMessages();
// // ----
// let myData = {
//     name: "Adam",
//     weather: "sunny",
//     printMessages() {
//         console.log(`Hello ${myData.name}.`);
//         console.log(`Today is ${myData.weather}.`);
//     },
// };
// myData.printMessages();
// // ----
// let myData = {
//     name: "Adam",
//     weather: "sunny",
//     printMessages: ()=> {
//         console.log(`Hello ${myData.name}.`);
//         console.log(`Today is ${myData.weather}.`);
//     },
// };
// myData.printMessages();
// // ----
// class MyData {
//     constructor() {
//         console.log("An instance of MyData class was created.");
//         this.name = "Adam";
//         this.weather = "sunny";
//     }
//     printMessages = ()=>{
//         console.log(`Hello ${this.name}.`);
//         console.log(`Today is ${this.weather}..`);
//     };
// }
// let myData = new MyData();
// myData.printMessages();
// let secondObject = {};
// Object.assign(secondObject, { ...myData, weather: "partly-cloudy" });
// secondObject.printMessages();

// let thirdObject = { ...myData, weather: "cloudy" };
// thirdObject.printMessages();
// console.log(
//     `myData: ${myData.weather}, secondObject: ${secondObject.weather}, thirdObject: ${thirdObject.weather}`
// );
// thirdObject.printMessages();
// // -----
// const myData = {
//     name: "Bob",
//     location: {
//         city: "Paris",
//         country: "France",
//     },
//     employment: {
//         title: "Manager",
//         dept: "Sales",
//     },
// };
// function printDetails(data) {
//     console.log(
//         `Name: ${data.name},
// City: ${data.location.city},
// Role: ${data.employment.title}
// `
//     );
// }

// printDetails(myData);
// function printDetails1({ name, location: { city }, employment: { title } }) {
//     console.log(
//         `Name: ${name},
// City: ${city},
// Role: ${title}
// `
//     );
// }
// printDetails1(myData);
// // ----
let values = [10, 20, 30, 40, 50];
// // let total = sumValues(values);
// let odds = oddOnly(values);
// // console.log(`Total: ${total}, Odd Total: ${odds}`);
// console.log(`Multiply: ${ops.multiply(values)}`);
// console.log(`Subtract: ${ops.subtract(1000, values)}`);
console.log(`Task`);
let total = asyncAdd(values).then((total) =>
    console.log(`Main Total: ${total}`)
);
console.log(`Main Total2: ${total}`);

async function doTask() {
    console.log(`Main doTask`);
    let total = await asyncAdd(values) +1;
    console.log(`Main Total3: ${total}`);
}
doTask();
