/**
 * Перечисление, содержащее виды пользователей
 */
export enum UserType {
  administrator,   // администратор
  contentManager,  // общий модератор
  agencyManager    // менеджер транс. компании
}

/**
 * Объект, содержащий сведения о видах пользователей
 */
export const userTypes: any = {
  administrator: {json: 'administrator', type: UserType.administrator},
  contentManager: {json: 'content-manager', type: UserType.contentManager},
  agencyManager: {json: 'agency-manager', type: UserType.agencyManager}
}
