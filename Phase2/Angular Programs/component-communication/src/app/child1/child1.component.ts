import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()
  parentName:string = "";

  childAge:number = 21;
  constructor() { }

  ngOnInit(): void {
  }
  
  childFun(){
    console.log("this is child1 Function!!");
    
  }

}
