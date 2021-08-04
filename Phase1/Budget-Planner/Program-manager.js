// const data2 = (client, project, budget) => {
//     const clientInfo = {client, project, budget};
//     array.push(clientInfo);
// }

let array = [];

const storeData = () => {
    let Sclient = document.getElementById("client").value;
    let Sproject = document.getElementById("project").value;
    let Sbudget = document.getElementById("budget").value;

    
    let clientInfo = {Sclient, Sproject, Sbudget};
    array.push(clientInfo);
    localStorage.setItem("ClientData", JSON.stringify(array));

    console.log(array);
};

// const getData = () => {
//     let dataArr = localStorage.getItem("ClientData");
//     let dataJson = JSON.parse(dataArr);

//     console.log("data is " + dataArr);
// }

const clearField = () => {
    let Sclient = document.getElementById("client").value = "";
    let Sproject = document.getElementById("project").value = " ";
    let Sbudget = document.getElementById("budget").value = "";
}