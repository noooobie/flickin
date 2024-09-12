import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'pricing', component: PricingComponent }, // Pricing route
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
