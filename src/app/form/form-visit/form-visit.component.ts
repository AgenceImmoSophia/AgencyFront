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

@Component({
  selector: 'app-form-visit',
  templateUrl: './form-visit.component.html',
  styleUrls: ['./form-visit.component.css']
})
export class FormVisitComponent implements OnInit {
  @Input()
  visits: Visit[];

  @Input()
  users: User[];

  @Input()
  goods: Good[];

  visit = new Visit();
  date = new Date();
  good = new Good();
  estateAgent = new EstateAgent();
  client = new Client();
  formVisit: FormGroup;
  // formVisit;


  constructor(
    private http: HttpClient,
    private visitService: VisitService,
    private goodService: GoodService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getListOfVisits();
    this.getListOfGoods();
    this.getListOfUsers();
    this.createForm();
  }

  onSubmit(): void {
    const fg = new FormData();
    this.visit.client = this.client;
    this.visit.date = this.date;
    this.visit.estateAgent = this.estateAgent;
    this.visit.good = this.good;
    this.visitService.createVisit(this.visit);
    this.redirect();
    // console.warn(this.fg.value);
    // console.log(this.visit);
    // this.router.navigate(['/visits']);
  }

  getListOfVisits(): void {
    this.visitService.findAllVisits().subscribe(visits => this.visits = visits);
  }

  getListOfGoods(): void {
    this.goodService.findAllGoods().subscribe(goods => this.goods = goods);
  }

  getListOfUsers(): void {
    this.userService.findAllUsers().subscribe(users => this.users = users);
  }

  createForm() {
    this.formVisit = this.fb.group({
      dateOfVisit: ['', Validators.required],
      goodId: ['', Validators.required],
      agentId: ['', Validators.required],
      clientId: ['', Validators.required],
    });
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
