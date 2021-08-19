import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-exam',
  templateUrl: './mdf-exam.component.html',
  styleUrls: ['./mdf-exam.component.css']
})
export class MdfExamComponent implements OnInit {
  myForm:FormGroup;
  constructor(public form:FormBuilder) {
    this.myForm=form.group({});
   }

  ngOnInit(): void {
    this.allQuestions.forEach(q=>{
      this.myForm?.addControl(q.Question, this.form.control(""));
    })
  }

  submit(){
    console.log(this.myForm.value);
    
  }
  allQuestions = [
    {Question:"5+5", ans1:"10", ans2:"11", ans3:"76", correctAns:"10"},
    {Question:"5+6", ans1:"10", ans2:"11", ans3:"76", correctAns:"11"},
    {Question:"5+10", ans1:"15", ans2:"11", ans3:"76", correctAns:"15"}
  ]

}
