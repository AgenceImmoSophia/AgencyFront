import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodDetailComponent } from './components/good-detail/good-detail.component';
import { GoodComponent } from './components/good/good.component';
import { GoodListComponent } from './components/good-list/good-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodDetailComponent,
    GoodComponent,
    GoodListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
