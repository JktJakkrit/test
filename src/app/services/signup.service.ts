import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  signUp(authData: any){
    return this.http.post<any>('http://localhost:3000/user/signup', authData)
    
  }
}