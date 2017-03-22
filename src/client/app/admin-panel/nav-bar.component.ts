import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { TranslationService, Localization, LocaleService } from "angular-l10n";
import { LocaleConfigService } from "../locale-config.service";
import { languageTypes } from "../types/language.type";
import { Observable } from "rxjs";

@Component({
             moduleId: module.id,
             selector: 'admin-nav-bar',
             templateUrl: 'nav-bar.component.html',
           })

/**
 *  Component, which is top navigation bar
 */
export class NavBarComponent extends Localization implements OnInit {
  userSurname: string = '';       // user surname
  userName: string    = '';       // user name
  languageTypes: Array<any> = []; // array containing using languages
  currentLocale: any;             // current locale
  currentTime: Date = new Date(); // current time (tick-tick)

  constructor(private authService: AuthService, private localSevice: LocaleConfigService,
              public translation: TranslationService, public locale: LocaleService,) {
    super(locale, translation);   // localization constructor
    // receiving current language from localization service
    this.currentLocale = languageTypes[this.localSevice.getCurrentLanguage()];
    // add to array of using languages
    for (let lang in languageTypes) {
      this.languageTypes.push(languageTypes[lang]);
    }
    // subscription for regular updating of time values
    let observableTime: Observable<Date> = Observable.create((observer: any) => {
      setInterval(() => observer.next(new Date()), 5000);
    });
    observableTime.subscribe((time: Date) => this.currentTime = time, (e: any) => {throw e});
  };


  /**
   * When initialized, function requests authorization service for user data
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
   * Function that exits from the current user account
   */
  logOut() {
    this.authService.logOut();
  }

  /**
   * Function that changes the current language and country
   * @param index index of an element in an array of using languages
   */
  changeLocale(index: number) {
    this.currentLocale = this.languageTypes[index];
    this.localSevice.setCurrentLocation(this.languageTypes[index]['lang'],
                                        this.languageTypes[index]['country'])
  }
}
