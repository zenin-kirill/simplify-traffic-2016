import { Injectable } from "@angular/core";
import { TranslationService, LocaleService } from "angular-l10n";
import { languageTypes } from "./types/language.type";

/**
 * Сервис, реализующий функционал многоязычности
 */
@Injectable()
export class LocaleConfigService {
  constructor(public locale: LocaleService, public translation: TranslationService) { }

  /**
   * Функция, производящая конфигурацию механизма локализации
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
        .SetCookieExpiration(30)    // срок хранения куки локализации (дней)
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
   * Функция смены текущих параметров местоположения
   * @param lang язык
   * @param country страна
   */
  setCurrentLocation(lang: string, country: string) {
    this.locale.setDefaultLocale(lang, country);
  }

  /**
   * Функция получения текущего языка
   * @returns {string} два или три символа, обоз. язык по стандарту
   */
  getCurrentLanguage() : string {
    return this.locale.getCurrentLanguage();
  }
}

/**
 * Функция инциализации локализации
 */
export function initLocalization(localService: LocaleConfigService): Function {
  return () => localService.load();
}
