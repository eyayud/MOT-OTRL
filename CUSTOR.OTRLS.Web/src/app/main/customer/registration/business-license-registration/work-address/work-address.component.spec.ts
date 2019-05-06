import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAddressComponent } from './work-address.component';

describe('WorkAddressComponent', () => {
  let component: WorkAddressComponent;
  let fixture: ComponentFixture<WorkAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
