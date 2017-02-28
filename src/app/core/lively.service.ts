import { Injectable } from "@angular/core"
import { Observable } from "rxjs";

import { TablesService, Order } from "./tables.service";
import { MenuService } from "./menu.service";
import { DispatchService } from "./dispatch.service";

@Injectable()
export class LivelyService {
    constructor(private menuService: MenuService, private tablesService: TablesService, private dispatchService: DispatchService) {
        Observable.interval(5000).subscribe(() => {
            // Add orders to random table
            if (Math.random() > 0.8) {
                let table = this.tablesService.tables[Math.floor(Math.random() * this.tablesService.tables.length)]
                table.orders.push(new Order(this.menuService.menu[this.getRandomMenuItem()]));
            }

            // Add Deliveries
            if (Math.random() > 0.8 && this.dispatchService.deliveries.length < 9) {
                this.dispatchService.addNewOrder();
            }

        });

        Observable.interval(30000).subscribe(() => {
            // Bill Table
            if (Math.random() > 0.5) {
                let table = this.tablesService.tables[Math.floor(Math.random() * this.tablesService.tables.length)]
                table.orders = [];
            }
            // Complete Delivery
            if (Math.random() > 0.5) {
                let delivery = this.dispatchService.deliveries[Math.floor(Math.random() * this.dispatchService.deliveries.length)];
                this.dispatchService.completeDelivery(delivery);
            }
            // Complete Dish
            if (Math.random() > 0.5) {
                let table = this.tablesService.tables[Math.floor(Math.random() * this.tablesService.tables.length)];
                table.orders.filter(o => !o.isComplete).forEach(o => o.isComplete = true);
            }
        });
    }

    getRandomMenuItem() {
        return Math.floor(Math.random() * this.menuService.menu.length);
    }
}