import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client';
import {UserService} from '../../services/userService';
import {Address} from '../../models/address';
import {Good} from '../../models/good';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent implements OnInit {

  client: Client;
  address: Address;
  listDesiredGoods: Good[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  removeGoodFromDesiredList(clientId: number, goodId: number): void {
    this.userService.deleteGoodFromDesiredList(clientId, goodId).subscribe((result => this.listDesiredGoods),
      error => console.error('There are an error', error));
    alert('Category successfully deleted!');
  }
}
