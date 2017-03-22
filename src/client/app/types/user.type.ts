/**
 * Enumeration containing types of users
 */
export enum UserType {
  administrator,   // administrator
  contentManager,  // content manager
  agencyManager    // agency manager (operator)
}

/**
 * Object containing additional information about types of users
 */
export const userTypes: any = {
  administrator: {json: 'administrator', type: UserType.administrator},
  contentManager: {json: 'content-manager', type: UserType.contentManager},
  agencyManager: {json: 'agency-manager', type: UserType.agencyManager}
}
