import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";

/**
 * Object containing additional information about class attributes
 */
export const cityAttrs: any = {
  name: {json: 'name'},
  population: {json: 'population'}
}

/**
 * Object containing additional information about class dependencies
 */
export const cityRel: any = {
  country: managedObjectTypes.country
}

/**
 * Class describing entity CITY (locality)
 */
export class City extends ManagedObject {
  private name: string;             // city (locality) name
  private population: string;       // population number

  private countyId: string;  // country in which city is located

  constructor() {
    super(ManagedObjectType.city);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getPopulation(): string {
    return this.population;
  }

  setPopulation(population: string) {
    this.population = population;
  }

  getCountryId(): string {
    return this.countyId;
  }

  setCountryId(countryId: string) {
    this.countyId = countryId;
  }

  /**
   * Method that gets data of class object in JSON-API format
   */
  getInJsonObject() : any {
    super.getInJsonObject();
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnJsonObject(jsonData: any) {
    super.setOnJsonObject(jsonData);

    if (!('id' in jsonData['relationships'][cityRel.country.jsonRel]['data']))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in cityAttrs) {
      if (!(cityAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][cityAttrs.name.json],
                     jsonData['attributes'][cityAttrs.population.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][cityRel.country.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, name: string,
              population: string, createdAt: string, updatedAt: string, countryId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format');

    this.set(id, name, population, createdAtDate, updatedAtDate, countryId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, name: string,
      population: string, createdAt: Date, updatedAt: Date, countryId: string) {

    this.id         = id;
    this.name       = name;
    this.population = population;
    this.createdAt  = createdAt;
    this.updatedAt  = updatedAt;

    this.countyId = countryId;
  }
}
