let Name: string = "Eric";

console.log("Lowercase:" + Name.toLowerCase());
console.log("Uppercase:" + Name.toUpperCase());

let titlecase: string = Name[0].toUpperCase() + Name.slice(1).toLowerCase();
console.log("Titlecase:" + titlecase);