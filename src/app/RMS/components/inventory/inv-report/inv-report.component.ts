import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/apps/email/app.state';
import { selectItemsReportsCategories } from 'src/app/RMS/store/items-reports/items-reports.selectors';

@Component({
  selector: 'app-inv-report',
  templateUrl: './inv-report.component.html',
  styleUrls: ['./inv-report.component.css']
})
export class InvReportComponent implements OnInit {
  inventory: any[] = [];
  loading: boolean = false;

  itemsCategories$: Observable<any>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.route.data.subscribe(
      res => {
        this.inventory = res.inv.orderdetails;
      }
    );

    this.itemsCategories$ = this.store.pipe(select(selectItemsReportsCategories));
  }

}
