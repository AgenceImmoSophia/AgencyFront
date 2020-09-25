import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {Good} from '../../../models/good';
import {Client} from '../../../models/client';
import {GoodService} from '../../../services/goodService';
import {UserService} from '../../../services/userService';

@Component({
  selector: 'app-find-clients-interested-in-good',
  templateUrl: './find-clients-interested-in-good.component.html',
  styleUrls: ['./find-clients-interested-in-good.component.css']
})
export class FindClientsInterestedInGoodComponent implements OnInit {

  @Input() goods: Good[];
  @Input() clientsInterested: Client[];
  listOfInterestedClients: Client[][] = [];

  constructor(private goodService: GoodService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getListOfGoods();
  }

  getListOfGoods(): void {
    this.goodService.findAllGoods().subscribe(goods =>{
      this.goods = goods ;
      this.getListOfInterestedClients();
    });
  }

  getListOfInterestedClients(): void {
    for (let index = 0;index < this.goods.length;index++) {
      this.userService.findClientsInterestedInGood(this.goods[index]).subscribe(data =>{
        this.clientsInterested = data;
        console.log(data);
        console.log(index);
        this.listOfInterestedClients.push(this.clientsInterested);
      });
    }
  }
}
