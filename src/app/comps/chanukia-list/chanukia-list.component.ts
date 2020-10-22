import { Component, OnInit } from '@angular/core';
import { SingleItem } from '../../models/singleitem';
import { ItemsService } from '../../services/items.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chanukia-list',
  templateUrl: './chanukia-list.component.html',
  styleUrls: ['./chanukia-list.component.css']
})
export class ChanukiaListComponent implements OnInit {

  list = [1,2,3,4,5,6,7,8,9,10]
  itemsList: Subject<Array<SingleItem>> = new Subject();
  chanukiaList:Array<SingleItem> = [];
  itemsList1:Array<SingleItem> = [];
  constructor(private myItemService:ItemsService) { }

  ngOnInit(): void {
    this.itemsList1 = this.myItemService.itemsList;
    this.itemsList.next(this.itemsList1);
    this.itemsList.subscribe(data => this.chanukiaList = this.getAllChanukia() )

  }
  getAllChanukia (){
    return this.itemsList1.filter(item => item.ItemSort == 'chanukia');
  }

}
