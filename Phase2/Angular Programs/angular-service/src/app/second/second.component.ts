import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../custom.service';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  msg2: string = "";
  msg2_2: string = "";
  constructor(public ff:FakeService) { }

  ngOnInit(): void {
  }

  fun2(){
    let mySer = new MyCustomService();
      this.msg2 = mySer.display();
  }

  fun2_2(){
    this.msg2_2 = this.ff.display()
  }
}
