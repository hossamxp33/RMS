import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvReportComponent } from './inv-report.component';

describe('InvReportComponent', () => {
  let component: InvReportComponent;
  let fixture: ComponentFixture<InvReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
