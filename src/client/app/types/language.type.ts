/**
 * Enumeration containing types of using languages
 */
export enum LanguageType {
  en,   // english
  ru,   // russian
  de,   // german
  fr,   // french
  zh    // chinese
}

/**
 * Object containing additional information about types of using languages
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
