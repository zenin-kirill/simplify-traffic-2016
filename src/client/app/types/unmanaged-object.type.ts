/**
 * Перечисление, содержащее типы управляемых объектов
 */
import { managedObjectTypes } from "./managed-object.type";
export enum UnmanagedObjectType {
  session,        // рабочая сессия пользователя
  tripStatus,     // статус рейса
  vehicleStatus   // статус транспортного средства
}
;

/**
 * Объект, содержащий сведения о типах управляемых объектов
 */
export const unmanagedObjectTypes: any = {
  session: {
    jsonRel: 'session',
    json: 'user-sessions',
    type: UnmanagedObjectType.session,
    name: 'Session',
    relationships: [managedObjectTypes.user, managedObjectTypes.agency]
  },
  tripStatus: {
    jsonRel: 'trip-status',
    json: 'trip-statuses',
    type: UnmanagedObjectType.tripStatus,
    name: 'TripStatus',
    relationships: [managedObjectTypes.trip]
  },
  vehicleStatus: {
    jsonRel: 'vehicle-status',
    json: 'vehicle-statuses',
    type: UnmanagedObjectType.vehicleStatus,
    name: 'VehicleStatus',
    relationships: [managedObjectTypes.vehicle, managedObjectTypes.driver, managedObjectTypes.route,
      managedObjectTypes.trip]
  }
};
