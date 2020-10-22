import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleItem } from '../models/singleitem';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private link = 'http://localhost:51349/api/item';
  public itemsList:Array<SingleItem> =[];
  private singleItem:SingleItem;

  constructor(private myHttpClient: HttpClient, private myUserService: UserService) {
      this.getItems();
  }


  // GET : get all items from server (and save the returned value to a property in this service)
  getItems(): void {
      this.myHttpClient.get(this.link)
          .subscribe((x: Array<SingleItem>) => { this.itemsList = x; });
  }

  // GET : get a specific item (by id) from server (and save the returned value to a property in this service)
  getSingleItem(id: string): void {
      this.myHttpClient.get(`${this.link}?id=${id}`
)
          .subscribe((x: SingleItem) => { this.singleItem = x; });
  }


}
