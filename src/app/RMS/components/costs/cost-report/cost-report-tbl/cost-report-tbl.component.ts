import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CostHelper } from '../../classes/cost-helper';

@Component({
  selector: 'app-cost-report-tbl',
  templateUrl: './cost-report-tbl.component.html',
  styleUrls: ['./cost-report-tbl.component.css']
})
export class CostReportTblComponent implements OnInit, OnChanges {
  @Input('data') data: any[] = [];
  @Input('loading') loading: boolean = false;
  
  header: any[] = [ 
    'المكون',
    'تكلفة المستهلك',
    'القسم',
    'المستهلك',
    'الاستهلاك قبل الهالك',
    'مجموع التكلفة',
  ]; 

  totCost: any = 0;

  itemRecipes: any = [];
  isVisible: boolean = false;
  
  popupHeader: any[] = [
    '#',
    'العنصر',
    'الكمية',
    'العدد',
    'التكلفة',
    'الوحدة',
  ];  

  constructor(private helper: CostHelper) { }

  ngOnInit() {
  }

  getRecipes(receipes: any[]) {    
    (receipes.length == 0) ? this.itemRecipes = [] : this.itemRecipes = this.helper.createRecipes(receipes);
    this.isVisible = true;
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' : 
            this.data = (Boolean(changes.data.currentValue.length)) ? this.helper.costObject(changes.data.currentValue) : [];
            this.totCost = (Boolean(changes.data.currentValue.length)) ? this.data.map(val => parseFloat(val["totalSum"])).reduce((prev, next) => prev + next).toFixed(2) : 0;
            break;
          case 'loading' : 
            this.loading = changes.loading.currentValue;
            break;
        }
      }
    }

  }  

}
