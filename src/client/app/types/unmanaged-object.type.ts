/**
 * Enumeration containing types of unmanaged objects
 */
import { sessionAttrs, sessionRel } from "./session";
import { tripStatusAttrs, tripStatusRel } from "./trip-status";
import { vehicleStatusAttrs, vehicleStatusRel } from "./vehicle-status";
export enum UnmanagedObjectType {
  session,        // user work session
  tripStatus,     // trip status
  vehicleStatus   // vehicle status
};

/**
 * Object containing additional information about types of unmanaged objects
 */
export const unmanagedObjectTypes: any = {
  session: {
    name: 'Session',
    json: 'user-sessions',
    jsonRel: 'user-session',
    type: UnmanagedObjectType.session,
    attributes: sessionAttrs,
    relationships: sessionRel
  },
  tripStatus: {
    name: 'TripStatus',
    json: 'trip-statuses',
    jsonRel: 'trip-status',
    type: UnmanagedObjectType.tripStatus,
    attributes: tripStatusAttrs,
    relationships: tripStatusRel
  },
  vehicleStatus: {
    name: 'VehicleStatus',
    json: 'vehicle-statuses',
    jsonRel: 'vehicle-status',
    type: UnmanagedObjectType.vehicleStatus,
    attributes: vehicleStatusAttrs,
    relationships: vehicleStatusRel
  }
};
