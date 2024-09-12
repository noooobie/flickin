import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  clicked:boolean=false;
  color:string="red";

  handleChange(){
    this.clicked=!this.clicked;
    console.log(this.clicked);
    if(this.clicked){
      console.log("Clicked")
      this.color="purple"
    }else{
      this.color="red"
    }
    
  }



}



