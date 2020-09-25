import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../models/client';
import {UserService} from '../../services/userService';
import {Address} from '../../models/address';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PartialObserver} from 'rxjs';
import {User} from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent implements OnInit {

  idUser: number;

  @Input()
  client: Client;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.idInUrl();
  }


  public idInUrl(): number {
    var url = window.location.href;
    var match = url.match(/\d+$/);
    if (match != null) {
      var iduser = Number(match[0]);
    }
    return this.idUser = iduser;
  }

  public changePageList() {
    this.router.navigate(['goods/client/' + (this.idUser)]);
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.findClientById(id).subscribe(client => {this.client = client;
    console.log('Id found is : ' + this.client.id); });
  }
  }
