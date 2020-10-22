import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleItem } from '../models/singleitem';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private link = 'http://localhost:51349/api/cart';
  public singleCart:Cart = new Cart();

  constructor(private myHttpClient: HttpClient, private myUserService: UserService) {
      // this.getSingleCart(myUserService.singleUser.UserId);
  }



  // GET : get a specific cart (by userid) from server (and save the returned value to a property in this service)
  getSingleCart(id: string): void {
      this.myHttpClient.get(`${this.link}?id=${id}`
)
          .subscribe((x: Cart) => { this.singleCart = x; });
  }


}
