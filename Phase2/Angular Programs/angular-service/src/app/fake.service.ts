import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Fake } from "../fake.model";

@Injectable()
export class FakeService {
    constructor(public http:HttpClient){

    }

    display():string {
        return "Welcome to User-Defined Service Using DI";
    }

    // loadFakeJsonData(): void {
    //     this.http.get("https://jsonplaceholder.typicode.com/todos").
    //     subscribe(data=>console.log(data),
    //     error=>console.log(error),
    //     ()=>console.log("completed"));
    // }
    loadFakeJsonData(): Observable<Fake[]>{
        return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
    }
}