import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.css']
})
export class DahsboardComponent implements OnInit {

  user?:string = "";

  constructor(public activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(data=> this.user = data.uname)
   }

  ngOnInit(): void {
  }

}
