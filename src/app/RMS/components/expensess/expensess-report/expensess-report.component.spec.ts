import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensessReportComponent } from './expensess-report.component';

describe('ExpensessReportComponent', () => {
  let component: ExpensessReportComponent;
  let fixture: ComponentFixture<ExpensessReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensessReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
