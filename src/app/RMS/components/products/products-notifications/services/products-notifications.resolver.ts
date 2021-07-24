import { ProductsService } from 'src/services/products/products.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class ProductsNotificationsResolver implements Resolve<any> {
    
    constructor(private services: ProductsService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.productNotifications();
    }
}