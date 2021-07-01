import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as c3 from 'c3';
import Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @Input('sales') sales: any[] = [];
  @Input('color') color: any = '';
  @Input('title') title: string = '';
  @Input('selector') selector: string = '';
  @Input('orderLabelsKey') orderLabelsKey: string = '';
  @Input('orderTotalKey') orderTotalKey: string = '';
  
  orderLabels: any[] = [];
  orderTotal: any[] = [];

  constructor() { }

  ngOnInit() {
    this.orderLabels = this.sales.map(s => s[this.orderLabelsKey]);
    this.orderTotal = this.sales.map(s => parseFloat(s[this.orderTotalKey].toFixed(2)));
  }

  ngAfterViewInit() {
    let ctx = document.getElementById(this.selector);

    let chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [...this.orderLabels],
        datasets: [
          {
            label: this.title,
            data: [...this.orderTotal],
            borderColor: this.color,
            backgroundColor: this.color,
          }
        ]
      }
    })
  }  

}
