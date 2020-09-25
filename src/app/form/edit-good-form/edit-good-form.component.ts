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
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-good-form',
  templateUrl: './edit-good-form.component.html',
  styleUrls: ['./edit-good-form.component.css']
})
export class EditGoodFormComponent implements OnInit {

  @Input() good: Good;

placeForm: FormGroup;
public typeEnum = [];
public typeEnumStatus = [];
selectedType = TypeOfGood;
selectedStatus = Status;

  constructor( private http: HttpClient,
    private fb: FormBuilder,
    private goodService: GoodService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location ) {
    this.typeEnum = Object.keys(this.selectedType).filter(k => typeof TypeOfGood[k as any] === 'string');
    this.typeEnumStatus = Object.keys(this.selectedStatus).filter(k => typeof Status [k as any] === 'string');
  }

  ngOnInit(): void {
    this.getGood();
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
      deposit: ['', Validators.required],
      state: '',
      description: '',
      furnished: ''
    });
  }

  onSubmit(): void{
    const placeForm = new FormData();
    placeForm.append('type', this.good.typeOfGood);
    placeForm.append('status', this.good.status);
    placeForm.append('name', this.good.nameOfGood);
    placeForm.append('city', this.good.address.city);
    placeForm.append('zipcode', this.good.address.zipcode);
    placeForm.append('streetnumber', this.good.address.streetNber);
    placeForm.append('street', this.good.address.street);
    placeForm.append('country', this.good.address.country);
    placeForm.append('price', JSON.stringify( this.good.price));
    placeForm.append('area', JSON.stringify(this.good.area));
    placeForm.append('deposit', JSON.stringify(this.good.deposit));
    placeForm.append('description', this.good.description);
    placeForm.append('state', this.good.state);
    placeForm.append('furnished', this.good.furnished);

    this.goodService.editGood(this.good, this.good.id);
    this.router.navigate(['/good_details/' + (this.good.id)]);
  }

    getGood(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.goodService.findGoodById(id).subscribe(good => this.good = good);
  }

}
