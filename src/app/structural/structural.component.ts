import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { MainComponent } from "../component/main/main.component";
import { HttpDataServiceService } from '../services/http-data-service.service';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MainComponent],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {

  isLoggedIn:boolean = true; 
  userName = "John Doe"

  checkLogin(){
    this.isLoggedIn = !this.isLoggedIn
  }

  limit = 1;

  isAdmin = false;
  isMember = false;
  isGuest = true;

  limitExceed(){
    this.limit++
  }

  users: Array<string> = ["John","Hello","Shawn","Smith","Raj"]

  usersObj: Array<any> = [
    {id: 1,name: 'John', email: 'john@gmail.com',image:'1.jfif'},
    {id: 2,name: 'Smith', email: 'smith@gmail.com',image:'2.jfif'},
    {id: 3,name: 'Sam', email: 'sam@gmail.com',image:'3.jfif'},
    {id: 4,name: 'Raj', email: 'raj@gmail.com',image:'4.jfif'}
  ]

  addUser(){
    let images = ['1.jfif','2.jfif','3.jfif','4.jfif'];
    let image = images[Math.floor(Math.random() * images.length)];
    let user = {id: Math.floor(Math.random()*10),name: 'John', email: 'john@gmail.com',image:image};
    this.usersObj.push(user);
  }

  // onDelete(user:object){
  //   let index = this.usersObj.indexOf(user);
  //   this.usersObj.splice(index,1);
  // }

  userRole = "";

  onDelete(index:number){
    this.usersObj.splice(index,1);
  }

  isCondition:boolean = false;

  navbar = ["Hello","Nothing","Something","Everything"];

  buttons = ["Home","About","Contact","Services"]

  switchCase = ""

  hello(evt:any){
    this.switchCase = evt.target.innerText
  }

  usersData:any;

  constructor(private _httpDataServiceService:HttpDataServiceService) {}

  ngOnInit(){
    this._httpDataServiceService.getUsersData().subscribe((_result) => {
      this.usersData = _result;
      console.log(this.usersData);
    })
  }

}
