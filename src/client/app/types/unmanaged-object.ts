import { UnmanagedObjectType, unmanagedObjectTypes } from "./unmanaged-object.type";
/**
 * Object containing additional information about class attributes
 */
export const unmanagedObjectAttrs: any = {
  id: {json: 'id'},
  createdAt: {json: 'created-at'}
}

/**
 * Abstract class describing entity UNMANAGED OBJECT
 */
export abstract class UnmanagedObject {
  protected objType: UnmanagedObjectType; // object type
  protected id: string;                   // identifier
  protected createdAt: Date;              // date of creation

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getId(): string {
    return this.id;
  }

  getObjType(): UnmanagedObjectType {
    return this.objType;
  }

  getObjTypeStr(): string {
    return UnmanagedObjectType[this.objType];
  }

  /**
   * Method that sets data of class object from object in JSON-API format
   * The method checks and parses JSON-API object and passes it in string
   * format to following method
   * Input parameter is object in JSON-API format
   */
  setOnJsonObject(jsonData: any) {
    if (!((jsonData['type'] === unmanagedObjectTypes[this.getObjTypeStr()].json) &&
          (unmanagedObjectAttrs.id.json in jsonData) &&
          (unmanagedObjectAttrs.createdAt.json in jsonData['attributes'])))
      throw new Error('Impossible to set an object "'
                      + unmanagedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');
  }

  constructor(objType: UnmanagedObjectType) {
    this.objType = objType;
    this.id = '0';
    this.createdAt = new Date();
  };
}
