import { Component, OnInit, Input } from '@angular/core';
import { EstateAgent } from '../../models/estateAgent';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService';


@Component({
  selector: 'app-estate-agent-account',
  templateUrl: './estate-agent-account.component.html',
  styleUrls: ['./estate-agent-account.component.css']
})
export class EstateAgentAccountComponent implements OnInit {

  @Input() estateAgent: EstateAgent;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {}

  ngOnInit(): void {
        this.getAgent();
  }

  getAgent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.findAgentById(id).subscribe(estateAgent => this.estateAgent = estateAgent);
  }

}
