import { TimezoneType, timezoneTypes } from './timezone.type';
import { LanguageType, languageTypes } from './language.type';
import { ManagedObject } from "./managed-object";
import { ManagedObjectType } from "./managed-object.type";

export class Agency extends ManagedObject {
  private legalName: string;
  private name: string;
  private index: string;
  private address: string;
  private email: string;
  private phone: string;
  private contactName: string;
  private webSiteUrl: string;
  private fareUrl: string;
  private language: LanguageType;
  private timezone: TimezoneType;
  private comment: string;

  private cityId: string;

  constructor(agencyData: Object) {
    super(ManagedObjectType.agencies);
    this.setOnObject(agencyData);
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

  getIndex(): string {
    return this.index;
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

  getWebSiteUrl(): string {
    return this.webSiteUrl;
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

  setIndex(value: string) {
    this.index = value;
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

  setWebSiteUrl(value: string) {
    this.webSiteUrl = value;
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

  setOnObject(agencyData: any) {
    if ((agencyData['type'] === 'agencies') &&
        ('id' in agencyData) &&
        ('legal-name' in agencyData['attributes']) &&
        ('name' in agencyData['attributes']) &&
        ('index' in agencyData['attributes']) &&
        ('address' in agencyData['attributes']) &&
        ('email' in agencyData['attributes']) &&
        ('phone' in agencyData['attributes']) &&
        ('contact-name' in agencyData['attributes']) &&
        ('web-site-url' in agencyData['attributes']) &&
        ('fare-url' in agencyData['attributes']) &&
        ('language' in agencyData['attributes']) &&
        ('timezone' in agencyData['attributes']) &&
        ('comment' in agencyData['attributes']) &&
        ('created-at' in agencyData['attributes']) &&
        ('updated-at' in agencyData['attributes']) &&

        ('id' in agencyData['relationships']['city']['data'])) {

      this.setOnString(agencyData['id'].toString(),
                       agencyData['attributes']['legal-name'].toString(),
                       agencyData['attributes']['name'].toString(),
                       agencyData['attributes']['index'].toString(),
                       agencyData['attributes']['address'].toString(),
                       agencyData['attributes']['email'].toString(),
                       agencyData['attributes']['phone'].toString(),
                       agencyData['attributes']['contact-name'].toString(),
                       agencyData['attributes']['web-site-url'].toString(),
                       agencyData['attributes']['fare-url'].toString(),
                       agencyData['attributes']['language'].toString(),
                       agencyData['attributes']['timezone'].toString(),
                       agencyData['attributes']['comment'].toString(),
                       agencyData['attributes']['created-at'].toString(),
                       agencyData['attributes']['updated-at'].toString(),

                       agencyData['relationships']['city']['data']['id'].toString());
    }
    else {
      throw new Error('Impossible to convert an object Agency. Invalid object format');
    }
  }

  setOnString(id: string, legalName: string, name: string,
              index: string, address: string, email: string,
              phone: string, contactName: string, webSiteUrl: string,
              fareUrl: string, language: string, timezone: string,
              comment: string, createdAt: string, updatedAt: string, cityId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((createdAtDate.getUTCDate() === NaN) &&
        (createdAtDate.getUTCDate() === NaN))
      throw new Error('Impossible to set an object Agency. Invalid format of date');

    let languageType: LanguageType;
    for (let obj in languageTypes) {
      if (language === obj)
        languageType = languageTypes[obj].type;
    }
    if (languageType === null || languageType === undefined)
      throw new Error('Impossible to convert an object Agency. Invalid language type');

    let timezoneType: TimezoneType;
    for (let obj in timezoneTypes) {
      if (timezone === obj)
        timezoneType = timezoneTypes[obj].type;
    }
    if (timezoneType === null || timezoneType === undefined)
      throw new Error('Impossible to convert an object Agency. Invalid timezone type');

    this.set(id, legalName, name, index, address, email, phone, contactName,
             webSiteUrl, fareUrl, languageType, timezoneType, comment, createdAtDate,
             updatedAtDate, cityId);
  }

  set(id: string, legalName: string, name: string,
      index: string, address: string, email: string,
      phone: string, contactName: string, webSiteUrl: string,
      fareUrl: string, language: LanguageType, timezone: TimezoneType,
      comment: string, createdAt: Date, updatedAt: Date, cityId: string) {

    this.id          = id;
    this.legalName   = legalName;
    this.name        = name;
    this.cityId      = cityId;
    this.index       = index;
    this.address     = address;
    this.email       = email;
    this.phone       = phone;
    this.contactName = contactName;
    this.webSiteUrl  = webSiteUrl;
    this.fareUrl     = fareUrl;
    this.language    = language;
    this.timezone    = timezone;
    this.comment     = comment;
    this.createdAt   = createdAt;
    this.updatedAt   = updatedAt;
  }
}
