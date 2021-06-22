import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyHealthFormComponent } from './family-health-form.component';

describe('FamilyHealthFormComponent', () => {
  let component: FamilyHealthFormComponent;
  let fixture: ComponentFixture<FamilyHealthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyHealthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyHealthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
