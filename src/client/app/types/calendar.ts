import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
/**
 * Object containing additional information about class attributes
 */
export const calendarAttrs: any = {
  monday: {json: 'monday'},
  tuesday: {json: 'tuesday'},
  wednesday: {json: 'wednesday'},
  thursday: {json: 'thursday'},
  friday: {json: 'friday'},
  saturday: {json: 'saturday'},
  sunday: {json: 'sunday'},
  startDate: {json: 'start-date'},
  endDate: {json: 'end-date'}
}

/**
 * Object containing additional information about class dependencies
 */
export const calendarRel: any = {
  route: managedObjectTypes.route
}

/**
 * Class describing entity CALENDAR
 */
export class Calendar extends ManagedObject {
  private monday: boolean;      // on monday there is trip?
  private tuesday: boolean;     // on tuesday there is trip?
  private wednesday: boolean;   // on wednesday there is trip?
  private thursday: boolean;    // on thursday there is trip?
  private friday: boolean;      // on friday there is trip?
  private saturday: boolean;    // on saturday there is trip?
  private sunday: boolean;      // on sunday there is trip?
  private startDate: Date;      // start date of schedule
  private endDate: Date;        // end date of the schedule

  private routeId: string;  // route that works for this calendar

  constructor() {
    super(ManagedObjectType.calendar);
  }

  getMonday(): boolean {
    return this.monday;
  }

  setMonday(monday: boolean) {
    this.monday = monday;
  }

  getTuesday(): boolean {
    return this.tuesday;
  }

  setTuesday(tuesday: boolean) {
    this.tuesday = tuesday;
  }

  getWednesday(): boolean {
    return this.wednesday;
  }

  setWednesday(wednesday: boolean) {
    this.wednesday = wednesday;
  }

  getThursday(): boolean {
    return this.thursday;
  }

  setThursday(thursday: boolean) {
    this.thursday = thursday;
  }

  getFriday(): boolean {
    return this.friday;
  }

  setFriday(friday: boolean) {
    this.friday = friday;
  }

  getSaturday(): boolean {
    return this.saturday;
  }

  setSaturday(saturday: boolean) {
    this.saturday = saturday;
  }

  getSunday(): boolean {
    return this.sunday;
  }

  setSunday(sunday: boolean) {
    this.sunday = sunday;
  }

  getStartDate(): Date {
    return this.startDate;
  }

  setStartDate(startDate: Date) {
    this.startDate = startDate;
  }

  getEndDate(): Date {
    return this.endDate;
  }

  setEndDate(endDate: Date) {
    this.endDate = endDate;
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

    if (!('id' in jsonData['relationships'][calendarRel.route.jsonRel]['data']))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid relationships format');

    for (let obj in calendarAttrs) {
      if (!(calendarAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][calendarAttrs.monday.json],
                     jsonData['attributes'][calendarAttrs.tuesday.json],
                     jsonData['attributes'][calendarAttrs.wednesday.json],
                     jsonData['attributes'][calendarAttrs.thursday.json],
                     jsonData['attributes'][calendarAttrs.friday.json],
                     jsonData['attributes'][calendarAttrs.saturday.json],
                     jsonData['attributes'][calendarAttrs.sunday.json],
                     jsonData['attributes'][calendarAttrs.startDate.json],
                     jsonData['attributes'][calendarAttrs.endDate.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][calendarRel.route.jsonRel]['data']['id']);
  }

  /**
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
   */
  setOnString(id: string, monday: string, tuesday: string, wednesday: string,
              thursday: string, friday: string, saturday: string, sunday: string,
              startDate: string, endDate: string, createdAt: string,
              updatedAt: string, routeId: string) {

    let startDateDate = new Date(Date.parse(startDate));
    let endDateDate   = new Date(Date.parse(endDate));
    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(startDateDate.getUTCDate())) ||
        (isNaN(endDateDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(updatedAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid boolean format');

    let mondayBool: boolean;
    switch (monday) {
      case 'true':
        mondayBool = true;
        break;
      case 'false':
        mondayBool = false;
        break;
      default:
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid boolean format');
    }

    let tuesdayBool: boolean;
    switch (tuesday) {
      case 'true':
        mondayBool = true;
        break;
      case 'false':
        mondayBool = false;
        break;
      default:
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid boolean format');
    }

    let wednesdayBool: boolean;
    switch (wednesday) {
      case 'true':
        mondayBool = true;
        break;
      case 'false':
        mondayBool = false;
        break;
      default:
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid boolean format');
    }

    let thursdayBool: boolean;
    switch (thursday) {
      case 'true':
        mondayBool = true;
        break;
      case 'false':
        mondayBool = false;
        break;
      default:
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid boolean format');
    }

    let fridayBool: boolean;
    switch (friday) {
      case 'true':
        mondayBool = true;
        break;
      case 'false':
        mondayBool = false;
        break;
      default:
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid boolean format');
    }

    let saturdayBool: boolean;
    switch (saturday) {
      case 'true':
        mondayBool = true;
        break;
      case 'false':
        mondayBool = false;
        break;
      default:
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid boolean format');
    }

    let sundayBool: boolean;
    switch (sunday) {
      case 'true':
        mondayBool = true;
        break;
      case 'false':
        mondayBool = false;
        break;
      default:
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid boolean format');
    }

    this.set(id, mondayBool, tuesdayBool, wednesdayBool, thursdayBool, fridayBool, saturdayBool,
             sundayBool, startDateDate, endDateDate, createdAtDate, updatedAtDate, routeId);
  }

  /**
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
   */
  set(id: string, monday: boolean, tuesday: boolean, wednesday: boolean,
      thursday: boolean, friday: boolean, saturday: boolean, sunday: boolean,
      startDate: Date, endDate: Date, createdAt: Date, updatedAt: Date, routeId: string) {

    this.id        = id;
    this.monday    = monday;
    this.tuesday   = tuesday;
    this.wednesday = wednesday;
    this.thursday  = thursday;
    this.friday    = friday;
    this.saturday  = saturday;
    this.sunday    = sunday;
    this.startDate = startDate;
    this.endDate   = endDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.routeId = routeId;
  }
}




