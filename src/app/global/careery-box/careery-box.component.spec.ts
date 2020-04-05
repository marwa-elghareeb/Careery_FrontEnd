import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareeryBoxComponent } from './careery-box.component';

describe('CareeryBoxComponent', () => {
  let component: CareeryBoxComponent;
  let fixture: ComponentFixture<CareeryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareeryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareeryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
