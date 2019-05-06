import { TestBed } from '@angular/core/testing';

import { ArcWizardService } from './arc-wizard.service';

describe('ArcWizardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArcWizardService = TestBed.get(ArcWizardService);
    expect(service).toBeTruthy();
  });
});
