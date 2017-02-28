import { Injectable } from "@angular/core";

import { MenuItem, MenuService } from "./menu.service";

@Injectable()
export class TablesService {
    tables: Array<DiningTable> = [];
    constructor(private menuService: MenuService){
        Array(6).fill(0).map((n,i) => i).forEach(i => {
            this.tables.push(new DiningTable(i, []));
        });
        this.tables[4].orders.push(new Order(menuService.menu[this.getRandomMenuItem()]));
        this.tables[4].orders.push(new Order(menuService.menu[this.getRandomMenuItem()]));
        this.tables[4].orders.push(new Order(menuService.menu[this.getRandomMenuItem()]));
    }

    getRandomMenuItem(){
		return Math.floor(Math.random() * this.menuService.menu.length);
	}
}

export class DiningTable {
    constructor(public id: number, public orders: Order[]) { }
}


export class Order extends MenuItem {
    notes: string;
    time: Date;
    isComplete: boolean;
    constructor(src: MenuItem) {
        super();
        if (!src) return;
        if (src.code) this.code = src.code;
        if (src.description) this.description = src.description;
        if (src.name) this.name = src.name;
        if (src.price) this.price = src.price;
        if (src.type) this.type = src.type;
        this.time = new Date();
    }
}