import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { ExceptionDateType, exceptionDateTypes } from "./exception-date.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const calendarDateAttrs: any = {
  date: {json: 'date'},
  exceptionType: {json: 'exception-type'}
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const calendarDateRel: any = {
  route: managedObjectTypes.route
}

/**
 * Класс, описывающий сущность ОСОБАЯ ДАТА КАЛЕНДАРЯ
 */
export class CalendarDate extends ManagedObject {
  private date: Date;             // особая дата
  private exceptionType: ExceptionDateType;  // тип особого дня

  private routeId: string;        // машрут, подверженный изменениям

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
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnJsonObject(jsonData: any) {
    if (!((jsonData['type'] === managedObjectTypes[this.getObjTypeStr()].json) &&
          (managedObjectAttrs.id.json in jsonData) &&
          (managedObjectAttrs.createdAt.json in jsonData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in jsonData['attributes']) &&
          ('id' in jsonData['relationships'][calendarDateRel.route.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

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
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
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
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
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

