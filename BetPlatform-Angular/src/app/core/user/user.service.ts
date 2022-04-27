import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private registerUrl = "http://localhost:3305/register"

  constructor(private httpClient: HttpClient) {
  }

  public registerUser(user: User, registerForm: FormGroup) : Observable<number>{
    user.email = registerForm.value['registerEmail'];
    user.username = registerForm.controls['registerUsername'].value;
    user.password = registerForm.controls['registerPassword'].value;

    console.log(registerForm);
    return this.httpClient.post<number>(`${this.registerUrl}`,user)
  }
}
