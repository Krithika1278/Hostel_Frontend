import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelTypeComponent } from './hostel-type.component';

describe('HostelTypeComponent', () => {
  let component: HostelTypeComponent;
  let fixture: ComponentFixture<HostelTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostelTypeComponent]
    });
    fixture = TestBed.createComponent(HostelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
