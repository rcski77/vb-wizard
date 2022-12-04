import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketMainComponent } from './bracket-main.component';

describe('BracketMainComponent', () => {
  let component: BracketMainComponent;
  let fixture: ComponentFixture<BracketMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BracketMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
