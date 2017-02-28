import { Component, Input } from '@angular/core';
import { MenuItem } from "../core/menu.service";

@Component({
    selector: 'menu-list-component',
    templateUrl: 'menuList.component.html'
})
export class MenuListComponent {
    @Input() categories: { name: string, items: MenuItem[] }[];
    @Input() readOnly: boolean = true;
    constructor(){ }
}
