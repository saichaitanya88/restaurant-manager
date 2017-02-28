import { Injectable } from "@angular/core";

import { DiningTable, Order } from "./tables.service";
import { MenuService } from "./menu.service";

@Injectable()
export class DispatchService {
    deliveries: Array<DeliveryOrder> = [];

    constructor(private menuService: MenuService){
		this.addNewOrder();
    }

    addNewOrder(){
        let delivery = new DeliveryOrder(this.deliveries.length, []);
        delivery.orders.push(new Order(this.menuService.menu[this.getRandomMenuItem()]));
		delivery.orders.push(new Order(this.menuService.menu[this.getRandomMenuItem()]));
		delivery.orders.push(new Order(this.menuService.menu[this.getRandomMenuItem()]));
        this.deliveries.push(delivery);
    }

    completeDelivery(delivery: DeliveryOrder){
        let index = this.deliveries.findIndex(d => d === delivery);
		this.deliveries.splice(index, 1);
    }

    getRandomMenuItem() {
        return Math.floor(Math.random() * this.menuService.menu.length);
    }
}


export class DeliveryOrder extends DiningTable {
    time: Date;
    constructor(id: number, orders: Order[]) {
        super(id, orders);
        this.time = new Date();
    }
}