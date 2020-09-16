import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Good} from '../../models/good';
import {GoodService} from '../../services/goodService';

@Component({
  selector: 'app-sell-form',
  templateUrl: './sell-form.component.html',
  styleUrls: ['./sell-form.component.css']
})
export class SellFormComponent implements OnInit {
good = new Good();
placeForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private goodService: GoodService ) { }

  ngOnInit(): void {
  }

}
