import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { ExceptionDateType, exceptionDateTypes } from "./exception-date.type";

/**
 * Object containing additional information about class attributes
 */
export const calendarDateAttrs: any = {
  date: {json: 'date'},
  exceptionType: {json: 'exception-type'}
}

/**
 * Object containing additional information about class dependencies
 */
export const calendarDateRel: any = {
  route: managedObjectTypes.route
}

/**
 * Class describing entity EXCEPTION CALENDAR DATE
 */
export class CalendarDate extends ManagedObject {
  private date: Date;                        // exception date
  private exceptionType: ExceptionDateType;  // exception date type

  private routeId: string;  // route that edits for this exceptions

  constructor() {
    super(ManagedObjectType.calendarDate);
  }

  getDate(): Date {
    return this.date;
  }

  setDate(date: Date) {
    this.date = date;
  }

  getExceptionType(): ExceptionDateType {
    return this.exceptionType;
  }

  setExceptionType(exceptionType: ExceptionDateType) {
    this.exceptionType = exceptionType;
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

    if ('id' in jsonData['relationships'][calendarDateRel.route.jsonRel]['data'])
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in calendarDateAttrs) {
      if (!(calendarDateAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][calendarDateAttrs.date.json],
                     jsonData['attributes'][calendarDateAttrs.exceptionType.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][calendarDateRel.route.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, date: string,
              exceptionTypeString: string, createdAt: string, updatedAt: string,
              routeId: string) {

    let dateDate      = new Date(Date.parse(date));
    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(dateDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let exceptionType: ExceptionDateType;
    for (let obj in exceptionDateTypes) {
      if (exceptionTypeString === exceptionDateTypes[obj]['json'])
        exceptionType = exceptionDateTypes[obj]['type'];
    }
    if (exceptionType === null || exceptionType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid exception type format');

    this.set(id, dateDate, exceptionType, createdAtDate, updatedAtDate, routeId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, date: Date,
      exceptionTypeString: ExceptionDateType, createdAt: Date, updatedAt: Date, routeId: string) {

    this.id            = id;
    this.date          = date;
    this.exceptionType = exceptionTypeString;
    this.createdAt     = createdAt;
    this.updatedAt     = updatedAt;

    this.routeId = routeId;
  }
}

