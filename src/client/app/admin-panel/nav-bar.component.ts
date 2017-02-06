import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
             moduleId: module.id,
             selector: 'admin-nav-bar',
             templateUrl: 'nav-bar.component.html',
           })

/**
 *  Компонент, представляющий собой верхнюю панель навигации
 */
export class NavBarComponent implements OnInit {
  userSurname: string = '';   // модель, предназн. для вывода фамилии пользователя
  userName: string    = '';      // модель, предназн. для вывода имени пользователя

  constructor(private authService: AuthService) {};

  /**
   * Функция, котоаря при инициализации компонента запрашивает у сервиса авторизации данные о
   * пользователе
   */
  ngOnInit() {
    this.userSurname = this.authService.getCurrentUser().getSurname();
    this.userName    = this.authService.getCurrentUser().getName();
  }

  // todo: расшарить что это за функционал
  changeTheme(color: string): void {
    var link: any = $('<link>');
    link
    .appendTo('head')
    .attr({type: 'text/css', rel: 'stylesheet'})
    .attr('href', 'themes/app-' + color + '.css');
  }

  rtl(): void {
    var body: any = $('body');
    body.toggleClass('rtl');
  }

  sidebarToggler(): void {
    var sidebar: any       = $('#sidebar');
    var mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }

  logOut() {
    this.authService.logOut();
  }
}
