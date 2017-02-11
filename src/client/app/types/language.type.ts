/**
 * Перечисление, содержащее типы используемых в сервисе языков
 */
export enum LanguageType {
  en,   // английский
  ru,   // русский
  de,   // немецкий
  fr,   // французкий
  zh    // китайский
}

/**
 * Объект, содержащий сведения о языках
 */
export const languageTypes: any = {
  en: {
    json: 'en',
    type: LanguageType.en,
    class: 'flag-en',
    str: "English",
    lang: 'en',
    country: 'GB'
  },
  ru: {
    json: 'ru',
    type: LanguageType.ru,
    class: 'flag-ru',
    str: "Русский",
    lang: 'ru',
    country: 'RU'
  },
  de: {
    json: 'de',
    type: LanguageType.de,
    class: 'flag-de',
    str: "Deutsch",
    lang: 'de',
    country: 'DE'
  },
  fr: {
    json: 'fr',
    type: LanguageType.fr,
    class: 'flag-fr',
    str: "Français",
    lang: 'fr',
    country: 'FR'
  },
  zh: {
    json: 'zh',
    type: LanguageType.zh,
    class: 'flag-zh',
    str: "汉语",
    lang: 'zh',
    country: 'CN'
  }
}
