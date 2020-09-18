import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Address} from '../../models/address';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {
  address: Address;
  good: Good;
  goods: Good[];
  goodToSearch: Good;
  rentForm: FormGroup;

  constructor(private goodService: GoodService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  public createForm(): void {
    this.rentForm = this.fb.group({
      city: ['', Validators.required],
      typeOfGood: ['', Validators.required],
      status: ['', Validators.required],
      price: ['', Validators.required],
      area: ['', Validators.required],
      dateAvailability: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    this.goodService.generateCode(this.goodToSearch).subscribe((result => this.findGoodByCode()),
      error => console.error('There are an error!', error));
  }

  public findGoodByCode(): void {
    this.goodService.findGoodByCode(this.goodToSearch.code).subscribe(good => this.good = good);
    this.router.navigate(['../goods/:' + this.goodToSearch.code]);
}
}
