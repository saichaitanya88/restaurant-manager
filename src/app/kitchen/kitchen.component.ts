import { Component } from '@angular/core';
import { Observable, Subscription } from "rxjs";

import { TablesService, Order } from "../core/tables.service";
import * as moment from "moment";

@Component({
	selector: 'kitchen-component',
	templateUrl: 'kitchen.component.html'
})
export class KitchenComponent {
	static title = "Kitchen";
	sub: Subscription;
	constructor(private tablesService: TablesService) {
		this.sub = Observable.interval(1000).subscribe(()=>{

		});
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}

	get tablesWithOrders() {
		return this.tablesService.tables
					.map((t, index) => {
						return {
							id: index+1,
							orders: t.orders
						}
					})
					.filter(t => t.orders.length > 0);
	}

	getTimeAgo(time: Date){
		return moment(time).from(moment());
	}

	completeOrder(order: Order){
		order.isComplete = true;
	}
}