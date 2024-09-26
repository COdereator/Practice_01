import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-hooks',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DecimalPipe,PercentPipe,CurrencyPipe,DatePipe,JsonPipe,SlicePipe],
  templateUrl: './ng-hooks.component.html',
  styleUrl: './ng-hooks.component.css'
})
export class NgHooksComponent implements OnChanges, OnInit, DoCheck{

  number = 0;

  @Input() parentMessage:string = ""  ;

  ngOnInit() {
    console.log("ngOnInit Triggered");  
    console.log("ngOnInit : "+this.parentMessage);
  }

  ngOnChanges(){
    console.log("OnChange Triggered");
  }

  ngDoCheck() {
      console.log("DoCheck Triggered");
  }

  constructor(){
    console.log("Constructor Method Triggered");
    console.log("Constructor : "+this.parentMessage);
  }

  increament(){
    this.number++;
  }

  pipes = "Pipes In Angular"

  today = new Date();

  userObj:any = {
    name : "John Doe",
    age : 30,
    email : "johndoe.example.com  "
  }

  convertJson(){
    this.userObj = JSON.stringify(this.userObj)
  }

}
