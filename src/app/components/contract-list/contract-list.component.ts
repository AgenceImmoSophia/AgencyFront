import { Component, Input, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { ContractService } from 'src/app/services/contract-service.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  @Input()
  contracts: Contract[];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contractService.findAllContracts().subscribe(value =>{
      this.contracts = value;
      console.log(this.contracts);
    });
  }

}
