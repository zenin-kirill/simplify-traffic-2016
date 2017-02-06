import { VehicleType } from "./vehicle.type";

/**
 * Класс, описывающий сущность остановка
 */
export class Stop {
  private type: VehicleType;        // тип ТС, для кот. преназначена остановка
  private name: string;             // название остановки
  private latitude: number;         // GPS: широта
  private longtitude: number;       // GPS: долгота
  private parentStationId: string;  // родитеская остановка
  private photoUrl: string;         // ссылка на фото

  private cityId: string;           // город, в котором находится остановка
}
