import { VehicleType, vehicleTypes } from "./vehicle.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Object containing additional information about class attributes
 */
export const routeAttrs: any = {
  type: {json: 'type'},
  shortName: {json: 'short-name'},
  longName: {json: 'long-name'},
  color: {json: 'color'},
  description: {json: 'description'},
  bikesAllowed: {json: 'bikes-allowed'},
  wheelchairAccess: {json: 'wheelchair-accessible'}
}

/**
 * Object containing additional information about class dependencies
 */
export const routeRel: any = {
  agency: managedObjectTypes.agency
}

/**
 * Class describing entity ROUTE
 */
export class Route extends ManagedObject {
  private type: VehicleType;          // vehicle type on route
  private shortName: string;          // in fact, number of the route
  private longName: string;           // short info about route
  private color: string;              // route line color
  private description: string;        // full info about route
  private bikesAllowed: boolean;      // by default trips is suitable for cyclists?
  private wheelchairAccess: boolean;  // by default trips is suitable for invalids?

  private agencyId: string;           // agency serving this route

  constructor() {
    super(ManagedObjectType.route);
  }

  getVehicleType(): VehicleType {
    return this.type;
  }

  setVehicleType(vehicleType: VehicleType) {
    this.type = vehicleType;
  }

  getShortName(): string {
    return this.shortName;
  }

  setShortName(shortName: string) {
    this.shortName = shortName;
  }

  getLongName(): string {
    return this.longName;
  }

  setLongName(longName: string) {
    this.longName = longName;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string) {
    this.description = description;
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

    if ('id' in jsonData['relationships'][routeRel.agency.jsonRel]['data'])
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in routeAttrs) {
      if (!(routeAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][routeAttrs.type.json],
                     jsonData['attributes'][routeAttrs.shortName.json],
                     jsonData['attributes'][routeAttrs.longName.json],
                     jsonData['attributes'][routeAttrs.color.json],
                     jsonData['attributes'][routeAttrs.description.json],
                     jsonData['attributes'][routeAttrs.bikesAllowed.json],
                     jsonData['attributes'][routeAttrs.wheelchairAccess.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][routeRel.agency.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, type: string,
              shortName: string, longName: string, color: string,
              description: string, bikesAllowed: string, wheelchairAccess: string,
              createdAt: string, updatedAt: string, agencyId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format');

    let vehicleType: VehicleType;
    for (let obj in vehicleTypes) {
      if (type === vehicleTypes[obj]['json'])
        vehicleType = vehicleTypes[obj]['type'];
    }
    if (vehicleType === null || vehicleType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid type format');

    let bikesAllowedBool: boolean;
    switch (bikesAllowed) {
      case 'true':
        bikesAllowedBool = true;
        break;
      case 'false':
        bikesAllowedBool = false;
        break;
      default:
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid boolean format');
    }

    let wheelchairAccessBool: boolean;
    switch (wheelchairAccess) {
      case 'true':
        wheelchairAccessBool = true;
        break;
      case 'false':
        wheelchairAccessBool = false;
        break;
      default:
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid boolean format');
    }

    this.set(id, vehicleType, shortName, longName, color,
             description, bikesAllowedBool, wheelchairAccessBool, createdAtDate, updatedAtDate,
             agencyId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, type: VehicleType,
      shortName: string, longName: string, color: string,
      description: string, bikesAllowed: boolean, wheelchairAccess: boolean, createdAt: Date,
      updatedAt: Date, agencyId: string) {

    // проверка корректности данных цвета (в шестн. формате)
    if (color.search(/[a-f0-9]{6}/i) === -1)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid color format');

    this.id               = id;
    this.type             = type;
    this.shortName        = shortName;
    this.longName         = longName;
    this.color            = color;
    this.description      = description;
    this.bikesAllowed     = bikesAllowed;
    this.wheelchairAccess = wheelchairAccess;
    this.createdAt        = createdAt;
    this.updatedAt        = updatedAt;

    this.agencyId = agencyId;
  }
}
