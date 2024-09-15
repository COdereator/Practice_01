import { CommonModule } from '@angular/common';
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

}
