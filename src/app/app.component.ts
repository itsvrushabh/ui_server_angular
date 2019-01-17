import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit{
  title = 'app';
  register;

  constructor(private userService: UserService){}

  ngOnInit(){
    this.register = {
      username: '',
      password: '',
      email: ''
    };
  }

  allUsers(){
    this.userService.listAllUsers().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  registerUser(){
    this.userService.registerUser(this.register).subscribe(
      response => {
        console.log('Response', response);
        alert('User '+this.register.username+' has been created');
      },
      error => {
        // console.log('error', error);
        let error_message = 'Error at creating user. '
        if(error.error.email != undefined)
        {
          error_message = error_message + error.error.email
        }
        else if(error.error.username != undefined)
        {
          error_message = error_message + error.error.username + " : " + this.register.username
        }
        else if(error.error.password != undefined)
        {
          error_message = error_message + error.error.password
        }
        alert('Error at creating user. '+error_message);
        // alert(error.error.email)
        // console.log(error.error);
      }
      // error => console.log('error ', error)
    )
  }
}
