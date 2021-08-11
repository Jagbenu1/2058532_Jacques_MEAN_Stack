const isAdmin2: boolean = true;
const user2: string = "John";
let welcome: string;

if(isAdmin2){
    welcome = `Hello ${user2}`;
}else{
    welcome = `${user2} is not an admin`;
}

console.log(welcome);

