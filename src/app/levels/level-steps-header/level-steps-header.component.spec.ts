import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelStepsHeaderComponent } from './level-steps-header.component';

describe('LevelStepsHeaderComponent', () => {
  let component: LevelStepsHeaderComponent;
  let fixture: ComponentFixture<LevelStepsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelStepsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelStepsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
