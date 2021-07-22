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
  

  date: any = '';

  constructor(private service: ExpensessService, private generic: GenericService) { }

  ngOnInit() {
  }

  async filter(filter, val, type = '') {
    if (val === true) return;

    const formData = new FormData(); 

    if (type == 'date') val = this.generic.formatDate(this.date[0], 'filter');
    if (type == 'date') val += ` ${this.generic.formatDate(this.date[1], 'filter')}`

    formData.append(filter, val);    

    this.loading.emit(true);

    const data = await this.service.filterExpensesReport(formData); 
    
    this.data.emit(data["orderdetails"])
    this.loading.emit(false);
  }  

}
