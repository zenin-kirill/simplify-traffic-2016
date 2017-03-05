import { UnmanagedObjectType, unmanagedObjectTypes } from "./unmanaged-object.type";
/**
 * Объект, содержащий отображение свойств класса в строки по стандарту JSON-API
 */
export const unmanagedObjectAttrs: any = {
  id: {json: 'id'},
  createdAt: {json: 'created-at'}
}

/**
 * Абстрактный класс, описывающий сущность УПРАВЛЯЕМЫЙ ОБЪЕКТ
 */
export abstract class UnmanagedObject {
  protected objType: UnmanagedObjectType; // тип объекта
  protected id: string;                   // идентификатор оъекта
  protected createdAt: Date;              // дата создания

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

  constructor(objType: UnmanagedObjectType) {
    this.objType = objType;
    this.id = '0';
    this.createdAt = new Date();
  };
}
