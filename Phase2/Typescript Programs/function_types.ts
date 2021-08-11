function add1(a,b){
    console.log(a);
    console.log(b);
}
add1(10, 20);
add1(10.20, 20.40);
add1("Raj", "Pat");
//add1(10); error
//add1(); error

function addNumber1(a:number, b:number){
    let sum = a+b;
    console.log("sum of two numbers is "+sum); 
}

addNumber1(10,20);
addNumber1(10.20, 20.20);
//addNumber1("billy", "Beth");

//funciton with no return type
function info3() : void {
    console.log("info function with void type");
}

//fucntion with string return type
function sayHello1(name:string){
    return "Welcome "+name;
}

//fucntion may return or not
function hello1(a:any): any{
    //return 100;
    //return "Welcome";
}

//optional parameter
function empInfo(id?: number, name?:string, age?:number):void{
    console.log("id is " + id);
    console.log("name is "+name);
    console.log("age is "+age);
}

empInfo(100, "Ravi", 21);
empInfo(101, "Ramesh");
empInfo(102);
empInfo()
