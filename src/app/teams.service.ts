import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TEAMS } from './team-list';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    const teams = of(TEAMS);
    return teams;
  }

}
