let guests: string[] = ["Albert Einstein", "Ahmad", "Sana"];

console.log(`Unfortunately, ${guests[0]} cannot make it to the dinner.`);

guests[0] = "Mike";

for (let guest of guests) {
  console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}
