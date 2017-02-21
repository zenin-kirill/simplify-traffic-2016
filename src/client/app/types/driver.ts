import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const driverAttrs: any = {
  name: {json: 'name'},
  surname: {json: 'surname'},
  birthDate: {json: 'birth-date'},
  licenseNumber: {json: 'license-number'},
  photoUrl: {json: 'photo-url'},
}

/**
 * Класс описывающий сущность водитель
 */
export class Driver extends ManagedObject {
  private name: string;           // имя
  private surname: string;        // фамилия
  private birthDate: Date;        // день рождания
  private licenseNumber: string;  // номер ВУ
  private photoUrl: string;       // ссылка на фото пользователя

  private agencyId: string;       // агенство, в котором нанят водитель

  constructor() {
    super(ManagedObjectType.driver);
  }

  getName(): string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getSurname(): string {
    return this.surname;
  }

  setSurname(surname: string) {
    this.surname = surname;
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  setBirthDate(birthDate: Date) {
    this.birthDate = birthDate;
  }

  getLicenseNumber(): string {
    return this.licenseNumber;
  }

  setLicenseNumber(licenseNumber: string) {
    this.licenseNumber = licenseNumber;
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
  setOnObject(driverData: any) {
    if (!((driverData['type'] === managedObjectTypes.driver.json) &&
          (managedObjectAttrs.id.json in driverData) &&
          (managedObjectAttrs.createdAt.json in driverData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in driverData['attributes']) &&
          ('id' in driverData['relationships']['agency']['data'])))
      throw new Error('Impossible to convert an object Driver. Invalid object format');

    for (let obj in driverAttrs) {
      if (!(driverAttrs[obj]['json'] in driverData['attributes']))
        throw new Error('Impossible to convert an object Driver. Invalid driver format');
    }

    this.setOnString(driverData[managedObjectAttrs.id.json],
                     driverData['attributes'][driverAttrs.name.json],
                     driverData['attributes'][driverAttrs.surname.json],
                     driverData['attributes'][driverAttrs.birthDate.json],
                     driverData['attributes'][driverAttrs.licenseNumber.json],
                     driverData['attributes'][driverAttrs.photoUrl.json],
                     driverData['attributes'][managedObjectAttrs.createdAt.json],
                     driverData['attributes'][managedObjectAttrs.updatedAt.json],

                     driverData['relationships']['agency']['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, name: string,
              surname: string, birthDate: string, licenseNumber: string,
              photoUrl: string, createdAt: string, updatedAt: string, agencyId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));
    let birthDateDate = new Date(Date.parse(birthDate));

    if ((isNaN(createdAtDate.getUTCDate())) ||
         (isNaN(createdAtDate.getUTCDate())) ||
         (isNaN(birthDateDate.getUTCDate())))
      throw new Error('Impossible to set an object Driver. Invalid format of date');

    this.set(id, name, surname, birthDateDate, licenseNumber,
             photoUrl, createdAtDate, updatedAtDate, agencyId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, name: string,
      surname: string, birthDate: Date, licenseNumber: string,
      photoUrl: string, createdAt: Date, updatedAt: Date, agencyId: string) {

    this.id            = id;
    this.name          = name;
    this.surname       = surname;
    this.birthDate     = birthDate;
    this.licenseNumber = licenseNumber;
    this.photoUrl      = photoUrl;
    this.createdAt     = createdAt;
    this.updatedAt     = updatedAt;

    this.agencyId = agencyId;
  }
}
