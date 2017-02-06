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
 * Класс, описывающий сущность пользователь
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
   * Метод, устанавливающий данные пользователя из объекта в формате JSON-API
   * По сути, метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * @param userData - данные объекта в формате JSON-API
   */
  setOnObject(userData: any) {
    if (!((userData['type'] === managedObjectTypes.user.json) &&
          (managedObjectAttrs.id.json in userData) &&
          (managedObjectAttrs.createdAt.json in userData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in userData['attributes']) &&
          ('id' in userData['relationships']['agency']['data'])))
      throw new Error('Impossible to convert an object User. Invalid object format');

    for (let obj in userAttrs) {
      if (!(userAttrs[obj]['json'] in userData['attributes']))
        throw new Error('Impossible to convert an object User. Invalid user format');
    }

    this.setOnStrings(userData[managedObjectAttrs.id],
                      userData['attributes'][userAttrs.role.json],
                      userData['attributes'][userAttrs.name.json],
                      userData['attributes'][userAttrs.surname.json],
                      userData['attributes'][userAttrs.email.json],
                      userData['attributes'][userAttrs.photoUrl.json],
                      userData['attributes'][managedObjectAttrs.createdAt],
                      userData['attributes'][managedObjectAttrs.updatedAt],

                      userData['relationships']['agency']['data']['id']);
  }

  /**
   * Метод, устанавливающий данные агенства из свойств в строковом формате
   * По сути метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта агенство в строковом формате
   */
  setOnStrings(id: string, role: string, name: string,
               surname: string, email: string, photoUrl: string, createdAt: string,
               updatedAt: string, agencyId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((createdAtDate.getUTCDate() === NaN) ||
        (updatedAtDate.getUTCDate() === NaN))
      throw new Error('Impossible to set an object User. Invalid format of date');

    let userType: UserType;
    for (let obj in userTypes) {
      if (role === userTypes[obj]['json'])
        userType = userTypes[obj]['type'];
    }
    if (userType === null || userType === undefined)
      throw new Error('Impossible to convert an object User. Invalid user role');

    this.set(id, userType, name, surname, email, photoUrl, createdAtDate, updatedAtDate, agencyId);
  }

  /**
   * Метод, устанавливающий данные агенства из свойств в исходном формате
   * Входными параметрами являются все свойства объекта агенства в исходном формате
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
