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
  visit = new Visit();
  date = new Date();
  good = new Good();
  estateAgent = new EstateAgent();
  client = new Client();

  @Input()
  goods: Good[];
  @Input()
  users: User[];

  fg: FormGroup;
  formVisit;

  constructor(
    private http: HttpClient,
    private visitService: VisitService,
    private goodService: GoodService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.goodService.findAllGoods().subscribe((goods => this.goods = goods),
      error => console.error('There are an error', error));
    this.userService.findAllUsers().subscribe((users => this.users = users),
      error => console.error('There are an error', error));
  }

  createForm() {
    this.fg = this.fb.group({
      dateOfVisit: ['', Validators.required],
      goodId: ['', Validators.required],
      agentId: ['', Validators.required],
      clientId: ['', Validators.required],
    });
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

  onSubmit(): void {
    const fg = new FormData();
    // fg.append('dateOfVisit', this.visit.date);
    // fg.append('goodId', this.visit.good);
    // fg.append('agentId', this.visit.estateAgent);
    // fg.append('clientId', this.visit.client);
    this.visit.client = this.client;
    this.visit.date = this.formVisit.value.dateOfContract;
    this.visit.estateAgent = this.estateAgent;
    this.visit.good = this.good;
    this.visitService.createVisit(this.visit);
    console.warn(this.fg.value);
    console.log(this.visit);
    this.router.navigate(['/visits']);




  }

  // addVisit(dateOfVisit: Date, good: Good, estateAgent: EstateAgent, client: Client): void {
  //   this.visitService.createVisit({
  //     dateOfVisit,
  //     good,
  //     estateAgent,
  //     client
  //   } as unknown as Visit).subscribe();
  // }

}
