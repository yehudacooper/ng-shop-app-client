import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private link = 'http://localhost:51349/api/user';
  public userList:Array<User> = [];
  public singleUser:User = new User();

  public singleUserSubject:BehaviorSubject<User> = new BehaviorSubject<User>(this.singleUser);
  constructor(private myHttpClient: HttpClient) {
    //   this.getUsers();
    this.singleUser.username = "";
    this.singleUserSubject.next(this.singleUser);
  }
  // GET : get all users from server (and save the returned value to a property in this service)
  getUsers(): void {
      this.myHttpClient.get(this.link)
          .subscribe((x: Array<User>) => { this.userList = x; });
  }

  // GET : get a specific user (by userName) from server (and save the returned value to a property in this service)
  getUser(userName: string): void {
      this.myHttpClient.get(`${this.link}?userName=${userName}`)
          .subscribe((x: User) => { this.singleUser = x; });
  }


   getUserForEdit(userName: string, callback: (user: User) => void): void {

      this.myHttpClient.get(`${this.link}?userName=${userName}`)
          .subscribe((x: User) => { callback(x); });
  }

}
