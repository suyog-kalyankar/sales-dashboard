import { SalesDetailsComponent } from './components/sales-details/sales-details.component';
import { SalesDataService } from './services/sales-data.service';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SalesNavbarComponent } from './components/sales-navbar/sales-navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesChartDetailsComponent } from './components/sales-chart-details/sales-chart-details.component';
import { SalesRepCardsComponent } from './components/sales-rep-cards/sales-rep-cards.component';
import { UserRepCardComponent } from './components/user-rep-card/user-rep-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalesDetailsComponent,
    SalesNavbarComponent,
    DashboardComponent,
    SalesChartDetailsComponent,
    SalesRepCardsComponent,
    UserRepCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SalesDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
