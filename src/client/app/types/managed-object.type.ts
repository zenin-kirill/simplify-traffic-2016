export enum ManagedObjectType {
  users,
  countries,
  cities,
  agencies,
  routes,
  vehicles,
  drivers,
  stops,
  trips
};

export const managedObjectTypes: any = {
  users: {type: ManagedObjectType.users},
  countries: {type: ManagedObjectType.countries},
  cities: {type: ManagedObjectType.cities},
  agencies: {type: ManagedObjectType.agencies},
  routes: {type: ManagedObjectType.routes},
  vehicles: {type: ManagedObjectType.vehicles},
  drivers: {type: ManagedObjectType.drivers},
  stops: {type: ManagedObjectType.stops},
  trips: {type: ManagedObjectType.trips}
};
