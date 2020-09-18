import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Good} from '../../models/good';
import {Address} from '../../models/address'
import {GoodService} from '../../services/goodService';




@Component({
  selector: 'app-form-add-good',
  templateUrl: './form-add-good.component.html',
  styleUrls: ['./form-add-good.component.css']
})
export class FormAddGoodComponent implements OnInit {

 good = new Good();
 address = new Address();
formGood;


constructor(private goodService: GoodService, private fb: FormBuilder) {
  this.formGood = this.fb.group({
    nameOfGood : '',
    typeOfGood : '',
    price : 0,
    area : 0,
    status: '',
    owner: '',
    city: '',
    zipcode: '',
    streetNber: '',
    street: '',
    country: ''
  })
 }

ngOnInit(): void {
}

onSubmit() {
  // TODO: Use EventEmitter with form value

  this.good.nameOfGood = this.formGood.value.nameOfGood;
  this.good.typeOfGood = this.formGood.value.typeOfGood;
  this.good.price = this.formGood.value.price;
  this.good.area = this.formGood.value.area;
  this.good.status = this.formGood.value.status;

  this.address.city = this.formGood.value.city;
  this.address.country = this.formGood.value.country;
  this.address.streetNber = this.formGood.value.streetNber;
  this.address.street = this.formGood.value.street;
  this.address.zipcode = this.formGood.value.zipcode;

  this.good.address = null;


  this.goodService.createGood(this.good);
  console.warn(this.good);
}



}
