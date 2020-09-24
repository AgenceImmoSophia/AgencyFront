import {Component, Input, OnInit, ViewChild, AfterViewInit, AfterViewChecked, DoCheck} from '@angular/core';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {ActivatedRoute, Router} from '@angular/router';
import { CodeFormComponent } from 'src/app/form/code-form/code-form.component';

@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.css']
})
export class GoodListComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input()
  good: Good;

  @Input()
  goods: Good[];

  code;
  changeDetected;

  @ViewChild(CodeFormComponent) codeform: CodeFormComponent;


  constructor(private goodService: GoodService, private route: Router) { }


  ngOnInit(): void {
    this.displayListOfGoods();
  }

  ngAfterViewInit(): void {
    this.code = this.codeform.code;
    console.log('ViewChecked ' + this.code);
  }

  ngAfterViewChecked(): void{
    if(this.code !== this.codeform.code){
      this.changeDetected = true;
      this.code = this.codeform.code;
    }
    this.changeDetected = false;
  }

  public displayListOfGoods(): void {
    this.goodService.findAllGoods().subscribe((goods => this.goods = goods),
      error => console.error('There is an error', error));
  }
}
