import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userService';
import { AuthenticationService } from '../services/authenticationService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users: User[] = [];
  isAuthenticated: boolean;

  constructor(
    private userService: UserService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.userService.findAllUsers().pipe()
      .subscribe(users => {
        this.users = users;
      });
    // this.isSignedIn();
  }

  signOut() {
    this.authService.signOut();
  }

  // isSignedIn() {
  //   this.isAuthenticated = this.authService.isSignIn();
  //   return this.isAuthenticated;
  // }

}
