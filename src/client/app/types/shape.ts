import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Object containing additional information about class attributes
 */
export const shapeAttrs: any = {
  ptLatitude: {json: 'pt-lat'},
  ptLongtitude: {json: 'pt-lon'},
  ptSequence: {json: 'pt-sequence'},
  distTraveled: {json: 'dist-traveled'}
}

/**
 * Object containing additional information about class dependencies
 */
export const shapeRel: any = {
  route: managedObjectTypes.route
}

/**
 * Class describing entity SHAPE
 */
export class Shape extends ManagedObject {
  private ptLatitude: number;         // point latitude
  private ptLongtitude: number;       // point longtitude
  private ptSequence: number;         // point sequential number
  private distTraveled: number;       // distance from first point of figure

  private routeId: string;        // route described by shape

  constructor() {
    super(ManagedObjectType.shape);
  }

  getPtLatitude(): number {
    return this.ptLatitude;
  }

  setPtLatitude(ptLatitude: number) {
    this.ptLatitude = ptLatitude;
  }

  getPtLongtitude(): number {
    return this.ptLongtitude;
  }

  setPtLongtitude(ptLongtitude: number) {
    this.ptLongtitude = ptLongtitude;
  }

  getPtSequence(): number {
    return this.ptSequence;
  }

  setPtSequence(ptSequence: number) {
    this.ptSequence = ptSequence;
  }

  getDistTraveled(): number {
    return this.distTraveled;
  }

  setDistTraveled(distTraveled: number) {
    this.distTraveled = distTraveled;
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

    if ('id' in jsonData['relationships'][shapeRel.route.jsonRel]['data'])
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in shapeAttrs) {
      if (!(shapeAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][shapeAttrs.ptLatitude.json],
                     jsonData['attributes'][shapeAttrs.ptLongtitude.json],
                     jsonData['attributes'][shapeAttrs.ptSequence.json],
                     jsonData['attributes'][shapeAttrs.distTraveled.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][shapeRel.route.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, ptLatitude: string,
              ptLongtitude: string, ptSequence: string, distTraveled: string,
              createdAt: string, updatedAt: string, routeId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format');

    let ptLatitudeNumber   = parseFloat(ptLatitude);
    let ptLongtitudeNumber = parseFloat(ptLongtitude);
    let ptSequenceNumber   = parseFloat(ptSequence);
    let distTraveledNumber = parseFloat(distTraveled);

    if ((isNaN(ptLatitudeNumber)) ||
        (isNaN(ptLongtitudeNumber)) ||
        (isNaN(ptSequenceNumber)) ||
        (isNaN(distTraveledNumber)))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid number format');

    this.set(id, ptLatitudeNumber, ptLongtitudeNumber, ptSequenceNumber,
             distTraveledNumber, createdAtDate, updatedAtDate, routeId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, ptLatitude: number,
      ptLongtitude: number, ptSequence: number, distTraveled: number,
      createdAt: Date, updatedAt: Date, routeId: string) {

    this.id           = id;
    this.ptLatitude   = ptLatitude;
    this.ptLongtitude = ptLongtitude;
    this.ptSequence   = ptSequence;
    this.distTraveled = distTraveled;
    this.createdAt    = createdAt;
    this.updatedAt    = updatedAt;

    this.routeId = routeId;
  }
}

