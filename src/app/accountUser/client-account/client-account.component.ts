import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../models/client';
import {UserService} from '../../services/userService';
import {Address} from '../../models/address';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PartialObserver} from 'rxjs';
import {User} from '../../models/user';


@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent implements OnInit {

  @Input()
  client: Client;
  users: User[];
  user: User;
  address: Address;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.users.forEach((c: User) => {
    //   if (this.user.role === 'Client' && c.id === this.route.snapshot.params.id) {
    //     this.user = c;
    //   }
    // });
    // this.getClient();
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.findClientById(id).subscribe(client => {this.client = client;
    console.log('Id found is : ' + this.client.id); });
  }
  }
