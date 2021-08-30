let http = require("http");
let url = require("url");
let fs = require("fs");

let tasks = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Add Task</h2>
    <form action="addTasks">
        <label>Emp Id</label>
        <input type="number" name="empId"/><br/>

        <label>Task Id</label>
        <input type="number" name="taskId"/><br/>

        <label>Task</label>
        <input type="text" name="task"/><br/>

        <label>Deadline</label>
        <input type="date" name="deadL"/><br/>

        <input type="submit" value="Add Task"/>
       <input type="reset" value="reset"/> <br/>
    </form>

    <h2>Delete Task</h2>
    <form action="deleteTasks">
        <label>Task Id</label>
        <input type="number" name="taskId"/><br/>

        <input type="submit" value="Delete Task"/>
        
    </form>

    <h2>List All Tasks</h2>
    <input type="button" value="List all tasks" onclick="location.href='/listAll'"/>
    
</body>
</html> 

`;

const jsonExists = fs.existsSync("task.json");
// let object = {empId: this.empId, taskId: this.taskId, task: this.task, date: this.date };

let server = http.createServer((request, response)=>{
    let urlInfo = url.parse(request.url, true);
    // console.log(urlInfo);
    // console.log(urlInfo.pathname);

    if(urlInfo.path != "/favicon.ico"){
        response.write(tasks);
        if(urlInfo.pathname == "/addTasks"){
            let add = urlInfo.query;
            if(jsonExists == true){
                // console.log(jsonExists);
                let jsonData = JSON.parse(fs.readFileSync("task.json").toString());
                //console.log(jsonData);
                jsonData.push(add);
                fs.writeFileSync("task.json",JSON.stringify(jsonData));
                // response.write(tasks);
            }else{
                // console.log(jsonExists);
                let objString = JSON.stringify(add);
                fs.writeFileSync("task.json", "["+objString+"]", (err)=>{
                    if(!err){
                        console.log("Data has been stored!");
                    }else{
                        console.log("Data has not been stored!");
                    }
                })
                // response.write(tasks);
            }
        }else if(urlInfo.pathname == "/deleteTasks" ){
            let deleteEntry = urlInfo.query;
            let jsonData = JSON.parse(fs.readFileSync("task.json").toString());

            let result = jsonData.find(d=>d.taskId == deleteEntry.taskId);
            // console.log(deleteEntry.taskId);
            // console.log(result);
            // console.log(jsonData);
            if(result != undefined){
                let numIn = jsonData.findIndex(task => task.taskId === deleteEntry.taskId);
                // console.log(numIn);
                if(numIn != -1){
                    jsonData.splice(numIn, 1);
                    fs.writeFileSync("task.json",JSON.stringify(jsonData));
                }
                
            }
        }
        else if(urlInfo.pathname == "/listAll"){
            let taskJson = JSON.parse(fs.readFileSync("task.json").toString());
            let tableContent = "";
            let startTable = "<table border = 2><tr><th>Employee Id</th><th>Task Id</th><th>Task</th><th>Deadline</th></tr>";
            taskJson.forEach(task =>{
                tableContent+="<tr><td>" + 
                    task.empId + 
                    "</td><td>" + 
                    task.taskId + 
                    "</td><td>" + 
                    task.task + 
                    "</td><td>" + 
                    task.deadL +
                    "</td></tr>"
            });
            let endTable = "</table>";
            response.write(startTable + tableContent + endTable);
        }
    }
    response.end();

})

server.listen(9090, ()=>console.log("Server running on port number 9090"))