import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensessReportFilterComponent } from './expensess-report-filter.component';

describe('ExpensessReportFilterComponent', () => {
  let component: ExpensessReportFilterComponent;
  let fixture: ComponentFixture<ExpensessReportFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensessReportFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensessReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
