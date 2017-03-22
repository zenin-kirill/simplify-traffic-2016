import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Translation, TranslationService } from "angular-l10n";

@Component({
             moduleId: module.id,
             selector: 'admin-side-bar',
             templateUrl: 'side-bar.component.html',
           })

/**
 * Component, which is a side sliding panel
 */
export class SideBarComponent extends Translation{
  showSideBar: boolean        = false;   // hide / show panel
  showManagementMenu: boolean = true;    // hiding / displaying management submenu

  constructor(private authService: AuthService, public translation: TranslationService) {
      super(translation);
  };

  /**
   * Function-handler, changes status of side panel
   */
  showSideBarChanged() {
    this.showSideBar = !this.showSideBar;
  }

  /**
   * Function-handler, changes state of management submenu
   */
  showManagementMenuChanged() {
    this.showManagementMenu = !this.showManagementMenu;
  }

  /**
   * Function that exits control panel
   */
  logOut() {
    this.authService.logOut();
  }
}
