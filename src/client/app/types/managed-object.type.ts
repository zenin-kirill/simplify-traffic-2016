import { agencyRel, agencyAttrs } from "./agency";
import { cityRel, cityAttrs } from "./city";
import { userRel, userAttrs } from "./user";
import { driverRel, driverAttrs } from "./driver";
import { routeRel, routeAttrs } from "./route";
import { vehicleRel, vehicleAttrs } from "./vehicle";
import { stopRel, stopAttrs } from "./stop";
import { tripRel, tripAttrs } from "./trip";
import { calendarRel, calendarAttrs } from "./calendar";
import { calendarDateRel, calendarDateAttrs } from "./calendar-date";
import { shapeRel, shapeAttrs } from "./shape";
import { stopTimeRel } from "./stop-time";
import { countryAttrs } from "./country";

/**
 * Enumeration containing types of managed objects
 */

export enum ManagedObjectType {
  user,           // user as user type
  country,        // country
  city,           // city as a location
  agency,         // agency
  route,          // route
  vehicle,        // vehicle
  driver,         // driver
  stop,           // stop
  trip,           // trip (on route)
  calendar,       // days on which route is carried out
  calendarDate,   // days of special work of routes
  shape,          // geometric figure on the map
  stopTime        // stop time
}
;

/**
 * Object containing additional information about types of managed objects
 */
export const managedObjectTypes: any = {
  user: {
    name: 'User',
    json: 'users',
    jsonRel: 'user',
    type: ManagedObjectType.user,
    attributes: userAttrs,
    relationships: userRel
  },
  country: {
    name: 'Country',
    json: 'countries',
    jsonRel: 'country',
    type: ManagedObjectType.country,
    attributes: countryAttrs,
    relationships: {}
  },
  city: {
    name: 'City',
    json: 'cities',
    jsonRel: 'city',
    type: ManagedObjectType.city,
    attributes: cityAttrs,
    relationships: cityRel
  },
  agency: {
    name: 'Agency',
    json: 'agencies',
    jsonRel: 'agency',
    type: ManagedObjectType.agency,
    attributes: agencyAttrs,
    relationships: agencyRel
  },
  route: {
    name: 'Route',
    json: 'routes',
    jsonRel: 'route',
    type: ManagedObjectType.route,
    attributes: routeAttrs,
    relationships: routeRel
  },
  vehicle: {
    name: 'Vehicle',
    json: 'vehicles',
    jsonRel: 'vehicle',
    type: ManagedObjectType.vehicle,
    attributes: vehicleAttrs,
    relationships: vehicleRel
  },
  driver: {
    name: 'Driver',
    json: 'drivers',
    jsonRel: 'driver',
    type: ManagedObjectType.driver,
    attributes: driverAttrs,
    relationships: driverRel
  },
  stop: {
    name: 'Stop',
    json: 'stops',
    jsonRel: 'stop',
    type: ManagedObjectType.stop,
    attributes: stopAttrs,
    relationships: stopRel
  },
  trip: {
    name: 'Trip',
    json: 'trips',
    jsonRel: 'trip',
    type: ManagedObjectType.trip,
    attributes: tripAttrs,
    relationships: tripRel
  },
  calendar: {
    name: 'Calendar',
    json: 'calendars',
    jsonRel: 'calendar',
    type: ManagedObjectType.calendar,
    attributes: calendarAttrs,
    relationships: calendarRel
  },
  calendarDate: {
    name: 'CalendarDate',
    json: 'calendar-dates',
    jsonRel: 'calendar-date',
    type: ManagedObjectType.calendarDate,
    attributes: calendarDateAttrs,
    relationships: calendarDateRel
  },
  shape: {
    name: 'Shape',
    json: 'shapes',
    jsonRel: 'shape',
    type: ManagedObjectType.shape,
    attributes: shapeAttrs,
    relationships: shapeRel
  },
  stopTime: {
    name: 'StopTime',
    json: 'stop-times',
    jsonRel: 'stop-time',
    type: ManagedObjectType.stopTime,
    attributes: stopAttrs,
    relationships: stopTimeRel
  }
};
