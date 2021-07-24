import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-report',
  templateUrl: './items-report.component.html',
  styleUrls: ['./items-report.component.css']
})
export class ItemsReportComponent implements OnInit {
  items: any[] = [];

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.items = res.items.data;
      }
    )
  }

}
