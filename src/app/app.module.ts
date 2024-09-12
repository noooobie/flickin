import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './home/services/services.component';
import { TeamsComponent } from './home/teams/teams.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { FormspageComponent } from './formspage/formspage.component';
import { StatisticsComponent } from './home/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    TeamsComponent,
    AboutusComponent,
    NavbarComponent,
    PricingComponent,
    FormspageComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
