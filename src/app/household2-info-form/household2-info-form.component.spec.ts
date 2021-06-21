import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Household2InfoFormComponent } from './household2-info-form.component';

describe('Household2InfoFormComponent', () => {
  let component: Household2InfoFormComponent;
  let fixture: ComponentFixture<Household2InfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Household2InfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Household2InfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
