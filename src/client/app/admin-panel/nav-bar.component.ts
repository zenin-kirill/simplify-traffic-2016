import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { TranslationService, Localization, LocaleService } from "angular-l10n";
import { LocaleConfigService } from "../locale-config.service";
import { languageTypes } from "../types/language.type";

@Component({
             moduleId: module.id,
             selector: 'admin-nav-bar',
             templateUrl: 'nav-bar.component.html',
           })

/**
 *  Компонент, представляющий собой верхнюю панель навигации
 */
export class NavBarComponent extends Localization implements OnInit {
  userSurname: string = '';       // модель, предназн. для вывода фамилии пользователя
  userName: string    = '';       // модель, предназн. для вывода имени пользователя
  languageTypes: Array<any> = []; // массив, содержащий в себе все доступные в приложении языки
  currentLocale: any;             // модель, содержащая объект текущего языка

  constructor(private authService: AuthService, private localSevice: LocaleConfigService,
              public translation: TranslationService, public locale: LocaleService,) {
    super(locale, translation);   // конструктор локализации
    // получение текущего языка из сервиса локал.
    this.currentLocale = languageTypes[this.localSevice.getCurrentLanguage()];
    // добавление в массив всех поддерживаемых приложением языков
    for (let lang in languageTypes) {
      this.languageTypes.push(languageTypes[lang]);
    }
  };


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

  /**
   * Функция, выполняющая выход из текущего польз. аккаунта
   */
  logOut() {
    this.authService.logOut();
  }

  /**
   * Функция, производящая смену текущих языка и страны
   * @param index индекс элемента в массиве поддерж. языков
   */
  changeLocale(index: number) {
    this.currentLocale = this.languageTypes[index];
    this.localSevice.setCurrentLocation(this.languageTypes[index]['lang'],
                                        this.languageTypes[index]['country'])
  }
}
