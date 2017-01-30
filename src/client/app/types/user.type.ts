export enum UserType {
  administrator,
  contentManager,
  carrierManager
}

export const userTypes: any = {
  administrator: {type: UserType.administrator},
  contentManager: {type: UserType.contentManager},
  carrierManager: {type: UserType.carrierManager}
}
