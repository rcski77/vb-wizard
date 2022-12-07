import { Component, OnInit } from '@angular/core';

import { Match, Team } from '../team';
import { TEAMS } from '../team-list';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-bracket-main',
  templateUrl: './bracket-main.component.html',
  styleUrls: ['./bracket-main.component.css'],
})
export class BracketMainComponent implements OnInit {
  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  teams: Team[] = []; //create array of default team list

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
  }

  bracketSize = {
    teams: 0,
    columns: 0,
  };

  col1: Match[] = []; //1 match
  col2: Match[] = []; //2 matches
  col3: Match[] = []; //4 matches
  col4: Match[] = []; //8 matches

  matches: Match[] = []; //create array to store matches

  generateBracket(size: number): void {
    this.setInactive(); //reset bracket first

    this.bracketSize.teams = size;

    if (size > 2 && size <= 4) {
      this.bracketSize.columns = 2;
    } else if (size > 4 && size <= 8) {
      this.bracketSize.columns = 3;
    } else if (size > 8 && size <= 16) {
      this.bracketSize.columns = 4;
    }

    for (let i = 0; i < size; i++) {
      this.teams[i].active = true;
    }

    this.generateMatches(size);

    this.setColumns(size);
  } //end generate bracket

  setInactive(): void {
    for (let i = 0; i < this.teams.length; i++) {
      this.teams[i].active = false;
    }
  }

  generateMatches(size: number): void {
    this.matches = []; //clear array

    for (let i = 0; i < size / 2; i++) {
      let temp: Match = {
        id: i + 1,
        team1: this.teams[2 * i],
        team2: this.teams[2 * i + 1],
        winner: null,
      };
      this.matches.push(temp);
    }

    //create winner dependent matches
    switch (size) {
      case 4:
        this.matches[2] = {
          id: 3,
          team1: { name: 'Winner of Match 1' },
          team2: { name: 'Winner of Match 2' },
          winner: null,
        };
    }
  }

  setColumns(size: number): void {
    this.col1 = []; //clear array
    this.col2 = []; //clear array
    this.col3 = []; //clear array
    this.col4 = []; //clear array

    for (let i = 0; i < 8; i++) {
      this.col4.push(this.matches[i]);
    }
    for (let i = 0; i < 4; i++) {
      this.col3.push(this.matches[i]);
    }
    for (let i = 0; i < 2; i++) {
      this.col2.push(this.matches[i]);
    }
    for (let i = 0; i < 1; i++) {
      switch (size) {
        case 4:
          this.col1.push(this.matches[2]); //match 3
          break;
        default:
          this.col1.push(this.matches[i]);
          break;
      }
    }
  }

  setWinner(match: Match, team: number): void {
    let index = match.id;

    if (team == 1) {
      match.winner = match.team1;
    } else if (team == 2) {
      match.winner = match.team2;
    }

    switch (this.bracketSize.teams) {
      case 4:
        if (index % 2 == 1) {
          this.matches[index + (index % 2)].team1 = match.winner;
        } else {
          this.matches[index + (index % 2)].team2 = match.winner;
        }
    }
  }
}
