const getData = () => {
        let dataArr = localStorage.getItem("ClientData");
        let dataJson = JSON.parse(dataArr);
        let tableContent = "";
        let totalBudget = 0;

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        let startTable = "<h3>Annual Budget</h3><table id=\"finance\"><tr> <th>Client Name</th> <th>Project Name</th> <th>Budget</th> </tr>";

        for(let i =0; i < dataJson.length; i++){
            tableContent += "<tr><td>" + dataJson[i].Sclient + "</td><td>" + dataJson[i].Sproject + "</td><td>" + formatter.format(dataJson[i].Sbudget) + "</td></tr>";
            totalBudget += parseFloat(dataJson[i].Sbudget);

            console.log('added value ', parseInt(dataJson[i].Sbudget));
        }

        let endTable = "</table>";

        tableContent = startTable + tableContent + endTable;

        document.getElementById("main").innerHTML=tableContent;
        document.getElementById("total").innerHTML = "The total budget is " + formatter.format(totalBudget);
    
        console.log("data is " + dataArr);
        console.log(totalBudget);
    }