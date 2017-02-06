import { VehicleType } from "./vehicle.type";

/**
 * Класс, описывающий сущность ТС
 */
export class Vehicle {
  private invertoryId: string;      // инвертарный идентификатор
  private type: VehicleType;        // тип ТС
  private manufacturer: string;     // производитель
  private vehicleModel: string;     // модель
  private dateManufactured: string; // год производства
  private payedUntil: string;       // пропалчен до...
  private licensePlate: string;     // регистрационный номер
  private photoUrl: string;         // сслыка на фото

  private agencyId: string;         // агенство, котормоу принадлежит ТС
}
