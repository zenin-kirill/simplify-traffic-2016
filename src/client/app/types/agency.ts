import { TimezoneType, timezoneTypes } from "./timezone.type";
import { LanguageType, languageTypes } from "./language.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { throws } from "assert";

/**
 * Object containing additional information about class attributes
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
 * Object containing additional information about class dependencies
 */
export const agencyRel: any = {
  city: managedObjectTypes.city
}

/**
 * Class describing entity AGENCY
 */
export class Agency extends ManagedObject {
  private legalName: string;      // legal name org.
  private name: string;           // display name
  private zipCode: string;        // zip code
  private address: string;        // address (in the city)
  private email: string;          // e-mail
  private phone: string;          // phone number
  private contactName: string;    // contact employee name
  private websiteUrl: string;     // link to the website
  private fareUrl: string;        // link to fare page
  private language: LanguageType; // company language
  private timezone: TimezoneType; // company timezone
  private comment: string;        // comment about agency

  private cityId: string;         // city where the agency is located

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
   * Method that gets data of class object in JSON-API format
   */
  getInJsonObject() : any {
    super.getInJsonObject();
  }

  /**
   * Method that sets data of class object from object in JSON-API format
   * The method checks and parses JSON-API object and passes it in string
   * format to following method
   * Input parameter is object in JSON-API format
   */
  setOnJsonObject(jsonData: any) {
    super.setOnJsonObject(jsonData);

    if ('id' in jsonData['relationships'][agencyRel.city.jsonRel]['data'])
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in agencyAttrs) {
      if (!(agencyAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][agencyAttrs.legalName.json],
                     jsonData['attributes'][agencyAttrs.name.json],
                     jsonData['attributes'][agencyAttrs.zipCode.json],
                     jsonData['attributes'][agencyAttrs.address.json],
                     jsonData['attributes'][agencyAttrs.email.json],
                     jsonData['attributes'][agencyAttrs.phone.json],
                     jsonData['attributes'][agencyAttrs.contactName.json],
                     jsonData['attributes'][agencyAttrs.websiteUrl.json],
                     jsonData['attributes'][agencyAttrs.fareUrl.json],
                     jsonData['attributes'][agencyAttrs.language.json],
                     jsonData['attributes'][agencyAttrs.timezone.json],
                     jsonData['attributes'][agencyAttrs.comment.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][agencyRel.city.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
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
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let languageType: LanguageType;
    for (let obj in languageTypes) {
      if (language === languageTypes[obj]['json'])
        languageType = languageTypes[obj]['type'];
    }
    if (languageType === null || languageType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid language format');

    let timezoneType: TimezoneType;
    for (let obj in timezoneTypes) {
      if (timezone === timezoneTypes[obj]['json'])
        timezoneType = timezoneTypes[obj]['type'];
    }
    if (timezoneType === null || timezoneType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid timezone format');

    this.set(id, legalName, name, zipCode, address, email, phone, contactName,
             websiteUrl, fareUrl, languageType, timezoneType, comment, createdAtDate,
             updatedAtDate, cityId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
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
