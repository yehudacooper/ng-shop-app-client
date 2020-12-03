import { Component, OnInit } from '@angular/core';
import { SingleItem } from '../../models/singleitem';
import { ItemsService } from '../../services/items.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-chanukia-list',
  templateUrl: './chanukia-list.component.html',
  styleUrls: ['./chanukia-list.component.css']
})
export class ChanukiaListComponent implements OnInit {


  itemsList1: Array<SingleItem> = [];
  constructor(public myItemService: ItemsService) {

    this.myItemService.itemsList2.subscribe(data => {
      if (data) this.itemsList1 = data.filter(item => item.sort == 'chanukia')
    });

  }

  ngOnInit(): void {

  }

  removeLocalStorage() {
    localStorage.removeItem('singleItem');
  }

}
