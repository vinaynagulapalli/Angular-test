import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  a:any;
  constructor() { }

  ngOnInit() {
    var data1= JSON.parse(window.localStorage.getItem('data'));
    console.log(data1.email)
    this.a=data1.email;
  }

}
