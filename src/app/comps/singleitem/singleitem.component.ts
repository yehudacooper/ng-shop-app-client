import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { SingleItem } from '../../models/singleitem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-singleitem',
  templateUrl: './singleitem.component.html',
  styleUrls: ['./singleitem.component.css']
})
export class SingleitemComponent implements OnInit {
  itemId:string;
  singleItem:any;

  constructor(private myActivatedRoute: ActivatedRoute, private myItemService: ItemsService,
  private myCartService:CartService) { }

  ngOnInit(): void {

    this.myActivatedRoute.paramMap.subscribe(params => {
      this.itemId = params.get("id");
      this.singleItem = this.myItemService.itemsList.filter(item =>item.ItemId == params.get("id")); 

    })
  }
  addToCart(){
    this.myCartService.singleCart.CartItems.push(this.singleItem);
  }

}
