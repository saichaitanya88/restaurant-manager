import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminComponent} from "./admin.component";
//import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    //SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
export {AdminComponent} from "./admin.component";