import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'admin-side-bar',
	templateUrl: 'side-bar.component.html',
})

export class SideBarComponent {
	private showSideBar: boolean = false;
	private showManagementMenu: boolean = true;

  showSideBarChanged() {
		this.showSideBar = !this.showSideBar;
	}
  showManagementMenuChanged() {
    this.showManagementMenu = !this.showManagementMenu;
	}
}
