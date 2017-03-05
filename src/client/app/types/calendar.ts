import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
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
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const calendarRel: any = {
  route: managedObjectTypes.route
}

/**
 * Класс, описывающий сущность КАЛЕНДАРЬ
 */
export class Calendar extends ManagedObject {
  private monday: boolean;    //
  private tuesday: boolean;   //
  private wednesday: boolean; //
  private thursday: boolean;  //
  private friday: boolean;    //
  private saturday: boolean;  //
  private sunday: boolean;    //
  private startDate: Date;    // дата начала действия расписания
  private endDate: Date;      // дата окончания дейсвия расписания

  private routeId: string;    // машрут которой работает по календарю

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
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnJsonObject(jsonData: any) {
    if (!((jsonData['type'] === managedObjectTypes[this.getObjTypeStr()].json) &&
          (managedObjectAttrs.id.json in jsonData) &&
          (managedObjectAttrs.createdAt.json in jsonData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in jsonData['attributes']) &&
          ('id' in jsonData['relationships'][calendarRel.route.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in calendarAttrs) {
      if (!(calendarAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
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
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, monday: string, tuesday: string, wednesday: string,
              thursday: string, friday: string, saturday: string, sunday: string,
              startDate: string, endDate: string, createdAt: string,
              updatedAt: string, routeId: string) {

    let startDateDate = new Date(Date.parse(startDate));
    let endDateDate = new Date(Date.parse(endDate));
    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(startDateDate.getUTCDate())) ||
        (isNaN(endDateDate.getUTCDate()))   ||
        (isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(updatedAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid boolean format');

    let mondayBool: boolean;
    switch (monday) {
      case 'true': mondayBool = true; break;
      case 'false': mondayBool = false; break;
      default: throw new Error('Impossible to set an object "'
                              + managedObjectTypes[this.getObjTypeStr()].name
                              +'". Invalid boolean format');
    }

    let tuesdayBool: boolean;
    switch (tuesday) {
      case 'true': mondayBool = true; break;
      case 'false': mondayBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    let wednesdayBool: boolean;
    switch (wednesday) {
      case 'true': mondayBool = true; break;
      case 'false': mondayBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    let thursdayBool: boolean;
    switch (thursday) {
      case 'true': mondayBool = true; break;
      case 'false': mondayBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    let fridayBool: boolean;
    switch (friday) {
      case 'true': mondayBool = true; break;
      case 'false': mondayBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    let saturdayBool: boolean;
    switch (saturday) {
      case 'true': mondayBool = true; break;
      case 'false': mondayBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    let sundayBool: boolean;
    switch (sunday) {
      case 'true': mondayBool = true; break;
      case 'false': mondayBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    this.set(id, mondayBool, tuesdayBool, wednesdayBool, thursdayBool, fridayBool, saturdayBool,
             sundayBool, startDateDate, endDateDate, createdAtDate, updatedAtDate, routeId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, monday: boolean, tuesday: boolean, wednesday: boolean,
      thursday: boolean, friday: boolean, saturday: boolean, sunday: boolean,
      startDate: Date, endDate: Date, createdAt: Date, updatedAt: Date, routeId: string) {

    this.id        = id;
    this.monday  = monday;
    this.tuesday = tuesday;
    this.wednesday  = wednesday;
    this.thursday = thursday;
    this.friday  = friday;
    this.saturday = saturday;
    this.sunday  = sunday;
    this.startDate = startDate;
    this.endDate  = endDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.routeId   = routeId;
  }
}




