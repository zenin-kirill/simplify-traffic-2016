import { managedObjectTypes } from "./managed-object.type";
import { UnmanagedObject, unmanagedObjectAttrs } from "./unmanaged-object";
import { UnmanagedObjectType, unmanagedObjectTypes } from "./unmanaged-object.type";
/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const vehicleStatusAttrs: any = {
  latitude: {json: 'latitude'},
  longtitude: {json: 'longtitude'},
  speed: {json: 'speed'},
  height: {json: 'height'},
  acceleration: {json: 'acceleration'},
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const vehicleStatusRel: any = {
  vehicle: managedObjectTypes.vehicle,
  driver: managedObjectTypes.driver,
  route: managedObjectTypes.route,
  trip: managedObjectTypes.trip
}

/**
 * Класс, описывающий сущность СТАТУС ТС
 */
export class VehicleStatus extends UnmanagedObject {
  private latitude: number;     // широта
  private longtitude: number;   // долгота
  private speed: number;        // отправление
  private height: number;       // высота
  private acceleration: number; // ускорение

  private vehicleId: string;    // автобус, чье состояние
  private driverId: string;     // водитель на этом автобусе
  private routeId: string;      // маршрут по которому идет автобус
  private tripId: string;       // рейс, выполняемый автобусом по маршруту

  constructor() {
    super(UnmanagedObjectType.vehicleStatus);
  }

  getLatitude(): number {
    return this.latitude;
  }

  getLongtitude(): number {
    return this.longtitude;
  }

  getSpeed(): number {
    return this.speed;
  }

  getHeight(): number {
    return this.height;
  }

  getAcceleration(): number {
    return this.acceleration;
  }

  getVehicleId(): string {
    return this.vehicleId;
  }

  getDriverId(): string {
    return this.driverId;
  }

  getRouteId(): string {
    return this.routeId;
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
          ('id' in jsonData['relationships'][vehicleStatusRel.vehicle.jsonRel]['data']) &&
          ('id' in jsonData['relationships'][vehicleStatusRel.driver.jsonRel]['data']) &&
          ('id' in jsonData['relationships'][vehicleStatusRel.route.jsonRel]['data']) &&
          ('id' in jsonData['relationships'][vehicleStatusRel.trip.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in  vehicleStatusAttrs) {
      if (!( vehicleStatusAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + unmanagedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnStrings(jsonData[unmanagedObjectAttrs.id.json],
                      jsonData['attributes'][vehicleStatusAttrs.latitude.json],
                      jsonData['attributes'][vehicleStatusAttrs.longtitude.json],
                      jsonData['attributes'][vehicleStatusAttrs.speed.json],
                      jsonData['attributes'][vehicleStatusAttrs.height.json],
                      jsonData['attributes'][vehicleStatusAttrs.acceleration.json],
                      jsonData['attributes'][unmanagedObjectAttrs.createdAt.json],

                      jsonData['relationships'][vehicleStatusRel.vehicle.jsonRel]['data']['id'],
                      jsonData['relationships'][vehicleStatusRel.driver.jsonRel]['data']['id'],
                      jsonData['relationships'][vehicleStatusRel.route.jsonRel]['data']['id'],
                      jsonData['relationships'][vehicleStatusRel.trip.jsonRel]['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnStrings(id: string, latitude: string, longtitude: string, speed: string, height: string,
               acceleration: string, createdAt: string, vehicleId: string,
               driverId: string,
               routeId: string, tripId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));

    if (isNaN(createdAtDate.getUTCDate()))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format')

    let latitudeNumber     = parseFloat(latitude);
    let longtitudeNumber   = parseFloat(longtitude);
    let speedNumber        = parseInt(speed);
    let heightNumber       = parseInt(height);
    let accelerationNumber = parseInt(acceleration);

    if ((isNaN(latitudeNumber)) ||
        (isNaN(longtitudeNumber)) ||
        (isNaN(speedNumber)) ||
        (isNaN(heightNumber)) ||
        (isNaN(accelerationNumber)))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid numbers format')

    this.set(id, latitudeNumber, longtitudeNumber, speedNumber, heightNumber,
             accelerationNumber, createdAtDate, vehicleId, driverId,
             routeId, tripId)
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, latitude: number, longtitude: number, speed: number, height: number,
      acceleration: number, createdAt: Date, vehicleId: string, driverId: string,
      routeId: string, tripId: string) {

    this.id           = id;
    this.latitude     = latitude;
    this.longtitude   = longtitude;
    this.speed        = speed;
    this.height       = height;
    this.acceleration = acceleration;
    this.createdAt    = createdAt;

    this.vehicleId = vehicleId;
    this.driverId  = driverId;
    this.routeId   = routeId;
    this.tripId    = tripId;
  }
}
