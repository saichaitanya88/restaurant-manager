import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from "./orders.component";
import { OrderEditorComponent } from "./orderEditor.component";
import { MenuItem } from "../core/menu.service";

@NgModule({
  declarations: [
    OrdersComponent,
    OrderEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderEditorComponent
  ],
  providers: [],
  bootstrap: []
})
export class OrdersModule { }

export { OrdersComponent } from "./orders.component";
export { OrderEditorComponent } from "./orderEditor.component";