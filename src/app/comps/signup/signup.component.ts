import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })
  constructor(private myrouter: Router, private myuserService: UserService, private http: HttpClient) { }

  ngOnInit(): void {

  }
  onSubmit(user: any) {
    console.log('yehuda100');


    this.http.post('http://localhost:3000/auth/signup', user).subscribe(data => console.log(data));
  }
}
