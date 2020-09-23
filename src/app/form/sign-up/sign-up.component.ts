import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Owner} from '../../models/owner';
import {EstateAgent} from '../../models/estateAgent';
import {Address} from '../../models/address';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/userService';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();
  owner = new Owner();
  agent = new EstateAgent();
  client = new Client();
  address = new Address();
  userForm: FormGroup;
  roleForm: FormGroup;
  ownerForm: FormGroup;
  agentForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm =  this.fb.group({
//     role: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumberPers: ['', Validators.required],
      phoneNumberPro: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      streetnbr: ['', Validators.required],
      street: ['', Validators.required],
      country: ['', Validators.required], });
    this.roleForm = this.fb.group({
      role: ['', Validators.required],
    });
  }

  onSubmit(): void{
    const userForm = new FormData();
    userForm.append('role', this.user.role);
    userForm.append('name', this.user.name);
    userForm.append('phoneNumberPers', this.user.phoneNumberPers);
    userForm.append('city', this.address.city);
    userForm.append('zipcode', this.address.zipcode);
    userForm.append('streetnbr', this.address.streetNber);
    userForm.append('street', this.address.street);
    userForm.append('country', this.address.country);
    this.user.address = this.address;
    if (this.user.role === 'Owner'){
      userForm.append('phoneNumberPro', this.owner.phoneNumberPro);
      this.user = this.owner;
      this.userService.createUser(this.owner);
      console.log('test owner');
      console.log(this.owner);
    }
    else if (this.user.role === 'EstateAgent') {
      userForm.append('username', this.agent.username);
      userForm.append('password', this.agent.password);
      this.user = this.agent;
      this.userService.createUser(this.agent);
    }
    else if (this.user.role === 'Client') {
      this.user = this.client;
      this.userService.createUser(this.client);
    }
  }

  submitRole(): void {
    const roleForm = new FormData();
    roleForm.append('role', this.user.role);
  }
}
