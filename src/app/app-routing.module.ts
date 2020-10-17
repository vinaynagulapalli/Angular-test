import { NgModule } from '@angular/core';
import { injectComponentFactoryResolver } from '@angular/core/src/render3';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { BillingComponent } from './components/billing/billing.component';
import { HomeComponent} from './components/home/home.component';
import { CustomerdetailsComponent} from './components/customerdetails/customerdetails.component';
import { PaymentComponent} from './components/payment/payment.component';
import { ConfirmationComponent} from './components/confirmation/confirmation.component';


const routes: Routes = [
  {
    path: "" , component:HomeComponent
  },
  {
    path:"billing" , component:BillingComponent
  },
  {
    path:"billing/customer" , component: CustomerdetailsComponent
  },
  {
    path:"billing/customer/payment", component:PaymentComponent
  },
  {
    path:"billing/customer/payment/confirm", component:ConfirmationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
