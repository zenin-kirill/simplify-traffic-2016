/**
 * Перечисление, содержащее виды ТС
 */
export enum VehicleType {
  bus,    // автобус
  tram,   // трамвай
  trolley // троллейбус
}

/**
 * Объект, содержащий сведения о видах ТС
 */
export const vehicleTypes: any = {
  bus: {json: 'bus', type: VehicleType.bus},
  tram: {json: 'tram', type: VehicleType.tram},
  trolley: {json: 'trolley', type: VehicleType.trolley}
}
