import { UserType, userTypes } from "./user.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const userAttrs: any = {
  role: {json: 'role'},
  name: {json: 'name'},
  surname: {json: 'surname'},
  email: {json: 'email'},
  photoUrl: {json: 'photo-url'}
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const userRel: any = {
  agency: managedObjectTypes.agency
}

/**
 * Класс, описывающий сущность ПОЛЬЗОВАТЕЛЬ
 */
export class User extends ManagedObject {
  private role: UserType;   // роль пользователя (тип)
  private name: string;     // имя
  private surname: string;  // фамилия
  private email: string;    // емэйл
  private photoUrl: string; // ссылка на фото

  private agencyId: string; // агенство, в котором работает пользователь


  constructor() {
    super(ManagedObjectType.user);
  }

  getRole(): UserType {
    return this.role;
  }

  getName(): string {
    return this.name;
  }

  getSurname(): string {
    return this.surname;
  }

  getEmail(): string {
    return this.email;
  }

  getPhotoUrl(): string {
    return this.photoUrl;
  }

  setAgencyId(value: string) {
    this.agencyId = value;
  }

  setRole(value: UserType) {
    this.role = value;
  }

  setName(value: string) {
    this.name = value;
  }

  setSurname(value: string) {
    this.surname = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPhotoUrl(value: string) {
    this.photoUrl = value;
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
          ('id' in jsonData['relationships'][userRel.agency.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in userAttrs) {
      if (!(userAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnStrings(jsonData[managedObjectAttrs.id.json],
                      jsonData['attributes'][userAttrs.role.json],
                      jsonData['attributes'][userAttrs.name.json],
                      jsonData['attributes'][userAttrs.surname.json],
                      jsonData['attributes'][userAttrs.email.json],
                      jsonData['attributes'][userAttrs.photoUrl.json],
                      jsonData['attributes'][managedObjectAttrs.createdAt.json],
                      jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                      jsonData['relationships'][userRel.agency.jsonRel]['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnStrings(id: string, role: string, name: string,
               surname: string, email: string, photoUrl: string, createdAt: string,
               updatedAt: string, agencyId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((createdAtDate.getUTCDate() === NaN) ||
        (updatedAtDate.getUTCDate() === NaN))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let userType: UserType;
    for (let obj in userTypes) {
      if (role === userTypes[obj]['json'])
        userType = userTypes[obj]['type'];
    }
    if (userType === null || userType === undefined)
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid role format');

    this.set(id, userType, name, surname, email, photoUrl, createdAtDate, updatedAtDate, agencyId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, role: UserType, name: string,
      surname: string, email: string, photoUrl: string, createdAt: Date, updatedAt: Date,
      agencyId: string) {
    this.id        = id;
    this.role      = role;
    this.name      = name;
    this.surname   = surname;
    this.email     = email;
    this.photoUrl  = photoUrl;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.agencyId = agencyId;
  }
}
