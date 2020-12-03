import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  checkoutForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    firstname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    nameofcard: new FormControl('', [Validators.required]),
    creditcardnumber: new FormControl('', [Validators.required]),
    expmonth: new FormControl('', [Validators.required]),
    expyear: new FormControl('', [Validators.required]),
    cvv: new FormControl('', [Validators.required]),

  })

  @ViewChild('checkout') input: ElementRef<HTMLInputElement>;
  msg: string = "Thank you very much for buying from silver store,we will keep intouch with you and of course let you know when your persuce items arrive";
  items: string;
  itemsArr: any[];
  constructor( private myHttpClient: HttpClient, private myUserService: UserService) { }

  ngOnInit(): void {
    this.items = localStorage.getItem('currentCart');
    this.itemsArr = JSON.parse(localStorage.getItem('currentCart'));
  }

  onSubmit(clientDetails) {
  }
  onCheckOut(data: any) {
    console.log(data);
    console.log(this.myUserService.singleUser);

    if (this.myUserService.singleUser.username == "") {
      alert('before buying you first need to log in');
    }
    else {
      data.message = this.msg + this.items;
      this.myHttpClient.post(`http://localhost:3000/auth/checkout`, data).subscribe(item => {
        console.log(item);
      });
    }
  }


}
