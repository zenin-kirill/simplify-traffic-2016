import { UserType, userTypes } from "./user.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Object containing additional information about class attributes
 */
export const userAttrs: any = {
  role: {json: 'role'},
  name: {json: 'name'},
  surname: {json: 'surname'},
  email: {json: 'email'},
  photoUrl: {json: 'photo-url'}
}

/**
 * Object containing additional information about class dependencies
 */
export const userRel: any = {
  agency: managedObjectTypes.agency
}

/**
 * Class describing entity USER
 */
export class User extends ManagedObject {
  private role: UserType;   // user role (permissions)
  private name: string;     // name
  private surname: string;  // surname
  private email: string;    // e-mail
  private photoUrl: string; // photo link

  private agencyId: string; // agency in which the user works


  constructor() {
    super(ManagedObjectType.user);
  }

  getRole(): UserType {
    return this.role;
  }

  getName(): string {
    return this.name;
  }

  getSurname(): string {
    return this.surname;
  }

  getEmail(): string {
    return this.email;
  }

  getPhotoUrl(): string {
    return this.photoUrl;
  }

  setAgencyId(value: string) {
    this.agencyId = value;
  }

  setRole(value: UserType) {
    this.role = value;
  }

  setName(value: string) {
    this.name = value;
  }

  setSurname(value: string) {
    this.surname = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPhotoUrl(value: string) {
    this.photoUrl = value;
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

    if (!('id' in jsonData['relationships'][userRel.agency.jsonRel]['data']))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in userAttrs) {
      if (!(userAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnStrings(jsonData[managedObjectAttrs.id.json],
                      jsonData['attributes'][userAttrs.role.json],
                      jsonData['attributes'][userAttrs.name.json],
                      jsonData['attributes'][userAttrs.surname.json],
                      jsonData['attributes'][userAttrs.email.json],
                      jsonData['attributes'][userAttrs.photoUrl.json],
                      jsonData['attributes'][managedObjectAttrs.createdAt.json],
                      jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                      jsonData['relationships'][userRel.agency.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnStrings(id: string, role: string, name: string,
               surname: string, email: string, photoUrl: string, createdAt: string,
               updatedAt: string, agencyId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((createdAtDate.getUTCDate() === NaN) ||
        (updatedAtDate.getUTCDate() === NaN))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let userType: UserType;
    for (let obj in userTypes) {
      if (role === userTypes[obj]['json'])
        userType = userTypes[obj]['type'];
    }
    if (userType === null || userType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid role format');

    this.set(id, userType, name, surname, email, photoUrl, createdAtDate, updatedAtDate, agencyId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, role: UserType, name: string,
      surname: string, email: string, photoUrl: string, createdAt: Date, updatedAt: Date,
      agencyId: string) {
    this.id        = id;
    this.role      = role;
    this.name      = name;
    this.surname   = surname;
    this.email     = email;
    this.photoUrl  = photoUrl;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.agencyId = agencyId;
  }
}
