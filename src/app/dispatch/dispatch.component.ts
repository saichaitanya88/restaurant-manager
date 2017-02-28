import { Component } from '@angular/core';
import * as moment from "moment";
import { Subscription, Observable } from "rxjs";

import { DiningTable, Order } from "../core/tables.service";
import { MenuService } from "../core/menu.service";
import { DispatchService, DeliveryOrder } from "../core/dispatch.service";

@Component({
	selector: 'dispatch-component',
	templateUrl: 'dispatch.component.html'
})
export class DispatchComponent {
	static title = "Dispatch";
	sub: Subscription;

	constructor(private menuService: MenuService, private dispatchService: DispatchService) {
		this.sub = Observable.interval(1000).subscribe(() => { });
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}

	completeDelivery(delivery: DeliveryOrder) {
		this.dispatchService.completeDelivery(delivery);
	}

	getTimeAgo(time: Date) {
		return moment(time).from(moment());
	}
}