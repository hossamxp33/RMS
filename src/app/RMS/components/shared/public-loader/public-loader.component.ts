import { Component, Input, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { PublicLoadingService } from './loading.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-public-loader',
  templateUrl: './public-loader.component.html',
  styleUrls: ['./public-loader.component.css']
})
export class PublicLoaderComponent implements OnInit {
  @Input()
  routing: boolean = false;

  @Input()
  isLoading: boolean = false;
  
  constructor(public loadingService: PublicLoadingService, private router: Router) { }

  ngOnInit() {
    if (this.isLoading) {
      this.router.events.subscribe(
        e => {
          if (e instanceof NavigationStart || e instanceof RouteConfigLoadStart) {
            this.loadingService.loadingOn();
            $('#ng_MIS').addClass('hide-scroll');
          } else if (e instanceof NavigationEnd) {
            this.loadingService.loadingOff();
            $('#ng_MIS').removeClass('hide-scroll');
            // || e instanceof NavigationError || e instanceof NavigationCancel || e instanceof RouteConfigLoadEnd
          }
        }
      )    
    }
  }

}
