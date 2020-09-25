import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-account',
  templateUrl: './owner-account.component.html',
  styleUrls: ['./owner-account.component.css']
})
export class OwnerAccountComponent implements OnInit {

  idUser: number; 

  constructor( private router: Router) { }

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
    this.router.navigate(['goods/owner/' + (this.idUser)]);
  }
  
}
