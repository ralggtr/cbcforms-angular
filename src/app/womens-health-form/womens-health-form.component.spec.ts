import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensHealthFormComponent } from './womens-health-form.component';

describe('WomensHealthFormComponent', () => {
  let component: WomensHealthFormComponent;
  let fixture: ComponentFixture<WomensHealthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensHealthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensHealthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
