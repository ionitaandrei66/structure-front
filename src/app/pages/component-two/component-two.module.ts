import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponentOneComponent } from './pages/sub-component-one/sub-component-one.component';
import {TwoRoutingModule} from "./two-routing.module";



@NgModule({
  declarations: [
    SubComponentOneComponent
  ],
  imports: [
    TwoRoutingModule,
    CommonModule
  ]
})
export class ComponentTwoModule { }
