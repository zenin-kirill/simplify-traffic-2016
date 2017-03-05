import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const tripAttrs: any = {
  headsign: {json: 'headsign'},
  shortName: {json: 'short-name'},
  bikesAllowed: {json: 'bikes-allowed'},
  wheelchairAccess: {json: 'wheelchair-accessible'}
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const tripRel: any = {
  route: managedObjectTypes.route
}

/**
 * Класс, описывающий сущность РЕЙС
 */
export class Trip extends ManagedObject {
  private headsign: string;         // заголовок
  private shortName: string;        // котороткое описание рейса
  private bikesAllowed: boolean;    // рейс подойдет для велосипедистов?
  private wheelchairAccess: boolean;// рейс подойдет для инвалидов

  private routeId: string;          // машрут по которотму проводится рейс

  constructor() {
    super(ManagedObjectType.trip);
  }

  getHeadsign(): string {
    return this.headsign;
  }

  setHeadsign(headsign: string) {
    this.headsign = headsign;
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

  getShortName(): string {
    return this.shortName;
  }

  setShortName(shortName: string) {
    this.shortName = shortName;
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
          ('id' in jsonData['relationships'][tripRel.route.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in tripAttrs) {
      if (!(tripAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][tripAttrs.headsign.json],
                     jsonData['attributes'][tripAttrs.shortName.json],
                     jsonData['attributes'][tripAttrs.bikesAllowed.json],
                     jsonData['attributes'][tripAttrs.wheelchairAccess.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][tripRel.route.jsonRel]['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, headsign: string,
              shortName: string, bikesAllowed: string, wheelchairAccess: string,  createdAt: string, updatedAt: string,
              routeId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let bikesAllowedBool: boolean;
    switch (bikesAllowed) {
      case 'true': bikesAllowedBool = true; break;
      case 'false': bikesAllowedBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    let wheelchairAccessBool: boolean;
    switch (wheelchairAccess) {
      case 'true': wheelchairAccessBool = true; break;
      case 'false': wheelchairAccessBool = false; break;
      default: throw new Error('Impossible to set an object "'
                               + managedObjectTypes[this.getObjTypeStr()].name
                               +'". Invalid boolean format');
    }

    this.set(id, headsign, shortName, bikesAllowedBool, wheelchairAccessBool, createdAtDate, updatedAtDate, routeId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, headsign: string,
      shortName: string, bikesAllowed: boolean, wheelchairAccess: boolean, createdAt: Date,
      updatedAt: Date, routeId: string) {

    this.id        = id;
    this.headsign  = headsign;
    this.shortName = shortName;
    this.bikesAllowed = bikesAllowed;
    this.wheelchairAccess = wheelchairAccess;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.routeId   = routeId;
  }
}
