import { Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      telephoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmePassword: new FormControl('', [Validators.required]),
    }
  );

  register() : void {
    if(this.registrationForm.valid){
      alert("Successful registration!");
      };
    }
  

  get f() {
    return this.registrationForm.controls;
  }

  mustMatch(password: any, confirmePassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmepasswordcontrol = formGroup.controls[confirmePassword];
      if (
        confirmepasswordcontrol.errors &&
        !confirmepasswordcontrol.errors['mustMatch']
      ) {
        return;
      }
      if (passwordcontrol.value !== confirmepasswordcontrol.value) {
        confirmepasswordcontrol.setErrors({ mustMatch: true });
      } else {
        confirmepasswordcontrol.setErrors(null);
      }
    };
  }

}
