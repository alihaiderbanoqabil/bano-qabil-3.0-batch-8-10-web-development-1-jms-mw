console.log("Class 20 (class 4 of JS)");

// if else if and else in JS

let num1 = 10;
let num2 = 50;
let color = "green";
let age = 26;

// if (num1 > num2 && num1 < 20 && color === "green") {
//   console.log("if block is calling");
// } else {
//   console.log("else block is calling");
// }

// else {
//   console.log("else block is calling");
// }

// if (color === "green" || color === "red" || color === "yellow") {
//   console.log("color is", color);
// } else {
//   console.log("i dont know the color ");
// }

// if (color === "green") {
//   console.log("color is green *");
// } else if (num1 < num2 && num1 < 20) {
//   console.log("num1 < num2 && num1 < 20");
// } else if (color === "red") {
//   console.log("color is red **");
// } else if (color === "yellow") {
//   console.log("color is yellow ***");
// } else if (color === "blue") {
//   console.log("color is blue ****");
// } else {
//   console.log("i dont know the color ");
// }

// if (color === "green") {
//   console.log("color is green *");
// }
// if (num1 < num2 && num1 < 20) {
//   console.log("num1 < num2 && num1 < 20");
// }
// if (color === "red") {
//   console.log("color is red **");
// }
// if (color === "yellow") {
//   console.log("color is yellow ***");
// }
// if (color === "blue") {
//   console.log("color is blue ****");
// } else {
//   console.log("i dont know the color ");
// }

// // scenario 1
// if (color === "green") {
//   console.log("color is green *");
// } else if (color === "red") {
//   console.log("color is red **");
// } else if (color === "yellow") {
//   console.log("color is yellow ***");
// } else if (color === "blue") {
//   console.log("color is blue ****");
// } else {
//   console.log("i dont know the color ");
// }
// // scenario 2
// if (color === "green") {
//   console.log("color is green *");
// } else if (num1 < num2 && num1 < 20) {
//   console.log("(num1 < num2 && num1 < 20");
// } else if (color === "red") {
//   console.log("color is red **");
// } else if (color === "yellow") {
//   console.log("color is yellow ***");
// } else if (color === "blue") {
//   console.log("color is blue ****");
// } else {
//   console.log("i dont know the color ");
// }

// this switch case is completely replacement of the above scenario 1
// we can not replace the above scenario 2 with switch case or some similar scenarios like the above one
// switch (color) {
//   case "green":
//     console.log("color is green *");
//     break;
//   case "red":
//     console.log("color is red *");
//     break;
//   case "yellow":
//     console.log("color is yellow *");
//     break;
//   case "blue":
//     console.log("color is blue *");
//     break;
//   default:
//     console.log("i dont know the color ");
//     break;
// }

// if (condition) {
//    if (condition) {

//    } else {

//    }
// } else {

// }

// if (condition) {
//   if (condition) {
//   } else {
//   }
// } else if (condition) {
//   if (condition) {
//   } else if (condition) {
//   } else if (condition) {
//   } else {
//   }
// } else if (condition) {
// } else if (condition) {
// } else {
//   if (condition) {
//   } else if (condition) {
//   } else if (condition) {
//   } else {
//   }
// }

// if (color === "random") {
//   console.log("color is random *");
// } else if (num1 < num2 && num1 < 20) {
//   console.log("(num1 < num2 && num1 < 20");

//   if (color === "green") {
//     console.log("color is green *");
//   } else {
//     console.log("i dont know the color ");
//   }
// } else if (color === "red") {
//   console.log("color is red **");
// } else if (color === "yellow") {
//   console.log("color is yellow ***");
// } else if (color === "blue") {
//   console.log("color is blue ****");
// } else {
//   console.log("i dont know the color ");
// }

// let isAdult;

// if (age > 18) {
//   console.log("you are 18+");
//   isAdult = true;
// } else {
//   console.log("you are not 18+");
//   isAdult = false;
// }

// let isAdult;
// if (age > 18) {
//   isAdult = true;
// } else {
//   isAdult = false;
// }
// OR
// let isAdult;
// if (age > 18) isAdult = true;
// else isAdult = false;

// ternary operator
// let isAdult = age > 18 && num1 < num2 ? true : false;
// let variable = (age > 18) ? [true] : { name: "ali" };

// console.log(isAdult, age);

// // array in JS
// const cars = ["Saab", "Volvo", "BMW", "Audi"];
// // // const cars = [];
// // cars[0] = "Audi";
// // cars[3] = "Audi";
// // cars[4] = "Audi";
// // delete cars[4];
// console.log(cars[cars.length - 1]);
// console.log(cars, "cars", cars[0], cars[6]);

let studentNames = ["ali", "hasnain", "usman", "haider", "harry"];
let studentMarks = [10, 20, 30, 40, 50];
let studentGenders = ["male", "female", "female", "female", "male"];
let mixedValue = [
  10,
  undefined,
  null,
  "string",
  ["ali", "ali"],
  { age: 20, name: "ali" },
];
// array methods are remaining

// objects in JS

// const std1Name = "std1Name";
// const std1Email = "std1Email";
// const std1Gender = "std1Gender";
// const std1Age = 10;

// const std2Name = "std2Name";
// const std2Email = "std2Email";
// const std2Gender = "std2Gender";
// const std2Age = 20;


const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
const student1Info = {
  gender: "male",
  "full name": "ali",
  age: 30,
  isAdult: true,
  city: "karachi",
  hobbies: ["eating", "playing", "coding"],
  address: {
    country: "Paskistan",
    city: "karachi1",
  },
};
student1Info.address.country = "India";
student1Info.hobbies[1] = "swimming";

delete student1Info.city;
delete student1Info["isAdult"];
console.log(student1Info);
console.log(student1Info["full name"]);
console.log(student1Info.address.country);
console.log(student1Info.address);
console.log(student1Info["address"]["country"]);
console.log(student1Info.hobbies);
// console.log(student1Info.name.fullname);
