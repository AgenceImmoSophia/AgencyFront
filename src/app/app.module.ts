import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodDetailComponent } from './components/good-detail/good-detail.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormContractComponent } from './components/form-contract/form-contract.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {SellFormComponent} from './form/sell-form/sell-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormContractComponent} from './components/form-contract/form-contract.component'
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInFormComponent } from './form/sign-in-form/sign-in-form.component';
import { EditGoodFormComponent } from './form/edit-good-form/edit-good-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodDetailComponent,
    GoodListComponent,
    FormContractComponent,

    SellFormComponent,
    SignInFormComponent,
    NavbarComponent,
    SignInComponent,
    EditGoodFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
