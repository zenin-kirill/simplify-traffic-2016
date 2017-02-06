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

  private tripId: string;   // рейс, статус которого описан в классе
  private routeId: string;  // маршрут, по котормоу выполняется описанный рейс
}
