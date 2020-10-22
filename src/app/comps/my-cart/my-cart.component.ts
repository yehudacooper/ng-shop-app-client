import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { SingleItem } from '../../models/singleitem';
import { CartService } from '../../services/cart.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  listItems:SingleItem[];
  listItems1:Subject<SingleItem[]> = new Subject();

  
  constructor(private myCartService:CartService) { }

  ngOnInit(): void {
    this.listItems = this.myCartService.singleCart.CartItems;
    this.listItems1.next(this.myCartService.singleCart.CartItems);
    this.listItems1.subscribe(items => this.listItems = items);
  }
 deleteItem(item:SingleItem){
  this.myCartService.singleCart.CartItems.splice(this.listItems.indexOf(item),1);
 }
}
