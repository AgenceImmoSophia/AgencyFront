import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../models/client';
import {UserService} from '../../services/userService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-client-account',
  templateUrl: './edit-client-account.component.html',
  styleUrls: ['./edit-client-account.component.css']
})
export class EditClientAccountComponent implements OnInit {

  @Input()
  client: Client;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe(params => {
    const id = params['id'];
    this.userService.findClientById(id).subscribe((client => {
    this.client = client;
  }),
    error =>console.error('There is an error', error));
  });
  }
}
