import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskArray: Array<any> = [];

  taskRef = new FormGroup({
    id: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    taskT: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required)
  })
  
  saveTask(){
    let task = this.taskRef.value;
    let taskObj = {Id: task.id, Name: task.name, Task: task.taskT, Date: task.date};
    if(task.id != "" && task.name != "" && task.taskT != "" && task.date != ""){
      this.taskArray.push(taskObj);
      console.log(this.taskArray);
    } 
  }
}
