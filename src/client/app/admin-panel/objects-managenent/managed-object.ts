import {ManagedObjectType} from './managed-object.type';

export class ManagedObject {
  protected objType: ManagedObjectType;
  protected id: string;
  protected createdAt: string;
  protected updatedAt: string;
}
