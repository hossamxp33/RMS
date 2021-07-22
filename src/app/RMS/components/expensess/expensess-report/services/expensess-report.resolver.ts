import { ExpensessService } from 'src/services/expensess/expensess.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class ExpensessReportResolver implements Resolve<any> {
    
    constructor(private services: ExpensessService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.getExpensesReport();
    }
}