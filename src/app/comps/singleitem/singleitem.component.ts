import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { SingleItem } from '../../models/singleitem';
import { CartService } from '../../services/cart.service';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-singleitem',
  templateUrl: './singleitem.component.html',
  styleUrls: ['./singleitem.component.css']
})
export class SingleitemComponent implements OnInit {
  itemId: string;
  singleItem: any;

  constructor(private myActivatedRoute: ActivatedRoute, private myItemService: ItemsService,
    private myCartService: CartService) { }

  ngOnInit(): void {
    if (localStorage.getItem("singleItem") != null) {
      this.singleItem = JSON.parse(localStorage.getItem("singleItem"));
      console.log(localStorage.getItem("singleItem"));

    }
    else {
      this.myActivatedRoute.paramMap.subscribe(params => {
        this.itemId = params.get("id");
        this.singleItem = this.myItemService.itemsList.filter(item => item.id == params.get("id"))[0];
        localStorage.setItem("singleItem", JSON.stringify(this.singleItem));

      })
    }

  }
  addToCart() {

    this.myCartService.singleCart.CartItems = JSON.parse(localStorage.getItem("currentCart"));
    this.myCartService.singleCart.CartItems.push(this.singleItem);
    localStorage.setItem("currentCart", JSON.stringify(this.myCartService.singleCart.CartItems));
    console.log(JSON.parse(localStorage.getItem("currentCart")));


  }

}
