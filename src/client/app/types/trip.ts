import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const tripAttrs: any = {
  headsign: {json: 'name'},
  shortName: {json: 'population'}
}

/**
 * Класс, описывающий сущность рейс
 */
export class Trip extends ManagedObject {
  private headsign: string;   // заголовок
  private shortName: string;  // котороткое описание рейса

  private routeId: string;    // машрут по которотму проводится рейс
  private serviceId: string;  // todo: узнать что это такое

  constructor() {
    super(ManagedObjectType.trip);
  }

  getHeadsign(): string {
    return this.headsign;
  }

  setHeadsign(headsign: string) {
    this.headsign = headsign;
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

  getServiceId(): string {
    return this.serviceId;
  }

  setServiceId(serviceId: string) {
    this.serviceId = serviceId;
  }

  /**
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnObject(tripData: any) {
    if (!((tripData['type'] === managedObjectTypes.trip.json) &&
          (managedObjectAttrs.id.json in tripData) &&
          (managedObjectAttrs.createdAt.json in tripData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in tripData['attributes']) &&
          ('id' in tripData['relationships']['route']['data']) &&
          ('id' in tripData['relationships']['service']['data'])))
      throw new Error('Impossible to convert an object Trip. Invalid object format');

    for (let obj in tripAttrs) {
      if (!(tripAttrs[obj]['json'] in tripData['attributes']))
        throw new Error('Impossible to convert an object Trip. Invalid trip format');
    }

    this.setOnString(tripData[managedObjectAttrs.id.json],
                     tripData['attributes'][tripAttrs.headsign.json],
                     tripData['attributes'][tripAttrs.shortName.json],
                     tripData['attributes'][managedObjectAttrs.createdAt.json],
                     tripData['attributes'][managedObjectAttrs.updatedAt.json],

                     tripData['relationships']['route']['data']['id'],
                     tripData['relationships']['service']['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, headsign: string,
              shortName: string, createdAt: string, updatedAt: string,
              routeId: string, serviceId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object City. Invalid format of date');

    this.set(id, headsign, shortName, createdAtDate, updatedAtDate, routeId, serviceId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, headsign: string,
      shortName: string, createdAt: Date, updatedAt: Date, routeId: string, serviceId: string) {

    this.id        = id;
    this.headsign  = headsign;
    this.shortName = shortName;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.routeId   = routeId;
    this.serviceId = serviceId;
  }
}
