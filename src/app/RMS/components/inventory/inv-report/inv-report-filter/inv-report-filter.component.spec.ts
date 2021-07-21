import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvReportFilterComponent } from './inv-report-filter.component';

describe('InvReportFilterComponent', () => {
  let component: InvReportFilterComponent;
  let fixture: ComponentFixture<InvReportFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvReportFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
