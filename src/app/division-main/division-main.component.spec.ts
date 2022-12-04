import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionMainComponent } from './division-main.component';

describe('DivisionMainComponent', () => {
  let component: DivisionMainComponent;
  let fixture: ComponentFixture<DivisionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
