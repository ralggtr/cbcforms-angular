import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Household1InfoFormComponent } from './household1-info-form.component';

describe('Household1InfoFormComponent', () => {
  let component: Household1InfoFormComponent;
  let fixture: ComponentFixture<Household1InfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Household1InfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Household1InfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
