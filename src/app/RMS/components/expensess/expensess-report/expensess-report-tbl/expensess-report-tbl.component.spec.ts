import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensessReportTblComponent } from './expensess-report-tbl.component';

describe('ExpensessReportTblComponent', () => {
  let component: ExpensessReportTblComponent;
  let fixture: ComponentFixture<ExpensessReportTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensessReportTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensessReportTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
