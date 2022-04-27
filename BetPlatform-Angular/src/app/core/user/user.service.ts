import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:3305/register"
  private response=""

  constructor(private httpClient: HttpClient) {}

  public registerUser(user: User, registerForm: FormGroup) : Observable<any>{
    user.email = registerForm.controls['registerEmail'].value;
    user.username = registerForm.controls['registerUsername'].value;
    user.password = registerForm.controls['registerPassword'].value;
    return this.httpClient.post<User>(`${this.baseUrl}`, this.response);
  }
}
