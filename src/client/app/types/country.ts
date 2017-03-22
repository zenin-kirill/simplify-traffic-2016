import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
/**
 * Object containing additional information about class attributes
 */
export const countryAttrs: any = {
  name: {json: 'name'},
  isoStr: {json: 'iso-str'}
}

/**
 * Class describing entity COUNTRY
 */
export class Country extends ManagedObject {
  private name: string;       // country name
  private isoStr: string;     // ISO code string

  constructor() {
    super(ManagedObjectType.country);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getISOstr(): string {
    return this.isoStr;
  }

  setISOstr(isoStr: string) {
    this.isoStr = isoStr;
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

    for (let obj in countryAttrs) {
      if (!(countryAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][countryAttrs.name.json],
                     jsonData['attributes'][countryAttrs.isoStr.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json]);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, name: string,
              isoStr: string, createdAt: string, updatedAt: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format');

    this.set(id, name, isoStr, createdAtDate, updatedAtDate);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, name: string,
      isoStr: string, createdAt: Date, updatedAt: Date) {

    this.id        = id;
    this.name      = name;
    this.isoStr    = isoStr;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
