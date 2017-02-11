import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { languageTypes } from "./types/language.type";
import { LocaleConfigService } from "./locale-config.service";
import { Translation, TranslationService } from "angular-l10n";

@Component({
             moduleId: module.id,
             selector: 'app-auth',
             templateUrl: 'auth.component.html',
           })

/**
 *  Компонент, предоставляющий пользователю форму авторизации в сервисе
 */
export class AuthComponent extends Translation{
  message: string  = '';          // сообщение, выводимое в заголовке на стр. автор.
  login: string    = '';          // логин пользователя
  password: string = '';          // пароль пользователя
  languageTypes: Array<any> = []; // массив с типами поддерж. языков
  currentLocale: any;

  constructor(private authService: AuthService, private router: Router,
              private localSevice: LocaleConfigService, public translation: TranslationService) {
    super(translation);
    // получение текущего языка
    this.currentLocale = languageTypes[this.localSevice.getCurrentLanguage()];
    // получение списка поддерж. языков
    for (let lang in languageTypes) {
      this.languageTypes.push(languageTypes[lang]);
    }
  };

  /**
   * Функция, производящая смену ткущих языка и страны
   * @param index индекс элемента в массиве поддерж. языков
   */
  changeLocale(index: number) {
    this.currentLocale = this.languageTypes[index];
    this.localSevice.setCurrentLocation(this.languageTypes[index]['lang'],
                                        this.languageTypes[index]['country'])
  }

  /**
   * Функция, осуществляющая попытку авторизации пользователя.
   */
  tryAuthorize() {
    this.message = 'Authorization...';
    this.authService.getAuthDataWithLogIn(this.login, this.password)
        .subscribe( // подписываемся на выполнение авторизации и ожиданием результат
                    () => {   // если получилось - перенаправляемся на главную или предыдущую страницу
                      this.message = 'Authorization complete!';
                      this.authService.completeLogIn();
                    },

                    (e: any) => { // если не получилось - выводим ошибку
                      this.message = 'Authorization error, try again!';
                      console.log('AuthComponent: ' + e.message);
                      if (e.stack !== undefined) {
                        console.log(e.stack);
                      }
                    });
  }
}
