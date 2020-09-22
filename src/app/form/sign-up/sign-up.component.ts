import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Owner} from '../../models/owner';
import {EstateAgent} from '../../models/estateAgent';
import {Address} from '../../models/address';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/userService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();
  owner = new Owner();
  agent = new EstateAgent();
  address = new Address();
  userForm: FormGroup;
  roleForm: FormGroup;
//  ownerForm: FormGroup;
//  agentForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm =  this.fb.group({
 //     role: ['', Validators.required],
      name: ['', Validators.required],
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
onSubmitUser(): void{
  const userForm = new FormData();
  userForm.append('role', this.user.role);
  userForm.append('name', this.user.name);
  userForm.append('phoneNumberPers', this.user.phoneNumberPers);
  userForm.append('phoneNumberPro', this.owner.phoneNumberPro);
  userForm.append('city', this.address.city);
  userForm.append('zipcode', this.address.zipcode);
  userForm.append('streetnbr', this.address.streetNber);
  userForm.append('street', this.address.street);
  userForm.append('country', this.address.country);
  this.user.address = this.address;
  this.userService.createUser(this.user);
  console.log(this.user);
}

submitRole(): void {
    const roleForm = new FormData();
    roleForm.append('role', this.user.role);
    console.log(this.user.role);
}
/* onSubmitOwner(): void{
    const ownerForm = new FormData();
    this.ownerForm =  this.fb.group({
    name: ['', Validators.required],
    phoneNumberPers: ['', Validators.required],
      phoneNumberPro: ['', Validators.required],
    city: ['', Validators.required],
    zipcode: ['', Validators.required],
    streetnumber: ['', Validators.required],
    street: ['', Validators.required],
    country: ['', Validators.required], });
    ownerForm.append('name', this.owner.name);
    ownerForm.append('phoneNumberPers', this.owner.phoneNumberPers);
    ownerForm.append('phoneNumberPro', this.owner.phoneNumberPro);
    ownerForm.append('city', this.address.city);
    ownerForm.append('zipcode', this.address.zipcode);
    ownerForm.append('streetnumber', this.address.streetNber);
    ownerForm.append('street', this.address.street);
    ownerForm.append('country', this.address.country);
    this.owner.address = this.address;
    this.userService.createOwner(this.owner);
    console.log(this.owner);
}
onSubmitAgent(): void{
    const agentForm = new FormData();
    this.agentForm =  this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumberPers: ['', Validators.required],
    phoneNumberPro: ['', Validators.required],
    city: ['', Validators.required],
    zipcode: ['', Validators.required],
    streetnumber: ['', Validators.required],
    street: ['', Validators.required],
    country: ['', Validators.required], });
    agentForm.append('name', this.agent.name);
    agentForm.append('username', this.agent.username);
    agentForm.append('password', this.agent.password);
    agentForm.append('phoneNumberPers', this.agent.phoneNumberPers);
    agentForm.append('city', this.address.city);
    agentForm.append('zipcode', this.address.zipcode);
    agentForm.append('streetnumber', this.address.streetNber);
    agentForm.append('street', this.address.street);
    agentForm.append('country', this.address.country);

}  */
}
