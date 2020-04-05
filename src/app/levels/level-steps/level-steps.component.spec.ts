import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelStepsComponent } from './level-steps.component';

describe('LevelStepsComponent', () => {
  let component: LevelStepsComponent;
  let fixture: ComponentFixture<LevelStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
