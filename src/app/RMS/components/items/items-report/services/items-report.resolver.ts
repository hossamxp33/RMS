import { ItemsService } from 'src/services/items/items.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class ItemsReportResolver implements Resolve<any> {
    
    constructor(private services: ItemsService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.getItemsNotHavigRecipy();
    }
}