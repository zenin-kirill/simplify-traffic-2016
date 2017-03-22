/**
 * Enumeration containing types of timepoints
 */
export enum TimepointType {
  exact,        // exact timepoint
  approximate   // approximate timepoint
}

/**
 * Object containing additional information about types of timepoints
 */
export const timepointTypes: any = {
  exact: {json: '0', type: TimepointType.approximate},
  approximate: {json: '1', type: TimepointType.exact},

  default: {json: '', type: TimepointType.exact}
}
