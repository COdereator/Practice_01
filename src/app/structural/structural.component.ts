import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule],
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
    {id: 4,name: 'Raj', email: 'raj@gmail.com',image:'1.jpg'}
  ]

}
