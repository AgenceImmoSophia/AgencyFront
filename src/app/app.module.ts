import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodDetailComponent } from './components/good-detail/good-detail.component';
import { GoodListComponent } from './components/good-list/good-list.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FormContractComponent } from './components/form-contract/form-contract.component';
import { ReactiveFormsModule } from '@angular/forms';

=======
import {HomeComponent} from './home/home.component';
import {SellFormComponent} from './form/sell-form/sell-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
>>>>>>> 5048a17fef4d8f946ca2cfc0d1e4a1017b8540e3

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodDetailComponent,
    GoodListComponent,
<<<<<<< HEAD
    FormContractComponent,

=======
    SellFormComponent,
>>>>>>> 5048a17fef4d8f946ca2cfc0d1e4a1017b8540e3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    HttpClientModule,

>>>>>>> 5048a17fef4d8f946ca2cfc0d1e4a1017b8540e3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
