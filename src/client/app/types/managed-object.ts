import { ManagedObjectType } from "./managed-object.type";

/**
 * Объект, содержащий отображение свойств класса в строки по стандарту JSON-API
 */
export const managedObjectAttrs: any = {
  id: {json: 'id'},
  createdAt: {json: 'created-at'},
  updatedAt: {json: 'updated-at'}
}

/**
 * Абстрактный класс, описывающий сущность управляемый объект
 */
export abstract class ManagedObject {
  protected objType: ManagedObjectType;   // тип объекта
  protected id: string;                   // идентификатор оъекта
  protected createdAt: Date;              // дата создания
  protected updatedAt: Date;              // дата изменения

  get getUpdatedAt(): Date {
    return this.updatedAt;
  }

  get getCreatedAt(): Date {
    return this.createdAt;
  }

  get getId(): string {
    return this.id;
  }

  get getObjType(): ManagedObjectType {
    return this.objType;
  }

  constructor(objType: ManagedObjectType) {
    this.objType = objType;
  };
}
