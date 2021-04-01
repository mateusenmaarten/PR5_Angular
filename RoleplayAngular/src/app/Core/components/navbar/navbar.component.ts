import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { AccountService } from 'src/app/_services/account.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  user: User;

  constructor(private accountService : AccountService) {
    this.user = this.accountService.userValue;
   }

  ngOnInit() {
  }

  logout(){
    console.log("LOGOUT");
    this.accountService.logout();
  }

}
