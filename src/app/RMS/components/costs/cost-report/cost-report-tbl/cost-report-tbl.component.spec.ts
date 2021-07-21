import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostReportTblComponent } from './cost-report-tbl.component';

describe('CostReportTblComponent', () => {
  let component: CostReportTblComponent;
  let fixture: ComponentFixture<CostReportTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostReportTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostReportTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
