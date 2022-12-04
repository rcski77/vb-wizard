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
    this.divisions.forEach((element) => {
      total += Math.ceil(element.teams / 4);
    });
    return total;
  }

  totalAMCourts(): number {
    var total = 0;
    this.divisions.forEach((element) => {
      total += element.AM;
    });
    return total;
  }

  totalPMCourts(): number {
    var total = 0;
    this.divisions.forEach((element) => {
      total += element.PM;
    });
    return total;
  }

  setAM(index: number): void {
    this.divisions[index].AM = this.calculateCourts(this.divisions[index].teams);
    this.divisions[index].PM = 0;
  }

  setPM(index: number): void {
    this.divisions[index].PM = this.calculateCourts(this.divisions[index].teams);
    this.divisions[index].AM = 0;
  }

  addDivision(): void {
    this.divisions.push({ name: '', teams: 0, courts: 0, AM: 0, PM: 0 });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.divisions, event.previousIndex, event.currentIndex);
  }
}
