const getItems = () => {
    let dataArr = localStorage.getItem('Item');
    let dataJson = JSON.parse(dataArr);
    let tableContent:string = "";
    let totalItems: number = 0;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    let startTable = "<h3>Shopping Cart Checkout</h3><table id=\"items\"> <tr> <th>Item Name</th> <th>Price</th> </tr>";

    for(let i=0;i < dataJson.length;i++){
        tableContent += "<tr><td>" + dataJson[i].Ctitle + "</td><td>" + formatter.format(dataJson[i].Cprice) + "</td>";
        totalItems += parseFloat(dataJson[i].Cprice);
    }

    let endTable = "</table>";

    tableContent = startTable + tableContent + endTable;

    let completed: HTMLElement = document.getElementById('main'); 
    let totalPrice: HTMLElement = document.getElementById('total') ;

    completed.innerHTML = tableContent;
    totalPrice.innerHTML = "The total Item price is " + formatter.format(totalItems);

}