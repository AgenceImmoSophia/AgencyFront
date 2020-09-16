import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodListComponent} from './components/good-list/good-list.component';

const routes: Routes = [
  {path: '/goods', component: GoodListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
