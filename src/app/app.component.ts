import { Component,ViewChild,AfterViewInit, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from "./component/footer/footer.component";
import { MainComponent } from './component/main/main.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StructuralComponent } from './structural/structural.component';
import { NgHooksComponent } from "./ng-hooks/ng-hooks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MainComponent, HeaderComponent, FormsModule, CommonModule, StructuralComponent, NgHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'Suru karte hai';
  fname = 'Hello';
  lname = 'World';
  binary = 101010;
  path = '2.jpg';
  toggle = false
  greet:any

  isActive = true;

  buttonClick(){
    console.log("Hello Button : "+Math.floor(Math.random()*10));
    alert("Hello Button : "+Math.floor(Math.random()*10))
  } 

  buttonOver(){
    alert("Hello Hover");
  }

  keyUp(evt:any){
    if(evt.key =="Enter"){
      console.log(evt.target.value);
    }
  }

  userName = "Hello"
  updateUserName(username:HTMLInputElement){
    this.userName = username.value
    console.log(this.userName);
  }

  keyFilter(user:HTMLInputElement){
    console.log(user.value);
  }

  hello(){    
    if(this.toggle){
      this.greet=""
      this.path= '2.jpg'
      this.toggle= false
    }
    else{
      this.path='1.jpg'
      this.greet="Hello Boss"
      this.toggle= true
    }
  }
  // change the value of text with the input
  changeText:any
  changes(evt:any){
    this.changeText = evt.target.value
  }
  change = false;
  color = ""

  changeColor(){
    this.change = !this.change
    if(this.change== true){
      this.color="red"
    }
    else{
      this.color="green"
    }
  }

  @ViewChild(StructuralComponent) child!: StructuralComponent;

  constructor(private viewContainer: ViewContainerRef){
    console.log(this.child);
  }
  
  message = ""
  valid:any

  ngAfterViewInit() {
    setTimeout(() => {
      this.message = this.child.childMessage;
      this.valid = this.child.isValid;
    });
  }

  messageFromChild: any;

  recieveMessage(message:string){
    console.log(message);
    this.messageFromChild = message
  }


  loadComponent(){
    return FooterComponent 
  }

  createComponent(){
    this.viewContainer.createComponent(FooterComponent) 
  }

  removeComponent(){
    this.viewContainer.remove() 
  }

  parentMessage = "Parent Message"

  changeparentMessage(){
    this.parentMessage = "Hacker"
  }

}
