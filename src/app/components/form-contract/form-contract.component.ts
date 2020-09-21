import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contract } from 'src/app/models/contract';
import { EstateAgent } from 'src/app/models/estateAgent';
import { GoodService } from 'src/app/services/goodService';
import {Good} from '../../models/good';
import {User} from '../../models/user';
import {ContractService} from '../../services/contract-service.service';
import {UserService} from '../../services/userService';

@Component({
  selector: 'app-form-contract',
  templateUrl: './form-contract.component.html',
  styleUrls: ['./form-contract.component.css']
})
export class FormContractComponent implements OnInit {

  contract = new Contract();
  good= new Good();
  date = new Date();
  client = new User();
  agent = new EstateAgent();
  @Input()
  goods: Good[];
  formContract;
  message;

  constructor(private contractService: ContractService, private fb : FormBuilder, private userService:UserService, private goodService : GoodService) {

    this.formContract = this.fb.group({
      agentId : '',
      clientId : '',
      goodId: '',
      dateOfContract: '',
      priceOfContract:0
    })

   }

  ngOnInit(): void {
    this.goodService.findAllGoods().subscribe(goods => this.goods = goods);
    console.warn(this.goods);

  }

  onSubmit(){
    this.contract.client =this.getClient(this.formContract.value.clientId);
    this.contract.date = this.formContract.value.dateOfContract;
    this.contract.estateAgent = this.getClient(this.formContract.value.agentId);
    this.contract.good = this.getGood(this.formContract.value.goodId);
    this.contract.price = this.formContract.value.priceOfContract;

    this.contractService.createContract(this.contract);
    console.warn(this.contract);

  }

  getClient(id: number):any{
    return this.userService.findUserById(id).subscribe(value => {
      this.client = value;
    });
  }

  getGood(id: number): any{
    return this.goodService.findGoodById(id).subscribe(value => {
      this.good = value;
    });
  }

}
