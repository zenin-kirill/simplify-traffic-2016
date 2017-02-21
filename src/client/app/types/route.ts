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
}

/**
 * Класс описывающий сущность маршрут
 */
export class Route extends ManagedObject {
  private type: VehicleType;          // тип ТС, кур. на маршруте
  private shortName: string;          // по сути номер маршрута
  private longName: string;           // краткая информация о маршруте
  private color: string;               // цвет линии маршрута
  private description: string;        // полная информация о маршруте

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

  /**
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnObject(routeData: any) {
    if (!((routeData['type'] === managedObjectTypes.route.json) &&
          (managedObjectAttrs.id.json in routeData) &&
          (managedObjectAttrs.createdAt.json in routeData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in routeData['attributes']) &&
          ('id' in routeData['relationships']['agency']['data'])))
      throw new Error('Impossible to convert an object Route. Invalid object format');

    for (let obj in routeAttrs) {
      if (!(routeAttrs[obj]['json'] in routeData['attributes']))
        throw new Error('Impossible to convert an object Route. Invalid route format');
    }

    this.setOnString(routeData[managedObjectAttrs.id.json],
                     routeData['attributes'][routeAttrs.type.json],
                     routeData['attributes'][routeAttrs.shortName.json],
                     routeData['attributes'][routeAttrs.longName.json],
                     routeData['attributes'][routeAttrs.color.json],
                     routeData['attributes'][routeAttrs.description.json],
                     routeData['attributes'][managedObjectAttrs.createdAt.json],
                     routeData['attributes'][managedObjectAttrs.updatedAt.json],

                     routeData['relationships']['agency']['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, type: string,
              shortName: string, longName: string, color: string,
              description: string, createdAt: string, updatedAt: string, agencyId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
         (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object Route. Invalid format of date');

    let vehicleType: VehicleType;
    for (let obj in vehicleTypes) {
      if (type === vehicleTypes[obj]['json'])
        vehicleType = vehicleTypes[obj]['type'];
    }
    if (vehicleType === null || vehicleType === undefined)
      throw new Error('Impossible to convert an object Route. Invalid vehicle type');

    this.set(id, vehicleType, shortName, longName, color,
             description, createdAtDate, updatedAtDate, agencyId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, type: VehicleType,
      shortName: string, longName: string, color: string,
      description: string, createdAt: Date, updatedAt: Date, agencyId: string) {

    // проверка корректности данных цвета (в шестн. формате)
    if (color.search(/[a-f0-9]{6}/i) === -1)
      throw new Error('Impossible to convert an object Route.Invalid format of color');

    this.id          = id;
    this.type = type;
    this.shortName   = shortName;
    this.longName    = longName;
    this.color       = color;
    this.description = description;
    this.createdAt   = createdAt;
    this.updatedAt   = updatedAt;

    this.agencyId = agencyId;
  }
}
