let guests: string[] = ["Albert Einstein", "Ahmad", "Sana"];

console.log('Original Guests: ${guests}');
console.log("Good news! A bigger dinner table has been found!");
guests.unshift("Zainab");
guests.splice(2,0, "David");
guests.push("Frank");

console.log("New Guests List: " + guests);

for (let guest of guests) {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}