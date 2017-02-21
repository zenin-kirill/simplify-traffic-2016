import { VehicleType, vehicleTypes } from "./vehicle.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const stopAttrs: any = {
  type: {json: 'type'},
  name: {json: 'name'},
  latitude: {json: 'latitude'},
  longtitude: {json: 'longtitude'},
  photoUrl: {json: 'photo-url'}
}

/**
 * Класс, описывающий сущность остановка
 */
export class Stop extends ManagedObject {
  private type: VehicleType;        // тип ТС, для кот. преназначена остановка
  private name: string;             // название остановки
  private latitude: number;         // GPS: широта
  private longtitude: number;       // GPS: долгота
  private photoUrl: string;         // ссылка на фото

  private cityId: string;           // город, в котором находится остановка
  private parentStationId: string;  // родитеская остановка

  constructor() {
    super(ManagedObjectType.stop);
  }

  getType(): VehicleType {
    return this.type;
  }

  setType(type: VehicleType) {
    this.type = type;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getLatitude(): number {
    return this.latitude;
  }

  setLatitude(latitude: number) {
    this.latitude = latitude;
  }

  getLongtitude(): number {
    return this.longtitude;
  }

  setLongtitude(longtitude: number) {
    this.longtitude = longtitude;
  }

  getPhotoUrl(): string {
    return this.photoUrl;
  }

  setPhotoUrl(photoUrl: string) {
    this.photoUrl = photoUrl;
  }

  getCityId(): string {
    return this.cityId;
  }

  setCityId(cityId: string) {
    this.cityId = cityId;
  }

  getParentStationId(): string {
    return this.parentStationId;
  }

  setParentStationId(parentStationId: string) {
    this.parentStationId = parentStationId;
  }

  /**
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnObject(stopData: any) {
    if (!((stopData['type'] === managedObjectTypes.stop.json) &&
          (managedObjectAttrs.id.json in stopData) &&
          (managedObjectAttrs.createdAt.json in stopData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in stopData['attributes']) &&
          ('id' in stopData['relationships']['city']['data']) &&
          ('id' in stopData['relationships']['stop']['data'])))
      throw new Error('Impossible to convert an object Stop. Invalid object format');

    for (let obj in stopAttrs) {
      if (!(stopAttrs[obj]['json'] in stopData['attributes']))
        throw new Error('Impossible to convert an object Stop. Invalid stop format');
    }

    this.setOnString(stopData[managedObjectAttrs.id.json],
                     stopData['attributes'][stopAttrs.type.json],
                     stopData['attributes'][stopAttrs.name.json],
                     stopData['attributes'][stopAttrs.latitude.json],
                     stopData['attributes'][stopAttrs.longtitude.json],
                     stopData['attributes'][stopAttrs.photoUrl.json],
                     stopData['attributes'][managedObjectAttrs.createdAt.json],
                     stopData['attributes'][managedObjectAttrs.updatedAt.json],

                     stopData['relationships']['city']['data']['id'],
                     stopData['relationships']['stop']['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, type: string,
              name: string, latitude: string, longtitude: string, photoUrl: string,
              createdAt: string, updatedAt: string, cityId: string, parentStationId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
         (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object Stop. Invalid format of date');

    let latitudeNumber   = parseFloat(latitude);
    let longtitudeNumber = parseFloat(longtitude);

    if ((isNaN(latitudeNumber)) ||
        (isNaN(longtitudeNumber)))
      throw new Error('Impossible to set an object Stop. Invalid format of coords');

    let vehicleType: VehicleType;
    for (let obj in vehicleTypes) {
      if (type === vehicleTypes[obj]['json'])
        vehicleType = vehicleTypes[obj]['type'];
    }
    if (vehicleType === null || vehicleType === undefined)
      throw new Error('Impossible to convert an object Route. Invalid vehicle type');


    this.set(id, vehicleType, name, latitudeNumber, longtitudeNumber,
             photoUrl, createdAtDate, updatedAtDate, cityId, parentStationId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, type: VehicleType,
      name: string, latitude: number, longtitude: number, photoUrl: string,
      createdAt: Date, updatedAt: Date, cityId: string, parentStationId: string) {

    this.id         = id;
    this.type       = type;
    this.name       = name;
    this.latitude   = latitude;
    this.longtitude = longtitude;
    this.photoUrl   = photoUrl;
    this.createdAt  = createdAt;
    this.updatedAt  = updatedAt;

    this.cityId          = cityId;
    this.parentStationId = parentStationId;
  }
}
