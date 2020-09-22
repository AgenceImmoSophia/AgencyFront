import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodDetailComponent } from './components/good-detail/good-detail.component';
import { GoodComponent } from './components/good/good.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import {HomeComponent} from './home/home.component';
import {SellFormComponent} from './form/sell-form/sell-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditGoodFormComponent } from './form/edit-good-form/edit-good-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodDetailComponent,
    GoodComponent,
    GoodListComponent,
    SellFormComponent,
    EditGoodFormComponent,
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
