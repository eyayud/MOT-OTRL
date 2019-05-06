import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalWizardStepComponent } from './final-wizard-step.component';

describe('FinalWizardStepComponent', () => {
  let component: FinalWizardStepComponent;
  let fixture: ComponentFixture<FinalWizardStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalWizardStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalWizardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
