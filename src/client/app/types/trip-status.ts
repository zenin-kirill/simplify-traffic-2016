import { managedObjectTypes } from "./managed-object.type";
import { UnmanagedObject, unmanagedObjectAttrs } from "./unmanaged-object";
import { UnmanagedObjectType, unmanagedObjectTypes } from "./unmanaged-object.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const tripStatusAttrs: any = {
  routeShortName: {json: 'route-short-name'},
  departure: {json: 'departure'},
  depart: {json: 'depart'},
  distFromDepart: {json: 'dist-from-depart'},
  nextStop: {json: 'next-stop'},
  arriveToNextStop: {json: 'arrive-to-next-stop'},
  distToNextStop: {json: 'dist-to-next-stop'},
  destination: {json: 'destination'},
  arriveToDestination: {json: 'arrive-to-destination'},
  distToDestination: {json: 'dist-to-destination'},
  status: {json: 'status'},
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const tripStatusRel: any = {
  trip: managedObjectTypes.trip
}

/**
 * Класс, описывающий сущность СТАТУС РЕЙСА
 */
export class TripStatus extends UnmanagedObject{
  private routeShortName: string;     // которое название маршрута (номер)
  private departure: string;          // пункт отправления
  private depart: Date;               // отправление
  private distFromDepart: number;     // пройденное расстояние (от п.отпр.)
  private nextStop: string;           // название следующей остановки
  private arriveToNextStop: Date;     // прибытия на след. остановку
  private distToNextStop: number;     // расстояние до след. остановки
  private destination: string;        // пункт назначения
  private arriveToDestination: Date;  // прибытия в пункт назначения
  private distToDestination: number;  // расстояние до п. назначения
  private status: string;             // статус рейса

  private tripId: string;   // рейс, статус которого описан в классе

  constructor() {
    super(UnmanagedObjectType.tripStatus);
  }

  getRouteShortName(): string {
    return this.routeShortName;
  }

  getDeparture(): string {
    return this.departure;
  }

  getDepart(): Date {
    return this.depart;
  }

  getDistFromDepart(): number {
    return this.distFromDepart;
  }

  getNextStop(): string {
    return this.nextStop;
  }

  getArriveToNextStop(): Date {
    return this.arriveToNextStop;
  }

  getDistToNextStop(): number {
    return this.distToNextStop;
  }

  getDestination(): string {
    return this.destination;
  }

  getArriveToDestination(): Date {
    return this.arriveToDestination;
  }

  getDistToDestination(): number {
    return this.distToDestination;
  }

  getStatus(): string {
    return this.status;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getTripId(): string {
    return this.tripId;
  }

  /**
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnJsonObject(jsonData: any) {
    if (!((jsonData['type'] === unmanagedObjectTypes[this.getObjTypeStr()].json) &&
          (unmanagedObjectAttrs.id.json in jsonData) &&
          (unmanagedObjectAttrs.createdAt.json in jsonData['attributes']) &&
          ('id' in jsonData['relationships'][tripStatusRel.trip.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in  tripStatusAttrs) {
      if (!( tripStatusAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + unmanagedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnStrings(jsonData[unmanagedObjectAttrs.id.json],
                      jsonData['attributes'][tripStatusAttrs.routeShortName.json],
                      jsonData['attributes'][tripStatusAttrs.departure.json],
                      jsonData['attributes'][tripStatusAttrs.depart.json],
                      jsonData['attributes'][tripStatusAttrs.distFromDepart.json],
                      jsonData['attributes'][tripStatusAttrs.nextStop.json],
                      jsonData['attributes'][tripStatusAttrs.arriveToNextStop.json],
                      jsonData['attributes'][tripStatusAttrs.distToNextStop.json],
                      jsonData['attributes'][tripStatusAttrs.destination.json],
                      jsonData['attributes'][tripStatusAttrs.arriveToDestination.json],
                      jsonData['attributes'][tripStatusAttrs.distToDestination.json],
                      jsonData['attributes'][tripStatusAttrs.status.json],
                      jsonData['attributes'][unmanagedObjectAttrs.createdAt.json],

                      jsonData['relationships'][tripStatusRel.trip.jsonRel]['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnStrings(id: string, routeShortName: string, departure: string, depart: string,
               distFromDepart: string, nextStop: string, arriveToNextStop: string,
               distToNextStop: string, destination: string, arriveToDestination: string,
               distToDestination: string, status: string, createdAt: string, tripId: string) {

    let departDate              = new Date(Date.parse(depart));
    let arriveToNextStopDate    = new Date(Date.parse(arriveToNextStop));
    let arriveToDestinationDate = new Date(Date.parse(arriveToDestination));
    let createdAtDate           = new Date(Date.parse(createdAt));

    if ((isNaN(departDate.getUTCDate())) ||
        (isNaN(arriveToNextStopDate.getUTCDate())) ||
        (isNaN(arriveToDestinationDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let distFromDepartNumber    = parseFloat(distFromDepart);
    let distToNextStopNumber    = parseFloat(distToNextStop);
    let distToDestinationNumber = parseFloat(distToDestination);

    if ((isNaN(distFromDepartNumber)) ||
        (isNaN(distToNextStopNumber)) ||
        (isNaN(distToDestinationNumber)))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid distance format');

    this.set(id, routeShortName, departure, departDate, distFromDepartNumber, nextStop,
             arriveToNextStopDate, distToNextStopNumber, destination, arriveToDestinationDate,
             distToDestinationNumber, status, createdAtDate, tripId)
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, routeShortName: string, departure: string, depart: Date,
      distFromDepart: number, nextStop: string, arriveToNextStop: Date,
      distToNextStop: number, destination: string, arriveToDestination: Date,
      distToDestination: number, status: string, createdAt: Date, tripId: string) {

    this.id                  = id;
    this.routeShortName      = routeShortName;
    this.departure           = departure;
    this.depart              = depart;
    this.distFromDepart      = distFromDepart;
    this.nextStop            = nextStop;
    this.arriveToNextStop    = arriveToNextStop;
    this.distToNextStop      = distToNextStop;
    this.destination         = destination;
    this.arriveToDestination = arriveToDestination;
    this.distToDestination   = distToDestination;
    this.status              = status;
    this.createdAt           = createdAt;

    this.tripId = tripId;
  }
}
