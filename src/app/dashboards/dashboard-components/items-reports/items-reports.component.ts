import { Component, Input, OnInit } from '@angular/core';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-items-reports',
  templateUrl: './items-reports.component.html',
  styleUrls: ['./items-reports.component.css']
})
export class ItemsReportsComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('data') data: any[] = [];

  lang: any = lang.ar;

  header: any[] = [ 
    '#', 
    'رقم الطلب',
    'القسم',
    'العنصر',
    'السعر',
    'الكمية',
    'الاجمالي'
  ]; 
  
  itemRecipes: any = [];
  isVisible: boolean = false;
  
  popupHeader: any[] = [
    '#',
    'العنصر',
    'السعر',
    'الكمية',
  ]

  constructor() { }

  ngOnInit() {
  }

  getRecipes(receipes: any[]) {
    (receipes.length == 0) ? this.itemRecipes = [] : this.itemRecipes = this.createRecipes(receipes);
    this.isVisible = true;
  }

  createRecipes(receipes: any[]) {
    let rec: any[] = [];

    receipes.forEach(val => {
      let {avrg_price, branch_id, category_id, created, modified, supplier_id, unit_id, ...rest} = val.product;
      rec.push(rest);
    });

    return rec;
  }

}
