import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-report',
  templateUrl: './cost-report.component.html',
  styleUrls: ['./cost-report.component.css']
})
export class CostReportComponent implements OnInit {
  costs: any[] = [];  

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.costs = res.cost.orderdetails
      }
    )
  }
}
