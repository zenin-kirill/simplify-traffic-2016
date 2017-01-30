import { ManagedObjectType } from './managed-object.type';

export class ManagedObject {
  protected objType: ManagedObjectType;
  protected id: string;
  protected createdAt: Date;
  protected updatedAt: Date;

  get getUpdatedAt(): Date{
    return this.updatedAt;
  }

  get getCreatedAt(): Date{
    return this.createdAt;
  }

  get getId(): string{
    return this.id;
  }

  get getObjType(): ManagedObjectType{
    return this.objType;
  }

  constructor(objType: ManagedObjectType) {
    this.objType = objType;
  };

  //constructor(objType: ManagedObjectType, id: string, createdAt: string, updatedAt: string) {
  // this.set(objType, id, createdAt, updatedAt);
  //}
  //
  //set(objType: ManagedObjectType, id: string, createdAt: string, updatedAt: string) {
  //  this.objType   = objType;
  //  this.id        = id;
  //  this.createdAt = createdAt;
  //  this.updatedAt = updatedAt;
  //}
}
