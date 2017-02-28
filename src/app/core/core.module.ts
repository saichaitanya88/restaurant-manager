import { NgModule } from '@angular/core';

import { MenuService } from "./menu.service";
import {TablesService} from "./tables.service";
import {DispatchService} from "./dispatch.service";
import { LivelyService} from "./lively.service";

@NgModule({
	declarations: [
	],
	imports: [
	],
	exports: [
	],
    providers: [
        MenuService,
		TablesService,
		DispatchService,
		LivelyService
    ]
})
export class CoreModule { }