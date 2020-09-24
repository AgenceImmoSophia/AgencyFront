import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../models/client';
import {UserService} from '../../services/userService';
import {Address} from '../../models/address';
import {Good} from '../../models/good';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent implements OnInit {

  @Input()
  client: Client;

  address: Address;
  listDesiredGoods: Good[];

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.findClientById(id).subscribe(client => {this.client = client;
    console.log(this.client);
    });
  }

  goDesiredList(): void {
    this.router.navigate(['clientList']);
  }
}
