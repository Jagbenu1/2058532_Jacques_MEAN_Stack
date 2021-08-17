import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pname: string = "";

  studenNames: Array<string>=["Raj", "Seeta", "Reeta", "Meeta"];

  @ViewChild(Child1Component)   //DI for child1 component
  child1?:Child1Component;  
  
  cAge?:number;

  passValue(nameRef: any){
    this.pname = nameRef.value;
    this.studenNames.push(this.pname)
  }

callChildComponentData(){
  // if(this.child1!=undefined){
    this.child1?.childFun();
    this.cAge = this.child1?.childAge
  // }
    // calling child1 component function
}
}




