import { Component, OnInit } from '@angular/core';

import { Team } from '../team';

@Component({
  selector: 'app-bracket-main',
  templateUrl: './bracket-main.component.html',
  styleUrls: ['./bracket-main.component.css']
})
export class BracketMainComponent implements OnInit{

  bracket: any[] = []; //create array to generate bracket

  generateBracket(size: number): void {
    if (size > 2 && size <= 4) {
      for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 2; column++) {
          this.bracket.push({row: row, column: column});
        }
      }
    }
  } //end generate bracket

  ngOnInit(): void {
    this.generateBracket(4);
  }

}
