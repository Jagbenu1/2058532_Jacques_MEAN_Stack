import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }

  //post takes two parameters
  //1st parameter is url and 2nd is data in json format
  storeCustomerInfo(customer:Customer):Observable<any>{
     return this.http.post<any>("http://localhost:9090/storeCustomerInfo", customer)
  }

  //call get method can convert all json data into customer array object
  retrieveAllCustomerInfo():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:9090/allCustomerDetails");
  }

  deleteCustomerInfo(cid:any):Observable<any>{
    return this.http.delete<any>("http://localhost:9090/deleteCustomerInfo/"+cid)
  }
  
  updateCustomerAge(cid:any, age:any):Observable<any>{
    return this.http.put<any>("http://localhost:9090/updateCustomerAge", {cid:cid, age:age});
  }
}
