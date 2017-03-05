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
  photoUrl: {json: 'photo-url'},
  bikesAllowed: {json: 'bikes-allowed'},
  wheelchairAccess: {json: 'wheelchair-accessible'}
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const vehicleRel: any = {
  agency: managedObjectTypes.agency
}

/**
 * Класс, описывающий сущность ТРАНСПОРТНОЕ СРЕДСТВО
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
  private bikesAllowed: boolean;    // ТС пригодно для велосипедистов?
  private wheelchairAccess: boolean;// ТС пригодно для инвалидов?

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
          ('id' in jsonData['relationships'][vehicleRel.agency.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in vehicleAttrs) {
      if (!(vehicleAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnStrings(jsonData[managedObjectAttrs.id.json],
                      jsonData['attributes'][vehicleAttrs.invertoryId.json],
                      jsonData['attributes'][vehicleAttrs.type.json],
                      jsonData['attributes'][vehicleAttrs.manufacturer.json],
                      jsonData['attributes'][vehicleAttrs.vehicleModel.json],
                      jsonData['attributes'][vehicleAttrs.dateManufactured.json],
                      jsonData['attributes'][vehicleAttrs.payedUntil.json],
                      jsonData['attributes'][vehicleAttrs.licensePlate.json],
                      jsonData['attributes'][vehicleAttrs.photoUrl.json],
                      jsonData['attributes'][vehicleAttrs.bikesAllowed.json],
                      jsonData['attributes'][vehicleAttrs.wheelchairAccess.json],
                      jsonData['attributes'][managedObjectAttrs.createdAt.json],
                      jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                      jsonData['relationships'][vehicleRel.agency.jsonRel]['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnStrings(id: string, invertoryId: string, type: string, manufacturer: string,
               vehicleModel: string, dateManufactured: string, payedUntil: string,
               licensePlate: string, photoUrl: string, bikesAllowed: string, wheelchairAccess: string,
               createdAt: string, updatedAt: string, agencyId: string) {

    let createdAtDate  = new Date(Date.parse(createdAt));
    let updatedAtDate  = new Date(Date.parse(updatedAt));
    let payedUntilDate = new Date(Date.parse(payedUntil));
    if ((createdAtDate.getUTCDate() === NaN) ||
        (updatedAtDate.getUTCDate() === NaN) ||
        (payedUntilDate.getUTCDate() === NaN))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let dateManufacturedNumber = parseInt(dateManufactured);
    if (isNaN(dateManufacturedNumber))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid year format');

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

    this.set(id, invertoryId, vehicleType, manufacturer, vehicleModel,
             dateManufacturedNumber, payedUntilDate, licensePlate, photoUrl, bikesAllowedBool,
             wheelchairAccessBool, createdAtDate, updatedAtDate, agencyId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, invertoryId: string, type: VehicleType, manufacturer: string,
      vehicleModel: string,
      dateManufactured: number, payedUntil: Date, licensePlate: string, photoUrl: string,
      bikesAllowed: boolean, wheelchairAccess: boolean, createdAt: Date, updatedAt: Date, agencyId: string) {
    this.id               = id;
    this.invertoryId      = invertoryId;
    this.type             = type;
    this.manufacturer     = manufacturer;
    this.vehicleModel     = vehicleModel;
    this.dateManufactured = dateManufactured;
    this.payedUntil       = payedUntil;
    this.licensePlate     = licensePlate;
    this.photoUrl         = photoUrl;
    this.bikesAllowed = bikesAllowed;
    this.wheelchairAccess = wheelchairAccess;
    this.createdAt        = createdAt;
    this.updatedAt        = updatedAt;

    this.agencyId = agencyId;
  }
}
