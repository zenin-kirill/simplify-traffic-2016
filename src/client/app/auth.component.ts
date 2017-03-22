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
 *  Component that provides authorization form for user
 */
export class AuthComponent extends Translation {
  message: string           = '';   // message displayed in title
  login: string             = '';   // login for log in
  password: string          = '';   // pass for log in
  languageTypes: Array<any> = [];   // array with using languages
  currentLocale: any;               // current locale

  constructor(private authService: AuthService, private router: Router,
              private localSevice: LocaleConfigService, public translation: TranslationService) {
    super(translation);
    // get current locale
    this.currentLocale = languageTypes[this.localSevice.getCurrentLanguage()];
    // get list of using languages
    for (let lang in languageTypes) {
      this.languageTypes.push(languageTypes[lang]);
    }
  };

  /**
   * Function that changes current language and country
   * @param index Index of an element in an array of using languages
   */
  changeLocale(index: number) {
    this.currentLocale = this.languageTypes[index];
    this.localSevice.setCurrentLocation(this.languageTypes[index]['lang'],
                                        this.languageTypes[index]['country'])
  }

  /**
   * A function that attempts to authenticate a user.
   */
  tryAuthorize() {
    this.message = 'Authorization...';
    this.authService.getAuthDataWithLogIn(this.login, this.password)
        .subscribe( // Subscribe to authorization and waiting for the result
                    () => {   // if it works, we redirect to the main or previous page
                      this.message = 'Authorization complete!';
                      this.authService.completeLogIn();
                    },

                    (e: any) => { // if it didn't work - write error
                      this.message = 'Authorization error, try again!';
                      console.log('AuthComponent: ' + e.message);
                      if (e.stack !== undefined) {
                        console.log(e.stack);
                      }
                    });
  }
}
