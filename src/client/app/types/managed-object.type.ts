/**
 * Перечисление, содержащее типы управляемых объектов
 */
export enum ManagedObjectType {
  user,           // пользователь
  country,        // страна
  city,           // населенный пункт
  agency,         // агенство
  route,          // маршрут
  vehicle,        // ТС
  driver,         // водитель
  stop,           // остановка
  trip,           // рейс
  calendar,       // дни работы маршрутов
  calendarDate,   // дни особой работы маршрутов
  shape,          // геометр. фигура на карте
  stopTime        // время остановки
}
;

/**
 * Объект, содержащий сведения о типах управляемых объектов
 */
export const managedObjectTypes: any = {
  user: {
    jsonRel: 'user',
    json: 'users',
    type: ManagedObjectType.user,
    name: 'User',
    relationships: [this.agency]
  },
  country: {
    jsonRel: 'country',
    json: 'countries',
    type: ManagedObjectType.country,
    name: 'Country',
    relationships: []
  },
  city: {
    jsonRel: 'city',
    json: 'cities',
    type: ManagedObjectType.city,
    name: 'City',
    relationships: [this.country]
  },
  agency: {
    jsonRel: 'agency',
    json: 'agencies',
    type: ManagedObjectType.agency,
    name: 'Agency',
    relationships: [this.city]
  },
  route: {
    jsonRel: 'route',
    json: 'routes',
    type: ManagedObjectType.route,
    name: 'Route',
    relationships: [this.agency]
  },
  vehicle: {
    jsonRel: 'vehicle',
    json: 'vehicles',
    type: ManagedObjectType.vehicle,
    name: 'Vehicle',
    relationships: [this.agency]
  },
  driver: {
    jsonRel: 'driver',
    json: 'drivers',
    type: ManagedObjectType.driver,
    name: 'Driver',
    relationships: [this.agency]
  },
  stop: {
    jsonRel: 'stop',
    json: 'stops',
    type: ManagedObjectType.stop,
    name: 'Stop',
    relationships: [this.city, this.stop]
  },
  trip: {
    jsonRel: 'trip',
    json: 'trips',
    type: ManagedObjectType.trip,
    name: 'Trip',
    relationships: [this.route]
  },
  calendar: {
    jsonRel: 'calendar',
    json: 'calendars',
    type: ManagedObjectType.calendar,
    name: 'Calendar',
    relationships: [this.route]
  },
  calendarDate: {
    jsonRel: 'calendar-date',
    json: 'calendar-dates',
    type: ManagedObjectType.calendarDate,
    name: 'CalendarDate',
    relationships: [this.route]
  },
  shape: {
    jsonRel: 'shape',
    json: 'shapes',
    type: ManagedObjectType.shape,
    name: 'Shape',
    relationships: [this.route]
  },
  stopTime: {
    jsonRel: 'stop-time',
    json: 'stop-times',
    type: ManagedObjectType.stopTime,
    name: 'StopTime',
    relationships: [this.stop, this.trip]
  }
};
