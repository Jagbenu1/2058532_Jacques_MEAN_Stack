import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerRef = new FormGroup({
    cid: new FormControl(),
    cname: new FormControl(),
    age: new FormControl()
  });

  storeMsg?:string;
  deleteMsg?:string;
  customers:Array<Customer>=[];
  flag:boolean = false;
  cid?:number;
  age?:number;

  constructor(public custSer:CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  storeInfo(){
    let customer = this.customerRef.value;
    // console.log(customer);
    this.custSer.storeCustomerInfo(customer).subscribe(result=>{
      // console.log(result);
      this.storeMsg = result.msg;
      this.getAllCustomers();
    },error=>console.log(error));
    this.customerRef.reset();
  }

  getAllCustomers(){
    this.custSer.retrieveAllCustomerInfo().subscribe(result=>{
      this.customers=result;
    },error=>console.log(error));
  }

  deleteRec(cid:any){
    // console.log(cid);
    this.custSer.deleteCustomerInfo(cid).subscribe(result=>{
      // console.log(result);
      this.deleteMsg = result.msg;
      this.getAllCustomers();
    },error=>console.log(error));
  }

  updateAge(cid:any, age:any){
    this.flag=true;
    console.log(cid+ " " +age);
    this.cid=cid;
    this.age=age;
  }

  updateMsg?:string;
  nowUpdateAge(){
    //console.log(this.cid+ " " + this.age);
    this.custSer.updateCustomerAge(this.cid, this.age).subscribe(result=>{
      this.updateMsg=result.msg;
      this.flag = false;
      this.getAllCustomers();
    },error=>console.log(error))
  }

}
