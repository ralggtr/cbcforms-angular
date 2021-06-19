import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyOverviewFormComponent } from './survey-overview-form.component';

describe('SurveyOverviewFormComponent', () => {
  let component: SurveyOverviewFormComponent;
  let fixture: ComponentFixture<SurveyOverviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyOverviewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyOverviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
