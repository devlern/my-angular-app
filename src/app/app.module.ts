import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [AppComponent], //CustomersComponent
  imports: [BrowserModule, AppRoutingModule, CustomersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
