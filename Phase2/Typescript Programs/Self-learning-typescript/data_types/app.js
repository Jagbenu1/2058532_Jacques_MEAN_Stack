const isAdmin2 = true;
const user2 = "John";
let welcome;
if (isAdmin2) {
    welcome = `Hello ${user2}`;
}
else {
    welcome = `${user2} is not an admin`;
}
console.log(welcome);
