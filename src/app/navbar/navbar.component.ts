import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userService';
import { AuthService } from '../services/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users: User[] = [];
  isAuth: boolean;

  constructor(
    private userService: UserService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.findAllUsers().pipe(first()).subscribe(users => this.users = users);
    this.isSignedIn();
  }

  isSignedIn() {
    this.isAuth = this.authService.isLoggedIn();
    return this.isAuth;
  }

  signOut() {
    this.authService.logout();
  }

}
