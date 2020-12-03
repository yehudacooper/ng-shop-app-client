import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleItem } from '../models/singleitem';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public singleCart:Cart = new Cart();
  cartItemsSubject:BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);

  constructor(private myHttpClient: HttpClient, private myUserService: UserService) {
      this.singleCart.CartItems = [];
  }






}
