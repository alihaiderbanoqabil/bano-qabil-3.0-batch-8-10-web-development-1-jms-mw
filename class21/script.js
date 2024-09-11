console.log("Class 21 (class 5 of JS)");

// primitive data types
// let n1 = 10;
// let n2 = n1;
// console.log(n1, n2);
// n2 = 20;
// console.log(n1, n2);

// let n3 = "ali";
// let n4 = n3;
// console.log(n3, n4);
// n4 = "hasnain";
// console.log(n3, n4);

// non-primitive data types
let studentGenders = ["male", "female", "female", "female", "male"];

const studentInfo = {
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
// const copiedStudentInfo = studentInfo; // normal copy

// delete copiedStudentInfo.city;
// copiedStudentInfo.age = 40;
// copiedStudentInfo.address.country = "India";
// console.log(studentInfo);
// console.log(copiedStudentInfo);
// console.log(Object.keys(studentInfo));
// console.log(Object.values(studentInfo));

const jsonObj = JSON.stringify(studentInfo);
const nativeObj = JSON.parse(jsonObj);
// console.log(Object.keys(jsonObj));
// console.log(typeof jsonObj, jsonObj);
// console.log(typeof nativeObj, nativeObj);
// console.log(Object.values(studentInfo));
// console.log(typeof studentInfo, studentInfo);

// deep copy

// // const deepCopyObj = JSON.parse(JSON.stringify(studentInfo));
// const deepCopyObj = structuredClone(studentInfo);
// delete deepCopyObj.city;
// deepCopyObj.age = 40;
// deepCopyObj.address.country = "India";
// console.log(studentInfo);
// console.log(deepCopyObj);

// const shallowCopyObj = { ...studentInfo, address: { ...studentInfo.address } };
// delete shallowCopyObj.city;
// shallowCopyObj.age = 40;
// shallowCopyObj.address.country = "India";

// console.log(studentInfo);
// console.log(shallowCopyObj);

// function in JS
// here the variables and logic is same a part from values so we can't code like this we can use functions here
// let n1 = 20;
// let n2 = 40;
// let sum1 = n1 + n2;
// console.log(sum1);

// let n3 = 50;
// let n4 = 100;
// let sum2 = n3 + n4;
// console.log(sum2);
// function greet() {
//   console.log("Hello Good Morning!");
//   console.log("Hello Good Morning!!");
//   console.log("Hello Good Morning!!!");
// }
// greet();
// greet();
// greet();

// let add = sum(10, 30);
// console.log(add);
// console.log(sum(199, 100));

// function sum(num1 = 50, num2 = 100) {
//   console.log(arguments);
//   return num1 + num2;

//   //   console.log(num1 + num2);
// }

function sum(num1 = 50, num2 = 100, num3) {
  return num1 + num2;
}

// console.log(sum(199, 100));

// alert(add);
// const areYouSure = confirm("Are you sure you want to delete this item?");
// console.log(areYouSure);
// const age = prompt("Enter your age:");
// console.log(typeof age, age);
// document.write(`<h1>Sum : ${add}</h1>`);
// sum(40, 30);
// sum();

// function lotsOfParameters(p1, p2, p3, p4, p5) {
//   console.log({ p1, p2, p3, p4, p5 });
// }
// lotsOfParameters(10, 20, 30);

// function lotsOfParameters({ p1, p2, p3, p4, p5 }) {
//   console.log({ p1, p2, p3, p4, p5 });
// }

// lotsOfParameters({ p1: 10, p2: 20, p4: 40, p3: 30, p5: 50 });
// console.log(minuse(100, 50));
// arrow function
// const minuse = (n1, n2) => {
//   console.log(arguments);

//   // console.log(n1, n2, n1 - n2);
//   return n1 - n2;
// };
const minuse = (n1, n2) => n1 - n2;
console.log(minuse(100, 50));

// const minuse = function (n1, n2) {
//   return n1 - n2;
// };
// const age = 30;
// let name = "ali";
// let phoneNumber = "03000000000";
// // const obj = { age: age, name: name, cellNumber: phoneNumber };
// const obj = { age, name, cellNumber: phoneNumber };
// console.log(obj);
