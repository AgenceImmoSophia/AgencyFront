import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodDetailComponent} from './components/good-detail/good-detail.component';
import { HomeComponent } from './home/home.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import { FormContractComponent } from './form/form-contract/form-contract.component';
import { SellFormComponent} from './form/sell-form/sell-form.component';
import { SignInFormComponent } from './form/sign-in-form/sign-in-form.component';
import {EditGoodFormComponent} from './form/edit-good-form/edit-good-form.component';
<<<<<<< HEAD
import { CodeFormComponent } from './form/code-form/code-form.component';

=======
import { EstateAgentAccountComponent } from './accountUser/estate-agent-account/estate-agent-account.component';
import { ClientAccountComponent } from './accountUser/client-account/client-account.component';
import { OwnerAccountComponent } from './accountUser/owner-account/owner-account.component';
>>>>>>> c871649af8d6a3109a6e3f1dee155ef967d48e20


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'good_details/:id', component: GoodDetailComponent },
  { path: 'goods', component: GoodListComponent },
  { path: 'contractform', component: FormContractComponent},
  { path: 'sell', component: SellFormComponent},
  { path: 'sign-in', component: SignInFormComponent},
  { path: 'editGood/:id', component: EditGoodFormComponent},
<<<<<<< HEAD
  { path: 'codeform', component: CodeFormComponent}

=======
  { path: 'estateAgentAccount/:id', component: EstateAgentAccountComponent},
  { path: 'clientAccount/:id', component: ClientAccountComponent},
  { path: 'ownerAccount/:id', component: OwnerAccountComponent},
>>>>>>> c871649af8d6a3109a6e3f1dee155ef967d48e20
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
