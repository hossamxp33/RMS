import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItemsReportsCategories } from 'src/app/RMS/store/items-reports/items-reports.selectors';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-cost-report',
  templateUrl: './cost-report.component.html',
  styleUrls: ['./cost-report.component.css']
})
export class CostReportComponent implements OnInit {
  costs: any[] = [];
  products: any[] = [];
  itemsCategories$: Observable<any>;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.costs = res.cost.orderdetails
        this.products = [...Object.entries(res.cost.products)];
      }
    );

    this.itemsCategories$ = this.store.pipe(select(selectItemsReportsCategories));
  }
}
