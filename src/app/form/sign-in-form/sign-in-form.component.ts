import { Component, Input, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { UserService } from '../../services/userService';
import { User } from '../../models/user';
import { Address } from '../../models/address';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EstateAgent } from 'src/app/models/estateAgent';
import { Client } from 'src/app/models/client';
import { Owner } from 'src/app/models/owner';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  // @Input() estateAgent: EstateAgent;

  user = new User();
  estateAgent = new EstateAgent();
  client = new Client();
  // owner = new Owner();
  typeofUser: number;
  formSignIn1: FormGroup;
  formSignIn2: FormGroup;
  

  constructor(private http: HttpClient, private fb: FormBuilder, private userService: UserService, private router: Router) { 
    this.formSignIn1 = this.fb.group ({
      typeUser: ['', Validators.required]
    }),
    this.formSignIn2 = this.fb.group ({
      username: '',
      password: '', 
      id: '',
      name: ''
    }),
    this.typeofUser = 0
  }

  ngOnInit(): void {
  }

  OnSubmit(): void {
    this.typeofUser = this.formSignIn1.value.typeUser;
  }

  getAgent():any{
    return this.userService.findEstateAgentByUsername(this.formSignIn2.value.username).subscribe(value => {
      this.estateAgent = value;
      console.log(value)
    });
  }

  OnSubmit2(): void {
    if (this.typeofUser == 1) {
      this.getAgent();
      // console.log(this.estateAgent.username);

      console.log(this.estateAgent.username);
    //   // const formSignIn2 = new FormData();
    //   // formSignIn2.append('username', this.estateAgent.username);
    //   // formSignIn2.append('password', this.estateAgent.password);
    //   this.estateAgent.username = this.formSignIn2.value['username'];
    //   this.estateAgent.password = this.formSignIn2.value.password;
    //   this.userService.findEstateAgentByUsername(this.estateAgent.username).subscribe(estateAgent => this.estateAgent = estateAgent);
    //   console.warn(this.estateAgent);
    //   console.log("voici l'id de l'agent recherché" + this.estateAgent.id);
      // if (this.estateAgent.password == this.estateAgent.password) {
      //   this.router.navigate(['/estateAgentAccount/' + (this.estateAgent.id)]);
      // }
      // else {
      //   this.router.navigate(['/sign-in']);
      // }
    }
  }





  // ngOnInit(): void {
  //   this.getGood();
  //   this.placeForm = this.fb.group({
  //     type: ['', Validators.required],
  //     status: ['', Validators.required],
  //     name: ['', Validators.required],
  //     city: ['', Validators.required],
  //     zipcode: ['', Validators.required],
  //     streetnumber: ['', Validators.required],
  //     street: ['', Validators.required],
  //     country: ['', Validators.required],
  //     price: ['', Validators.required],
  //     area: ['', Validators.required],
  //   });
  // }

  // onSubmit(): void{
  //   const placeForm = new FormData();
  //   placeForm.append('type', this.good.typeOfGood);
  //   placeForm.append('status', this.good.status);
  //   placeForm.append('name', this.good.nameOfGood);
  //   placeForm.append('city', this.good.address.city);
  //   placeForm.append('zipcode', this.good.address.zipcode);
  //   placeForm.append('streetnumber', this.good.address.streetNber);
  //   placeForm.append('street', this.good.address.street);
  //   placeForm.append('country', this.good.address.country);
  //   placeForm.append('price', JSON.stringify( this.good.price));
  //   placeForm.append('area', JSON.stringify(this.good.area));
  //   this.goodService.editGood(this.good, this.good.id);
  //   this.router.navigate(['/good_details/' + (this.good.id)]);
  // }

  //   getGood(): void{
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.goodService.findGoodById(id).subscribe(good => this.good = good);
  // }

}
