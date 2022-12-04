import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  addDivision(): void {
    this.divisions.push(
      {name: "", teams: 0, courts: 0}
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.divisions, event.previousIndex, event.currentIndex);
  }
}
