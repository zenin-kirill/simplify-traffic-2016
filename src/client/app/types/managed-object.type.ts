/**
 * Перечисление, содержащее типы управляемых объектов
 */
export enum ManagedObjectType {
  user,       // пользователь
  country,    // страна
  city,       // населенный пункт
  agency,     // агенство
  route,      // маршрут
  vehicle,    // ТС
  driver,     // водитель
  stop,       // остановка
  trip        // рейс
}
;

/**
 * Объект, содержащий сведения о типах управляемых объектов
 */
export const managedObjectTypes: any = {
  user: {json: 'users', type: ManagedObjectType.user},
  country: {json: 'countries', type: ManagedObjectType.country},
  city: {json: 'cities', type: ManagedObjectType.city},
  agency: {json: 'agencies', type: ManagedObjectType.agency},
  route: {json: 'routes', type: ManagedObjectType.route},
  vehicle: {json: 'vehicles', type: ManagedObjectType.vehicle},
  driver: {json: 'drivers', type: ManagedObjectType.driver},
  stop: {json: 'stops', type: ManagedObjectType.stop},
  trip: {json: 'trips', type: ManagedObjectType.trip}
};
