import { Component, OnInit } from '@angular/core';

import { Match, Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  teams: Team[] = []; //create array of default team list

  //use service to get team list
  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
  }

}
