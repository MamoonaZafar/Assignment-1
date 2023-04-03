//Tests for equality and inequality with strings
let car = "subaru";

console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");

console.log("Is car == 'toyota'? I predict False.");
console.log(car == "toyota");

console.log("Is car != 'subaru'? I predict False.");
console.log(car != "subaru");

console.log("Is car != 'toyota'? I predict True.");
console.log(car != "toyota");

console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru");

console.log("Is car === 'toyota'? I predict False.");
console.log(car === "toyota");

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== "subaru");

console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== "toyota");

console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == "SUBARU");

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == "subaru");

//Tests using the lower case function

let Name = "John Doe";

console.log("Is name == 'john doe'? I predict False.");
console.log(Name == 'john doe');

console.log("Is name.toLowerCase() == 'john doe'? I predict True.");
console.log(Name.toLowerCase() == 'john doe');

let name2 = "Jane Doe";

console.log("Is name.toLowerCase() == name2.toLowerCase()? I predict False.");
console.log(Name.toLowerCase() == name2.toLowerCase());

console.log("Is name.toLowerCase() != name2.toLowerCase()? I predict True.");
console.log(Name.toLowerCase() != name2.toLowerCase());

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let x = 5;
let y = 10;

console.log("Is x == 5? I predict True.");
console.log(x == 5);

console.log("Is x != 5? I predict False.");
console.log(x != 5);

console.log("Is x > y? I predict False.");
console.log(x > y);

console.log("Is x < y? I predict True.");
console.log(x < y);

console.log("Is x >= y? I predict False.");
console.log(x >= y);

console.log("Is x <= y? I predict True.");
console.log(x <= y);
//Tests using "and" and "or" operators

let num = 10;
let personname = "John";

console.log("Is num equal to 10 and name equal to 'John'? I predict True.");
console.log(num == 10 && personname == "John");

console.log("Is num equal to 20 or name equal to 'John'? I predict True.");
console.log(num == 20 || personname == "John");

console.log("Is num equal to 20 and name equal to 'Jane'? I predict False.");
console.log(num == 20 && personname == "Jane");

console.log("Is num equal to 10 or name equal to 'Jane'? I predict True.");
console.log(num == 10 || personname == "Jane");

console.log("Is num equal to 20 and name equal to 'John'? I predict False.");
console.log(num == 20 && personname == "John");

console.log("Is num less than 20 or name equal to 'Jane'? I predict True.");
console.log(num < 20 || personname == "Jane");

console.log("Is num greater than 20 and name equal to 'John'? I predict False.");
console.log(num > 20 && personname == "John");

console.log("Is num less than 20 or name equal to 'John'? I predict True.");
console.log(num < 20 || personname == "John");

console.log("Is num greater than 20 and name equal to 'Jane'? I predict False.");
console.log(num > 20 && personname == "Jane");

//Test whether an item is in a array
let fruits = ['apple', 'banana', 'cherry'];

console.log("Is 'apple' in the array of fruits? I predict True.");
console.log(fruits.includes('apple'));

console.log("Is 'grapes' in the array of fruits? I predict False.");
console.log(fruits.includes('grapes'));

//Test whether an item is not in a array

let fruit = ["apple", "banana", "cherry"];

let item = "grapes";

console.log(`Is "${item}" not in the fruits array? I predict True.`);

console.log(!fruit.includes(item));
export{}
