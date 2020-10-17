import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  flag=false;
  constructor() { }

  ngOnInit() {
  }

  display(){
    this.flag=true;
  }

}
