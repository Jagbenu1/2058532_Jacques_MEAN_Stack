import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-exam',
  templateUrl: './tdf-exam.component.html',
  styleUrls: ['./tdf-exam.component.css']
})
export class TdfExamComponent implements OnInit {

  constructor() { }

   allQuestions = [
     {Question:"5+5", ans1:"10", ans2:"11", ans3:"76", correctAns:"11"}
   ]

  ngOnInit(): void {
  }

}
