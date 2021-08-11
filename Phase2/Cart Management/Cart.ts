let arrayCart: any = [];
let counter:number = 0;
let cartSize:HTMLSpanElement = document.getElementById('Csize');

cartSize.innerHTML = "Cart Size: "+ counter;

function updateCounter() {
    counter++;
    cartSize.innerHTML = "Cart Size: "+ counter;
}

function addPs5(){
    let Ctitle = <HTMLHeadingElement><unknown>document.getElementById("title1").innerHTML;
    let Cprice = <HTMLParagraphElement><unknown>document.getElementById("price1").innerHTML;

    let cartInfo = {Ctitle, Cprice};

    arrayCart.push(cartInfo);
    console.log(arrayCart);
    localStorage.setItem("Item", JSON.stringify(arrayCart));

    // console.log(arrayCart[0].Cprice);
    
    updateCounter();
    console.log(arrayCart.length);
}

function addXbox(){
    let Ctitle = <HTMLHeadingElement><unknown>document.getElementById("title2").innerHTML;
    let Cprice = <HTMLParagraphElement><unknown>document.getElementById("price2").innerHTML;

    let cartInfo = {Ctitle, Cprice};

    arrayCart.push(cartInfo);
    console.log(arrayCart);
    localStorage.setItem("Item", JSON.stringify(arrayCart));
    // console.log(arrayCart[0].Cprice);
    
    updateCounter();
    console.log(arrayCart.length);
}

function addSteam(){
    let Ctitle = <HTMLHeadingElement><unknown>document.getElementById("title3").innerHTML;
    let Cprice = <HTMLParagraphElement><unknown>document.getElementById("price3").innerHTML;

    let cartInfo = {Ctitle, Cprice};

    arrayCart.push(cartInfo);
    console.log(arrayCart);
    localStorage.setItem("Item", JSON.stringify(arrayCart));
    // console.log(arrayCart[0].Cprice);
    
    updateCounter();
    console.log(arrayCart.length);
}

function addSwitch(){
    let Ctitle = <HTMLHeadingElement><unknown>document.getElementById("title4").innerHTML;
    let Cprice = <HTMLParagraphElement><unknown>document.getElementById("price4").innerHTML;

    let cartInfo = {Ctitle, Cprice};

    arrayCart.push(cartInfo);
    console.log(arrayCart);
    localStorage.setItem("Item", JSON.stringify(arrayCart));
    // console.log(arrayCart[0].Cprice);
    
    updateCounter();
    console.log(arrayCart.length);
}