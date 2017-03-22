/**
 * Enumeration containing types of halts
 */
export enum HaltType {
  regularly,       // regular halt
  notAvailable,    // forbidden halt
  coordWithAgency, // on request, by phone with agency
  coordWithDriver  // on request, in person with driver
}

/**
 * Object containing additional information about types of halts
 */
export const haltTypes: any = {
  regularly: {json: '0', type: HaltType.regularly},
  notAvailable: {json: '1', type: HaltType.notAvailable},
  coordWithAgency: {json: '2', type: HaltType.coordWithAgency},
  coordWithDriver: {json: '3', type: HaltType.coordWithDriver}
}
