import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
             moduleId: module.id,
             selector: 'admin-side-bar',
             templateUrl: 'side-bar.component.html',
           })

/**
 * Компонент, представляющий собой боковую выдвижную панель
 */
export class SideBarComponent {
  showSideBar: boolean        = false;       // модель, отвечающая за скрытие/показ панели
  showManagementMenu: boolean = true; // модель, отвечающая за скрытие/показ подменю управления

  constructor(private authService: AuthService) {};

  /**
   * Функция - обработчик, изменяет состояние панели
   */
  showSideBarChanged() {
    this.showSideBar = !this.showSideBar;
  }

  /**
   * Функция - обработчик, изменяет состояние подменю управления
   */
  showManagementMenuChanged() {
    this.showManagementMenu = !this.showManagementMenu;
  }

  /**
   * Функция, выполняющая выход из панели управления
   */
  logOut() {
    this.authService.logOut();
  }
}
