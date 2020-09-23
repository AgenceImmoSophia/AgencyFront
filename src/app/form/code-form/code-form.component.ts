import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Status } from 'src/app/models/status';
import { TypeOfGood } from 'src/app/models/typeOfGood';
import { GoodService } from 'src/app/services/goodService';

@Component({
  selector: 'app-code-form',
  templateUrl: './code-form.component.html',
  styleUrls: ['./code-form.component.css']
})
export class CodeFormComponent implements OnInit {
  formCode;
  private typeEnum = TypeOfGood;
  public type = [];
  private typeEnumStatus = Status;
  public status = [];
  selectedType;
  selectedStatus;
  price: number;
  area:number;
  code;

  constructor(private fb: FormBuilder, private goodService: GoodService) {

    this.formCode = this.fb.group({
      typeOfGood:'',
      price: 0,
      status:'',
      area: 0
    });
   }

  ngOnInit(): void {
    this.type = Object.keys(this.typeEnum).filter(k => typeof TypeOfGood[k as any] === 'string');
    this.status = Object.keys(this.typeEnumStatus).filter(k => typeof Status [k as any] === 'string');

  }

  onSubmit (){
    this.selectedStatus = this.formCode.value.status;
    this.selectedType = this.formCode.value.typeOfGood;
    this.price = this.formCode.value.price;
    this.area = this.formCode.value.area;

    this.code = this.goodService.generateCode(this.selectedType, this.price, this.selectedStatus, this.area);
    console.log(this.code);
  }

}
