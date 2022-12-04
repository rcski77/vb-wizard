import { Component, OnInit } from '@angular/core';

import { Division } from '../division';
import { DivisionInfoService } from '../division-info.service';

@Component({
  selector: 'app-division-main',
  templateUrl: './division-main.component.html',
  styleUrls: ['./division-main.component.css'],
})
export class DivisionMainComponent {

  divisions: Division[] = [];

  constructor(private divisionService: DivisionInfoService) {}

  ngOnInit(): void {
    this.getDivisions();
  }

  getDivisions(): void {
    this.divisionService
      .getDivisions()
      .subscribe((divisions) => (this.divisions = divisions));
  }

  calculateCourts(teams: number): number {
    return Math.ceil(teams / 4);
  }

  totalTeams(): number {
    let total = 0;
    this.divisions.forEach((element) => (total += Number(element.teams)));
    return total;
  }

  totalCourts(): number {
    var total = 0;
    this.divisions.forEach(element => {
      total += Math.ceil(element.teams / 4);
    });
    return total;
  }
}
