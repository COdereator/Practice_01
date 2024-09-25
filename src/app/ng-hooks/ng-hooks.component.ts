import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-hooks',
  standalone: true,
  imports: [],
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

}
