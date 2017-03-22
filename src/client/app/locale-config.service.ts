import { Injectable } from "@angular/core";
import { TranslationService, LocaleService } from "angular-l10n";
import { languageTypes } from "./types/language.type";

/**
 * Service that implements multilingual functionality
 */
@Injectable()
export class LocaleConfigService {
  constructor(public locale: LocaleService, public translation: TranslationService) { }

  /**
   * Function that configures localization mechanism
   */
  load(): Promise<any> {
    this.locale.AddConfiguration()
        .AddLanguages([
                        languageTypes.en.lang,
                        languageTypes.ru.lang,
                        languageTypes.de.lang,
                        languageTypes.fr.lang,
                        languageTypes.zh.lang
                      ])
        .SetCookieExpiration(30)    // shelf life of localization cookies (days)
        .DefineDefaultLocale(languageTypes.en.lang, languageTypes.en.country)
        .DefineCurrency('EUR');
    this.locale.init();

    this.translation.AddConfiguration()
        .AddProvider('./assets/locales/locale-');

    let promise: Promise<any> = new Promise((resolve: any) => {
      this.translation.translationChanged.subscribe(() => {
        resolve(true);
      });
    });
    this.translation.init();

    return promise;
  }

  /**
   * Function of changing current location settings
   * @param lang
   * @param country
   */
  setCurrentLocation(lang: string, country: string) {
    this.locale.setDefaultLocale(lang, country);
  }

  /**
   * Function of getting current language
   * @returns {string} two or three symbols indicating the language according to the standard
   */
  getCurrentLanguage() : string {
    return this.locale.getCurrentLanguage();
  }
}

/**
 * Localization initialization function
 */
export function initLocalization(localService: LocaleConfigService): Function {
  return () => localService.load();
}
