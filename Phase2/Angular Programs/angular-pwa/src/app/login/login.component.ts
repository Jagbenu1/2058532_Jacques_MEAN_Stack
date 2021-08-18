import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginser:LoginService) { }

  ngOnInit(): void {
  }

  checkUser(loginRef: NgForm){
    let login = loginRef.value;
    let flag =0;
    this.loginser.checkUser().subscribe(results=>{
      for(let ll of results){
        if(ll.user == login.user && ll.pass == login.pass){
          flag++;
        }
      }
      if(flag>0){
        console.log("Success");
      }else{
        console.log("Failure");
        
      }
    })
  }
}
