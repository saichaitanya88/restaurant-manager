import { Component, Input } from '@angular/core';

@Component({
    selector: 'tables-component',
    templateUrl: 'tables.component.html'
})
export class TablesComponent {
    tablesX = Array(3).fill(1).map((a,i) => i+1);
    tablesY = Array(3).fill(1).map((a,i) => i+1);
    tables: any = [];
    constructor(){ 
        let counter = 1;
        this.tablesX.forEach(x => {
            this.tablesY.forEach(y => {
                if(!this.tables[x]) this.tables[x] = [];
                this.tables[x][y] = counter;
                counter++;
            })
        })
    }
}
