import { Component, OnInit } from '@angular/core';
import {Good} from '../../models/good';
import {UserService} from '../../services/userService';
import {Client} from '../../models/client';

@Component({
  selector: 'app-client-good-list',
  templateUrl: './client-good-list.component.html',
  styleUrls: ['./client-good-list.component.css']
})
export class ClientGoodListComponent implements OnInit {

  client: Client;
  good: Good;
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
