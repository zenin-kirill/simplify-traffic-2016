import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
/**
 * Object containing additional information about class attributes
 */
export const driverAttrs: any = {
  name: {json: 'name'},
  surname: {json: 'surname'},
  birthDate: {json: 'birth-date'},
  licenseNumber: {json: 'license-number'},
  photoUrl: {json: 'photo-url'},
}

/**
 * Object containing additional information about class dependencies
 */
export const driverRel: any = {
  agency: managedObjectTypes.agency
}

/**
 * Class describing entity DRIVER
 */
export class Driver extends ManagedObject {
  private name: string;             // name
  private surname: string;          // surname
  private birthDate: Date;          // birth date
  private licenseNumber: string;    // license number
  private photoUrl: string;         // photo link

  private agencyId: string;  // agency in which driver works

  constructor() {
    super(ManagedObjectType.driver);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getSurname(): string {
    return this.surname;
  }

  setSurname(surname: string) {
    this.surname = surname;
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  setBirthDate(birthDate: Date) {
    this.birthDate = birthDate;
  }

  getLicenseNumber(): string {
    return this.licenseNumber;
  }

  setLicenseNumber(licenseNumber: string) {
    this.licenseNumber = licenseNumber;
  }

  getPhotoUrl(): string {
    return this.photoUrl;
  }

  setPhotoUrl(photoUrl: string) {
    this.photoUrl = photoUrl;
  }

  getAgencyId(): string {
    return this.agencyId;
  }

  setAgencyId(agencyId: string) {
    this.agencyId = agencyId;
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

    if (!('id' in jsonData['relationships'][driverRel.agency.jsonRel]['data']))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in driverAttrs) {
      if (!(driverAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][driverAttrs.name.json],
                     jsonData['attributes'][driverAttrs.surname.json],
                     jsonData['attributes'][driverAttrs.birthDate.json],
                     jsonData['attributes'][driverAttrs.licenseNumber.json],
                     jsonData['attributes'][driverAttrs.photoUrl.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][driverRel.agency.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, name: string,
              surname: string, birthDate: string, licenseNumber: string,
              photoUrl: string, createdAt: string, updatedAt: string, agencyId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));
    let birthDateDate = new Date(Date.parse(birthDate));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(birthDateDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format');

    this.set(id, name, surname, birthDateDate, licenseNumber,
             photoUrl, createdAtDate, updatedAtDate, agencyId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, name: string,
      surname: string, birthDate: Date, licenseNumber: string,
      photoUrl: string, createdAt: Date, updatedAt: Date, agencyId: string) {

    this.id            = id;
    this.name          = name;
    this.surname       = surname;
    this.birthDate     = birthDate;
    this.licenseNumber = licenseNumber;
    this.photoUrl      = photoUrl;
    this.createdAt     = createdAt;
    this.updatedAt     = updatedAt;

    this.agencyId = agencyId;
  }
}
