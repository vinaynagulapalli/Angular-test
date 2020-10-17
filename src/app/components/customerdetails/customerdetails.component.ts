import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  customerDetails;
  constructor(public fb:FormBuilder) {
    this.customerDetails=this.fb.group({
      name:[],
      email:[],
      phoneNo:[],
      proof:[],
      address:[],
      city:[],
      pincode:[]

    })
   }
   get(){
     console.log(this.customerDetails.value)
   }

   customerdetails(){
     var a=JSON.stringify(this.customerDetails.value) ;

     window.localStorage.setItem("data",a);
   }

  ngOnInit() {
  }

}
