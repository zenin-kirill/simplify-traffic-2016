import { managedObjectTypes } from "./managed-object.type";
import { UnmanagedObject, unmanagedObjectAttrs } from "./unmanaged-object";
import { UnmanagedObjectType, unmanagedObjectTypes } from "./unmanaged-object.type";
/**
 * Object containing additional information about class attributes
 */
export const vehicleStatusAttrs: any = {
  latitude: {json: 'latitude'},
  longtitude: {json: 'longtitude'},
  speed: {json: 'speed'},
  height: {json: 'height'},
  acceleration: {json: 'acceleration'},
}

/**
 * Object containing additional information about class dependencies
 */
export const vehicleStatusRel: any = {
  vehicle: managedObjectTypes.vehicle,
  driver: managedObjectTypes.driver,
  route: managedObjectTypes.route,
  trip: managedObjectTypes.trip
}

/**
 * Class describing entity VEHICLE STATUS
 */
export class VehicleStatus extends UnmanagedObject {
  private latitude: number;     // GPS: latitude (float)
  private longtitude: number;   // GPS: longtitude (float)
  private speed: number;        // speed (int)
  private height: number;       // height (int)
  private acceleration: number; // acceleration (int)

  private vehicleId: string;    // vehicle, whose state
  private driverId: string;     // driver on this vehicle
  private routeId: string;      // route performed by vehicle
  private tripId: string;       // trip performed by a vehicle

  constructor() {
    super(UnmanagedObjectType.vehicleStatus);
  }

  getLatitude(): number {
    return this.latitude;
  }

  getLongtitude(): number {
    return this.longtitude;
  }

  getSpeed(): number {
    return this.speed;
  }

  getHeight(): number {
    return this.height;
  }

  getAcceleration(): number {
    return this.acceleration;
  }

  getVehicleId(): string {
    return this.vehicleId;
  }

  getDriverId(): string {
    return this.driverId;
  }

  getRouteId(): string {
    return this.routeId;
  }

  getTripId(): string {
    return this.tripId;
  }

  /**
   * Method that sets data of class object from object in JSON-API format
   * The method checks and parses JSON-API object and passes it in string
   * format to following method
   * Input parameter is object in JSON-API format
   */
  setOnJsonObject(jsonData: any) {
    super.setOnJsonObject(jsonData);

    if (('id' in jsonData['relationships'][vehicleStatusRel.vehicle.jsonRel]['data']) &&
        ('id' in jsonData['relationships'][vehicleStatusRel.driver.jsonRel]['data']) &&
        ('id' in jsonData['relationships'][vehicleStatusRel.route.jsonRel]['data']) &&
        ('id' in jsonData['relationships'][vehicleStatusRel.trip.jsonRel]['data']))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in  vehicleStatusAttrs) {
      if (!( vehicleStatusAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + unmanagedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnStrings(jsonData[unmanagedObjectAttrs.id.json],
                      jsonData['attributes'][vehicleStatusAttrs.latitude.json],
                      jsonData['attributes'][vehicleStatusAttrs.longtitude.json],
                      jsonData['attributes'][vehicleStatusAttrs.speed.json],
                      jsonData['attributes'][vehicleStatusAttrs.height.json],
                      jsonData['attributes'][vehicleStatusAttrs.acceleration.json],
                      jsonData['attributes'][unmanagedObjectAttrs.createdAt.json],

                      jsonData['relationships'][vehicleStatusRel.vehicle.jsonRel]['data']['id'],
                      jsonData['relationships'][vehicleStatusRel.driver.jsonRel]['data']['id'],
                      jsonData['relationships'][vehicleStatusRel.route.jsonRel]['data']['id'],
                      jsonData['relationships'][vehicleStatusRel.trip.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnStrings(id: string, latitude: string, longtitude: string, speed: string, height: string,
               acceleration: string, createdAt: string, vehicleId: string,
               driverId: string,
               routeId: string, tripId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));

    if (isNaN(createdAtDate.getUTCDate()))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format')

    let latitudeNumber     = parseFloat(latitude);
    let longtitudeNumber   = parseFloat(longtitude);
    let speedNumber        = parseInt(speed);
    let heightNumber       = parseInt(height);
    let accelerationNumber = parseInt(acceleration);

    if ((isNaN(latitudeNumber)) ||
        (isNaN(longtitudeNumber)) ||
        (isNaN(speedNumber)) ||
        (isNaN(heightNumber)) ||
        (isNaN(accelerationNumber)))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid numbers format')

    this.set(id, latitudeNumber, longtitudeNumber, speedNumber, heightNumber,
             accelerationNumber, createdAtDate, vehicleId, driverId,
             routeId, tripId)
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, latitude: number, longtitude: number, speed: number, height: number,
      acceleration: number, createdAt: Date, vehicleId: string, driverId: string,
      routeId: string, tripId: string) {

    this.id           = id;
    this.latitude     = latitude;
    this.longtitude   = longtitude;
    this.speed        = speed;
    this.height       = height;
    this.acceleration = acceleration;
    this.createdAt    = createdAt;

    this.vehicleId = vehicleId;
    this.driverId  = driverId;
    this.routeId   = routeId;
    this.tripId    = tripId;
  }
}
