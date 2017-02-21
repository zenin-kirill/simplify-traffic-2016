import { TimezoneType, timezoneTypes } from "./timezone.type";
import { LanguageType, languageTypes } from "./language.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const agencyAttrs: any = {
  legalName: {json: 'legal-name'},
  name: {json: 'name'},
  zipCode: {json: 'zip-code'},
  address: {json: 'address'},
  email: {json: 'email'},
  phone: {json: 'phone'},
  contactName: {json: 'contact-name'},
  websiteUrl: {json: 'website-url'},
  fareUrl: {json: 'fare-url'},
  language: {json: 'language'},
  timezone: {json: 'timezone'},
  comment: {json: 'comment'}
}

/**
 * Класс, описывающий сущность АГЕНСТВО
 */
export class Agency extends ManagedObject{
  private legalName: string;      // юридическое имя
  private name: string;           // выводимое имя
  private zipCode: string;        // почтовый индекс
  private address: string;        // адрес (внутри города)
  private email: string;          // электронная почта
  private phone: string;          // номер телефона
  private contactName: string;    // имя сотрудника
  private websiteUrl: string;     // ссылка на сайт агенства
  private fareUrl: string;        // ссылка на страницу с тарифами
  private language: LanguageType; // язык
  private timezone: TimezoneType; // часовой пояс
  private comment: string;        // комментарий

  private cityId: string;         // город, в котором находится агенство

  constructor() {
    super(ManagedObjectType.agency);
  }

  getLegalName(): string {
    return this.legalName;
  }

  getName(): string {
    return this.name;
  }

  getCityId(): string {
    return this.cityId;
  }

  getZipCode(): string {
    return this.zipCode;
  }

  getAddress(): string {
    return this.address;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }

  getContactName(): string {
    return this.contactName;
  }

  getWebsiteUrl(): string {
    return this.websiteUrl;
  }

  getFareUrl(): string {
    return this.fareUrl;
  }

  getLanguage(): LanguageType {
    return this.language;
  }

  getTimezone(): TimezoneType {
    return this.timezone;
  }

  getComment(): string {
    return this.comment;
  }


  setLegalName(value: string) {
    this.legalName = value;
  }

  setName(value: string) {
    this.name = value;
  }

  setCityId(value: string) {
    this.cityId = value;
  }

  setZipCode(value: string) {
    this.zipCode = value;
  }

  setAddress(value: string) {
    this.address = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPhone(value: string) {
    this.phone = value;
  }

  setContactName(value: string) {
    this.contactName = value;
  }

  setWebsiteUrl(value: string) {
    this.websiteUrl = value;
  }

  setFareUrl(value: string) {
    this.fareUrl = value;
  }

  setLanguage(value: LanguageType) {
    this.language = value;
  }

  setTimezone(value: TimezoneType) {
    this.timezone = value;
  }

  setComment(value: string) {
    this.comment = value;
  }

  /**
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnObject(agencyData: any) {
    if (!((agencyData['type'] === managedObjectTypes.agency.json) &&
          (managedObjectAttrs.id.json in agencyData) &&
          (managedObjectAttrs.createdAt.json in agencyData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in agencyData['attributes']) &&
          ('id' in agencyData['relationships']['city']['data'])))
      throw new Error('Impossible to set an object Agency. Invalid object attrs format');

    for (let obj in agencyAttrs) {
      if (!(agencyAttrs[obj]['json'] in agencyData['attributes']))
        throw new Error('Impossible to set an object Agency. Invalid agency attrs format');
    }

    this.setOnString(agencyData[managedObjectAttrs.id.json],
                     agencyData['attributes'][agencyAttrs.legalName.json],
                     agencyData['attributes'][agencyAttrs.name.json],
                     agencyData['attributes'][agencyAttrs.zipCode.json],
                     agencyData['attributes'][agencyAttrs.address.json],
                     agencyData['attributes'][agencyAttrs.email.json],
                     agencyData['attributes'][agencyAttrs.phone.json],
                     agencyData['attributes'][agencyAttrs.contactName.json],
                     agencyData['attributes'][agencyAttrs.websiteUrl.json],
                     agencyData['attributes'][agencyAttrs.fareUrl.json],
                     agencyData['attributes'][agencyAttrs.language.json],
                     agencyData['attributes'][agencyAttrs.timezone.json],
                     agencyData['attributes'][agencyAttrs.comment.json],
                     agencyData['attributes'][managedObjectAttrs.createdAt.json],
                     agencyData['attributes'][managedObjectAttrs.updatedAt.json],

                     agencyData['relationships']['city']['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, legalName: string, name: string,
              zipCode: string, address: string, email: string,
              phone: string, contactName: string, websiteUrl: string,
              fareUrl: string, language: string, timezone: string,
              comment: string, createdAt: string, updatedAt: string, cityId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object Agency. Invalid date format ');

    let languageType: LanguageType;
    for (let obj in languageTypes) {
      if (language === languageTypes[obj]['json'])
        languageType = languageTypes[obj]['type'];
    }
    if (languageType === null || languageType === undefined)
      throw new Error('Impossible to set an object Agency. Invalid language type');

    let timezoneType: TimezoneType;
    for (let obj in timezoneTypes) {
      if (timezone === timezoneTypes[obj]['json'])
        timezoneType = timezoneTypes[obj]['type'];
    }
    if (timezoneType === null || timezoneType === undefined)
      throw new Error('Impossible to set an object Agency. Invalid timezone type');

    this.set(id, legalName, name, zipCode, address, email, phone, contactName,
             websiteUrl, fareUrl, languageType, timezoneType, comment, createdAtDate,
             updatedAtDate, cityId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, legalName: string, name: string,
      zipCode: string, address: string, email: string,
      phone: string, contactName: string, websiteUrl: string,
      fareUrl: string, language: LanguageType, timezone: TimezoneType,
      comment: string, createdAt: Date, updatedAt: Date, cityId: string) {

    this.id          = id;
    this.legalName   = legalName;
    this.name        = name;
    this.zipCode     = zipCode;
    this.address     = address;
    this.email       = email;
    this.phone       = phone;
    this.contactName = contactName;
    this.websiteUrl  = websiteUrl;
    this.fareUrl     = fareUrl;
    this.language    = language;
    this.timezone    = timezone;
    this.comment     = comment;
    this.createdAt   = createdAt;
    this.updatedAt   = updatedAt;

    this.cityId      = cityId;
  }
}
