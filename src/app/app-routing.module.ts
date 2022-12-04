import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionMainComponent } from './division-main/division-main.component';
import { BracketMainComponent } from './bracket-main/bracket-main.component';

const routes: Routes = [
  { path: 'divisions', component: DivisionMainComponent },
  { path: 'brackets', component: BracketMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }