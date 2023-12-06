import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'one',
  loadChildren: () => import('./pages/component-one/component-one.module').then(x => x.ComponentOneModule)
},
  {
    path:'two',
    loadChildren: () => import('./pages/component-two/component-two.module').then(x => x.ComponentTwoModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
