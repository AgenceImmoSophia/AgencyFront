import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodDetailComponent} from './components/good-detail/good-detail.component';
import { HomeComponent } from './home/home.component';
import {GoodListComponent} from './components/good-list/good-list.component';
import {RentFormComponent} from './components/rent-form/rent-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'goods', component: GoodListComponent},
  { path: 'good_details/:id', component: GoodDetailComponent },
  { path: 'rentGood', component: RentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
