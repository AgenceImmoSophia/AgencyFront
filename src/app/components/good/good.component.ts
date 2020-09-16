import { Component, OnInit } from '@angular/core';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.css']
})
export class GoodComponent implements OnInit {
  good: Good;

  constructor(private goodService: GoodService) { }

  ngOnInit(): void {
  }

}
