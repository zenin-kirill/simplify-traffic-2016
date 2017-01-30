import { UserType, userTypes } from './user.type';
import { ManagedObject } from "./managed-object";
import { ManagedObjectType } from "./managed-object.type";

export class User extends ManagedObject {
  private role: UserType;
  private name: string;
  private surname: string;
  private email: string;
  private photoUrl: string;

  private agencyId: string;

  constructor(userData: Object) {
    super(ManagedObjectType.users);
    this.setOnObject(userData);
  }

  getRole(): UserType {
    return this.role;
  }

  getName(): string {
    return this.name;
  }

  getSurname(): string {
    return this.surname;
  }

  getEmail(): string {
    return this.email;
  }

  getPhotoUrl(): string {
    return this.photoUrl;
  }

  setAgencyId(value: string) {
    this.agencyId = value;
  }

  setRole(value: UserType) {
    this.role = value;
  }

  setName(value: string) {
    this.name = value;
  }

  setSurname(value: string) {
    this.surname = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPhotoUrl(value: string) {
    this.photoUrl = value;
  }

  setOnObject(userData: any) {
    if ((userData['type'] === 'users') &&
        ('id' in userData) &&
        ('role' in userData['attributes']) &&
        ('name' in userData['attributes']) &&
        ('surname' in userData['attributes']) &&
        ('email' in userData['attributes']) &&
        ('photo-url' in userData['attributes']) &&
        ('created-at' in userData['attributes']) &&
        ('updated-at' in userData['attributes']) &&
        ('id' in userData['relationships']['agency']['data'])) {

      this.setOnStrings(userData['id'].toString(),
                        userData['attributes']['role'].toString(),
                        userData['attributes']['name'].toString(),
                        userData['attributes']['surname'].toString(),
                        userData['attributes']['email'].toString(),
                        userData['attributes']['photo-url'].toString(),
                        userData['attributes']['created-at'].toString(),
                        userData['attributes']['updated-at'].toString(),

                        userData['relationships']['agency']['data']['id'].toString());
    }
    else {
      throw new Error('Impossible to convert an object User. Invalid object format');
    }
  }

  setOnStrings(id: string, role: string, name: string,
               surname: string, email: string, photoUrl: string, createdAt: string,
               updatedAt: string, agencyId: string) {

    let createdAtDate = new Date(Date.parse(createdAt));
    let updatedAtDate = new Date(Date.parse(updatedAt));

    if ((createdAtDate.getUTCDate() === NaN) ||
        (updatedAtDate.getUTCDate() === NaN))
      throw new Error('Impossible to set an object User. Invalid format of date');

    let userType: UserType;
    for (let obj in userTypes) {
      if (role === obj)
        userType = userTypes[obj].type;
    }
    if (userType === null || userType === undefined)
      throw new Error('Impossible to convert an object User. Invalid user role');

    this.set(id, userType, name, surname, email, photoUrl, createdAtDate, updatedAtDate, agencyId);
  }

  set(id: string, role: UserType, name: string,
      surname: string, email: string, photoUrl: string, createdAt: Date, updatedAt: Date, agencyId: string) {
    this.id        = id;
    this.role      = role;
    this.name      = name;
    this.surname  = surname;
    this.email     = email;
    this.photoUrl  = photoUrl;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.agencyId  = agencyId;
  }
}
