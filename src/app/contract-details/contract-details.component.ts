import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contract } from '../models/contract';
import { ContractService } from '../services/contract-service.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {
  @Input()
  contract: Contract;

  constructor(private contractService: ContractService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getContract();
  }

  getContract(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.contractService.findContractById(id).subscribe(value => this.contract = value);
  }

}
