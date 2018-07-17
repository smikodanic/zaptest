import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1RoutingModule } from './page1-routing.module';
import { DragScrollModule } from 'ngx-drag-scroll';

import { Page1Component } from './page1.component';



@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule,
    DragScrollModule
  ],
  providers: []
})
export class Page1Module { }
