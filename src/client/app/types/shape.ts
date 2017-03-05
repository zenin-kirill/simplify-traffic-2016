import { ManagedObject, managedObjectAttrs } from "./managed-object";
import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";

/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const shapeAttrs: any = {
  ptLatitude: {json: 'pt-lat'},
  ptLongtitude: {json: 'pt-lon'},
  ptSequence: {json: 'pt-sequence'},
  distTraveled: {json: 'dist-traveled'}
}

/**
 * Объект содержащий доп. сведения о зависимостях класса
 */
export const shapeRel: any = {
  route: managedObjectTypes.route
}

/**
 * Класс, описывающий сущность ФИГУРА
 */
export class Shape extends ManagedObject {
  private ptLatitude: number;         // широта точки
  private ptLongtitude: number;       // долгота точки
  private ptSequence: number;         // порядковый номер точки
  private distTraveled: number;       // расстояние от самой первой точки всей фигуры

  private routeId: string;        // машрут, подверженный изменениям

  constructor() {
    super(ManagedObjectType.shape);
  }

  getPtLatitude(): number {
    return this.ptLatitude;
  }

  setPtLatitude(ptLatitude: number) {
    this.ptLatitude = ptLatitude;
  }

  getPtLongtitude(): number {
    return this.ptLongtitude;
  }

  setPtLongtitude(ptLongtitude: number) {
    this.ptLongtitude = ptLongtitude;
  }

  getPtSequence(): number {
    return this.ptSequence;
  }

  setPtSequence(ptSequence: number) {
    this.ptSequence = ptSequence;
  }

  getDistTraveled(): number {
    return this.distTraveled;
  }

  setDistTraveled(distTraveled: number) {
    this.distTraveled = distTraveled;
  }

  getRouteId(): string {
    return this.routeId;
  }

  setRouteId(routeId: string) {
    this.routeId = routeId;
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
          ('id' in jsonData['relationships'][shapeRel.route.jsonRel]['data'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');

    for (let obj in shapeAttrs) {
      if (!(shapeAttrs[obj]['json'] in jsonData['attributes']))
        throw new Error('Impossible to set an object "'
                        + managedObjectTypes[this.getObjTypeStr()].name
                        +'". Invalid object attrs format');
    }

    this.setOnString(jsonData[managedObjectAttrs.id.json],
                     jsonData['attributes'][shapeAttrs.ptLatitude.json],
                     jsonData['attributes'][shapeAttrs.ptLongtitude.json],
                     jsonData['attributes'][shapeAttrs.ptSequence.json],
                     jsonData['attributes'][shapeAttrs.distTraveled.json],
                     jsonData['attributes'][managedObjectAttrs.createdAt.json],
                     jsonData['attributes'][managedObjectAttrs.updatedAt.json],

                     jsonData['relationships'][shapeRel.route.jsonRel]['data']['id']);
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnString(id: string, ptLatitude: string,
              ptLongtitude: string, ptSequence: string, distTraveled: string,
              createdAt: string, updatedAt: string, routeId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((isNaN(createdAtDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid date format');

    let ptLatitudeNumber   = parseFloat(ptLatitude);
    let ptLongtitudeNumber = parseFloat(ptLongtitude);
    let ptSequenceNumber = parseFloat(ptSequence);
    let distTraveledNumber = parseFloat(distTraveled);

    if ((isNaN(ptLatitudeNumber)) ||
        (isNaN(ptLongtitudeNumber)) ||
        (isNaN(ptSequenceNumber)) ||
        (isNaN(distTraveledNumber)))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid number format');

    this.set(id, ptLatitudeNumber, ptLongtitudeNumber, ptSequenceNumber,
             distTraveledNumber, createdAtDate, updatedAtDate, routeId);
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, ptLatitude: number,
      ptLongtitude: number, ptSequence: number, distTraveled: number,
      createdAt: Date, updatedAt: Date, routeId: string) {

    this.id           = id;
    this.ptLatitude   = ptLatitude;
    this.ptLongtitude = ptLongtitude;
    this.ptSequence   = ptSequence;
    this.distTraveled = distTraveled;
    this.createdAt    = createdAt;
    this.updatedAt    = updatedAt;

    this.routeId = routeId;
  }
}

