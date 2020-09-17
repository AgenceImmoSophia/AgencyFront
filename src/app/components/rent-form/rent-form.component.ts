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
  goodCode: string;
  angForm: FormGroup;

  constructor(private goodService: GoodService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.goodCode = this.route.snapshot.paramMap.get('goodCode');
  }

  public createForm(): void {
    this.angForm = this.fb.group({
      city: ['', Validators.required],
      typeOfGood: ['', Validators.required],
      minPrice: ['', Validators.required],
      maxPrice: ['', Validators.required],
      area: ['', Validators.required],
      dateAvailability: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    this.goodService.generateCode(this.goodCode).subscribe((result => this.goToFilteredGoodsList()),
      error => console.error('There are an error!', error));
  }

  goToFilteredGoodsList(): void {
    this.router.navigate(['../goods']);
  }
}
