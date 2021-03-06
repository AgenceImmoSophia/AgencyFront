import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodDetailComponent} from './components/good-detail/good-detail.component';
import { HomeComponent } from './home/home.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import { FormContractComponent } from './form/form-contract/form-contract.component';
import { SellFormComponent } from './form/sell-form/sell-form.component';
import { SignInFormComponent } from './form/sign-in-form/sign-in-form.component';
import { EditGoodFormComponent} from './form/edit-good-form/edit-good-form.component';
import { CodeFormComponent } from './form/code-form/code-form.component';
import { SignUpComponent } from './form/sign-up/sign-up.component';
import { EstateAgentAccountComponent } from './accountUser/estate-agent-account/estate-agent-account.component';
import { ClientAccountComponent } from './accountUser/client-account/client-account.component';
import { OwnerAccountComponent } from './accountUser/owner-account/owner-account.component';
import {EditClientAccountComponent} from './accountUser/edit-client-account/edit-client-account.component';
import {ErrormessageComponent} from './errormessage/errormessage.component';
import { FindClientsInterestedInGoodComponent } from './accountUser/estate-agent-account/find-clients-interested-in-good/find-clients-interested-in-good.component';
import {VisitListComponent} from './components/visit-list/visit-list.component';
import {FormVisitComponent} from './form/form-visit/form-visit.component';
import {EditGoodFormComponent} from './form/edit-good-form/edit-good-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'good_details/:id', component: GoodDetailComponent },
  { path: 'goods', component: GoodListComponent },
  { path: 'goods/owner/:id', component: GoodListComponent },
  { path: 'goods/client/:id', component: GoodListComponent },
  { path: 'contractform', component: FormContractComponent},
  { path: 'sell', component: SellFormComponent},
  { path: 'sign-in', component: SignInFormComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'editGood/:id', component: EditGoodFormComponent},
  { path: 'codeform', component: CodeFormComponent},
  { path: 'estateAgentAccount/:id', component: EstateAgentAccountComponent},
  { path: 'clientAccount/:id', component: ClientAccountComponent},
  { path: 'ownerAccount/:id', component: OwnerAccountComponent},
  { path: 'editUser/:id', component: EditClientAccountComponent},
  { path: 'error', component: ErrormessageComponent},
  { path: 'estateAgent/findClients', component: FindClientsInterestedInGoodComponent},
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
