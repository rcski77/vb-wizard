import { Component, OnInit } from '@angular/core';

import { Team } from '../team';
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

  teams: Team[] = TEAMS;
  col1: Team[] = [];
  col2: Team[] = [];
  col3: Team[] = [];
  col4: Team[] = [];

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

    this.setColumns();
  } //end generate bracket

  setInactive(): void {
    for (let i = 0; i < this.teams.length; i++) {
      this.teams[i].active = false;
    }
  }

  setColumns(): void {
    this.col1 = []; //clear array
    this.col2 = []; //clear array
    this.col3 = []; //clear array
    this.col4 = []; //clear array

    for (let i = 0; i < 16; i++) {
      this.col4.push(this.teams[i]);
    }
    for (let i = 0; i < 8; i++) {
      this.col3.push(this.teams[i]);
    }
    for (let i = 0; i < 4; i++) {
      this.col2.push(this.teams[i]);
    }
    for (let i = 0; i < 2; i++) {
      this.col1.push(this.teams[i]);
    }
  }

  ngOnInit(): void {}
}
