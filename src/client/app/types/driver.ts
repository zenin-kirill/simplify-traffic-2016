/**
 * Класс описывающий сущность водитель
 */
export class Driver {
  private agencyId: string;       // агенство, в котором нанят водитель
  private name: string;           // имя
  private surname: string;        // фамилия
  private birthDate: Date;        // день рождания
  private licenseNumber: string;  // номер ВУ
  private photoUrl: string;       // ссылка на фото пользователя
}
