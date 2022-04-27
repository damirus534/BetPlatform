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
  //public userAlreadyExists: Boolean = false;
  //public emailIsUsed: Boolean = false;
  //public userCreated: Boolean = false;
  public myResponse: string = "";


  constructor(private userService : UserService) { }

  ngOnInit(): void {

  }

  registerForm= new FormGroup({
    registerEmail: new FormControl('', [Validators.required, Validators.email]),
    registerUsername: new FormControl('', [Validators.required]),
    registerPassword: new FormControl('', [Validators.required])
  })

  public onRegisterSubmit(){/*
    this.userService.registerUser(this.registerUser, this.registerForm).subscribe({
      complete: () => {
        this.userService.registerUser(this.registerUser, this.registerForm).subscribe({
          error: console.error,
          complete: () => {
            console.log(this.registerUser);
          }
        })
      }

    });*/
  }



}
