/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const tripStatusAttrs: any = {
  id: {json: 'id'},
  type: {json: 'trip-status'},
  routeShortName: {json: 'route-short-name'},
  departure: {json: 'departure'},
  depart: {json: 'depart'},
  nextStop: {json: 'next-stop'},
  arriveToNextStop: {json: 'arrive-to-next-stop'},
  destination: {json: 'destination'},
  arriveToDestination: {json: 'arrive-to-destination'},
  status: {json: 'status'},
  createdAt: {json: 'created-at'}
}

/**
 * Класс, описывающий сущность статус рейса
 */
export class TripsStatus {
  private id: string;                 // идентификатор объекта в БД
  private routeShortName: string;     // которое название маршрута (номер)
  private departure: string;          // пункт назначения
  private depart: Date;               // отправление
  private nextStop: string;           // название следующей остановки
  private arriveToNextStop: Date;     // прибытия на след. остановку
  private destination: string;        // пункт назначения
  private arriveToDestination: Date;  // прибытия в пункт назначения
  private status: string;             // статус рейса
  private createdAt: Date;            // время сборки данных

  private tripId: string;   // рейс, статус которого описан в классе
  private routeId: string;  // маршрут, по котормоу выполняется описанный рейс

  getRouteShortName(): string {
    return this.routeShortName;
  }

  getDeparture(): string {
    return this.departure;
  }

  getDepart(): Date {
    return this.depart;
  }

  getNextStop(): string {
    return this.nextStop;
  }

  getArriveToNextStop(): Date {
    return this.arriveToNextStop;
  }

  getDestination(): string {
    return this.destination;
  }

  getArriveToDestination(): Date {
    return this.arriveToDestination;
  }

  getStatus(): string {
    return this.status;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getTripId(): string {
    return this.tripId;
  }

  getrouteId(): string {
    return this.routeId;
  }

  /**
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnObject(tripStatusData: any) {
    if (!((tripStatusData['type'] === tripStatusAttrs.type.json) &&
          ( tripStatusAttrs.id.json in tripStatusData) &&
          ('id' in tripStatusData['relationships']['trip']['data']) &&
          ('id' in tripStatusData['relationships']['route']['data'])))
      throw new Error('Impossible to convert an object TripStatus. Invalid object format');

    for (let obj in  tripStatusAttrs) {
      if ((obj.toString() === 'id') ||
          (obj.toString() === 'type'))
        continue;
      if (!( tripStatusAttrs[obj]['json'] in tripStatusData['attributes']))
        throw new Error('Impossible to convert an object TripStatus. Invalid attributes format');
    }

    this.setOnStrings(tripStatusData[tripStatusAttrs.id.json],
                      tripStatusData['attributes'][tripStatusAttrs.routeShortName.json],
                      tripStatusData['attributes'][tripStatusAttrs.departure.json],
                      tripStatusData['attributes'][tripStatusAttrs.depart.json],
                      tripStatusData['attributes'][tripStatusAttrs.nextStop.json],
                      tripStatusData['attributes'][tripStatusAttrs.afrriveToNextStop.json],
                      tripStatusData['attributes'][tripStatusAttrs.destination.json],
                      tripStatusData['attributes'][tripStatusAttrs.arriveToDestination.json],
                      tripStatusData['attributes'][tripStatusAttrs.status.json],
                      tripStatusData['attributes'][tripStatusAttrs.createdAt.json],

                      tripStatusData['relationships']['trip']['data']['id'],
                      tripStatusData['relationships']['route']['data']['id'])
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnStrings(id: string, routeShortName: string, departure: string, depart: string,
               nextStop: string, arriveToNextStop: string, destination: string,
               arriveToDestination: string, status: string,
               createdAt: string, tripId: string, routeId: string) {

    let departDate              = new Date(Date.parse(depart));
    let arriveToNextStopDate    = new Date(Date.parse(arriveToNextStop));
    let arriveToDestinationDate = new Date(Date.parse(arriveToDestination));
    let createdAtDate           = new Date(Date.parse(createdAt));

    if ((isNaN(departDate.getUTCDate())) ||
        (isNaN(arriveToNextStopDate.getUTCDate())) ||
        (isNaN(arriveToDestinationDate.getUTCDate())) ||
        (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object Session. Invalid format of date');

    this.set(id, routeShortName, departure, departDate, nextStop, arriveToNextStopDate, destination,
             arriveToDestinationDate, status, createdAtDate, tripId, routeId)
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, routeShortName: string, departure: string, depart: Date,
      nextStop: string, arriveToNextStop: Date, destination: string, arriveToDestination: Date,
      status: string, createdAt: Date, tripId: string, routeId: string) {

    this.id                  = id;
    this.routeShortName      = routeShortName;
    this.departure           = departure;
    this.depart              = depart;
    this.nextStop            = nextStop;
    this.arriveToNextStop    = arriveToNextStop;
    this.destination         = destination;
    this.arriveToDestination = arriveToDestination;
    this.status              = status;
    this.createdAt           = createdAt;

    this.tripId  = tripId;
    this.routeId = routeId;
  }
}
