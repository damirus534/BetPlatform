import { Component, OnInit } from '@angular/core';
import {UserService} from "../core/user/user.service";
import {User} from "../core/user/user";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerUser: User = new User();
  public myResponse: number = 3;


  constructor(private userService : UserService) { }

  ngOnInit(): void {

  }

  registerForm= new FormGroup({
    registerEmail: new FormControl('', [Validators.required, Validators.email]),
    registerUsername: new FormControl('', [Validators.required]),
    registerPassword: new FormControl('', [Validators.required])
  })

  public onRegisterSubmit(){
    this.userService.registerUser(this.registerUser, this.registerForm).subscribe((response)=>{
      this.myResponse = response;
      console.log(this.myResponse);//if good return number[0(succes),1(Account with username exists),2(email is used)] if not 3 and below error
      complete: () => {
        this.userService.registerUser(this.registerUser, this.registerForm).subscribe({
          error: console.error,
          complete: () => {
            console.log(this.registerUser);
          }
        })
      }

    });
  }



}
