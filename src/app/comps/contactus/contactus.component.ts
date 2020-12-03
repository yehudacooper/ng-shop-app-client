import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4)]),
    subject: new FormControl('', [Validators.required, Validators.minLength(4)]),
    message: new FormControl('', [Validators.required, Validators.minLength(4)])

  })

  constructor(private myHttpClient: HttpClient) { }

  ngOnInit(): void {
  }
  formData(data: any) {
    console.log(data);

    this.myHttpClient.post(`http://localhost:3000/auth/contactus`, data).subscribe(item => {
      console.log(item);
    });



  }
}
