import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {Address} from '../../models/address';
import {Observable} from 'rxjs';
import {TypeOfGood} from '../../models/typeOfGood';

@Component({
  selector: 'app-sell-form',
  templateUrl: './sell-form.component.html',
  styleUrls: ['./sell-form.component.css']
})
export class SellFormComponent implements OnInit {

good = new Good ();
placeForm: FormGroup;
address = new Address();
public typeEnum = [];
selectedType = TypeOfGood;


  constructor( private http: HttpClient, private fb: FormBuilder, private goodService: GoodService) {
    this.typeEnum = Object.keys(this.selectedType).filter(k => typeof TypeOfGood[k as any] === 'string');
  }
    // private http: HttpClient, private fb: FormBuilder, private router: Router, private goodService: GoodService

  ngOnInit(): void {
    this.placeForm = this.fb.group({
      type: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      streetnumber: ['', Validators.required],
      street: ['', Validators.required],
      country: ['', Validators.required],
      price: ['', Validators.required],
      area: ['', Validators.required],
    });
  }
  onSubmit(): any {
    const placeForm = new FormData();
    placeForm.append('type', this.good.type);
    placeForm.append('city', this.address.city);
    placeForm.append('zipcode', this.address.zipcode);
    placeForm.append('streetnumber', this.address.streetNber);
    placeForm.append('street', this.address.street);
    placeForm.append('country', this.address.country);
    placeForm.append('price', JSON.stringify( this.good.price));
    placeForm.append('area', JSON.stringify(this.good.area));
    this.goodService.createGood(placeForm);
    console.warn(this.placeForm.value);

  }

}
