import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodDetailComponent} from './components/good-detail/good-detail.component';
import { HomeComponent } from './home/home.component';
import { GoodListComponent } from './components/good-list/good-list.component';
<<<<<<< HEAD
import { FormContractComponent } from './components/form-contract/form-contract.component';
=======
import {SellFormComponent} from './form/sell-form/sell-form.component';
>>>>>>> 5048a17fef4d8f946ca2cfc0d1e4a1017b8540e3

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'good_details/:id', component: GoodDetailComponent },
  { path: 'goods', component: GoodListComponent },
<<<<<<< HEAD
  { path: 'contractform', component: FormContractComponent}
=======
  {path: 'sell', component: SellFormComponent},
>>>>>>> 5048a17fef4d8f946ca2cfc0d1e4a1017b8540e3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
