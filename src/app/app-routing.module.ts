import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionMainComponent } from './division-main/division-main.component';

const routes: Routes = [
  { path: 'divisions', component: DivisionMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }