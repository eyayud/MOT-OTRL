import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLicenseRegistrationComponent } from './business-license-registration.component';

describe('BusinessLicenseRegistrationComponent', () => {
  let component: BusinessLicenseRegistrationComponent;
  let fixture: ComponentFixture<BusinessLicenseRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessLicenseRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessLicenseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
