import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flag=true;
  video=true;
  end=true;
  constructor() { }
  removeproduct(){
    document.getElementById("lost").style.display="none"
  }
  ngOnInit() {
  }
  on(){
    this.flag=false
    
  }
  off(){
    this.flag=true;
  }
  videoon(){
    this.video=false
    
  }
  videooff(){
    this.video=true;
  }

  clear(){
    this.flag=false;
    this.video=false;
    this.end=false;
  }
}
