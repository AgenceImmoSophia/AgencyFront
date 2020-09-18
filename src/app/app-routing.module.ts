import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodDetailComponent} from './components/good-detail/good-detail.component';
import { FormAddGoodComponent } from './components/form-add-good/form-add-good.component';

const routes: Routes = [
  {path: 'good_details/:id', component: GoodDetailComponent},
  {path: 'formGood', component: FormAddGoodComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
