import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as c3 from 'c3';
import Chart from 'chart.js';
import { GenericService } from 'src/services/generic/generic.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @Input('sales') sales: any[] = [];
  @Input('color') color: any = '';
  @Input('title') title: string = '';
  @Input('type') type: string = '';
  @Input('selector') selector: string = '';
  @Input('orderLabelsKey') orderLabelsKey: string = '';
  @Input('orderTotalKey') orderTotalKey: string = '';
  
  orderLabels: any[] = [];
  orderTotal: any[] = [];

  colors: any = [
    'rgba(255, 99, 132, .7)',
    'rgba(255, 159, 64, .7)',
    'rgba(255, 205, 86, .7)',
    'rgba(75, 192, 192, .7)',
    'rgba(54, 162, 235, .7)',
    'rgba(153, 102, 255, .7)',
    'rgba(201, 203, 207, .7)',
    'rgba(187, 135, 96, .7)',
    'rgba(79, 14, 14, .7)'
  ];

  chartColors: any[] = [];

  datasets: any[] = [];

  constructor(private service: GenericService) { }

  ngOnInit() {
    if (this.selector == 'week-chart') {
      this.orderLabels = [
        'الخميس',
        'الاربعاء',
        'الثلاثاء',
        'الاثنين',
        'الأحد',
        'السبت',
        'الجمعة',
      ]
    } else {
      (this.selector == 'month-chart') ? this.orderLabels = this.sales.map(s => this.service.formatDate(s[this.orderLabelsKey])) : this.orderLabels = this.sales.map(s => `${s[this.orderLabelsKey]} - ${s[this.orderTotalKey]}`);
    }

    this.orderTotal = this.sales.map(s => parseFloat(s[this.orderTotalKey]));
    
    (this.selector == 'week-chart' || this.selector == 'month-chart') && this.orderTotal.reverse();
    (this.selector == 'week-chart' || this.selector == 'month-chart') && this.orderLabels.reverse();
  }

  ngAfterViewInit() {
    let ctx = document.getElementById(this.selector);

    let chart = new Chart(ctx, {
      type: this.type,
      data: {
        labels: [...this.orderLabels],
        datasets: [
          {
            label: this.title,
            data: [...this.orderTotal],
            borderColor: this.colors,
            backgroundColor: (this.type == 'line') ? '' : this.colors,
          }
        ]
      }
    })
  }  

}
