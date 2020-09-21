import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodDetailComponent} from './components/good-detail/good-detail.component';
import { HomeComponent } from './home/home.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import { FormContractComponent } from './components/form-contract/form-contract.component';
import {SellFormComponent} from './form/sell-form/sell-form.component';
import { SignInFormComponent } from './form/sign-in-form/sign-in-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'good_details/:id', component: GoodDetailComponent },
  { path: 'goods', component: GoodListComponent },
  { path: 'contractform', component: FormContractComponent}
  {path: 'sell', component: SellFormComponent},
  {path: 'sign-in', component: SignInFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
