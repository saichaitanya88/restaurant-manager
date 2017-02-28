import { Component } from '@angular/core';

import { MenuService } from "./core/menu.service";

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html'
})
export class MenuComponent{
  static title = "Menu";
  constructor(private menuService: MenuService) {
  }
}
