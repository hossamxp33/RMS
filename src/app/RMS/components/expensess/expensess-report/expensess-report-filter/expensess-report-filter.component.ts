import { ExpensessService } from 'src/services/expensess/expensess.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericService } from 'src/services/generic/generic.service';

@Component({
  selector: 'app-expensess-report-filter',
  templateUrl: './expensess-report-filter.component.html',
  styleUrls: ['./expensess-report-filter.component.css']
})
export class ExpensessReportFilterComponent implements OnInit {
  @Input('categories') categories: any = [];
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();
  @Output('data') data: EventEmitter<any> = new EventEmitter();
  

  startDate: any = '';
  endDate: any = '';

  constructor(private service: ExpensessService, private generic: GenericService) { }

  ngOnInit() {
  }

  async filter(filter, val, type = '') {
    if (val === true) return;

    const formData = new FormData(); 

    if (type == 'startDate') val = this.generic.formatDate(this.startDate, 'filter');
    if (type == 'endDate') val = this.generic.formatDate(this.endDate, 'filter');

    formData.append(filter, val);    

    this.loading.emit(true);

    const data = await this.service.filterExpensesReport(formData); 
    
    this.data.emit(data["orderdetails"])
    this.loading.emit(false);
  }  

}
