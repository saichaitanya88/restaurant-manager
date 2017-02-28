import { Component } from '@angular/core';
import { MenuService, MenuItem } from "../core/menu.service";
import { TablesService } from "../core/tables.service";
import { DiningTable } from "../core/tables.service";

@Component({
    selector: 'orders-component',
    templateUrl: 'orders.component.html',
})
export class OrdersComponent {
    static title = "Orders";
    
    constructor(private menuService: MenuService, private tablesService: TablesService) {
        
    }
}