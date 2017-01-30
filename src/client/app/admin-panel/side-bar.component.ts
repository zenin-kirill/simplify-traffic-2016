import { Component } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
	moduleId: module.id,
	selector: 'admin-side-bar',
	templateUrl: 'side-bar.component.html',
})

export class SideBarComponent {
	showSideBar: boolean = false;
	showManagementMenu: boolean = true;

  constructor(private authService: AuthService) {};

  showSideBarChanged() {
		this.showSideBar = !this.showSideBar;
	}
  showManagementMenuChanged() {
    this.showManagementMenu = !this.showManagementMenu;
	}

  logOut() {
    this.authService.logOut();
  }
}
