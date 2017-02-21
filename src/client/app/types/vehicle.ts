import { VehicleType, vehicleTypes } from "./vehicle.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const vehicleAttrs: any = {
  invertoryId: {json: 'invertory-id'},
  type: {json: 'type'},
  manufacturer: {json: 'manufacturer'},
  vehicleModel: {json: 'vehicle-model'},
  dateManufactured: {json: 'date-manufactured'},
  payedUntil: {json: 'payed-until'},
  licensePlate: {json: 'license-plate'},
  photoUrl: {json: 'photo-url'}
}


/**
 * Класс, описывающий сущность ТС
 */
export class Vehicle extends ManagedObject {
  private invertoryId: string;      // инвертарный идентификатор
  private type: VehicleType;        // тип ТС
  private manufacturer: string;     // производитель
  private vehicleModel: string;     // модель
  private dateManufactured: number; // год производства
  private payedUntil: Date;         // пропалчен до...
  private licensePlate: string;     // регистрационный номер
  private photoUrl: string;         // сслыка на фото

  private agencyId: string;         // агенство, котормоу принадлежит ТС

  constructor() {
    super(ManagedObjectType.vehicle);
  }

  getInvertoryId(): string {
    return this.invertoryId;
  }

  setInvertoryId(invertoryId: string) {
    this.invertoryId = invertoryId;
  }

  getType(): VehicleType {
    return this.type;
  }

  setType(type: VehicleType) {
    this.type = type;
  }

  getManufacturer(): string {
    return this.manufacturer;
  }

  setManufacturer(manufacturer: string) {
    this.manufacturer = manufacturer;
  }

  getVehicleModel(): string {
    return this.vehicleModel;
  }

  setVehicleModel(vehicleModel: string) {
    this.vehicleModel = vehicleModel;
  }

  getDateManufactured(): number {
    return this.dateManufactured;
  }

  setDateManufactured(dateManufactured: number) {
    this.dateManufactured = dateManufactured;
  }

  getPayedUntil(): Date {
    return this.payedUntil;
  }

  setPayedUntil(payedUntil: Date) {
    this.payedUntil = payedUntil;
  }

  getLicensePlate(): string {
    return this.licensePlate;
  }

  setLicensePlate(licensePlate: string) {
    this.licensePlate = licensePlate;
  }

  getPhotoUrl(): string {
    return this.photoUrl;
  }

  setPhotoUrl(photoUrl: string) {
    this.photoUrl = photoUrl;
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
  setOnObject(vehicleData: any) {
    if (!((vehicleData['type'] === managedObjectTypes.vehicle.json) &&
          (managedObjectAttrs.id.json in vehicleData) &&
          (managedObjectAttrs.createdAt.json in vehicleData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in vehicleData['attributes']) &&
          ('id' in vehicleData['relationships']['agency']['data'])))
      throw new Error('Impossible to convert an object Vehicle. Invalid object format');

    for (let obj in vehicleAttrs) {
      if (!(vehicleAttrs[obj]['json'] in vehicleData['attributes']))
        throw new Error('Impossible to convert an object Vehicle. Invalid vehicle format');
    }

    this.setOnStrings(vehicleData[managedObjectAttrs.id.json],
                      vehicleData['attributes'][vehicleAttrs.invertoryId.json],
                      vehicleData['attributes'][vehicleAttrs.type.json],
                      vehicleData['attributes'][vehicleAttrs.manufacturer.json],
                      vehicleData['attributes'][vehicleAttrs.vehicleModel.json],
                      vehicleData['attributes'][vehicleAttrs.dateManufactured.json],
                      vehicleData['attributes'][vehicleAttrs.payedUntil.json],
                      vehicleData['attributes'][vehicleAttrs.licensePlate.json],
                      vehicleData['attributes'][vehicleAttrs.photoUrl.json],
                      vehicleData['attributes'][managedObjectAttrs.createdAt.json],
                      vehicleData['attributes'][managedObjectAttrs.updatedAt.json],

                      vehicleData['relationships']['agency']['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnStrings(id: string, invertoryId: string, type: string, manufacturer: string,
               vehicleModel: string, dateManufactured: string, payedUntil: string,
               licensePlate: string, photoUrl: string, createdAt: string, updatedAt: string,
               agencyId: string) {

    let createdAtDate  = new Date(Date.parse(createdAt));
    let updatedAtDate  = new Date(Date.parse(updatedAt));
    let payedUntilDate = new Date(Date.parse(payedUntil));
    if ((createdAtDate.getUTCDate() === NaN) ||
        (updatedAtDate.getUTCDate() === NaN) ||
        (payedUntilDate.getUTCDate() === NaN))
      throw new Error('Impossible to set an object User. Invalid format of date');

    let dateManufacturedNumber = parseInt(dateManufactured);
    if (isNaN(dateManufacturedNumber))
      throw new Error('Impossible to set an object Stop. Invalid format of years');

    let vehicleType: VehicleType;
    for (let obj in vehicleTypes) {
      if (type === vehicleTypes[obj]['json'])
        vehicleType = vehicleTypes[obj]['type'];
    }
    if (vehicleType === null || vehicleType === undefined)
      throw new Error('Impossible to convert an object Route. Invalid vehicle type');

    this.set(id, invertoryId, vehicleType, manufacturer, vehicleModel,
             dateManufacturedNumber, payedUntilDate, licensePlate, photoUrl,
             createdAtDate, updatedAtDate, agencyId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, invertoryId: string, type: VehicleType, manufacturer: string,
      vehicleModel: string,
      dateManufactured: number, payedUntil: Date, licensePlate: string, photoUrl: string,
      createdAt: Date, updatedAt: Date, agencyId: string) {
    this.id               = id;
    this.invertoryId      = invertoryId;
    this.type             = type;
    this.manufacturer     = manufacturer;
    this.vehicleModel     = vehicleModel;
    this.dateManufactured = dateManufactured;
    this.payedUntil       = payedUntil;
    this.licensePlate     = licensePlate;
    this.photoUrl         = photoUrl;
    this.createdAt        = createdAt;
    this.updatedAt        = updatedAt;

    this.agencyId = agencyId;
  }
}
