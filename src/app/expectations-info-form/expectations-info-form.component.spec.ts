import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectationsInfoFormComponent } from './expectations-info-form.component';

describe('ExpectationsInfoFormComponent', () => {
  let component: ExpectationsInfoFormComponent;
  let fixture: ComponentFixture<ExpectationsInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectationsInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectationsInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
