import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-customer',
  imports: [NgForOf],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {

  customerList:any=null;

  // http://localhost:3306/customer/add
  constructor(private http:HttpClient){
    this.getAll();
  }

  getAll(){
    this.http.get("http://localhost:8080/customer/all").subscribe(data=>{
      console.log(data);
      this.customerList=data;
    })
  }


}
