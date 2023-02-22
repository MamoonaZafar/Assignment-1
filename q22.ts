let fruit = ['apple', 'banana', 'cherry'];

// Attempt to access an index that doesn't exist
console.log(fruit[3]);


let fruits = ['apple', 'banana', 'cherry'];

// Check the index range before accessing an element
if (fruits.length > 3) {
  console.log(fruits[3]);
} else {
  console.log("Index out of range");
}

// Or use a try-catch block to handle the error
try {
  console.log(fruits[3]);
} catch (error) {
  console.log("Index out of range");
}
