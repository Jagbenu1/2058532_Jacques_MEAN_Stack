import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Emp } from '../Emp.model';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  employees?:Array<Emp>;
  constructor(public ser:SharedService) {

   }

  ngOnInit(): void {
   
  }

  loadData(): void {
    this.employees = this.ser.getEmpArray();
  }

 

}
