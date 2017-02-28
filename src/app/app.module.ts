import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { AdminComponent } from "./admin/admin.module";
import { KitchenComponent } from "./kitchen/kitchen.module";
import { DispatchComponent } from "./dispatch/dispatch.module";
import { OrdersComponent, OrderEditorComponent } from "./orders/orders.module";
import { LivelyService } from "./shared/lively.service";

import { MenuListComponent } from "./shared/menuList.component";
import { TablesComponent } from "./shared/tables.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    KitchenComponent,
    DispatchComponent,
    OrdersComponent,
    OrderEditorComponent,
    MenuListComponent,
    TablesComponent
  ],
  imports: [
    IonicModule.forRoot(AppComponent),
    CoreModule,
    FormsModule
  ],
  exports: [
    CoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    KitchenComponent,
    DispatchComponent,
    OrdersComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
