import {Component, Input, OnInit, ViewChild, AfterViewInit, AfterViewChecked, DoCheck} from '@angular/core';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {ActivatedRoute, Router} from '@angular/router';
import { CodeFormComponent } from 'src/app/form/code-form/code-form.component';
import { UserService } from 'src/app/services/userService';
import { Owner } from 'src/app/models/owner';
import { Client } from 'src/app/models/client';

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

  idUser;

  owner = new Owner();

  client = new Client();

  roleUser: string;

  @ViewChild(CodeFormComponent) codeform: CodeFormComponent;


  constructor(private goodService: GoodService, private userService: UserService, private route: Router) { }


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
    this.idUser = this.idInUrl();
    this.roleUser = this.roleInUrl();
    if (this.idUser != null || this.idUser == "") {
      if ( this.roleUser == "owner") {
        this.getOwner(this.idUser);
      } 
      else if (this.roleUser == "client") {
        this.getClient(this.idUser);
      }     
    }
    else {
      this.goodService.findAllGoods().subscribe((goods => this.goods = goods),
      error => console.error('There is an error', error));
    }
  }

  public onDelete(goodId: number): void {
    this.goodService.deleteGoodById(goodId).subscribe((result => this.displayListOfGoods()),
      error => console.error('There are an error', error));
    alert('good with id = ' + goodId + ' has been successfully deleted');
  }

  public idInUrl(): number{
    var url = window.location.href;
    var match = url.match(/\d+$/);
    if (match != null) {
      var iduser = Number(match[0]);
    }
    return iduser;
  }

  public roleInUrl(): string {
    var url = window.location.href;
    var match = url.match(/owner|client/);
    if (match != null) {
      if (match[0] == "owner") {
        var role= "owner";
      }
      else if (match[0] == "client") {
        var role = "client";
      }
    }
    return role;
  }

  getOwner(idUser):any{
    return this.userService.findOwnerById(idUser).subscribe(value => 
      {this.owner = value;
        if ( this.owner != null) {
          this.goodService.findGoodsByOwnerId(this.idUser).subscribe((goods => this.goods = goods), 
          error => console.error('There is an error', error))
        } 
    });
  }

  getClient(idUser):any{
    return this.userService.findClientById(idUser).subscribe(value => 
      {this.client = value;
        if ( this.client != null) {
          this.goods = this.client.listDesiredGood;
        }; 
    });
  }

}


