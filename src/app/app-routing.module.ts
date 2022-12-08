import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionMainComponent } from './division-main/division-main.component';
import { BracketMainComponent } from './bracket-main/bracket-main.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'divisions', component: DivisionMainComponent },
  { path: 'brackets', component: BracketMainComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }