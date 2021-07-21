import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvReportTblComponent } from './inv-report-tbl.component';

describe('InvReportTblComponent', () => {
  let component: InvReportTblComponent;
  let fixture: ComponentFixture<InvReportTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvReportTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvReportTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
