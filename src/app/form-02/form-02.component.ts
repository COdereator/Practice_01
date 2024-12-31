import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-02',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-02.component.html',
  styleUrl: './form-02.component.css'
})
export class Form02Component {
    userForm: FormGroup = new FormGroup({
      fname: new FormControl("",[Validators.required]),
      lname: new FormControl("",[Validators.required,Validators.minLength(4)]),
      username: new FormControl("",[Validators.email]),
      city: new FormControl(""),
      state: new FormControl("Goa"),
      zip: new FormControl(""),
      isAgree: new FormControl(false),
    })

    onUserSave(){
      const formValue = this.userForm.value
      console.log(formValue);
    }

}
