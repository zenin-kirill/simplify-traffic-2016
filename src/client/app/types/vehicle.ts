import { VehicleType, vehicleTypes } from "./vehicle.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Object containing additional information about class attributes
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
 * Object containing additional information about class dependencies
 */
export const vehicleRel: any = {
  agency: managedObjectTypes.agency
}

/**
 * Class describing entity VEHICLE
 */
export class Vehicle extends ManagedObject {
  private invertoryId: string;      // inventory identifier
  private type: VehicleType;        // vehicle type
  private manufacturer: string;     // manufacturer
  private vehicleModel: string;     // model
  private dateManufactured: number; // year of manufactured
  private payedUntil: Date;         // payed until to...
  private licensePlate: string;     // state registration number
  private photoUrl: string;         // photo link
  private bikesAllowed: boolean;    // suitable for bicyclists?
  private wheelchairAccess: boolean;// suitable for invalids?

  private agencyId: string;     // agency that owns the vehicle

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
   * Method that gets data of class object in JSON-API format
   */
  getInJsonObject() : any {
    super.getInJsonObject();
  }

  /**
   * Method that sets data of class object from object in JSON-API format
   * The method checks and parses JSON-API object and passes it in string
   * format to following method
   * Input parameter is object in JSON-API format
   */
  setOnJsonObject(jsonData: any) {
    super.setOnJsonObject(jsonData);

    if (!('id' in jsonData['relationships'][vehicleRel.agency.jsonRel]['data']))
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
   * Method that sets data of class object from data in string format
   * Method checks and parses string property values and passes final property
   * values to following method
   * Input parameters are all properties of class object in string format
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
   * Method that sets class data from properties in class attributes formats
   * The input parameters are all properties of the class in class attributes formats
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
