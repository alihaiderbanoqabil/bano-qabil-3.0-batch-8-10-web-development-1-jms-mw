console.log('Class 23 (Class 7 of JS)');

// const fruits = [
//     { name: "apples", quantity: 300, type: 'fruit' },
//     { name: "bananas", quantity: 500, type: 'fruit' },
//     { name: "oranges", quantity: 200, type: 'fruit' },
//     { name: "kiwi", quantity: 150, type: 'fruit' },
//     { name: "tomoto", quantity: 300, type: 'vegetable' },
//     { name: "potato", quantity: 500, type: 'vegetable' },
// ];

// // Callback function to select low volumes 
// function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
// }

// Group by ok and low
// const result = Object.groupBy(fruits, function (fruit) {
//     console.log(fruit, 'fruit');

//     return fruit.quantity > 200 ? "ok" : "low";
// });

// const result = Object.groupBy(fruits, (fruit) => {
//     // console.log(fruit, 'fruit', fruit.quantity);

//     // return fruit.type === 'fruit' ? 'fruit' : 'vegetable';
//     // OR 
//     return fruit.type ;
// });
// console.log(result, 'result');
const obj = { name: "apples", quantity: 300, type: 'fruit' }
// obj.price = 500;
// obj.name = 'apple';
// // delete obj.name
const freezeObj = Object.freeze(obj);

// console.log(obj, 'obj');
// obj.name = 'apples';
// obj.weight = 50;
// delete obj.name
// console.log(Object.isFrozen(freezeObj));
// console.log(Object.isFrozen(obj));

// const sealObj = Object.seal(obj)
// obj.name = 'apple';
// obj.price = 500;
// delete obj.name

// console.log(Object.isSealed(sealObj));
// console.log(Object.isSealed(obj));

// check key exists in an object 
// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('Name'));
// console.log('name' in obj);
// console.log('Name' in obj);


// array methods in JS

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const hobbies = ["eating", "playing", "coding"];
// console.log(typeof fruits.toString());
// console.log(fruits.at(2));
// console.log(fruits.at(-1));
// console.log(fruits.join(" * "));
// console.log(fruits.join(" ali "));
// console.log(fruits.join(""));

// console.log(fruits, 'fruits');
// console.log(fruits.pop());
// fruits.pop()
// fruits.pop()
// fruits.pop()
// fruits.push("Banana")
// fruits.push("Orange")
// console.log(fruits.push("Apple"));
// console.log(fruits.push("Mango", "Kiwi"));

// console.log(fruits.shift());
// console.log(fruits.shift());
// console.log(fruits.unshift("Banana"));
// console.log(fruits.unshift("Orange"));

// console.log(fruits, 'fruits');

// console.log(fruits.concat(fruits));
// console.log(fruits.concat(hobbies, fruits,hobbies));


const myArr = [
    [1, 2, [5, 6, [7, 8]]],
    [3, 4],
    [5, 6]
];

// console.log(myArr);
// console.log(myArr.flat());
// console.log(myArr.flat(3));
// console.log(myArr.flat(Infinity));
