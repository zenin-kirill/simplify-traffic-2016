import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { ManagedObject, managedObjectAttrs } from "./managed-object";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const cityAttrs: any = {
  name: {json: 'name'},
  population: {json: 'population'}
}

/**
 * Класс, описывающий сущность населенного пункта (в виде города)
 */
export class City extends ManagedObject{
  private name: string;         // название
  private population: string;   // численность населения

  private countyId: string;     // страна, в которой находится данный город

  constructor() {
    super(ManagedObjectType.city);
  }

  getName() : string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getPopulation() : string {
    return this.population;
  }
  setPopulation(population: string) {
    this.population = population;
  }

  getCountryId() : string {
    return this.countyId;
  }
  setCountryId(countryId: string) {
    this.countyId = countryId;
  }

  /**
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnObject(cityData: any) {
    if (!((cityData['type'] === managedObjectTypes.city.json) &&
          (managedObjectAttrs.id.json in cityData) &&
          (managedObjectAttrs.createdAt.json in cityData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in cityData['attributes']) &&
          ('id' in cityData['relationships']['country']['data'])))
      throw new Error('Impossible to convert an object City. Invalid object format');

    for (let obj in cityAttrs) {
      if (!(cityAttrs[obj]['json'] in cityData['attributes']))
        throw new Error('Impossible to convert an object City. Invalid city format');
    }

    this.setOnString(cityData[managedObjectAttrs.id.json],
                     cityData['attributes'][cityAttrs.name.json],
                     cityData['attributes'][cityAttrs.population.json],
                     cityData['attributes'][managedObjectAttrs.createdAt.json],
                     cityData['attributes'][managedObjectAttrs.updatedAt.json],

                     cityData['relationships']['country']['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, name: string,
              population: string, createdAt: string, updatedAt: string, countryId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object City. Invalid format of date');

    this.set(id, name, population, createdAtDate, updatedAtDate, countryId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, name: string,
      population: string, createdAt: Date, updatedAt: Date, countryId: string) {

    this.id          = id;
    this.name        = name;
    this.population  = population;
    this.createdAt   = createdAt;
    this.updatedAt   = updatedAt;

    this.countyId    = countryId;
  }
}
