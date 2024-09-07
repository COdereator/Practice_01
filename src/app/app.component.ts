import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from "./component/footer/footer.component";
import { MainComponent } from './component/main/main.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,MainComponent,HeaderComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Suru karte hai';
  fname = 'Hello';
  lname = 'World';
  binary = 101010;
  path = '2.jpg';
  toggle = false
  greet:any

  isActive = false;

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
}
