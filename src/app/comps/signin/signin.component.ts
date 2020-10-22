import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  loginForm:FormGroup= new FormGroup({
    email: new FormControl('',[Validators.required , Validators.minLength(2)]),
    password: new FormControl('',[Validators.required , Validators.minLength(4)])
  })
  constructor(private myrouter:Router,private myuserService: UserService) { }

  ngOnInit(): void {

  }
  onSubmit(user:any){
    console.log(user);
     this.myuserService.userList.forEach(user1 =>{
       if(user1.UserPassword==user.password && user1.UserEmail==user.email){
         this.myuserService.singleUser = user1;
         return;
       }
     })
  }
}
