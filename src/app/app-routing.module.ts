import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodDetailComponent} from './components/good-detail/good-detail.component';

const routes: Routes = [
  {path: 'user_details/:id', component: GoodDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
