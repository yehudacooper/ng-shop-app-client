import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

 
  loginForm:FormGroup= new FormGroup({
    email: new FormControl('',[Validators.required , Validators.minLength(2)]),
    password: new FormControl('',[Validators.required , Validators.minLength(4)]),
    firstname: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    telephone: new FormControl('',[Validators.required]),
    
  })
  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(){
    // this.myrouter.navigate(['chat-component']);
  }

}
