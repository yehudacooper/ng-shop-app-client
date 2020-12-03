import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleItem } from '../models/singleitem';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    private link = 'http://localhost:51349/api/item';
    public itemsList: Array<SingleItem> = [];
    private singleItem: SingleItem;
    itemsList2: BehaviorSubject<Array<SingleItem>> = new BehaviorSubject(null);

    constructor(private myHttpClient: HttpClient, private myUserService: UserService) {
        this.getItems();
    }


    // GET : get all items from server (and save the returned value to a property in this service)
    getItems(): void {
        this.myHttpClient.get(`http://localhost:3000/product`)
            .subscribe((x: Array<SingleItem>) => {
                this.itemsList2.next(x);
            });
        this.itemsList2.subscribe(x => this.itemsList = x);
    }

    // GET : get a specific item (by id) from server (and save the returned value to a property in this service)
    getSingleItem(id: string): void {
        this.myHttpClient.get(`http://localhost:3000/product/${id}`
        )
            .subscribe((x: SingleItem) => { this.singleItem = x; });
    }

    addItem(item: any) {
        const headers:HttpHeaders = new HttpHeaders({
            Authorization: 'Bearer '+this.myUserService.singleUser.accessToken
        });
        this.myHttpClient.post(`http://localhost:3000/product`, item,{ headers: headers }).subscribe(item => {
            console.log(item);
            
            this.getItems()
        });
        console.log(headers);
        console.log(this.myUserService.singleUser.accessToken);
        


    }
    deleteItem(id: number) {
        const headers:HttpHeaders = new HttpHeaders({
            Authorization: 'Bearer '+this.myUserService.singleUser.accessToken
        });
        this.myHttpClient.delete(`http://localhost:3000/product/${id}`,{ headers: headers }).subscribe(item=>this.getItems());
    }

    editItem(item:any,id:string){
        const headers:HttpHeaders = new HttpHeaders({
            Authorization: 'Bearer '+this.myUserService.singleUser.accessToken
        });
       this.myHttpClient.patch(`http://localhost:3000/product/${id}`,item,{ headers: headers }).subscribe(item=>this.getItems());
    }

}

