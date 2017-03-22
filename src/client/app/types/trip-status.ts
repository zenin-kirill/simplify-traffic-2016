import { managedObjectTypes } from "./managed-object.type";
import { UnmanagedObject, unmanagedObjectAttrs } from "./unmanaged-object";
import { UnmanagedObjectType, unmanagedObjectTypes } from "./unmanaged-object.type";

/**
 * Object containing additional information about class attributes
 */
export const tripStatusAttrs: any = {
  routeShortName: {json: 'route-short-name'},
  departure: {json: 'departure'},
  depart: {json: 'depart'},
  distFromDepart: {json: 'dist-from-depart'},
  nextStop: {json: 'next-stop'},
  arriveToNextStop: {json: 'arrive-to-next-stop'},
  distToNextStop: {json: 'dist-to-next-stop'},
  destination: {json: 'destination'},
  arriveToDestination: {json: 'arrive-to-destination'},
  distToDestination: {json: 'dist-to-destination'},
  status: {json: 'status'},
}

/**
 * Object containing additional information about class dependencies
 */
export const tripStatusRel: any = {
  trip: managedObjectTypes.trip
}

/**
 * Class describing entity TRIP STATUS
 */
export class TripStatus extends UnmanagedObject{
  private routeShortName: string;     // route short name (number)
  private departure: string;          // point of departure
  private depart: Date;               // depart time
  private distFromDepart: number;     // distance from departure
  private nextStop: string;           // next stop name
  private arriveToNextStop: Date;     // next stop arrive time
  private distToNextStop: number;     // distance to next stop
  private destination: string;        // point of destination
  private arriveToDestination: Date;  // destination arrive time
  private distToDestination: number;  // distance to destination
  private status: string;             // trip status

  private tripId: string;   // trip whose status is described in class

  constructor() {
    super(UnmanagedObjectType.tripStatus);
  }

  getRouteShortName(): string {
    return this.routeShortName;
  }

  getDeparture(): string {
    return this.departure;
  }

  getDepart(): Date {
    return this.depart;
  }

  getDistFromDepart(): number {
    return this.distFromDepart;
  }

  getNextStop(): string {
    return this.nextStop;
  }

  getArriveToNextStop(): Date {
    return this.arriveToNextStop;
  }

  getDistToNextStop(): number {
    return this.distToNextStop;
  }

  getDestination(): string {
    return this.destination;
  }

  getArriveToDestination(): Date {
    return this.arriveToDestination;
  }

  getDistToDestination(): number {
    return this.distToDestination;
  }

  getStatus(): string {
    return this.status;
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

    if ('id' in jsonData['relationships'][tripStatusRel.trip.jsonRel]['data'])
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in  tripStatusAttrs) {
      if (!( tripStatusAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + unmanagedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnStrings(jsonData[unmanagedObjectAttrs.id.json],
                      jsonData['attributes'][tripStatusAttrs.routeShortName.json],
                      jsonData['attributes'][tripStatusAttrs.departure.json],
                      jsonData['attributes'][tripStatusAttrs.depart.json],
                      jsonData['attributes'][tripStatusAttrs.distFromDepart.json],
                      jsonData['attributes'][tripStatusAttrs.nextStop.json],
                      jsonData['attributes'][tripStatusAttrs.arriveToNextStop.json],
                      jsonData['attributes'][tripStatusAttrs.distToNextStop.json],
                      jsonData['attributes'][tripStatusAttrs.destination.json],
                      jsonData['attributes'][tripStatusAttrs.arriveToDestination.json],
                      jsonData['attributes'][tripStatusAttrs.distToDestination.json],
                      jsonData['attributes'][tripStatusAttrs.status.json],
                      jsonData['attributes'][unmanagedObjectAttrs.createdAt.json],

                      jsonData['relationships'][tripStatusRel.trip.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnStrings(id: string, routeShortName: string, departure: string, depart: string,
               distFromDepart: string, nextStop: string, arriveToNextStop: string,
               distToNextStop: string, destination: string, arriveToDestination: string,
               distToDestination: string, status: string, createdAt: string, tripId: string) {

    let departDate              = new Date(Date.parse(depart));
    let arriveToNextStopDate    = new Date(Date.parse(arriveToNextStop));
    let arriveToDestinationDate = new Date(Date.parse(arriveToDestination));
    let createdAtDate           = new Date(Date.parse(createdAt));

    if ((isNaN(departDate.getUTCDate())) ||
        (isNaN(arriveToNextStopDate.getUTCDate())) ||
        (isNaN(arriveToDestinationDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let distFromDepartNumber    = parseFloat(distFromDepart);
    let distToNextStopNumber    = parseFloat(distToNextStop);
    let distToDestinationNumber = parseFloat(distToDestination);

    if ((isNaN(distFromDepartNumber)) ||
        (isNaN(distToNextStopNumber)) ||
        (isNaN(distToDestinationNumber)))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid distance format');

    this.set(id, routeShortName, departure, departDate, distFromDepartNumber, nextStop,
             arriveToNextStopDate, distToNextStopNumber, destination, arriveToDestinationDate,
             distToDestinationNumber, status, createdAtDate, tripId)
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, routeShortName: string, departure: string, depart: Date,
      distFromDepart: number, nextStop: string, arriveToNextStop: Date,
      distToNextStop: number, destination: string, arriveToDestination: Date,
      distToDestination: number, status: string, createdAt: Date, tripId: string) {

    this.id                  = id;
    this.routeShortName      = routeShortName;
    this.departure           = departure;
    this.depart              = depart;
    this.distFromDepart      = distFromDepart;
    this.nextStop            = nextStop;
    this.arriveToNextStop    = arriveToNextStop;
    this.distToNextStop      = distToNextStop;
    this.destination         = destination;
    this.arriveToDestination = arriveToDestination;
    this.distToDestination   = distToDestination;
    this.status              = status;
    this.createdAt           = createdAt;

    this.tripId = tripId;
  }
}
