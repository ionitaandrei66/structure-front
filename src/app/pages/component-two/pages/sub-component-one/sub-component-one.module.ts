import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentChildComponent } from './components/component-child/component-child.component';
import {SubComponentOneComponent} from "./sub-component-one.component";



@NgModule({
  declarations: [
    ComponentChildComponent,
    SubComponentOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubComponentOneModule { }
