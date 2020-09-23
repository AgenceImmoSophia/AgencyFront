import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodDetailComponent } from './components/good-detail/good-detail.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import {HomeComponent} from './home/home.component';
import {SellFormComponent} from './form/sell-form/sell-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormContractComponent} from './form/form-contract/form-contract.component'
import { NavbarComponent } from './navbar/navbar.component';
import { FilterUsers } from './pipes/filterUsers';
import { EditGoodFormComponent } from './form/edit-good-form/edit-good-form.component';
import { FormVisitComponent } from './form/form-visit/form-visit.component';
import { VisitListComponent } from './components/visit-list/visit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodDetailComponent,
    GoodListComponent,
    FormContractComponent,
    SellFormComponent,
    NavbarComponent,
    FilterUsers,
    EditGoodFormComponent,
    FormVisitComponent,
    VisitListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
