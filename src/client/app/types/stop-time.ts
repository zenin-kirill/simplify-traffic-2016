import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { HaltType, haltTypes } from "./halt.type";
import { TimepointType, timepointTypes } from "./timepoint.type";

/**
 * Object containing additional information about class attributes
 */
export const stopTimeAttrs: any = {
  arrivalTime: {json: 'arrival-time'},
  departureTime: {json: 'departure-time'},
  stopSequence: {json: 'stop-sequence'},
  stopHeadsign: {json: 'stop-headsign'},
  pickUpType: {json: 'pickup-type'},
  dropOffType: {json: 'drop-off-type'},
  shapeDistTraveled: {json: 'shape-dist-traveled'},
  timepoint: {json: 'timepoint'}
}

/**
 * Object containing additional information about class dependencies
 */
export const stopTimeRel: any = {
  trip: managedObjectTypes.trip,
  stop: managedObjectTypes.stop
}

/**
 * Class describing entity STOP TIME (Halt)
 */
export class StopTime extends ManagedObject {
  private arrivalTime: Date;         // arrival time to stop
  private departureTime: Date;       // departure time from stop
  private stopSequence: number;      // sequential number of a stop
  private stopHeadsign: string;      // stop headsign
  private pickUpType: HaltType;      // passengers pick up type
  private dropOffType: HaltType;     // passengers drop off type
  private shapeDistTraveled: number; // distance traveled by shape
  private timepoint: TimepointType;  // timepoint type

  private tripId: string;          // trip in which vehicle halt
  private stopId: string;          // place of halt

  constructor() {
    super(ManagedObjectType.stopTime);
  }

  getArrivalTime(): Date {
    return this.arrivalTime;
  }

  setArrivalTime(arrivalTime: Date) {
    this.arrivalTime = arrivalTime;
  }

  getDepartureTime(): Date {
    return this.departureTime;
  }

  setDepartureTime(departureTime: Date) {
    this.departureTime = departureTime;
  }

  getStopSequence(): number {
    return this.stopSequence;
  }

  setStopSequence(stopSequence: number) {
    this.stopSequence = stopSequence;
  }

  getStopHeadsign(): string {
    return this.stopHeadsign;
  }

  setStopHeadsign(stopHeadsign: string) {
    this.stopHeadsign = stopHeadsign;
  }

  getPickUpType(): HaltType {
    return this.pickUpType;
  }

  setPickUpType(pickUpType: HaltType) {
    this.pickUpType = pickUpType;
  }

  getDropOffType(): HaltType {
    return this.dropOffType;
  }

  setDropOffType(dropOffType: HaltType) {
    this.dropOffType = dropOffType;
  }

  getShapeDistTraveled(): number {
    return this.shapeDistTraveled;
  }

  setShapeDistTraveled(shapeDistTraveled: number) {
    this.shapeDistTraveled = shapeDistTraveled;
  }

  getTimepoint(): TimepointType {
    return this.timepoint;
  }

  setTimepoint(timepoint: TimepointType) {
    this.timepoint = timepoint;
  }

  getTripId(): string {
    return this.tripId;
  }

  setTripId(tripId: string) {
    this.tripId = tripId;
  }

  getStopId(): string {
    return this.stopId;
  }

  setStopId(stopId: string) {
    this.stopId = stopId;
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

    if (!('id' in jsonData['relationships'][stopTimeRel.trip.jsonRel]['data']) &&
          ('id' in jsonData['relationships'][stopTimeRel.stop.jsonRel]['data']))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in stopTimeAttrs) {
      if (!(stopTimeAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][stopTimeAttrs.arrivalTime.json],
                     jsonData['attributes'][stopTimeAttrs.departureTime.json],
                     jsonData['attributes'][stopTimeAttrs.stopSequence.json],
                     jsonData['attributes'][stopTimeAttrs.stopHeadsign.json],
                     jsonData['attributes'][stopTimeAttrs.pickUpType.json],
                     jsonData['attributes'][stopTimeAttrs.dropOffType.json],
                     jsonData['attributes'][stopTimeAttrs.shapeDistTraveled.json],
                     jsonData['attributes'][stopTimeAttrs.timepoint.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][stopTimeRel.trip.jsonRel]['data']['id'],
                     jsonData['relationships'][stopTimeRel.stop.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, arrivalTime: string, departureTime: string,
              stopSequence: string, stopHeadsign: string,
              pickUpTypeString: string, dropOffTypeString: string,
              shapeDistTraveled: string, timepoint: string,
              createdAt: string, updatedAt: string, tripId: string, stopId: string) {

    let arrivalTimeDate   = new Date(Date.parse(arrivalTime));
    let departureTimeDate = new Date(Date.parse(departureTime));
    let createdAtDate     = new Date(Date.parse(createdAt));
    let updatedAtDate     = new Date(Date.parse(updatedAt));

    if ((isNaN(arrivalTimeDate.getUTCDate())) ||
        (isNaN(departureTimeDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format');

    let pickUpType: HaltType;
    for (let obj in haltTypes) {
      if (pickUpTypeString === haltTypes[obj]['json'])
        pickUpType = haltTypes[obj]['type'];
    }
    if (pickUpType === null || pickUpType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid pickup type format');

    let dropOffType: HaltType;
    for (let obj in haltTypes) {
      if (dropOffTypeString === haltTypes[obj]['json'])
        dropOffType = haltTypes[obj]['type'];
    }
    if (dropOffType === null || dropOffType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid drop off type format');

    let timepointType: TimepointType;
    for (let obj in timepointTypes) {
      if (timepoint === timepointTypes[obj]['json'])
        timepointType = timepointTypes[obj]['type'];
    }
    if (timepointType === null || timepointType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid time point format');

    let stopSequenceNumber      = parseInt(stopSequence);
    let shapeDistTraveledNumber = parseInt(shapeDistTraveled);

    if ((isNaN(stopSequenceNumber)) ||
        (isNaN(shapeDistTraveledNumber)))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid number format');

    this.set(id, arrivalTimeDate, departureTimeDate, stopSequenceNumber,
             stopHeadsign, pickUpType, dropOffType, shapeDistTraveledNumber, timepointType,
             createdAtDate, updatedAtDate, tripId, stopId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, arrivalTime: Date, departureTime: Date,
      stopSequence: number, stopHeadsign: string,
      pickUpType: HaltType, dropOffType: HaltType,
      shapeDistTraveled: number, timepoint: TimepointType,
      createdAt: Date, updatedAt: Date, tripId: string, stopId: string) {

    this.id                = id;
    this.arrivalTime       = arrivalTime;
    this.departureTime     = departureTime;
    this.stopSequence      = stopSequence;
    this.stopHeadsign      = stopHeadsign;
    this.pickUpType        = pickUpType;
    this.dropOffType       = dropOffType;
    this.shapeDistTraveled = shapeDistTraveled;
    this.timepoint         = timepoint;
    this.createdAt         = createdAt;
    this.updatedAt         = updatedAt;

    this.tripId = tripId;
    this.stopId = stopId;
  }
}

