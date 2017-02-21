
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
 * Класс, описывающий сущность страна
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
  setOnObject(countryData: any) {
    if (!((countryData['type'] === managedObjectTypes.country.json) &&
          (managedObjectAttrs.id.json in countryData) &&
          (managedObjectAttrs.createdAt.json in countryData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in countryData['attributes'])))
      throw new Error('Impossible to convert an object Country. Invalid object format');

    for (let obj in countryAttrs) {
      if (!(countryAttrs[obj]['json'] in countryData['attributes']))
        throw new Error('Impossible to convert an object Country. Invalid country format');
    }

    this.setOnString(countryData[managedObjectAttrs.id.json],
                     countryData['attributes'][countryAttrs.name.json],
                     countryData['attributes'][countryAttrs.isoStr.json],
                     countryData['attributes'][managedObjectAttrs.createdAt.json],
                     countryData['attributes'][managedObjectAttrs.updatedAt.json]);
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
      throw new Error('Impossible to set an object Country. Invalid format of date');

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
