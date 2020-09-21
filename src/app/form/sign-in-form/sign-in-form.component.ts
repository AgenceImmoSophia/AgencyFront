import { Component, OnInit } from '@angular/core';
import{ FormBuilder } from '@angular/forms';
import { UserService } from '../../services/userService';
import { User } from '../../models/user';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
