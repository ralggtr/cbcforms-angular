import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorsHealthFormComponent } from './minors-health-form.component';

describe('MinorsHealthFormComponent', () => {
  let component: MinorsHealthFormComponent;
  let fixture: ComponentFixture<MinorsHealthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorsHealthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorsHealthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
