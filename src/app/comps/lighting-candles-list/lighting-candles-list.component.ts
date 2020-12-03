import { Component, OnInit } from '@angular/core';
import { SingleItem } from '../../models/singleitem';
import { ItemsService } from '../../services/items.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lighting-candles-list',
  templateUrl: './lighting-candles-list.component.html',
  styleUrls: ['./lighting-candles-list.component.css']
})
export class LightingCandlesListComponent implements OnInit {

  itemsList1: Array<SingleItem> = [];
  constructor(public myItemService: ItemsService) {

    this.myItemService.itemsList2.subscribe(data => {
      if (data) this.itemsList1 = data.filter(item => item.sort == 'kandlestick')
    });

  }

  ngOnInit(): void {

  }

  removeLocalStorage() {
    localStorage.removeItem('singleItem');
  }

}
