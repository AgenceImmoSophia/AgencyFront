import { Component, Input, OnInit } from '@angular/core';
import {Good} from '../../models/good';

@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css']
})
export class GoodDetailComponent implements OnInit {

  @Input() good: Good;

  constructor() { }

  ngOnInit(): void {
  }

}
