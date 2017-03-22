/**
 * Enumeration containing types of vehicles
 */
export enum VehicleType {
  bus,    // bus
  tram,   // tram
  trolley // trolley
}

/**
 * Object containing additional information about types of vehicles
 */
export const vehicleTypes: any = {
  bus: {json: 'bus', type: VehicleType.bus},
  tram: {json: 'tram', type: VehicleType.tram},
  trolley: {json: 'trolley', type: VehicleType.trolley}
}
