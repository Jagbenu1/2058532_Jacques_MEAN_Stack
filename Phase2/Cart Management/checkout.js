var getItems = function () {
    var dataArr = localStorage.getItem('Item');
    var dataJson = JSON.parse(dataArr);
    var tableContent = "";
    var totalItems = 0;
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    var startTable = "<h3>Shopping Cart Checkout</h3><table id=\"items\"> <tr> <th>Item Name</th> <th>Price</th> </tr>";
    for (var i = 0; i < dataJson.length; i++) {
        tableContent += "<tr><td>" + dataJson[i].Ctitle + "</td><td>" + formatter.format(dataJson[i].Cprice) + "</td>";
        totalItems += parseFloat(dataJson[i].Cprice);
    }
    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable;
    var completed = document.getElementById('main');
    var totalPrice = document.getElementById('total');
    completed.innerHTML = tableContent;
    totalPrice.innerHTML = "The total Item price is " + formatter.format(totalItems);
};
