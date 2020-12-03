import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { SingleItem } from '../../models/singleitem';
import { CartService } from '../../services/cart.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  listItems: SingleItem[];
  listItemsWithTotal: any[];
  totalBeforeVat: number = 0;
  totalAfterVat: number;
  totalNumberOfItems: number = 0;
  deliveryByShop: string = "true";
  delivaryCost: BehaviorSubject<string> = new BehaviorSubject(null);
  listItems1: Subject<SingleItem[]> = new Subject();
  delivaryCost1: number = 0;
  currentCart: any;

  constructor(private myCartService: CartService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("currentCart") != null) {
      this.listItems = JSON.parse(localStorage.getItem("currentCart"));
      console.log(JSON.parse(localStorage.getItem("currentCart")));

    }
    console.log(this.myCartService.singleCart.CartItems);
    this.listItemsWithTotal = [...this.listItems].map(i => ({ ...i, total: +i.price * +i.qnty }));
    this.listItemsWithTotal.forEach(item => this.totalBeforeVat += +item.total);
    this.totalAfterVat = this.totalBeforeVat * 1.17;


    this.listItemsWithTotal.forEach(i => this.totalNumberOfItems += +i.qnty);



  }



  ngAfterContentChecked() {

    this.delivaryCost.subscribe(data => {
      if (data == "true") {
        this.delivaryCost1 = this.totalNumberOfItems * 20;
        this.totalBeforeVat += this.delivaryCost1;
        this.totalAfterVat = this.totalBeforeVat * 1.17;


      }
      else if (data == "false") {
        this.delivaryCost1 = 0;
        this.totalBeforeVat -= this.totalNumberOfItems * 20;
        this.totalAfterVat = this.totalBeforeVat * 1.17;

      }
    })
    this.delivaryCost.next(this.deliveryByShop);

    console.log(this.deliveryByShop);
    console.log(this.delivaryCost1);


  }
  deleteItem(item: SingleItem) {
    console.log(item);
    this.listItemsWithTotal = [];
    this.listItems.splice(this.listItems.indexOf(item), 1);
    localStorage.setItem('currentCart', JSON.stringify(this.listItems));
    this.listItemsWithTotal = [...this.listItems].map(i => ({ ...i, total: +i.price * +i.qnty }));
    this.totalBeforeVat = 0;
    this.listItemsWithTotal.forEach(item => this.totalBeforeVat += +item.total);
    this.totalAfterVat = this.totalBeforeVat * 1.17;
    this.totalNumberOfItems = 0;

    this.listItemsWithTotal.forEach(i => this.totalNumberOfItems += +i.qnty);
  }

  // thousands_separators(num) {
  //   var num_parts = num.toString().split(".");
  //   num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   return num_parts.join(".");
  // }
}
