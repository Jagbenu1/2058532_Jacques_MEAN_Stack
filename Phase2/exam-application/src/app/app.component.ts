import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myExam:FormGroup;
  myQuestions: Array<any> =[];
  myAnswers: Array<any> = [];
  examArray: Array<any> = [];
  count: number = 0;
  msg: string = "";
  msg2: string = "";
  examFinish: boolean = false;
  constructor(public questser:QuestionService, public exam:FormBuilder){
    this.myExam = exam.group({});
  }
  
  ngOnInit(): void {
    this.questser.getQuestions().subscribe(result=>{
      for(let q of result){
        this.myExam.addControl(q.question, this.exam.control(""));
        this.myQuestions.push(q);
        this.myAnswers.push(q.correctAns)
      }
    })
  }

  submitExam(){
    Object.keys(this.myExam.value).forEach(key=>{
      // console.log(this.myExam.value[key]);
      this.examArray.push(this.myExam.value[key]);
    })

    for(let i =0; i<this.myAnswers.length;i++){
      if(this.examArray[i] != ""){
        if(this.myAnswers[i] == this.examArray[i]){
          // console.log("This is correct!");
          document.getElementById(this.examArray[i])?.setAttribute("style", "color: red;");
          document.getElementById(this.myAnswers[i])?.setAttribute("style", "color: green;");
          this.count++;
        }else{
          // console.log("This is Incorrect!");
          document.getElementById(this.examArray[i])?.setAttribute("style", "color: red;");
          document.getElementById(this.myAnswers[i])?.setAttribute("style", "color: green;");
        }
        this.examFinish = true;
      }else{
        this.examFinish = false;
        break;
      }
    }

    if(this.examFinish){
      this.msg = "Your score is: " + this.count + "/10";
      if(this.count > 5){
        this.msg2 = "You have passed!! Refresh to try again.";
        document.getElementById("score")?.setAttribute("style","color: green");
        alert(this.msg + "\n" + this.msg2);
      }else{
        this.msg2 = "You have failed!! Refresh to try again.";
        document.getElementById("score")?.setAttribute("style","color: red");
        alert(this.msg + "\n" + this.msg2);
      } 
    }else{
      this.msg = "Please finish the exam!";
    }
    
    this.examArray = [];
  }
}
