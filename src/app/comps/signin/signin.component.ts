import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })
  constructor(private myrouter: Router, private myuserService: UserService, private http: HttpClient) { }

  ngOnInit(): void {

  }
  onSubmit(user: any) {

    this.http.post<User>('http://localhost:3000/auth/signin', user)
      .pipe(tap(data => console.log(data)))
      .subscribe(data => {
        this.myuserService.singleUser = data;
        console.log(this.myuserService.singleUser);
        this.myuserService.singleUserSubject.next(this.myuserService.singleUser);

      });


  }
}
