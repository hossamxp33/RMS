import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  
import { ProductsService } from "src/services/products/products.service";

@Injectable()

export class InvReportResolver implements Resolve<any> {
    
    constructor(private services: ProductsService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.getProInInv();
    }
}