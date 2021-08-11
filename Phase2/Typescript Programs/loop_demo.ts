let num2:number[] = [10, 20, 2321,473];
console.log(num2);
console.log("using in Loop");
for(let i in num2){
    console.log("index is " + i);
}

for(let n of num2){
    console.log("value is " + n);
}
