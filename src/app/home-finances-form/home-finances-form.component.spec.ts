import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFinancesFormComponent } from './home-finances-form.component';

describe('HomeFinancesFormComponent', () => {
  let component: HomeFinancesFormComponent;
  let fixture: ComponentFixture<HomeFinancesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFinancesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFinancesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
