import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Object containing additional information about class attributes
 */
export const tripAttrs: any = {
  headsign: {json: 'headsign'},
  shortName: {json: 'short-name'},
  bikesAllowed: {json: 'bikes-allowed'},
  wheelchairAccess: {json: 'wheelchair-accessible'}
}

/**
 * Object containing additional information about class dependencies
 */
export const tripRel: any = {
  route: managedObjectTypes.route
}

/**
 * Class describing entity TRIP
 */
export class Trip extends ManagedObject {
  private headsign: string;         // headsign on vehicle
  private shortName: string;        // short name
  private bikesAllowed: boolean;    // trip is suitable for cyclists?
  private wheelchairAccess: boolean;// trip is suitable for invalids?

  private routeId: string;  // route on which the trip is carried out

  constructor() {
    super(ManagedObjectType.trip);
  }

  getHeadsign(): string {
    return this.headsign;
  }

  setHeadsign(headsign: string) {
    this.headsign = headsign;
  }

  getBikesAllowed(): boolean {
    return this.bikesAllowed;
  }

  setBikesAllowed(bikesAllowed: boolean) {
    this.bikesAllowed = bikesAllowed;
  }

  getWheelchairAccess(): boolean {
    return this.wheelchairAccess;
  }

  setWheelchairAccess(wheelchairAccess: boolean) {
    this.wheelchairAccess = wheelchairAccess;
  }

  getShortName(): string {
    return this.shortName;
  }

  setShortName(shortName: string) {
    this.shortName = shortName;
  }

  getRouteId(): string {
    return this.routeId;
  }

  setRouteId(routeId: string) {
    this.routeId = routeId;
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

    if (!('id' in jsonData['relationships'][tripRel.route.jsonRel]['data']))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in tripAttrs) {
      if (!(tripAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][tripAttrs.headsign.json],
                     jsonData['attributes'][tripAttrs.shortName.json],
                     jsonData['attributes'][tripAttrs.bikesAllowed.json],
                     jsonData['attributes'][tripAttrs.wheelchairAccess.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][tripRel.route.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, headsign: string,
              shortName: string, bikesAllowed: string, wheelchairAccess: string,  createdAt: string, updatedAt: string,
              routeId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let bikesAllowedBool: boolean;
    switch (bikesAllowed) {
      case 'true': bikesAllowedBool = true; break;
      case 'false': bikesAllowedBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    let wheelchairAccessBool: boolean;
    switch (wheelchairAccess) {
      case 'true': wheelchairAccessBool = true; break;
      case 'false': wheelchairAccessBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    this.set(id, headsign, shortName, bikesAllowedBool, wheelchairAccessBool, createdAtDate, updatedAtDate, routeId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, headsign: string,
      shortName: string, bikesAllowed: boolean, wheelchairAccess: boolean, createdAt: Date,
      updatedAt: Date, routeId: string) {

    this.id        = id;
    this.headsign  = headsign;
    this.shortName = shortName;
    this.bikesAllowed = bikesAllowed;
    this.wheelchairAccess = wheelchairAccess;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.routeId   = routeId;
  }
}
