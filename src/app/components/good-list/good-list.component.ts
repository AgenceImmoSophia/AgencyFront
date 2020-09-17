import {Component, Input, OnInit} from '@angular/core';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private goodService: GoodService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.displayListOfGoods();
  }

  public displayListOfGoods(): void {
    this.goodService.findAllGoods().subscribe((goods => this.goods = goods),
      error => console.error('There is an error', error));
  }
  public onDelete(goodId: number): void {
    this.goodService.deleteGoodById(goodId).subscribe((result => this.displayListOfGoods()),
      error => console.error('There are an error', error));
  }
  public goToHomePage(): void {
    this.router.navigate(['../home']);
  }
}
