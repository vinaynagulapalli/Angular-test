import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  productdetails;
  flag=false;
  product=false;
  product1=true;
  productdata={
    earrings:{
      productID:'12345678',
    productType:'Earrings(gold)',
    purity:'14kt',
    weight:'200g'
    },
    bangles:{
      productID:'87654321',
    productType:'Bangles(gold)',
    purity:'7kt',
    weight:'100g'
    }
  }

  constructor(public fb:FormBuilder) {
    this.productdetails=this.fb.group({
      productID:[],
      productType:[],
      purity:[],
      weight:[]

    })
   }
   fun(){
    this.flag=true;
    this.product=true;
    this.product1=false;
   }
  ngOnInit() {

  }

  abc(){
    this.product=false;
    this.product1=true;
  }
  abc1(){
    this.product=true;
    this.product1=false;
  }

  submit(){
    console.log(this.productdetails.value)
  }
}
