
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";
/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const countryAttrs: any = {
  name: {json: 'name'},
  isoStr: {json: 'iso-str'}
}

/**
 * Класс, описывающий сущность СТРАНА
 */
export class Country extends ManagedObject {
  private name: string;   // название
  private isoStr: string; // стандартизованный код страны

  constructor() {
    super(ManagedObjectType.country);
  }

  getName() : string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getISOstr() : string {
    return this.isoStr;
  }
  setISOstr(isoStr: string) {
    this.isoStr = isoStr;
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
          (managedObjectAttrs.updatedAt.json in jsonData['attributes'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in countryAttrs) {
      if (!(countryAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][countryAttrs.name.json],
                     jsonData['attributes'][countryAttrs.isoStr.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json]);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, name: string,
              isoStr: string, createdAt: string, updatedAt: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    this.set(id, name, isoStr, createdAtDate, updatedAtDate);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, name: string,
      isoStr: string, createdAt: Date, updatedAt: Date) {

    this.id          = id;
    this.name        = name;
    this.isoStr      = isoStr;
    this.createdAt   = createdAt;
    this.updatedAt   = updatedAt;
  }
}
