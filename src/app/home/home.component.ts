import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/userService';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.findAllUsers().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

}
