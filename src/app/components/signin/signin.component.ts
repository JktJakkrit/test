import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    private sign: SignupService
  ) {}

  ngOnInit(): void {}

  signin(){
    console.log(this.authForm.value);
    this.auth.signIn(this.authForm.value).subscribe(
      data =>{
        if(data.status ==true){
          this.router.navigate(['/products']);
        }else{
          alert('Username or Password is incorrect!');
        }
      },
      err=>{
        console.log(err);
        alert('Username or Password is incorrect!');
      });
    }
  
}
