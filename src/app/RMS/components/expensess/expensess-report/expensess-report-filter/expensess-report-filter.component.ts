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
  @Output('pages') pages: EventEmitter<any> = new EventEmitter();
  

  date: any = '';

  constructor(private service: ExpensessService, private generic: GenericService) { }

  ngOnInit() {
  }

  async filter(filter, val, type = '') {    
    if (val === true) return;

    const formData = new FormData(); 

    if (type == 'date') {
      val = this.generic.formatDate(this.date[0], 'filter');
      formData.append('Filter[created][__start__]', val);
    }

    
    if (type == 'date') {
      val = this.generic.formatDate(this.date[1], 'filter');
      formData.append('Filter[created][__end__]', val);
    } else formData.append(filter, val);

    this.loading.emit(true);

    const data: any = await this.service.filterExpensesReport(formData); 

    this.data.emit(data.data);
    this.pages.emit(data.pagination);
    this.loading.emit(false);
  } 

}
