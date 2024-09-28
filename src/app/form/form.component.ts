import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  
})
export class FormComponent {
    
  studentObj:any = {
    firstName : '',
    lastName : '',
    userName : '',
    city : '',
    state : '',
    zipCode : '',
    isAcceptTerms : false
  };

  formValue: any;
  onSubmit() {
    debugger;
    this.formValue = this.studentObj;
  }

  onReset(){
    this.studentObj = {
      firstName : '',
      lastName : '',
      userName : '',
      city : '',
      state : '',
      zipCode : '',
      isAcceptTerms : false
    }
  }

}
