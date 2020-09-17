import { Component, Input, OnInit } from '@angular/core';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css']
})
export class GoodDetailComponent implements OnInit {

  @Input() good: Good;

  constructor(private goodService: GoodService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGood();
  }

  getGood(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.goodService.findGoodById(id).subscribe(good => this.good = good);
  }

}
