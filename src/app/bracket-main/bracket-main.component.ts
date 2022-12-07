import { Component, OnInit } from '@angular/core';

import { Match, Team } from '../team';
import { TEAMS } from '../team-list';

@Component({
  selector: 'app-bracket-main',
  templateUrl: './bracket-main.component.html',
  styleUrls: ['./bracket-main.component.css'],
})
export class BracketMainComponent implements OnInit {
  bracketSize = {
    teams: 0,
    rows: 0,
    columns: 0,
  };

  teams: Team[] = TEAMS; //create array of default team list

  col1: Match[] = []; //1 match
  col2: Match[] = []; //2 matches
  col3: Match[] = []; //4 matches
  col4: Match[] = []; //8 matches

  matches: Match[] = []; //create array to store matches

  generateBracket(size: number): void {
    this.setInactive(); //reset bracket first

    this.bracketSize.teams = size;

    if (size > 2 && size <= 4) {
      this.bracketSize.rows = 3;
      this.bracketSize.columns = 2;
    } else if (size > 4 && size <= 8) {
      this.bracketSize.rows = 7;
      this.bracketSize.columns = 3;
    } else if (size > 8 && size <= 16) {
      this.bracketSize.rows = 15;
      this.bracketSize.columns = 4;
    }

    for (let i = 0; i < size; i++) {
      this.teams[i].active = true;
    }

    this.generateMatches(size);

    this.setColumns();
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
        id: i,
        team1: this.teams[2 * i],
        team2: this.teams[2 * i + 1],
        winner: null
      }
      this.matches.push(temp);
    }
  }

  setColumns(): void {
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
      this.col1.push(this.matches[i]);
    }
  }

  ngOnInit(): void {}
}
