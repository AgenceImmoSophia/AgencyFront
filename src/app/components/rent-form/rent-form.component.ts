import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, ControlValueAccessor} from '@angular/forms';
import {Address} from '../../models/address';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {ActivatedRoute, Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';
import {Status} from '../../models/status';
import set = Reflect.set;
import {TypeOfGood} from '../../models/typeOfGood';


@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {
  address: Address;
  good: Good;
  goods: Good[];
  enumTypeOfGood = TypeOfGood;
  goodToSearch: Good;
  rentForm: FormGroup;
  city: FormControl;
  type: FormControl;
  price: FormControl;
  area: FormControl;
  codeToFind: string;
  firstDigit: number;
  secondDigit: string;
  thirdDigit: string;
  fourthDigit: string;

  constructor(private goodService: GoodService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.rentForm = this.fb.group({
      city: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
    });
    this.city = this.rentForm.controls.city as FormControl;
    this.type = this.rentForm.controls.type as FormControl;
    this.price = this.rentForm.controls.price as FormControl;
    this.area = this.rentForm.controls.area as FormControl;
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.goodToSearch = new Good();
//    this.goodToSearch.address.setCityAddress(this.rentForm.value.address.city);
    this.getFirstDigit();
    this.generateCode(this.goodToSearch);
  }

  public generateCode(good: Good): void {
    const firstDigit = this.rentForm.controls.type;
    let secondDigit = this.rentForm.value.price;
    const thirdDigit = '2';
    let fourthDigit = this.rentForm.value.area;

    if (good.price <= 200) {
      secondDigit = '1';
    } else if (good.price > 200 && good.price <= 300) {
      secondDigit = '2';
    } else if (good.price > 300 && good.price <= 400) {
      secondDigit = '3';
    } else if (good.price > 400 && good.price <= 500) {
      secondDigit = '4';
    } else if (good.price > 500 && good.price <= 600) {
      secondDigit = '5';
    } else if (good.price > 600 && good.price <= 700) {
      secondDigit = '6';
    } else if (good.price > 700 && good.price <= 800) {
      secondDigit = '7';
    } else if (good.price > 800 && good.price <= 900) {
      secondDigit = '8';
    } else {
      secondDigit = '9';
    }

    if (good.area <= 10) {
      fourthDigit = '1';
    } else if (good.area > 10 && good.area <= 30) {
      fourthDigit = '2';
    } else if (good.area > 30 && good.area <= 50) {
      fourthDigit = '3';
    } else if (good.area > 50 && good.area <= 70) {
      fourthDigit = '4';
    } else if (good.area > 70 && good.area <= 90) {
      fourthDigit = '5';
    } else if (good.area > 90 && good.area <= 110) {
      fourthDigit = '6';
    } else {
      fourthDigit = '7';
    }
    this.codeToFind = String(firstDigit) + secondDigit + thirdDigit + fourthDigit;
    console.log(String(firstDigit) + ' for fd');
    console.log(secondDigit + ' for sd');
    console.log(thirdDigit + ' for td');
    console.log(fourthDigit + ' for fod');
    console.log('+++' + this.codeToFind + '***' );
    this.good.setCode(String(this.codeToFind));
    console.log('Success: code generated for goodToSearch = ' + this.good.getCode());
 //   console.log('Success: city generated for goodToSearch = ' + this.goodToSearch.address.getCityAddress());
  }
  public getFirstDigit(): void {
    const fd = document.getElementById('type');
    console.log(fd);
  }
 // public filterRentingList() {
 //   const filtredList = (this.goods, this.goodToSearch.code) => {
  //    return this.goods.filter(el => el.toLowerCase().indexOf(this.goodToSearch.code.toLowerCase()) !== -1);
  //  }
  //  }
}
