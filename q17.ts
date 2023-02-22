let guests: string[] = ["Albert Einstein", "Ahmad", "Sana", "Zainab", "David", "Frank"];
console.log("Original guest list: " + guests);

console.log("\nUnfortunately, I can only invite two people for dinner.");

let uninvitedGuest: string = guests.pop();
console.log("Sorry, " + uninvitedGuest + ", you can't come to dinner.");

uninvitedGuest = guests.pop();
console.log("Sorry, " + uninvitedGuest + ", you can't come to dinner.");

uninvitedGuest = guests.pop();
console.log("Sorry, " + uninvitedGuest + ", you can't come to dinner.");

console.log("\nInvited Guests: " + guests);

guests.pop();
guests.pop();

console.log("\nFinal Guest List: " + guests);