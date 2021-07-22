import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GenericService } from 'src/services/generic/generic.service';
import { ProductsService } from 'src/services/products/products.service';

@Component({
  selector: 'app-cost-report-filter',
  templateUrl: './cost-report-filter.component.html',
  styleUrls: ['./cost-report-filter.component.css']
})
export class CostReportFilterComponent implements OnInit {
  @Input('categories') categories: any = [];
  @Input('products') products: any = [];
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();
  @Output('data') data: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  
  constructor(private fb: FormBuilder, private service: ProductsService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      category_id: [''],
      product_id: [''],
      fromdate: [null],
      todate: [null],
    })
  }

  async filter() {
    let props: any[] = [
      (Boolean(this.form.get('category_id').value)) && {"Products.category_id": this.form.get('category_id').value},
      (Boolean(this.form.get('product_id').value)) && {"Products.id": parseInt(this.form.get('product_id').value)},
    ];
    props = props.filter(val => Boolean(val));

    const filters = {
      "options":[...props],
      "fromdate" : (this.form.get('fromdate').value != null) ? this.generic.formatDate(this.form.get('fromdate').value, 'filter') : '', 
      "todate" : (this.form.get('todate').value != null) ? this.generic.formatDate(this.form.get('todate').value, 'filter') : ''}

    this.loading.emit(true);
    const data: any = await this.service.filterProCost(filters); 
    this.data.emit(data.orderdetails)    
    this.loading.emit(false);
  }   

}
