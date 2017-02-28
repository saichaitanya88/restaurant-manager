import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MenuComponent } from "./menu.component";
import { AdminComponent } from "./admin/admin.component";
import { OrdersComponent } from "./orders/orders.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { DispatchComponent } from "./dispatch/dispatch.component";
import { LivelyService } from "./core/lively.service";

@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage = MenuComponent;
  pages: any = {};

  constructor(platform: Platform, livelyService: LivelyService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    this.pages.Home = MenuComponent;
    this.pages.Admin = AdminComponent;
    this.pages.Orders = OrdersComponent;
    this.pages.Kitchen = KitchenComponent;
    this.pages.Dispatch = DispatchComponent;
  }

  setPage(page: any) {
    this.rootPage = page;
  }
}
