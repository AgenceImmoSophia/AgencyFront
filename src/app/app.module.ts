import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodDetailComponent } from './components/good-detail/good-detail.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import {HomeComponent} from './home/home.component';
import {SellFormComponent} from './form/sell-form/sell-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormContractComponent} from './components/form-contract/form-contract.component'
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './form/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodDetailComponent,
    GoodListComponent,
    FormContractComponent,

    SellFormComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
