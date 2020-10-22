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


  list = [1,2,3,4,5,6,7,8,9,10]
  itemsList: Subject<Array<SingleItem>> = new Subject();
  kidushList:Array<SingleItem> = [];
  itemsList1:Array<SingleItem> = [];
  constructor(private myItemService:ItemsService) { }

  ngOnInit(): void {
    this.itemsList1 = this.myItemService.itemsList;
    this.itemsList.next(this.itemsList1);
    this.itemsList.subscribe(data => this.kidushList = this.getAllKiddush() )

  }
  getAllKiddush (){
    return this.itemsList1.filter(item => item.ItemSort == 'kiddush');
  }

}
