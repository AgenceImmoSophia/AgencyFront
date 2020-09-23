import {Component, Input, OnInit} from '@angular/core';
import {Visit} from '../../models/visit';
import {Good} from '../../models/good';
import {EstateAgent} from '../../models/estateAgent';
import {Client} from '../../models/client';
import {User} from '../../models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GoodService} from '../../services/goodService';
import {UserService} from '../../services/userService';
import {VisitService} from '../../services/visit.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Contract } from 'src/app/models/contract';

@Component({
  selector: 'app-form-visit',
  templateUrl: './form-visit.component.html',
  styleUrls: ['./form-visit.component.css']
})
export class FormVisitComponent implements OnInit {

  @Input()
  users: User[];

  @Input()
  goods: Good[];

  visit = new Visit();
  date = new Date();
  good = new Good();
  estateAgent = new EstateAgent();
  client = new Client();
  contract = new Contract();
  formVisit;
  // formVisit;


  constructor(
    private http: HttpClient,
    private visitService: VisitService,
    private goodService: GoodService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder) {
      this.formVisit = this.fb.group({
        dateOfVisit: ['', Validators.required],
        goodId: ['', Validators.required],
        agentId: ['', Validators.required],
        clientId: ['', Validators.required],
      });
  }

  ngOnInit(): void {
    this.getListOfGoods();
    this.getListOfUsers();
  }

  onSubmit(): void {

    this.visit.client = this.client;
    this.visit.date = this.formVisit.value.dateOfVisit;
    this.visit.estateAgent = this.estateAgent;
    this.visit.good = this.good;
    this.visitService.createVisit(this.visit);
    this.redirect();
    // console.warn(this.fg.value);
    // console.log(this.visit);
    // this.router.navigate(['/visits']);
  }



  getListOfGoods(): void {
    this.goodService.findAllGoods().subscribe(goods => {
      this.goods = goods;
    console.log(this.goods)});
  }

  getListOfUsers(): void {
    this.userService.findAllUsers().subscribe(users => this.users = users);
  }



  redirect(): void {
    this.router.navigate(['/visits']);
  }


  getClient(): any{
    return this.userService.findClientById(this.formVisit.value.clientId).subscribe(value => {
      this.client = value;
      console.log(value);
    });
  }

  getAgent(): any{
    return this.userService.findAgentById(this.formVisit.value.agentId).subscribe(value => {
      this.estateAgent = value;
      console.log(value);
    });
  }

  getGood(): any{
    return this.goodService.findGoodById(this.formVisit.value.goodId).subscribe(value => {
      this.good = value;
    });
  }

}
