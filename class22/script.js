console.log("Class 22 (class 6 of JS)");

// string methods in JS 

const string = 'Javascript strings are Primitive and immutable: All strings methods produce a new string without primitive altering the original string.'
const _name = "Ali haider";
const full_name = "        Ali haider        ";
// console.log(_name, _name.length);
// console.log(_name[2]);

_name[2] = "I"


// console.log(_name.charAt(2));
// console.log(_name.at(-2));
// console.log(_name.at(2));
// console.log(full_name.trimStart());
// console.log(full_name.trimEnd());
// console.log(full_name.trim());
// console.log(_name.repeat(10));
// console.log(string.replace('primitive', 'String'));
// console.log(string.replaceAll('primitive', 'String'));
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// console.log(string.split(" "));
// console.log(string.split(" "));
// console.log(string.concat(_name, full_name));
// console.log(string.startsWith("Javascript"));
// console.log(string.startsWith("javascript"));
// console.log(string.endsWith("string."));
// console.log(string.endsWith("string"));
// console.log(string.includes("methods"));
// console.log(string.includes("method"));
// console.log(string.includes("methode"));
// console.log(string.indexOf("strings", 50));
// console.log(string.indexOf("strgs", 50));


// const amount = 500_000_000_0;
// console.log(amount);

const car = {
    type: "Fiat",
    model: "500",
    color: "white",
};
console.log(car);
console.log(Object.keys(car));
// console.log(Object.keys(car).length);
console.log(Object.values(car));
const carObjectEntries = Object.entries(car);
console.log(carObjectEntries);
console.log(Object.fromEntries(carObjectEntries));


// console.table(car);
// console.error(car);
// console.warn(car);
// console.log(string);

const hobbies = ["eating", "playing", "coding"]
// for (let index = 0; index < hobbies.length; index++) {
//     const hobby = hobbies[index];
//     console.log('hobby', hobby);
// }
// const carObjectKeys = Object.keys(car)
// for (let index = 0; index < carObjectKeys.length; index++) {
//     const key = carObjectKeys[index];
//     console.log('key', key, car[key]);
// }

// for (const hobby of hobbies) {
//     console.log(hobby, 'hobby');
// }

// for (const key in car) {
//     console.log(key, 'key', car.key, car[key]);
// }
