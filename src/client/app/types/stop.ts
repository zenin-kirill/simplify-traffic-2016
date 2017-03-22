import { VehicleType, vehicleTypes } from "./vehicle.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Object containing additional information about class attributes
 */
export const stopAttrs: any = {
  type: {json: 'type'},
  name: {json: 'name'},
  latitude: {json: 'latitude'},
  longtitude: {json: 'longtitude'},
  photoUrl: {json: 'photo-url'}
}

/**
 * Object containing additional information about class dependencies
 */
export const stopRel: any = {
  city: managedObjectTypes.city,
  stop: managedObjectTypes.stop
}

/**
 * Class describing entity STOP
 */
export class Stop extends ManagedObject {
  private type: VehicleType;        // vehicle type of stop
  private name: string;             // stop name
  private latitude: number;         // GPS: latitude
  private longtitude: number;       // GPS: longtitude
  private photoUrl: string;         // photo link

  private cityId: string;           // city where stop is located
  private parentStationId: string;  // parent stop

  constructor() {
    super(ManagedObjectType.stop);
  }

  getType(): VehicleType {
    return this.type;
  }

  setType(type: VehicleType) {
    this.type = type;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getLatitude(): number {
    return this.latitude;
  }

  setLatitude(latitude: number) {
    this.latitude = latitude;
  }

  getLongtitude(): number {
    return this.longtitude;
  }

  setLongtitude(longtitude: number) {
    this.longtitude = longtitude;
  }

  getPhotoUrl(): string {
    return this.photoUrl;
  }

  setPhotoUrl(photoUrl: string) {
    this.photoUrl = photoUrl;
  }

  getCityId(): string {
    return this.cityId;
  }

  setCityId(cityId: string) {
    this.cityId = cityId;
  }

  getParentStationId(): string {
    return this.parentStationId;
  }

  setParentStationId(parentStationId: string) {
    this.parentStationId = parentStationId;
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

    if (('id' in jsonData['relationships'][stopRel.city.jsonRel]['data']) &&
          ('id' in jsonData['relationships'][stopRel.stop.jsonRel]['data']))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in stopAttrs) {
      if (!(stopAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][stopAttrs.type.json],
                     jsonData['attributes'][stopAttrs.name.json],
                     jsonData['attributes'][stopAttrs.latitude.json],
                     jsonData['attributes'][stopAttrs.longtitude.json],
                     jsonData['attributes'][stopAttrs.photoUrl.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][stopRel.city.jsonRel]['data']['id'],
                     jsonData['relationships'][stopRel.stop.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, type: string,
              name: string, latitude: string, longtitude: string, photoUrl: string,
              createdAt: string, updatedAt: string, cityId: string, parentStationId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format');

    let latitudeNumber   = parseFloat(latitude);
    let longtitudeNumber = parseFloat(longtitude);

    if ((isNaN(latitudeNumber)) ||
        (isNaN(longtitudeNumber)))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid coords format');

    let vehicleType: VehicleType;
    for (let obj in vehicleTypes) {
      if (type === vehicleTypes[obj]['json'])
        vehicleType = vehicleTypes[obj]['type'];
    }
    if (vehicleType === null || vehicleType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid type format');


    this.set(id, vehicleType, name, latitudeNumber, longtitudeNumber,
             photoUrl, createdAtDate, updatedAtDate, cityId, parentStationId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, type: VehicleType,
      name: string, latitude: number, longtitude: number, photoUrl: string,
      createdAt: Date, updatedAt: Date, cityId: string, parentStationId: string) {

    this.id         = id;
    this.type       = type;
    this.name       = name;
    this.latitude   = latitude;
    this.longtitude = longtitude;
    this.photoUrl   = photoUrl;
    this.createdAt  = createdAt;
    this.updatedAt  = updatedAt;

    this.cityId          = cityId;
    this.parentStationId = parentStationId;
  }
}
