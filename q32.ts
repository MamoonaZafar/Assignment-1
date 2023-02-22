let current_users: string[] = ['Ali', 'Eric', 'Ahmad', 'Sana', 'Eve'];
let new_users: string[] = ['Daniyal', 'Ahmad', 'Sana', 'Eve', 'Amna'];

for (let new_user of new_users) {
  let is_used: boolean = false;
  for (let current_user of current_users) {
    if (new_user.toLowerCase() === current_user.toLowerCase()) {
      is_used = true;
      break;
    }
  }
  if (is_used) {
    console.log(`Sorry, the username "${new_user}" has already been taken. Please choose a different one.`);
  } else {
    console.log(`Congratulations, the username "${new_user}" is available!`);
  }
}
