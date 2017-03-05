import { managedObjectTypes } from "./managed-object.type";
import { unmanagedObjectTypes, UnmanagedObjectType } from "./unmanaged-object.type";
import { UnmanagedObject, unmanagedObjectAttrs } from "./unmanaged-object";
/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const sessionAttrs: any = {
  token: {json: 'token'},
  validUntil: {json: 'valid-until'},
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const sessionRel: any = {
  user: managedObjectTypes.user,
  agency: managedObjectTypes.agency
}

const minTokenLength: number = 15;   // мин. длина ключ. слова
const maxTokenLength: number = 50;   // макс. длина ключ. слова

/**
 * Класс, описывающий сущность СЕССИЯ РАБОТЫ ПОЛЬЗОВАТЕЛЯ
 */
export class Session extends UnmanagedObject{
  private token: string;      // ключевое слово
  private validUntil: Date;   // срок действия сессии

  private userId: string;     // идентификатор пользоватея, для которого создана сессия
  private agencyId: string;   // агенство, на которое работает вошедший вользователь

  constructor() {
    super(UnmanagedObjectType.session);
  }

  getValidUntil(): Date {
    return this.validUntil;
  }

  getToken(): string {
    return this.token;
  }

  getUserId(): string {
    return this.userId;
  }

  getAgencyId(): string {
    return this.agencyId;
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
          ('id' in jsonData['relationships'][sessionRel.user.jsonRel]['data']) &&
          ('id' in jsonData['relationships'][sessionRel.agency.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in  sessionAttrs) {
      if (!( sessionAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + unmanagedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnStrings(jsonData[unmanagedObjectAttrs.id.json],
                      jsonData['attributes'][sessionAttrs.token.json],
                      jsonData['attributes'][sessionAttrs.validUntil.json],
                      jsonData['attributes'][unmanagedObjectAttrs.createdAt.json],

                      jsonData['relationships'][sessionRel.user.jsonRel]['data']['id'],
                      jsonData['relationships'][sessionRel.agency.jsonRel]['data']['id'])
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnStrings(id: string, token: string, validUntil: string, createdAt: string, userId: string,
               agencyId: string) {
    let createdAtDate  = new Date(Date.parse(createdAt));
    let validUntilDate = new Date(Date.parse(validUntil));

    if ((isNaN(validUntilDate.getUTCDate())) ||
         (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    this.set(id, token, validUntilDate, createdAtDate, userId, agencyId)
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, token: string, validUntil: Date, createdAt: Date, userId: string,
      agencyId: string) {
    if ((token.length <= minTokenLength) &&
        (token.length >= maxTokenLength))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid token format');

    this.id         = id;
    this.token      = token;
    this.validUntil = validUntil;
    this.createdAt  = createdAt;
    this.userId     = userId;
    this.agencyId   = agencyId;
  }
}
