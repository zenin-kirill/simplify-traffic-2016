/**
 * Enumeration containing actions types with managed objects
 */
export enum ActionType {
  addNew,    // adding a new
  editExist  // editing an existing
}

/**
 * Object containing additional information about actions types
 */
export const actionTypes: any = {
  addNew: {json: 'add-new', type: ActionType.addNew},
  editExist: {json: 'edit-exist', type: ActionType.editExist}
}
