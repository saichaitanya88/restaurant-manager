import { Component, ViewChild } from '@angular/core';
import { Subscription, Observable } from "rxjs";


import { MenuService } from "../core/menu.service";
import { DashboardService } from "./dashboard.service";

@Component({
	selector: 'admin-component',
	templateUrl: './admin.component.html',
})
export class AdminComponent {
	static title = "Admin";
	Tabs = AdminTab;
	tab: AdminTab;
	resizeSub: Subscription;
	dashboardService: DashboardService = new DashboardService();
	@ViewChild('pieChart') pieChart;
	@ViewChild('barChart') barChart;

	constructor(private menuService: MenuService) {
		this.tab = AdminTab.Dashboard;
	}

	ngOnInit() {
		this.resizeSub = Observable.fromEvent(window, "resize").subscribe(()=>{
			this.initCharts();
		})
		this.initCharts();
	}

	initCharts(){
		setTimeout(() => {
			this.pieChart.nativeElement.innerHTML = "";
			this.barChart.nativeElement.innerHTML = "";
			let pieRect = {
				width: this.pieChart.nativeElement.parentElement.getBoundingClientRect().width,
				height: this.pieChart.nativeElement.parentElement.getBoundingClientRect().width
			};
			let barRect = {
				width: this.barChart.nativeElement.parentElement.getBoundingClientRect().width,
				height: this.pieChart.nativeElement.parentElement.getBoundingClientRect().width
			};
			this.dashboardService.init(pieRect, barRect);
		}, 50);
	}

	ngOnDestroy(){
		this.resizeSub.unsubscribe();
	}

	selectTab(tab: AdminTab) {
		this.tab = tab;
	}
}

export enum AdminTab {
	Dashboard, Menu, Tables
}