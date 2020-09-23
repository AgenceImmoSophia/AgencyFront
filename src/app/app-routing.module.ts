import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodDetailComponent} from './components/good-detail/good-detail.component';
import { HomeComponent } from './home/home.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import {FormContractComponent} from './form/form-contract/form-contract.component'
import {SellFormComponent} from './form/sell-form/sell-form.component';
import {VisitListComponent} from './components/visit-list/visit-list.component';
import {FormVisitComponent} from './form/form-visit/form-visit.component';
import {EditGoodFormComponent} from './form/edit-good-form/edit-good-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'good_details/:id', component: GoodDetailComponent },
  { path: 'goods', component: GoodListComponent },
  { path: 'contractform', component: FormContractComponent},
  { path: 'visits', component: VisitListComponent},
  { path: 'visitForm', component: FormVisitComponent },
  { path: 'sell', component: SellFormComponent },
  { path: 'editGood/:id', component: EditGoodFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
