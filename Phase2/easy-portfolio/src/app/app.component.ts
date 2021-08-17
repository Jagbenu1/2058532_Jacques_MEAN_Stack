import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  username?: string;
  arrayContact: Array<any> = [];
  msg1:string = "";
  msg2:string = "";

  formRef = new FormGroup({
    firstN: new FormControl(""),
    lastN: new FormControl(""),
    user: new FormControl("", Validators.required),
    pass: new FormControl("", Validators.required)
  })

  loginRef = new FormGroup({
    user: new FormControl("", Validators.required),
    pass: new FormControl("", Validators.required)
  })

  profileRef = new FormGroup({
    contact: new FormControl("", Validators.required),
    number: new FormControl("", Validators.required)
  })

  

  register: boolean = true;
  login: boolean = false;
  profile: boolean = false;
  table: boolean = false;

  checkInfo(){
    let info = this.formRef.value;

    if(info.user && info.pass){
      this.login = true;
      this.register = false;
      this.username = info.user;
      console.log(info);
    }else{
      this.msg1 = "Make sure you have a username and password.";
    }
  }
  
  checkLogin(){
    let info = this.formRef.value;
    let login = this.loginRef.value;

    if(info.user == login.user && info.pass == login.pass){
      this.profile = true;
      this.login = false;
    }else{
      this.msg2 = "Login info incorrect."
    }
  }
  
  addAndOutput(){
    let profile = this.profileRef.value;
    let profileObj = {contact: profile.contact, number: profile.number};
    this.table = true;
    
    this.arrayContact.push(profileObj);
    console.log(this.arrayContact);
  }
}
