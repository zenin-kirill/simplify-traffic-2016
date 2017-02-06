/**
 * Перечисление, содежащее типы действий над управляемыми объектами
 */
export enum ActionType {
  addNew,    // добавление нового
  editExist  // редактирование старого
}

/**
 * Объект, содержащий дополнительные сведения о типах действий
 */
export const actionTypes: any = {
  addNew: {json: 'add-new', type: ActionType.addNew},
  editExist: {json: 'edit-exist', type: ActionType.editExist}
}
