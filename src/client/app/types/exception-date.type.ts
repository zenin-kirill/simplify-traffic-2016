/**
 * Enumeration containing types of exception dates
 */
export enum ExceptionDateType {
  added,   // work day added
  removed  // work day removed
}

/**
 * Object containing additional information about types of exception dates
 */
export const exceptionDateTypes: any = {
  added: {json: '1', type: ExceptionDateType.added},
  removed: {json: '2', type: ExceptionDateType.removed}
}
