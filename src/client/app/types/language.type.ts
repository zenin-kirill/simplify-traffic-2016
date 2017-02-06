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
  en: {json: 'en', type: LanguageType.en},
  ru: {json: 'ru', type: LanguageType.ru},
  de: {json: 'de', type: LanguageType.de},
  fr: {json: 'fr', type: LanguageType.fr},
  zh: {json: 'zh', type: LanguageType.zh}
}
