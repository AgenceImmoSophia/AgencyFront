import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Client } from 'src/app/models/client';
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
  good = new Good();
  date = new Date();
  client = new Client();
  agent = new EstateAgent();
  @Input()
  goods: Good[];
  @Input()
  users: User[];
  formContract;


  constructor(private contractService: ContractService, private fb: FormBuilder, private userService: UserService, private goodService: GoodService) {

    this.formContract = this.fb.group({
      typeOfContract : '',
      agentId : '',
      clientId : '',
      goodId: '',
      dateOfContract: '',
      priceOfContract: 0
    });
   }

  ngOnInit(): void {
    this.goodService.findAllGoods().subscribe(goods => this.goods = goods);
    this.userService.findAllUsers().subscribe(users => {
      this.users=users;
      console.log(users);
  });

  }

  onSubmit(){
    this.contract.client = this.client;
    this.contract.date = this.formContract.value.dateOfContract;
    this.contract.estateAgent = this.agent;
    this.contract.good = this.good;
    this.contract.price = this.formContract.value.priceOfContract;
    this.contract.typeOfContract = this.formContract.value.typeOfContract;

    console.warn(this.contract);

    this.contractService.createContract(this.contract);
  }

  getClient(): any{
    return this.userService.findClientById(this.formContract.value.clientId).subscribe(value => {
      this.client = value;
      console.log(value);
    });
  }

  getAgent(): any{
    return this.userService.findAgentById(this.formContract.value.agentId).subscribe(value => {
      this.agent = value;
      console.log(value);
    });
  }

  getGood(): any{
    return this.goodService.findGoodById(this.formContract.value.goodId).subscribe(value => {
      this.good = value;
    });
  }
}
