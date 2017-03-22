import { managedObjectTypes } from "./managed-object.type";
import { unmanagedObjectTypes, UnmanagedObjectType } from "./unmanaged-object.type";
import { UnmanagedObject, unmanagedObjectAttrs } from "./unmanaged-object";
/**
 * Object containing additional information about class attributes
 */
export const sessionAttrs: any = {
  token: {json: 'token'},
  validUntil: {json: 'valid-until'},
}

/**
 * Object containing additional information about class dependencies
 */
export const sessionRel: any = {
  user: managedObjectTypes.user,
  agency: managedObjectTypes.agency
}

const minTokenLength: number = 15;   // мин. длина ключ. слова
const maxTokenLength: number = 50;   // макс. длина ключ. слова

/**
 * Class describing entity USER SESSION
 */
export class Session extends UnmanagedObject {
  private token: string;      // key token
  private validUntil: Date;   // session valid until

  private userId: string;     // logged in user
  private agencyId: string;   // agency of logged in user

  constructor() {
    super(UnmanagedObjectType.session);
  }

  getValidUntil(): Date {
    return this.validUntil;
  }

  getToken(): string {
    return this.token;
  }

  getUserId(): string {
    return this.userId;
  }

  getAgencyId(): string {
    return this.agencyId;
  }

  /**
   * Method that sets data of class object from object in JSON-API format
   * The method checks and parses JSON-API object and passes it in string
   * format to following method
   * Input parameter is object in JSON-API format
   */
  setOnJsonObject(jsonData: any) {
    super.setOnJsonObject(jsonData);

    if (('id' in jsonData['relationships'][sessionRel.user.jsonRel]['data']) &&
        ('id' in jsonData['relationships'][sessionRel.agency.jsonRel]['data']))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in  sessionAttrs) {
      if (!( sessionAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + unmanagedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnStrings(jsonData[unmanagedObjectAttrs.id.json],
                      jsonData['attributes'][sessionAttrs.token.json],
                      jsonData['attributes'][sessionAttrs.validUntil.json],
                      jsonData['attributes'][unmanagedObjectAttrs.createdAt.json],

                      jsonData['relationships'][sessionRel.user.jsonRel]['data']['id'],
                      jsonData['relationships'][sessionRel.agency.jsonRel]['data']['id'])
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnStrings(id: string, token: string, validUntil: string, createdAt: string, userId: string,
               agencyId: string) {
    let createdAtDate  = new Date(Date.parse(createdAt));
    let validUntilDate = new Date(Date.parse(validUntil));

    if ((isNaN(validUntilDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format');

    this.set(id, token, validUntilDate, createdAtDate, userId, agencyId)
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, token: string, validUntil: Date, createdAt: Date, userId: string,
      agencyId: string) {
    if ((token.length <= minTokenLength) &&
        (token.length >= maxTokenLength))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid token format');

    this.id         = id;
    this.token      = token;
    this.validUntil = validUntil;
    this.createdAt  = createdAt;
    this.userId     = userId;
    this.agencyId   = agencyId;
  }
}
