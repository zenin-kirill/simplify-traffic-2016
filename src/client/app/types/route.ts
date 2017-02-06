import { VehicleType } from "./vehicle.type";
import { Color } from "./color";

/**
 * Класс описыающий сущность маршрут
 */
export class Route {
  private vehicleType: VehicleType;   // тип ТС, кур. на маршруте
  private shortName: string;          // по сути номер маршрута
  private longName: string;           // краткая информация о маршруте
  private color: Color;               // цвет линии маршрута
  private description: string;        // полная информация о маршруте

  private agencyId: string;           // агенство, обслуживающее данный маршрут
}
