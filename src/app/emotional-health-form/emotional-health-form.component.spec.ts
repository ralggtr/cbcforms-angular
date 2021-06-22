import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalHealthFormComponent } from './emotional-health-form.component';

describe('EmotionalHealthFormComponent', () => {
  let component: EmotionalHealthFormComponent;
  let fixture: ComponentFixture<EmotionalHealthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionalHealthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionalHealthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
