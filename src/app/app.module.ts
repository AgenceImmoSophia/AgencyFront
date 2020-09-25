import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodDetailComponent } from './components/good-detail/good-detail.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormContractComponent } from './form/form-contract/form-contract.component';
import { HomeComponent} from './home/home.component';
import { SellFormComponent} from './form/sell-form/sell-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInFormComponent } from './form/sign-in-form/sign-in-form.component';
import { FilterUsers } from './pipes/filterUsers';
import { EditGoodFormComponent } from './form/edit-good-form/edit-good-form.component';
import { filterGoods } from './pipes/filterGoods';
import { CodeFormComponent } from './form/code-form/code-form.component';
import { EstateAgentAccountComponent } from './accountUser/estate-agent-account/estate-agent-account.component';
import { ClientAccountComponent } from './accountUser/client-account/client-account.component';
import { OwnerAccountComponent } from './accountUser/owner-account/owner-account.component';
import { SignUpComponent } from './form/sign-up/sign-up.component';
import { EditClientAccountComponent } from './accountUser/edit-client-account/edit-client-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrormessageComponent } from './errormessage/errormessage.component';
import { FindClientsInterestedInGoodComponent } from './accountUser/estate-agent-account/find-clients-interested-in-good/find-clients-interested-in-good.component';
import { FilterUsers } from './pipes/filterUsers';
import { EditGoodFormComponent } from './form/edit-good-form/edit-good-form.component';
import { FormVisitComponent } from './form/form-visit/form-visit.component';
import { VisitListComponent } from './components/visit-list/visit-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodDetailComponent,
    GoodListComponent,
    FormContractComponent,
    SellFormComponent,
    SignInFormComponent,
    NavbarComponent,
    EditGoodFormComponent,
    EstateAgentAccountComponent,
    FilterUsers,
    EditGoodFormComponent,
    filterGoods,
    CodeFormComponent,
    ClientAccountComponent,
    OwnerAccountComponent,
    SignUpComponent,
    EditClientAccountComponent,
    ErrormessageComponent,
    FindClientsInterestedInGoodComponent,
    FilterUsers,
    EditGoodFormComponent,
    FormVisitComponent,
    VisitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
