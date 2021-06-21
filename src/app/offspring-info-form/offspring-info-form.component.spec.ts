import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffspringInfoFormComponent } from './offspring-info-form.component';

describe('OffspringInfoFormComponent', () => {
  let component: OffspringInfoFormComponent;
  let fixture: ComponentFixture<OffspringInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffspringInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffspringInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
