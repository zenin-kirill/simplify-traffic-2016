import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { HaltType, haltTypes } from "./halt.type";
import { TimePointType, timePointTypes } from "./time-point.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const stopTimeAttrs: any = {
  arrivalTime: {json: 'arrival-time'},
  departureTime: {json: 'departure-time'},
  stopSequence: {json: 'stop-sequence'},
  stopHeadsign: {json: 'stop-headsign'},
  pickupType: {json: 'pickup-type'},
  dropOffType: {json: 'drop-off-type'},
  shapeDistTraveled: {json: 'shape-dist-traveled'},
  timePoint: {json: 'time-point'},
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const stopTimesRel: any = {
  trip: managedObjectTypes.trip,
  stop: managedObjectTypes.stop
}

/**
 * Класс, описывающий сущность ВРЕМЯ ОСТАНОВКИ
 */
export class StopTime extends ManagedObject {
  private arrivalTime: Date;         // время прибытия на остановку
  private departureTime: Date;       // время отправления от остановки
  private stopSequence: number;      // порядковый номер остановки
  private stopHeadsign: string;      // заголовок остановки??
  private pickupType: HaltType;      // тип посадки пассажиров (регуляр., по треб.)
  private dropOffType: HaltType;     // тип высадки пассажиров (регуляр., по треб.)
  private shapeDistTraveled: number; // дистанция, пройденная по фигуре
  private timePoint: TimePointType;  // тип временной метки (точно-приближенно)

  private tripId: string;          // рейс, на котором производятся остановка
  private stopId: string;          // остановка, которая которая имеет временные рамки

  constructor() {
    super(ManagedObjectType.stopTime);
  }

  getArrivalTime(): Date {
    return this.arrivalTime;
  }

  setArrivalTime(arrivalTime: Date) {
    this.arrivalTime = arrivalTime;
  }

  getDepartureTime(): Date {
    return this.departureTime;
  }

  setDepartureTime(departureTime: Date) {
    this.departureTime = departureTime;
  }

  getStopSequence(): number {
    return this.stopSequence;
  }

  setStopSequence(stopSequence: number) {
    this.stopSequence = stopSequence;
  }

  getStopHeadsign(): string {
    return this.stopHeadsign;
  }

  setStopHeadsign(stopHeadsign: string) {
    this.stopHeadsign = stopHeadsign;
  }

  getPickupType(): HaltType {
    return this.pickupType;
  }

  setPickupType(pickupType: HaltType) {
    this.pickupType = pickupType;
  }

  getDropOffType(): HaltType {
    return this.dropOffType;
  }

  setDropOffType(dropOffType: HaltType) {
    this.dropOffType = dropOffType;
  }

  getShapeDistTraveled(): number {
    return this.shapeDistTraveled;
  }

  setShapeDistTraveled(shapeDistTraveled: number) {
    this.shapeDistTraveled = shapeDistTraveled;
  }

  getTimePoint(): TimePointType {
    return this.timePoint;
  }

  setTimePoint(timePoint: TimePointType) {
    this.timePoint = timePoint;
  }

  getTripId(): string {
    return this.tripId;
  }

  setTripId(tripId: string) {
    this.tripId = tripId;
  }

  getStopId(): string {
    return this.stopId;
  }

  setStopId(stopId: string) {
    this.stopId = stopId;
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
          ('id' in jsonData['relationships'][stopTimesRel.trip.jsonRel]['data']) &&
          ('id' in jsonData['relationships'][stopTimesRel.stop.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid common attrs format');

    for (let obj in stopTimeAttrs) {
      if (!(stopTimeAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        + '". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][stopTimeAttrs.arrivalTime.json],
                     jsonData['attributes'][stopTimeAttrs.departureTime.json],
                     jsonData['attributes'][stopTimeAttrs.stopSequence.json],
                     jsonData['attributes'][stopTimeAttrs.stopHeadsign.json],
                     jsonData['attributes'][stopTimeAttrs.pickupType.json],
                     jsonData['attributes'][stopTimeAttrs.dropOffType.json],
                     jsonData['attributes'][stopTimeAttrs.shapeDistTraveled.json],
                     jsonData['attributes'][stopTimeAttrs.timePoint.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][stopTimesRel.trip.jsonRel]['data']['id'],
                     jsonData['relationships'][stopTimesRel.stop.jsonRel]['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, arrivalTime: string, departureTime: string,
              stopSequence: string, stopHeadsign: string,
              pickupTypeString: string, dropOffTypeString: string,
              shapeDistTraveled: string, timePoint: string,
              createdAt: string, updatedAt: string, tripId: string, stopId: string) {

    let arrivalTimeDate   = new Date(Date.parse(arrivalTime));
    let departureTimeDate = new Date(Date.parse(departureTime));
    let createdAtDate     = new Date(Date.parse(createdAt));
    let updatedAtDate     = new Date(Date.parse(updatedAt));

    if ((isNaN(arrivalTimeDate.getUTCDate())) ||
        (isNaN(departureTimeDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid date format');

    let pickupType: HaltType;
    for (let obj in haltTypes) {
      if (pickupTypeString === haltTypes[obj]['json'])
        pickupType = haltTypes[obj]['type'];
    }
    if (pickupType === null || pickupType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid pickup type format');

    let dropOffType: HaltType;
    for (let obj in haltTypes) {
      if (dropOffTypeString === haltTypes[obj]['json'])
        dropOffType = haltTypes[obj]['type'];
    }
    if (dropOffType === null || dropOffType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid drop off type format');

    let timePointType: TimePointType;
    for (let obj in timePointTypes) {
      if (timePoint === timePointTypes[obj]['json'])
        timePointType = timePointTypes[obj]['type'];
    }
    if (timePointType === null || timePointType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid time point format');

    let stopSequenceNumber      = parseInt(stopSequence);
    let shapeDistTraveledNumber = parseInt(shapeDistTraveled);

    if ((isNaN(stopSequenceNumber)) ||
        (isNaN(shapeDistTraveledNumber)))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      + '". Invalid number format');

    this.set(id, arrivalTimeDate, departureTimeDate, stopSequenceNumber,
             stopHeadsign, pickupType, dropOffType, shapeDistTraveledNumber, timePointType,
             createdAtDate, updatedAtDate, tripId, stopId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, arrivalTime: Date, departureTime: Date,
      stopSequence: number, stopHeadsign: string,
      pickupType: HaltType, dropOffType: HaltType,
      shapeDistTraveled: number, timePoint: TimePointType,
      createdAt: Date, updatedAt: Date, tripId: string, stopId: string) {

    this.id                = id;
    this.arrivalTime       = arrivalTime;
    this.departureTime     = departureTime;
    this.stopSequence      = stopSequence;
    this.stopHeadsign      = stopHeadsign;
    this.pickupType        = pickupType;
    this.dropOffType       = dropOffType;
    this.shapeDistTraveled = shapeDistTraveled;
    this.timePoint         = timePoint;
    this.createdAt         = createdAt;
    this.updatedAt         = updatedAt;

    this.tripId = tripId;
    this.stopId = stopId;
  }
}

