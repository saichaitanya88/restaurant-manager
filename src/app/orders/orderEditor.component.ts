import { Component, Input, Output } from '@angular/core';

import { MenuService, MenuItem } from "../core/menu.service";
import { DiningTable, Order } from "../core/tables.service";

@Component({
    selector: 'order-editor-component',
    templateUrl: 'orderEditor.component.html',
})
export class OrderEditorComponent{
    @Input() table: DiningTable;
    code: string = "";

    constructor(private menuService: MenuService){

    }

    onAddItem(){
        let code: number = parseInt(this.code);
        let menuItem = this.menuService.menu.find(m => m.code == code);
        if (menuItem){ 
            let order = new Order(menuItem);
            this.table.orders.push(order);
        }
        this.clearCode();
    }

    addKey(event: MouseEvent){
        let n = (<any>event.srcElement).innerText.trim();
        this.code += n;
    }

    clearCode(){
        this.code = "";
    }

    removeOrder(order: Order){
        let index = this.table.orders.findIndex(o => o === order);
        this.table.orders.splice(index, 1);
    }

    billOrder(){
        this.table.orders = [];
    }
}