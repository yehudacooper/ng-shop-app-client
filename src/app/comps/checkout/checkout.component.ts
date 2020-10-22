import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  loginForm:FormGroup= new FormGroup({
    email: new FormControl('',[Validators.required , Validators.minLength(2)]),
    password: new FormControl('',[Validators.required , Validators.minLength(4)]),
    firstname: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    telephone: new FormControl('',[Validators.required]),
    nameofcard: new FormControl('',[Validators.required]),
    creditcardnumber: new FormControl('',[Validators.required]),
    expmonth: new FormControl('',[Validators.required]),
    expyear: new FormControl('',[Validators.required]),
    cvv: new FormControl('',[Validators.required]),
    
  })

  @ViewChild('checkout') input: ElementRef<HTMLInputElement>;

  constructor(private myClientService:ClientService) { }

  ngOnInit(): void {
  }

  onSubmit(clientDetails){
    this.myClientService.currentClient = clientDetails;
  }
  onCheckOut(){
    this.input.nativeElement.classList.toggle('show');
    
  }


}
