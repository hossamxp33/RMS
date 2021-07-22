import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostReportFilterComponent } from './cost-report-filter.component';

describe('CostReportFilterComponent', () => {
  let component: CostReportFilterComponent;
  let fixture: ComponentFixture<CostReportFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostReportFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
