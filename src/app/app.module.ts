import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './components/app/app.component';
import { OrderProcessorComponent } from './components/order-processor/order-processor.component';
import { PriceQuoterComponent } from './components/price-quoter/price-quoter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { MediatorComponent } from './components/mediator/mediator.component';
import { PriceQuoterMediatorComponent } from './components/price-quoter-mediator/price-quoter-mediator.component';
import { OrderMediatorComponent } from './components/order-mediator/order-mediator.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ParentAPIComponent } from './components/parent-api/parent-api.component';
import { ChildAPIComponent } from './components/child-api/child-api.component';

import { Routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    OrderProcessorComponent,
    PriceQuoterComponent,
    NavbarComponent,
    InputOutputComponent,
    MediatorComponent,
    PriceQuoterMediatorComponent,
    OrderMediatorComponent,
    ParentComponent,
    ChildComponent,
    ParentAPIComponent,
    ChildAPIComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
