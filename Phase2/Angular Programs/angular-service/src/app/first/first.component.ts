import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../custom.service';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg1: string = "";
  msg2_1:string =" ";
  constructor(public ff:FakeService) { }

  ngOnInit(): void {
  }

  fun1(){
    let mySer = new MyCustomService();
      this.msg1 = mySer.display();
  }
  fun2_1(){
    this.msg2_1 = this.ff.display();
  }

}
