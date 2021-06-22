import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyInfoFormComponent } from './family-info-form.component';

describe('FamilyInfoFormComponent', () => {
  let component: FamilyInfoFormComponent;
  let fixture: ComponentFixture<FamilyInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
