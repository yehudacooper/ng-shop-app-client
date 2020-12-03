import { Component, OnInit } from '@angular/core';
import { SingleItem } from '../../models/singleitem';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  itemsList: Array<SingleItem> = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.itemsList2.subscribe(data => this.itemsList = data);
  }


  deleteItem(id: number) {
    var t = confirm('are you sure you want to delete this item');
    if (t == true)
      this.itemsService.deleteItem(id);
  }
}
