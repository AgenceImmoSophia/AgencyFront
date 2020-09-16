import {Component, Input, OnInit} from '@angular/core';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.css']
})
export class GoodListComponent implements OnInit {

  @Input()
  good: Good;

  @Input()
  goods: Good[];

  constructor(private goodService: GoodService) { }

  ngOnInit(): void {
    this.displayListOfGoods();
  }

  public displayListOfGoods(): void {
    this.goodService.findAllGoods().subscribe((goods => this.goods = goods),
      error => console.error('There is an error', error));
  }
}