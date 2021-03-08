import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebugComponent } from './debug/debug.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'debug',
    component: DebugComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
