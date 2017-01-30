export enum ActionType {
  addNew,
  editExist
}

export const actionTypes: any = {
  addNew: {type: ActionType.addNew},
  editExist: {type: ActionType.editExist}
}
