import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {ActivatedRoute, Router} from '@angular/router';
import { CodeFormComponent } from 'src/app/form/code-form/code-form.component';

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

  code;

  @ViewChild(CodeFormComponent) codeform: CodeFormComponent;


  constructor(private goodService: GoodService, private route: Router) { }

  ngOnInit(): void {
    this.displayListOfGoods();
  }

  ngAfterViewInit(){
    this.code = this.codeform.code;
    console.log(this.code);
    this.route.navigate(["/goods"]);
  }

  public displayListOfGoods(): void {
    this.goodService.findAllGoods().subscribe((goods => this.goods = goods),
      error => console.error('There is an error', error));
  }

  public onDelete(goodId: number): void {
    this.goodService.deleteGoodById(goodId).subscribe((result => this.displayListOfGoods()),
      error => console.error('There are an error', error));
  }
}
