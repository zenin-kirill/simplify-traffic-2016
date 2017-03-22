import { ManagedObjectType, managedObjectTypes } from "./managed-object.type";
import { JsonParsingInterface } from "./json-parsing.interface";
import { JsonSynthesisInterface } from "./json-synthesis.interface";

/**
 * Object containing additional information about class attributes
 */
export const managedObjectAttrs: any = {
  id: {json: 'id'},
  createdAt: {json: 'created-at'},
  updatedAt: {json: 'updated-at'}
}

/**
 * Abstract class describing entity MANAGED OBJECT
 */
export abstract class ManagedObject implements JsonParsingInterface, JsonSynthesisInterface {
  protected objType: ManagedObjectType;   // object type
  protected id: string;                   // identifier
  protected createdAt: Date;              // date of creation
  protected updatedAt: Date;              // date of change

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getId(): string {
    return this.id;
  }

  getObjType(): ManagedObjectType {
    return this.objType;
  }

  getObjTypeStr(): string {
    return ManagedObjectType[this.objType];
  }

  /**
   * Method that sets data of class object from object in JSON-API format
   * The method checks and parses JSON-API object and passes it in string
   * format to following method
   * Input parameter is object in JSON-API format
   */
  setOnJsonObject(jsonData: any) {
    if (!((jsonData['type'] === managedObjectTypes[this.getObjTypeStr()].json) &&
          (managedObjectAttrs.id.json in jsonData) &&
          (managedObjectAttrs.createdAt.json in jsonData['attributes']) &&
          (managedObjectAttrs.updatedAt.json in jsonData['attributes'])))
      throw new Error('Impossible to set an object "'
                      + managedObjectTypes[this.getObjTypeStr()].name
                      +'". Invalid common attrs format');
  }

  /**
   * Method that gets data of class object in JSON-API format
   */
  getInJsonObject() : any {

  }

  constructor(objType: ManagedObjectType) {
    this.objType = objType;
    this.id = '0';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  };
}
