function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} shirt with the message "${message}"`);
  }
  
  // Make a large shirt with default message
  make_shirt();
  
  // Make a medium shirt with default message
  make_shirt("medium");
  
  // Make a small shirt with a custom message
  make_shirt("small", "TypeScript is awesome!");
  