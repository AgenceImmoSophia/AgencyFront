import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {Good} from '../models/good';
import {GoodService} from '../services/goodService';


@Component({
  selector: 'app-form-add-good',
  templateUrl: './form-add-good.component.html',
  styleUrls: ['./form-add-good.component.css']
})
export class FormAddGoodComponent implements OnInit {

@Input() good: Good;

formGood = new FormGroup({
  nameOfGood : new FormControl(''),
  typeOfGood : new FormControl(''),
  price : new FormControl(0),
  area : new FormControl(0),
  status : new FormControl('')
});


constructor(private goodService: GoodService) { }

ngOnInit(): void {
}

onSubmit() {
  // TODO: Use EventEmitter with form value

  console.warn(this.formGood.value);
}

setGood(){


  return this.good;
}

}
