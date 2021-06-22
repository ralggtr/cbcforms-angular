import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionInfoFormComponent } from './nutrition-info-form.component';

describe('NutritionInfoFormComponent', () => {
  let component: NutritionInfoFormComponent;
  let fixture: ComponentFixture<NutritionInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
