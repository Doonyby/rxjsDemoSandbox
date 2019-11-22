import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page2Component} from './page2/page2.component';
import {Page1Component} from './page1/page1.component';


@NgModule({
  imports: [RouterModule.forRoot([
      {
        path: 'page1', component: Page1Component
      },
      {
        path: 'page2', component: Page2Component
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
