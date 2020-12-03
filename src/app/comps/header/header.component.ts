import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User = new User();

  constructor(public usersService: UserService) {

  }

  ngOnInit(): void {
    this.usersService.singleUserSubject.subscribe(user =>
      this.currentUser = user);

  }

  ngAfterContentChecked() {


  }

  logOut() {
    this.usersService.singleUser = null;
    localStorage.clear();
  }


}
