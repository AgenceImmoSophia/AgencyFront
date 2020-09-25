import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../models/client';
import {UserService} from '../../services/userService';
import {Address} from '../../models/address';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PartialObserver} from 'rxjs';


@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent implements OnInit {

  @Input()
  client: Client;
  clientId: number;
  address: Address;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    this.client.id = +this.route.params.subscribe((this.param: Params) => {
      this.client.id = +param['clientId'];
      console.log(id)
    }
    this.userService.findClientById(this.client.id).subscribe(client => {this.client = client;
    console.log(this.client);
    });
  }
}
