import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, ControlValueAccessor} from '@angular/forms';
import {Address} from '../../models/address';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {ActivatedRoute, Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';
import {Status} from '../../models/status';


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
  wishedGoods: Good[];
  rentForm: FormGroup;
  codeToFind: string;
  firstDigit: number;
  secondDigit: number;
  thirdDigit: number;
  fourthDigit: number;

  constructor(private goodService: GoodService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  public createForm(): void {
    this.rentForm = this.fb.group({
   //   city: new FormControl('', Validators.required),
      typeOfGood: new FormGroup({
        house: new FormControl('', Validators.required),
        apartment: new FormControl('', Validators.required),
        studio: new FormControl('', Validators.required),
        storage: new FormControl('', Validators.required),
        office: new FormControl('', Validators.required),
        shop: new FormControl('', Validators.required),
      }),
      statusOfGood: new FormGroup({
        toSell: new FormControl('', Validators.required),
        toRent: new FormControl('', Validators.required),
        notAvailable: new FormControl('', Validators.required),
      }),
      price: new FormControl ('', Validators.required),
      area: new FormControl ('', Validators.required),
 //     dateAvailability: new FormControl ('', Validators.required),
    });
  }

  public onSubmit(): void {

  }

  public generateCode(): void {
    const firstDigit = this.rentForm.value.typeOfGood.value;
    let secondDigit = this.rentForm.value.price;
    const thirdDigit = 2;
    let fourthDigit = this.rentForm.value.area;

    if (this.good.price <= 200) {
        secondDigit = 1; }
      else if (this.good.price > 200 && this.good.price <= 300) {
        secondDigit = 2; }
      else if (this.good.price > 300 && this.good.price <= 400) {
        secondDigit = 3; }
      else if (this.good.price > 400 && this.good.price <= 500) {
        secondDigit = 4; }
      else if (this.good.price > 500 && this.good.price <= 600) {
        secondDigit = 5; }
      else if (this.good.price > 600 && this.good.price <= 700) {
        secondDigit = 6; }
      else if (this.good.price > 700 && this.good.price <= 800) {
        secondDigit = 7; }
      else if (this.good.price > 800 && this.good.price <= 900) {
        secondDigit = 8; }
      else {
        secondDigit = 9; }

    if (this.good.area <= 10) {
        fourthDigit = 1; }
      else if (this.good.area > 10 && this.good.price <= 30) {
        fourthDigit = 2; }
      else if (this.good.price > 30 && this.good.price <= 50) {
        fourthDigit = 3; }
      else if (this.good.price > 50 && this.good.price <= 70) {
        fourthDigit = 4; }
      else if (this.good.price > 70 && this.good.price <= 90) {
        fourthDigit = 5; }
      else if (this.good.price > 90 && this.good.price <= 110) {
        fourthDigit = 6; }
      else {
        secondDigit = 7; }
    }

  public findGoodsByCode(goodCodeToFind: string): void {
    this.wishedGoods = new Array();
    for (var i = 0; i < this.goods.length; i++) {
      if (this.goods[i].code === goodCodeToFind) {
        return displayWishList();
      }
    }
    return error('There is no good to match with your query !!');
}
  public displayWishList() {

  }
}
