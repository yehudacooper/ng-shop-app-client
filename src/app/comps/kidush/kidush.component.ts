import { Component, OnInit } from '@angular/core';
import { SingleItem } from '../../models/singleitem';
import { ItemsService } from '../../services/items.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-kidush',
  templateUrl: './kidush.component.html',
  styleUrls: ['./kidush.component.css']
})
export class KidushComponent implements OnInit {


  itemsList1: Array<SingleItem> = [];
  constructor(public myItemService: ItemsService) {

    this.myItemService.itemsList2.subscribe(data => {
      if (data) this.itemsList1 = data.filter(item => item.sort == 'kiddush')
    });

  }

  ngOnInit(): void {

  }

  removeLocalStorage() {
    localStorage.removeItem('singleItem');
  }

}
