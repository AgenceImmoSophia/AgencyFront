import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { UserService } from '../../services/userService';
import { User } from '../../models/user';
import { Address } from '../../models/address';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EstateAgent } from 'src/app/models/estateAgent';
import { Client } from 'src/app/models/client';
import { Owner } from 'src/app/models/owner';
import {AuthService} from '../../services/auth.service';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  estateAgent = new EstateAgent();
  client = new Client();
  owner = new Owner();
  typeofUser: number;
  formSignIn1: FormGroup;
  formSignIn2: FormGroup;

  loading = false;


  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService) {
    this.formSignIn1 = this.fb.group ({
      typeUser: ['', Validators.required]
    }),
    this.formSignIn2 = this.fb.group ({
      username: '',
      password: '',
      id: '',
      name: ''
    });
    this.typeofUser = 0;

    if (this.authService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
  }

  OnSubmit(): void {
    this.typeofUser = this.formSignIn1.value.typeUser;
  }

  getAgent(): any{
    return this.userService.findEstateAgentByUsername(this.formSignIn2.value.username).subscribe(value =>
      {this.estateAgent = value;
    });
  }

  getClient(): any{
    return this.userService.findClientById(this.formSignIn2.value.id).subscribe(value =>
      {this.client = value;
    });
  }

  getOwner(): any{
    return this.userService.findOwnerById(this.formSignIn2.value.id).subscribe(value =>
      {this.owner = value;
    });
  }

  get f() {
    return this.formSignIn2.controls;
  }

  OnSubmit2(): void {


    if (this.typeofUser == 1) {
      if (this.estateAgent.password === this.formSignIn2.value.password) {
        this.router.navigate(['/estateAgentAccount/' + (this.estateAgent.id)]);
      }
      else {
        this.typeofUser = 0;
        this.router.navigate(['/error']);
      }
    }


    if (this.typeofUser == 2) {
      if (this.client.name === this.formSignIn2.value.name) {
        this.router.navigate(['/clientAccount/' + (this.client.id)]);

      }
      else {
        this.typeofUser = 0;
        this.router.navigate(['/error']);
      }
    }


    if (this.typeofUser == 3) {
      if (this.owner.name === this.formSignIn2.value.name) {
        this.router.navigate(['/ownerAccount/' + (this.owner.id)]);

      }
      else {
        this.typeofUser = 0;
        this.router.navigate(['/error']);
      }
    }
    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value).pipe(first());
  }

}
