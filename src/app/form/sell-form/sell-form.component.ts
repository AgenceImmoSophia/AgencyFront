import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';
import {Address} from '../../models/address';
import {Observable} from 'rxjs';
import {TypeOfGood} from '../../models/typeOfGood';
import {Status} from '../../models/status';
import {Owner} from '../../models/owner';


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
public typeEnumStatus = [];
selectedType = TypeOfGood;
selectedStatus = Status;



  constructor( private http: HttpClient, private fb: FormBuilder, private goodService: GoodService, private router: Router) {
    this.typeEnum = Object.keys(this.selectedType).filter(k => typeof TypeOfGood[k as any] === 'string');
    this.typeEnumStatus = Object.keys(this.selectedStatus).filter(k => typeof Status [k as any] === 'string');
  }

  ngOnInit(): void {
    this.placeForm = this.fb.group({
      type: ['', Validators.required],
      status: ['', Validators.required],
      name: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      streetnumber: ['', Validators.required],
      street: ['', Validators.required],
      country: ['', Validators.required],
      price: ['', Validators.required],
      area: ['', Validators.required],
    });
  }
  onSubmit(): void{
    const placeForm = new FormData();
    placeForm.append('type', this.good.typeOfGood);
    placeForm.append('status', this.good.status);
    placeForm.append('name', this.good.nameOfGood);
    placeForm.append('city', this.address.city);
    placeForm.append('zipcode', this.address.zipcode);
    placeForm.append('streetnumber', this.address.streetNber);
    placeForm.append('street', this.address.street);
    placeForm.append('country', this.address.country);
    placeForm.append('price', JSON.stringify( this.good.price));
    placeForm.append('area', JSON.stringify(this.good.area));
    this.good.address = this.address;
    this.goodService.createGood(this.good);
    console.log(this.good);
    console.log(this.address);
    this.router.navigate(['goods']);
    //   this.router.navigate(['/good_details/' + (this.good.id)]);
  }
}
