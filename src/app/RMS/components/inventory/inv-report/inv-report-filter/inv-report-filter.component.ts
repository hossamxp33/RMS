import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/services/products/products.service';
import { GenericService } from 'src/services/generic/generic.service';

@Component({
  selector: 'app-inv-report-filter',
  templateUrl: './inv-report-filter.component.html',
  styleUrls: ['./inv-report-filter.component.css']
})
export class InvReportFilterComponent implements OnInit {
  @Input('categories') categories: any = [];
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();
  @Output('data') data: EventEmitter<any> = new EventEmitter();
  @Output('storeRep') storeRep: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  
  constructor(private fb: FormBuilder, private service: ProductsService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      category_id: [''],
      fromdate: [null],
      todate: [null],
    })
  }

  async filter() {
    let props: any[] = [
      (Boolean(this.form.get('category_id').value)) && {"Products.category_id": this.form.get('category_id').value},
    ];
    props = props.filter(val => Boolean(val));
    
    const filters = {
      "options":[...props],
      "fromdate" : (this.form.get('fromdate').value != null) ? this.generic.formatDate(this.form.get('fromdate').value, 'filter') : '', 
      "todate" : (this.form.get('todate').value != null) ? this.generic.formatDate(this.form.get('todate').value, 'filter') : ''}

    this.loading.emit(true);

    const data: any = await this.service.filterInv(filters); 

    this.data.emit(data.orderdetails);
    this.storeRep.emit(data.storetotalreport[0]);      
    this.loading.emit(false);
  }  

}
