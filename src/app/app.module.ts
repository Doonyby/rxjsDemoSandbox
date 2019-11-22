import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import {MyServiceService} from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
