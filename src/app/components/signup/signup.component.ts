import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'angular-web-storage';
import {AuthService} from '../../services/auth.service';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  products: any;
  token: string;

  profileForm = this.fb.group({
    username: [''],
    password: [''],
    title: [''],
    firstName: [''],
    lastName: [''],
    sex: [''],
    email: ['',Validators.required, Validators.email],

    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    
  });

  get email() {return this.profileForm.get('email');}
  
  constructor(
    private router: Router, 
    private auth: AuthService,
    private sign: SignupService,
    private fb: FormBuilder
  ) {
}

  ngOnInit(): void {}
  signup(){
    console.log(this.profileForm.value);
    this.sign.signUp(this.profileForm.value).subscribe(
      data => {
        alert('Create your account successfully')
      }
    );

  }
}
