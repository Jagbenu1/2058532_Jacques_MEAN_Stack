import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {

  msg:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  CheckUser(item:any){
    let login = item.value;
    // console.log(login);
    if(login.user=="Jacques" && login.pass=="FiReball8"){
      this.msg = "Successful Login!"
    }else{
      this.msg = "Failure to login!"
    }
    item.reset();
  }
}
