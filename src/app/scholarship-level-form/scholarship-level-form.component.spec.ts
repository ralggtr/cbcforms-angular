import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipLevelFormComponent } from './scholarship-level-form.component';

describe('ScholarshipLevelFormComponent', () => {
  let component: ScholarshipLevelFormComponent;
  let fixture: ComponentFixture<ScholarshipLevelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipLevelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
