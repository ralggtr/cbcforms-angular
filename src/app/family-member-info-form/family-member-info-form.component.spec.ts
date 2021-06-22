import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMemberInfoFormComponent } from './family-member-info-form.component';

describe('FamilyMemberInfoFormComponent', () => {
  let component: FamilyMemberInfoFormComponent;
  let fixture: ComponentFixture<FamilyMemberInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyMemberInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMemberInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
