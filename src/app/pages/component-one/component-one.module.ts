import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponentComponent } from './components/child-component/child-component.component';



@NgModule({
  declarations: [
    ChildComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentOneModule { }
