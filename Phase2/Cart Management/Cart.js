var arrayCart = [];
var counter = 0;
var cartSize = document.getElementById('Csize');
cartSize.innerHTML = "Cart Size: " + counter;
function updateCounter() {
    counter++;
    cartSize.innerHTML = "Cart Size: " + counter;
}
function addPs5() {
    var Ctitle = document.getElementById("title1").innerHTML;
    var Cprice = document.getElementById("price1").innerHTML;
    var cartInfo = { Ctitle: Ctitle, Cprice: Cprice };
    arrayCart.push(cartInfo);
    console.log(arrayCart);
    localStorage.setItem("Item", JSON.stringify(arrayCart));
    // console.log(arrayCart[0].Cprice);
    updateCounter();
    console.log(arrayCart.length);
}
function addXbox() {
    var Ctitle = document.getElementById("title2").innerHTML;
    var Cprice = document.getElementById("price2").innerHTML;
    var cartInfo = { Ctitle: Ctitle, Cprice: Cprice };
    arrayCart.push(cartInfo);
    console.log(arrayCart);
    localStorage.setItem("Item", JSON.stringify(arrayCart));
    // console.log(arrayCart[0].Cprice);
    updateCounter();
    console.log(arrayCart.length);
}
function addSteam() {
    var Ctitle = document.getElementById("title3").innerHTML;
    var Cprice = document.getElementById("price3").innerHTML;
    var cartInfo = { Ctitle: Ctitle, Cprice: Cprice };
    arrayCart.push(cartInfo);
    console.log(arrayCart);
    localStorage.setItem("Item", JSON.stringify(arrayCart));
    // console.log(arrayCart[0].Cprice);
    updateCounter();
    console.log(arrayCart.length);
}
function addSwitch() {
    var Ctitle = document.getElementById("title4").innerHTML;
    var Cprice = document.getElementById("price4").innerHTML;
    var cartInfo = { Ctitle: Ctitle, Cprice: Cprice };
    arrayCart.push(cartInfo);
    console.log(arrayCart);
    localStorage.setItem("Item", JSON.stringify(arrayCart));
    // console.log(arrayCart[0].Cprice);
    updateCounter();
    console.log(arrayCart.length);
}
