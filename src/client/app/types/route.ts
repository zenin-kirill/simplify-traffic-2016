import { VehicleType, vehicleTypes } from "./vehicle.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const routeAttrs: any = {
  type: {json: 'type'},
  shortName: {json: 'short-name'},
  longName: {json: 'long-name'},
  color: {json: 'color'},
  description: {json: 'description'},
  bikesAllowed: {json: 'bikes-allowed'},
  wheelchairAccess: {json: 'wheelchair-accessible'}
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const routeRel: any = {
  agency: managedObjectTypes.agency
}

/**
 * Класс описывающий сущность МАРШРУТ
 */
export class Route extends ManagedObject {
  private type: VehicleType;          // тип ТС, кур. на маршруте
  private shortName: string;          // по сути номер маршрута
  private longName: string;           // краткая информация о маршруте
  private color: string;              // цвет линии маршрута
  private description: string;        // полная информация о маршруте
  private bikesAllowed: boolean;      // по умолчанию маршрут подойдет для велосипедистов?
  private wheelchairAccess: boolean;  // по умолчанию рейс подойдет для инвалидов?

  private agencyId: string;           // агенство, обслуживающее данный маршрут

  constructor() {
    super(ManagedObjectType.route);
  }

  getVehicleType(): VehicleType {
    return this.type;
  }

  setVehicleType(vehicleType: VehicleType) {
    this.type = vehicleType;
  }

  getShortName(): string {
    return this.shortName;
  }

  setShortName(shortName: string) {
    this.shortName = shortName;
  }

  getLongName(): string {
    return this.longName;
  }

  setLongName(longName: string) {
    this.longName = longName;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string) {
    this.description = description;
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

  getAgencyId(): string {
    return this.agencyId;
  }

  setAgencyId(agencyId: string) {
    this.agencyId = agencyId;
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
          ('id' in jsonData['relationships'][routeRel.agency.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in routeAttrs) {
      if (!(routeAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][routeAttrs.type.json],
                     jsonData['attributes'][routeAttrs.shortName.json],
                     jsonData['attributes'][routeAttrs.longName.json],
                     jsonData['attributes'][routeAttrs.color.json],
                     jsonData['attributes'][routeAttrs.description.json],
                     jsonData['attributes'][routeAttrs.bikesAllowed.json],
                     jsonData['attributes'][routeAttrs.wheelchairAccess.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][routeRel.agency.jsonRel]['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, type: string,
              shortName: string, longName: string, color: string,
              description: string, bikesAllowed: string, wheelchairAccess: string, createdAt: string, updatedAt: string, agencyId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
         (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let vehicleType: VehicleType;
    for (let obj in vehicleTypes) {
      if (type === vehicleTypes[obj]['json'])
        vehicleType = vehicleTypes[obj]['type'];
    }
    if (vehicleType === null || vehicleType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid type format');

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

    this.set(id, vehicleType, shortName, longName, color,
             description, bikesAllowedBool, wheelchairAccessBool, createdAtDate, updatedAtDate, agencyId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, type: VehicleType,
      shortName: string, longName: string, color: string,
      description: string, bikesAllowed: boolean, wheelchairAccess: boolean, createdAt: Date, updatedAt: Date, agencyId: string) {

    // проверка корректности данных цвета (в шестн. формате)
    if (color.search(/[a-f0-9]{6}/i) === -1)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid color format');

    this.id          = id;
    this.type = type;
    this.shortName   = shortName;
    this.longName    = longName;
    this.color       = color;
    this.description = description;
    this.bikesAllowed = bikesAllowed;
    this.wheelchairAccess = wheelchairAccess;
    this.createdAt   = createdAt;
    this.updatedAt   = updatedAt;

    this.agencyId = agencyId;
  }
}
